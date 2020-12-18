import {Amount} from "../../../../../src/TxBlog/Domain/Cart/Object/Amount";
import {Transaction} from "../../../../../src/TxBlog/Domain/Dashboard/Object/Transaction";
import {ProductCollection} from "../../../../../src/TxBlog/Domain/Dashboard/Collection/ProductCollection";
import {Product} from "../../../../../src/TxBlog/Domain/Dashboard/Object/Product";

describe("Test transaction object", () => {
    it("use object methods", async (done) => {
        const productCollection = new ProductCollection();
        productCollection.add(
            new Product(
                "12345",
                "name",
                "surname",
                "type1",
                "status",
                "2019-01-01",
                "2019-01-02",
                1,
                2,
            ),
        );
        productCollection.add(
            new Product(
                "12345",
                "name",
                "surname",
                "type2",
                "status",
                "2019-01-01",
                "2019-01-02",
                1,
                2
            ),
        );
        const transaction = new Transaction(
            "12345",
            "112233",
            "667788",
            productCollection,
        );

        expect(transaction.productTypes).toEqual(["type1", "type2"]);
        expect(transaction.numTravellers).toEqual(2);
        expect(transaction.arrivalDate).toEqual("02/01/2019");

        done();
    });
});
