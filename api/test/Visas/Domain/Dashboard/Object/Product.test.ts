import {Product} from "../../../../../src/TxBlog/Domain/Dashboard/Object/Product";

describe("Test dashboard product object", () => {
    it("use object methods", async (done) => {
        const product = new Product(
            "12345",
            "name",
            "surname",
            "type1",
            "status",
            "2019-01-01",
            "2019-01-02",
            1,
            2,
        );

        expect(product.created).toEqual("01/01/2019");

        done();
    });
});
