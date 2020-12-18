import "reflect-metadata";
import * as TypeMoq from "typemoq";
import {SetPasswordCommand} from "../../../../src/TxBlog/Domain/Login/Command/SetPasswordCommand";
import {HttpSetPasswordCommand} from "../../../../src/TxBlog/Infrastructure/Login/Command/HttpSetPasswordCommand";
import {SetPasswordUseCase} from "../../../../src/TxBlog/Application/Login/UseCase/SetPasswordUseCase";
import {Session} from "../../../../src/core/session/Session";
import {DataError} from "../../../../src/TxBlog/Application/Login/error/DataError";
import {EncryptionService} from "../../../../src/core/EncryptionService";
import {SetPasswordRequest} from "../../../../src/TxBlog/Domain/Login/Request/SetPasswordRequest";

describe("Test set password use case", () => {
    let setPasswordCommand: TypeMoq.IMock<SetPasswordCommand>;

    beforeEach(() => {
        setPasswordCommand = TypeMoq.Mock.ofType<SetPasswordCommand>(HttpSetPasswordCommand);
    });

    it("Throws exception - bad repeat password", async (done) => {
        const useCase = new SetPasswordUseCase(setPasswordCommand.object);

        const session = new Session({});

        try {
            await useCase.execute(
                session,
                undefined,
                "12345678",
                "123456789",
            );
            done.fail("No exception throw");
        } catch (e) {
            expect(e).toBeInstanceOf(DataError);
            done();
        }
    });

    it("Uses command for change password", async (done) => {
        const useCase = new SetPasswordUseCase(setPasswordCommand.object);

        const session = new Session({userId: (new EncryptionService()).encrypt("342")});

        await useCase.execute(
            session,
            undefined,
            "12345678",
            "12345678",
        );

        setPasswordCommand.verify((obj: SetPasswordCommand) => {
            obj.send(
                TypeMoq.It.is((request: SetPasswordRequest) => {
                    const serialized = request.serialize();
                    return serialized.userId === 342 && serialized.newPassword === "12345678";
                }),
            );
        }, TypeMoq.Times.exactly(1));

        done();
    });
});
