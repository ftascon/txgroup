import "reflect-metadata";
import * as TypeMoq from "typemoq";
import {Session} from "../../../../src/core/session/Session";
import {IsPasswordUserTypeService} from "../../../../src/TxBlog/Domain/Service/IsPasswordUserTypeService";
import {SendUserLoginTokenService} from "../../../../src/TxBlog/Domain/Service/SendUserLoginTokenCommand";
import {HttpIsPasswordUserTypeService} from "../../../../src/TxBlog/Infrastructure/Login/Service/HttpIsPasswordUserTypeService";
import {HttpSendUserLoginTokenService} from "../../../../src/TxBlog/Infrastructure/Service/HttpSendUserLoginTokenCommand";
import {CheckLoginTypeUseCase} from "../../../../src/TxBlog/Application/Login/UseCase/CheckLoginTypeUseCase";
import {ProductUserToken} from "../../../../src/TxBlog/Domain/Entity/ProductUserToken";

describe("Test check login type", () => {
    const TYPE_EMAIL = 1;
    const TYPE_TOKEN = 2;

    let isPasswordUserTypeService: TypeMoq.IMock<IsPasswordUserTypeService>;
    let sendUserLoginTokenService: TypeMoq.IMock<SendUserLoginTokenService>;

    beforeEach(() => {
        isPasswordUserTypeService = TypeMoq.Mock.ofType<IsPasswordUserTypeService>(HttpIsPasswordUserTypeService);
        sendUserLoginTokenService = TypeMoq.Mock.ofType<SendUserLoginTokenService>(HttpSendUserLoginTokenService);
    });

    it("Test email login", async (done) => {
        isPasswordUserTypeService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return true;
        });

        const service = new CheckLoginTypeUseCase(
            isPasswordUserTypeService.object,
            sendUserLoginTokenService.object,
        );

        const email = "test@test.com";
        const session = new Session({"uid_session": "sessionTest"});

        const result = await service.execute(
            email,
            session,
        );

        isPasswordUserTypeService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(email)
            );
        }, TypeMoq.Times.exactly(1));

        expect(result).toEqual(TYPE_EMAIL);

        done();
    });

    it("Test token login", async (done) => {
        isPasswordUserTypeService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return false;
        });

        sendUserLoginTokenService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return new ProductUserToken(
                "uid",
                123,
                "testToken"
            );
        });

        const service = new CheckLoginTypeUseCase(
            isPasswordUserTypeService.object,
            sendUserLoginTokenService.object,
        );

        const email = "test@test.com";
        const session = new Session({"uid_session": "sessionTest"});

        const result = await service.execute(
            email,
            session,
        );

        isPasswordUserTypeService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(email)
            );
        }, TypeMoq.Times.exactly(1));

        sendUserLoginTokenService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(email)
            );
        }, TypeMoq.Times.exactly(1));

        expect(result).toEqual(TYPE_TOKEN);

        done();
    });
});
