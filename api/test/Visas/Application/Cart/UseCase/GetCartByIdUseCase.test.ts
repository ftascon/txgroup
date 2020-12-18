import "reflect-metadata";
import * as TypeMoq from "typemoq";
import {GetCartByIdService} from "../../../../../src/TxBlog/Domain/Cart/Service/GetCartByIdService";
import {HttpGetCartByIdService} from "../../../../../src/TxBlog/Infrastructure/Cart/Service/HttpGetCartByIdService";
import {GetCartByIdUseCase} from "../../../../../src/TxBlog/Application/Cart/UseCase/GetCartByIdUseCase";
import {Cart} from "../../../../../src/TxBlog/Domain/Cart/Object/Cart";
import {CartLineCollection} from "../../../../../src/TxBlog/Domain/Cart/Collection/CartLineCollection";
import {CartLine} from "../../../../../src/TxBlog/Domain/Cart/Object/CartLine";
import {Amount} from "../../../../../src/TxBlog/Domain/Cart/Object/Amount";
import {Product} from "../../../../../src/TxBlog/Domain/Cart/Object/Product";
import {getSessionFromObject} from "../../../../Helper";

describe("Test get cart by id", () => {
    let getCartByIdService: TypeMoq.IMock<GetCartByIdService>;

    beforeEach(() => {
        getCartByIdService = TypeMoq.Mock.ofType<GetCartByIdService>(HttpGetCartByIdService);
    });

    it("Test with cartId", async (done) => {
        getCartByIdService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return getCart();
        });

        const service = new GetCartByIdUseCase(
            getCartByIdService.object,
        );

        const session = getSessionFromObject({cartId: "12345"});

        const result = await service.execute(
            session,
        );

        getCartByIdService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue("12345"),
            );
        }, TypeMoq.Times.exactly(1));

        expect(result.cart).toEqual(getCart());

        done();
    });

    it("Test without cartId", async (done) => {
        const service = new GetCartByIdUseCase(
            getCartByIdService.object,
        );

        const session = getSessionFromObject({});

        try {
            await service.execute(
                session,
            );
            done.fail("No exception thrown");
        } catch (e) {
            if (e.message.match(/No cartId found/) === null) {
                done.fail("Bad exception throw");
            }
        }

        done();
    });

    function getCart(): Cart {
        const cartLineCollection = new CartLineCollection();
        cartLineCollection.add(
            new CartLine(
                new Product(
                    "12345",
                    "name",
                    "surname",
                    "passport",
                ),
                new Amount(
                    100,
                    "USD",
                ),
            ),
        );

        return new Cart(
            "12345",
            cartLineCollection,
            "1",
        );
    }
});
