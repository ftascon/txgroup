import "reflect-metadata";
import * as TypeMoq from "typemoq";
import {GetTransactionService} from "../../../../../src/TxBlog/Domain/Dashboard/Service/GetTransactionService";
import {GetUserTransactionsService} from "../../../../../src/TxBlog/Domain/Dashboard/Service/GetUserTransactionsService";
import {HttpGetUserTransactionsService} from "../../../../../src/TxBlog/Infrastructure/Dashboard/Service/HttpGetUserTransactionsService";
import {HttpGetTransactionService} from "../../../../../src/TxBlog/Infrastructure/Dashboard/Service/HttpGetTransactionService";
import {GetDashboardUseCase} from "../../../../../src/TxBlog/Application/Dashboard/UseCase/GetDashboardUseCase";
import {Session} from "../../../../../src/core/session/Session";
import {TransactionCollection} from "../../../../../src/TxBlog/Domain/Dashboard/Collection/TransactionCollection";
import {Transaction} from "../../../../../src/TxBlog/Domain/Dashboard/Object/Transaction";
import {ProductCollection} from "../../../../../src/TxBlog/Domain/Dashboard/Collection/ProductCollection";
import {Product} from "../../../../../src/TxBlog/Domain/Dashboard/Object/Product";
import {EncryptionService} from "../../../../../src/core/EncryptionService";
import {PaymentSession} from "../../../../../src/TxBlog/Domain/Entity/PaymentSession";

describe("Test get dashboard", () => {
    const MODE_TRANSACTION = 1;
    const MODE_USER = 2;

    let getUserTransactionsService: TypeMoq.IMock<GetUserTransactionsService>;
    let getTransactionService: TypeMoq.IMock<GetTransactionService>;

    beforeEach(() => {
        getUserTransactionsService = TypeMoq.Mock.ofType<GetUserTransactionsService>(HttpGetUserTransactionsService);
        getTransactionService = TypeMoq.Mock.ofType<GetTransactionService>(HttpGetTransactionService);
    });

    it("Test with userId", async (done) => {
        getUserTransactionsService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return getTransaction();
        });

        const service = new GetDashboardUseCase(
            getUserTransactionsService.object,
            getTransactionService.object,
        );

        const session = new Session({userId: (new EncryptionService()).encrypt("12345")});

        const result = await service.execute(
            session,
        );

        getUserTransactionsService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(12345),
            );
        }, TypeMoq.Times.exactly(1));

        expect(result.dashboardMode).toEqual(MODE_USER);
        expect(result.transactions).toEqual(getTransaction());

        done();
    });

    it("Test with transactionId", async (done) => {
        getTransactionService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return getTransaction();
        });

        const service = new GetDashboardUseCase(
            getUserTransactionsService.object,
            getTransactionService.object,
        );

        const session = new Session();

        session.set(PaymentSession.SESSION_KEY, (new PaymentSession("orderId", "transactionId", "OV:bonpagament").buildString()));

        const result = await service.execute(
            session,
        );

        getTransactionService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue("transactionId"),
            );
        }, TypeMoq.Times.exactly(1));

        expect(result.dashboardMode).toEqual(MODE_TRANSACTION);
        expect(result.transactions).toEqual(getTransaction());

        done();
    });

    it("Test no dashboard", async (done) => {
        const service = new GetDashboardUseCase(
            getUserTransactionsService.object,
            getTransactionService.object,
        );

        const session = new Session({});

        try {
            await service.execute(
                session,
            );
            done.fail("No exception thrown");
        } catch (e) {
            if (e.message.match(/No dashboard found/) === null) {
                done.fail("Bad exception throw");
            }
        }

        done();
    });

    function getTransaction(): TransactionCollection {
        const productCollection = new ProductCollection();
        productCollection.add(
            new Product(
                "123",
                "Name",
                "Surname",
                "type",
                "status",
                "01/01/1990",
                "01/01/1990",
                1,
                3,
            ),
        );
        const transactionCollection = new TransactionCollection();
        transactionCollection.add(
            new Transaction(
                "123",
                "112233",
                "667788",
                productCollection,
            ),
        );
        return transactionCollection;
    }
});
