import "reflect-metadata";
import * as TypeMoq from "typemoq";
import {Session} from "../../../../src/core/session/Session";
import {CreateProductsAndRetrieveCartService} from "../../../../src/TxBlog/Domain/Service/CreateProductsAndRetrieveCartService";
import {GetUserIdByEmailService} from "../../../../src/TxBlog/Domain/Service/GetUserIdByEmailService";
import {AssignCartToProductUserService} from "../../../../src/TxBlog/Domain/Service/AssignCartToProductUserService";
import {HttpGetUserIdByEmailService} from "../../../../src/TxBlog/Infrastructure/Service/HttpGetUserIdByEmailService";
import {HttpAssignCartToProductUserService} from "../../../../src/TxBlog/Infrastructure/Service/HttpAssignCartToProductUserService";
import {HttpCreateProductsAndRetrieveCart} from "../../../../src/TxBlog/Infrastructure/Service/HttpCreateProductsAndRetrieveCartService";
import {CreateProductsAndCartUseCase} from "../../../../src/TxBlog/Application/Visa/UseCase/CreateProductsAndCartUseCase";
import {SubmitProductResponse} from "../../../../src/TxBlog/Domain/Response/SubmitProductResponse";
import {UserMetadata} from "../../../../src/TxBlog/Domain/Entity/UserMetadata";
import {HttpRequestMetadata} from "../../../../src/TxBlog/Domain/Entity/HttpRequestMetadata";
import {Ip} from "../../../../src/TxBlog/Domain/Entity/Ip";
import {Response} from "express";

describe("Test create products and cart", () => {
    let createProductsAndRetrieveCartService: TypeMoq.IMock<CreateProductsAndRetrieveCartService>;
    let getUserIdByEmailService: TypeMoq.IMock<GetUserIdByEmailService>;
    let assignCartToProductUserService: TypeMoq.IMock<AssignCartToProductUserService>;

    beforeEach(() => {
        createProductsAndRetrieveCartService = TypeMoq.Mock.ofType<CreateProductsAndRetrieveCartService>(HttpCreateProductsAndRetrieveCart);
        getUserIdByEmailService = TypeMoq.Mock.ofType<GetUserIdByEmailService>(HttpGetUserIdByEmailService);
        assignCartToProductUserService = TypeMoq.Mock.ofType<AssignCartToProductUserService>(HttpAssignCartToProductUserService);
    });

    // @ts-ignore
    const mockResponse = {
        session: {
            set: () => {}
        }
    };

    it("Test with userId", async (done) => {
        createProductsAndRetrieveCartService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return new SubmitProductResponse(
                123
            )
        });

        assignCartToProductUserService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
            );
        });

        const service = new CreateProductsAndCartUseCase(
            createProductsAndRetrieveCartService.object,
            getUserIdByEmailService.object,
            assignCartToProductUserService.object,
        );

        const originalRequest = {};
        const userMetadata = new UserMetadata(
            "utmSourceTest",
            "utmMediumTest",
            "utmCampaignTest",
            "refererTest",
            new HttpRequestMetadata(
                "my-url.test",
                "http",
                "requestMethodTest",
                "userAgentTest",
                new Ip("8.8.8.8"),
            ),
            "languageTest",
            1,
        );
        const userSession = new Session();
        userSession.set("userId", 456);

        await service.execute(
            originalRequest,
            userMetadata,
            userSession,
            mockResponse as unknown as Response,
        );

        createProductsAndRetrieveCartService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(originalRequest),
                TypeMoq.It.isValue(userMetadata),
                TypeMoq.It.isValue(userSession),
            );
        }, TypeMoq.Times.exactly(1));

        assignCartToProductUserService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(123),
                TypeMoq.It.isValue(456),
            );
        }, TypeMoq.Times.exactly(1));

        done();
    });

    it("Test without userId", async (done) => {
        createProductsAndRetrieveCartService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return new SubmitProductResponse(
                123
            )
        });

        getUserIdByEmailService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return 456
        });

        assignCartToProductUserService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
            );
        });

        const service = new CreateProductsAndCartUseCase(
            createProductsAndRetrieveCartService.object,
            getUserIdByEmailService.object,
            assignCartToProductUserService.object,
        );

        const originalRequest = {test: {"email.address": "test@test.com"}, "object": {}};
        const userMetadata = new UserMetadata(
            "utmSourceTest",
            "utmMediumTest",
            "utmCampaignTest",
            "refererTest",
            new HttpRequestMetadata(
                "my-url.test",
                "http",
                "requestMethodTest",
                "userAgentTest",
                new Ip("8.8.8.8"),
            ),
            "languageTest",
            1,
        );
        const userSession = new Session();

        await service.execute(
            originalRequest,
            userMetadata,
            userSession,
            mockResponse as unknown as Response,
        );

        createProductsAndRetrieveCartService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(originalRequest),
                TypeMoq.It.isValue(userMetadata),
                TypeMoq.It.isValue(userSession),
            );
        }, TypeMoq.Times.exactly(1));

        getUserIdByEmailService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue("test@test.com"),
            );
        }, TypeMoq.Times.exactly(1));

        assignCartToProductUserService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(123),
                TypeMoq.It.isValue(456),
            );
        }, TypeMoq.Times.exactly(1));

        done();
    });

    it("Test email not set", async (done) => {
        createProductsAndRetrieveCartService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return new SubmitProductResponse(
                123
            )
        });

        getUserIdByEmailService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return 456
        });

        const service = new CreateProductsAndCartUseCase(
            createProductsAndRetrieveCartService.object,
            getUserIdByEmailService.object,
            assignCartToProductUserService.object,
        );

        const originalRequest = {test: {test0: {test1: "1", test2: "2"}}};
        const userMetadata = new UserMetadata(
            "utmSourceTest",
            "utmMediumTest",
            "utmCampaignTest",
            "refererTest",
            new HttpRequestMetadata(
                "my-url.test",
                "http",
                "requestMethodTest",
                "userAgentTest",
                new Ip("8.8.8.8"),
            ),
            "languageTest",
            1,
        );
        const userSession = new Session();

        try {
            await service.execute(
                originalRequest,
                userMetadata,
                userSession,
                mockResponse as unknown as Response,
            );
            done.fail("Exception not thrown");
        } catch (e) {
            if (e.message.match(/Not form email/) === null) {
                done.fail("Bad exception thrown");
            }
        }

        createProductsAndRetrieveCartService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(originalRequest),
                TypeMoq.It.isValue(userMetadata),
                TypeMoq.It.isValue(userSession),
            );
        }, TypeMoq.Times.exactly(1));

        done();
    });
});
