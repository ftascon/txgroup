import "reflect-metadata";
import * as TypeMoq from "typemoq";
import {Session} from "../../../../src/core/session/Session";
import {LoginByPasswordService} from "../../../../src/TxBlog/Domain/Service/LoginByPasswordService";
import {LoginByTokenService} from "../../../../src/TxBlog/Domain/Service/LoginByTokenService";
import {HttpLoginByPasswordService} from "../../../../src/TxBlog/Infrastructure/Login/Service/HttpLoginByPasswordService";
import {HttpLoginByTokenService} from "../../../../src/TxBlog/Infrastructure/Login/Service/HttpLoginByTokenService";
import {LoginUserUseCase} from "../../../../src/TxBlog/Application/Login/UseCase/LoginUserUseCase";
import {UserLoginData} from "../../../../src/TxBlog/Domain/Entity/UserLoginData";

describe("Test check login type", () => {
    let loginByPasswordService: TypeMoq.IMock<LoginByPasswordService>;
    let loginByTokenService: TypeMoq.IMock<LoginByTokenService>;

    beforeEach(() => {
        loginByPasswordService = TypeMoq.Mock.ofType<LoginByPasswordService>(HttpLoginByPasswordService);
        loginByTokenService = TypeMoq.Mock.ofType<LoginByTokenService>(HttpLoginByTokenService);
    });

    it("Test login by token", async (done) => {
        loginByTokenService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return new UserLoginData(
                123,
                "test@test.com",
            )
        });

        const service = new LoginUserUseCase(
            loginByPasswordService.object,
            loginByTokenService.object,
        );

        const email = "test@test.com";
        const password = "fakepwd";
        const session = new Session({"uid_session": "sessionTest"});

        await service.execute(
            email,
            password,
            session,
        );

        loginByTokenService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue("sessionTest"),
                TypeMoq.It.isValue(password),
            );
        }, TypeMoq.Times.exactly(1));

        done();
    });

    it("Test login by password", async (done) => {
        loginByPasswordService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return new UserLoginData(
                123,
                "test@test.com",
            )
        });

        const service = new LoginUserUseCase(
            loginByPasswordService.object,
            loginByTokenService.object,
        );

        const email = "test@test.com";
        const password = "fakepwd";
        const session = new Session({});

        await service.execute(
            email,
            password,
            session,
        );

        loginByPasswordService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(email),
                TypeMoq.It.isValue(password),
            );
        }, TypeMoq.Times.exactly(1));

        done();
    });
});
