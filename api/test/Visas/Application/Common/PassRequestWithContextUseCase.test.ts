import "reflect-metadata";
import * as TypeMoq from "typemoq";
import {SendRequestWithContext} from "../../../../src/TxBlog/Domain/Service/SendRequestWithContext";
import {HttpSendRequestWithContext} from "../../../../src/TxBlog/Infrastructure/Service/HttpSendRequestWithContext";
import {HttpResponse} from "../../../../src/core/objects/HttpResponse";
import {PassRequestWithContextUseCase} from "../../../../src/TxBlog/Application/Common/UseCase/PassRequestWithContextUseCase";
import {UserMetadata} from "../../../../src/TxBlog/Domain/Entity/UserMetadata";
import {HttpRequestMetadata} from "../../../../src/TxBlog/Domain/Entity/HttpRequestMetadata";
import {Ip} from "../../../../src/TxBlog/Domain/Entity/Ip";
import {Session} from "../../../../src/core/session/Session";

describe("Test pass request with context use case", () => {
    let sendRequestWithContext: TypeMoq.IMock<SendRequestWithContext>;

    beforeEach(() => {
        sendRequestWithContext = TypeMoq.Mock.ofType<SendRequestWithContext>(HttpSendRequestWithContext);
    });

    it("Send request", async (done) => {
        sendRequestWithContext.setup((obj) => {
            obj.send(
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return new HttpResponse(
                {"result": "OK"},
                200,
                {}
            );
        });

        const service = new PassRequestWithContextUseCase(
            sendRequestWithContext.object,
        );

        const path = "http://my-url.test";
        const method = "GET";
        const data = {"data": "test"};
        const userMetaData = new UserMetadata(
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
        const session = new Session("sessionTest");

        service.execute(
            path,
            method,
            data,
            userMetaData,
            session,
        );

        sendRequestWithContext.verify((obj) => {
            obj.send(
                TypeMoq.It.isValue(path),
                TypeMoq.It.isValue(method),
                TypeMoq.It.isValue(data),
                TypeMoq.It.isValue(userMetaData),
                TypeMoq.It.isValue(session),
            );
        }, TypeMoq.Times.exactly(1));

        done();
    });
});
