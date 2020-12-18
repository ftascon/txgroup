import {Cart} from "../../../../../src/TxBlog/Domain/Cart/Object/Cart";
import {CartLineCollection} from "../../../../../src/TxBlog/Domain/Cart/Collection/CartLineCollection";
import {CartLine} from "../../../../../src/TxBlog/Domain/Cart/Object/CartLine";
import {Product} from "../../../../../src/TxBlog/Domain/Cart/Object/Product";
import {Amount} from "../../../../../src/TxBlog/Domain/Cart/Object/Amount";

describe("Test cart object", () => {
    it("calculate total amount", async (done) => {
        const amount1 = 100;
        const amount2 = 150;
        const cartLineCollection = new CartLineCollection();
        cartLineCollection.add(
            new CartLine(
                new Product(
                    "12345",
                    "name1",
                    "surname1",
                    "passport1",
                ),
                new Amount(
                    amount1,
                    "USD",
                ),
            ),
        );
        cartLineCollection.add(
            new CartLine(
                new Product(
                    "67890",
                    "name2",
                    "surname2",
                    "passport2",
                ),
                new Amount(
                    amount2,
                    "USD",
                ),
            ),
        );

        const cart = new Cart(
            "123",
            cartLineCollection,
            "1",
        );

        expect(cart.totalAmount).toEqual(new Amount(amount1 + amount2, "USD"));

        done();
    });
});
