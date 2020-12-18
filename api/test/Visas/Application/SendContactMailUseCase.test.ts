import "reflect-metadata";
import * as TypeMoq from "typemoq";
import {SendContactMailCommand} from "../../../src/TxBlog/Domain/Command/SendContactMailCommand";
import {HttpSendContactMailCommand} from "../../../src/TxBlog/Infrastructure/Command/HttpSendContactMailCommand";
import {SendContactMailUseCase} from "../../../src/TxBlog/Application/SendContactMailUseCase";
import {SendContactMailRequest} from "../../../src/TxBlog/Application/Request/SendContactMailRequest";
import {ContactMail} from "../../../src/TxBlog/Domain/Entity/ContactMail";

describe("Test send contact mail", () => {
    let sendContactMailCommand: TypeMoq.IMock<SendContactMailCommand>;

    beforeEach(() => {
        sendContactMailCommand = TypeMoq.Mock.ofType<SendContactMailCommand>(HttpSendContactMailCommand);
    });

    it("Test with userId", async (done) => {
        sendContactMailCommand.setup((obj) => {
            obj.send(
                TypeMoq.It.isAny(),
            );
        });

        const service = new SendContactMailUseCase(
            sendContactMailCommand.object,
        );

        const request = new SendContactMailRequest(
            "name",
            "email",
            "isClient",
            "reason",
            "comments",
            "locale",
            "passport",
        );

        await service.execute(request);

        sendContactMailCommand.verify((obj) => {
            obj.send(
                TypeMoq.It.isValue(
                    new ContactMail(
                        "name",
                        "email",
                        "isClient",
                        "reason",
                        "comments",
                        "locale",
                        "passport",
                    ),
                ),
            );
        }, TypeMoq.Times.exactly(1));

        done();
    });
});
