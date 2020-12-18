import "reflect-metadata";
import * as TypeMoq from "typemoq";
import {Session} from "../../../../src/core/session/Session";
import {UserMetadata} from "../../../../src/TxBlog/Domain/Entity/UserMetadata";
import {HttpRequestMetadata} from "../../../../src/TxBlog/Domain/Entity/HttpRequestMetadata";
import {Ip} from "../../../../src/TxBlog/Domain/Entity/Ip";
import {PayVisaWithCreditCardCommand} from "../../../../src/TxBlog/Domain/Command/PayVisaWithCreditCardCommand";
import {HttpPayVisaWithCreditCardCommand} from "../../../../src/TxBlog/Infrastructure/Command/HttpPayVisaWithCreditCardCommand";
import {GetPaymentSessionByCartIdService} from "../../../../src/TxBlog/Domain/Service/GetPaymentSessionByCartIdService";
import {HttpGetPaymentSessionByCartIdService} from "../../../../src/TxBlog/Infrastructure/Service/HttpGetPaymentSessionByCartIdService";
import {PayVisaWithCreditCardUseCase} from "../../../../src/TxBlog/Application/Visa/UseCase/PayVisaWithCreditCardUseCase";
import {PaymentSession} from "../../../../src/TxBlog/Domain/Entity/PaymentSession";
import {HttpError} from "../../../../src/core/error/HttpError";

describe("Test pay visa with credit card", () => {
    let payVisaWithCreditCardCommand: TypeMoq.IMock<PayVisaWithCreditCardCommand>;
    let getPaymentSessionByCartIdService: TypeMoq.IMock<GetPaymentSessionByCartIdService>;

    beforeEach(() => {
        payVisaWithCreditCardCommand = TypeMoq.Mock.ofType<PayVisaWithCreditCardCommand>(HttpPayVisaWithCreditCardCommand);
        getPaymentSessionByCartIdService = TypeMoq.Mock.ofType<GetPaymentSessionByCartIdService>(HttpGetPaymentSessionByCartIdService);
    });

    it("Test with userId", async (done) => {
        payVisaWithCreditCardCommand.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
            );
        });

        const service = new PayVisaWithCreditCardUseCase(
            payVisaWithCreditCardCommand.object,
            getPaymentSessionByCartIdService.object,
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
        userSession.set("userId", 123);

        await service.execute(
            originalRequest,
            userMetadata,
            userSession
        );

        payVisaWithCreditCardCommand.verify((obj) => {
            obj.execute(
                TypeMoq.It.is((x) => {
                    return typeof x !== "undefined";
                }),
                TypeMoq.It.isValue(userSession),
            );
        }, TypeMoq.Times.exactly(1));

        done();
    });

    it("Test without userId", async (done) => {
        payVisaWithCreditCardCommand.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
            );
        });

        getPaymentSessionByCartIdService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return new PaymentSession(
                "testOrderId",
                "testTransId",
                "bankStatement",
            );
        });

        const service = new PayVisaWithCreditCardUseCase(
            payVisaWithCreditCardCommand.object,
            getPaymentSessionByCartIdService.object,
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
        await userSession.set("cartId", 456);

        await service.execute(originalRequest, userMetadata, userSession);

        payVisaWithCreditCardCommand.verify((obj) => {
            obj.execute(
                TypeMoq.It.is((x) => {
                    return typeof x !== "undefined";
                }),
                TypeMoq.It.isAny(),
            );
        }, TypeMoq.Times.exactly(1));

        getPaymentSessionByCartIdService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(456),
            );
        }, TypeMoq.Times.exactly(1));

        done();
    });

    it("Test throw exception", async (done) => {
        payVisaWithCreditCardCommand.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            throw new HttpError(500, "Test error");
        });

        const service = new PayVisaWithCreditCardUseCase(
            payVisaWithCreditCardCommand.object,
            getPaymentSessionByCartIdService.object,
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

        try {
            await service.execute(
                originalRequest,
                userMetadata,
                userSession
            );
            done.fail("Exception not thrown");
        } catch (e) {
            if (e.message.match(/Test error/) === null) {
                done.fail("Bad exception thrown");
            }
        }

        payVisaWithCreditCardCommand.verify((obj) => {
            obj.execute(
                TypeMoq.It.is((x) => {
                    return typeof x !== "undefined";
                }),
                TypeMoq.It.isValue(userSession),
            );
        }, TypeMoq.Times.exactly(1));

        done();
    });
});
