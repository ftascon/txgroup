import "reflect-metadata";
import * as TypeMoq from "typemoq";
import {GetProductByIdService} from "../../../../../src/TxBlog/Domain/Product/Service/GetProductByIdService";
import {HttpGetProductByIdService} from "../../../../../src/TxBlog/Infrastructure/Product/Service/HttpGetProductByIdService";
import {GetProductByIdUseCase} from "../../../../../src/TxBlog/Application/Product/UseCase/GetProductByIdUseCase";
import {ProductField} from "../../../../../src/TxBlog/Domain/Product/Object/ProductField";
import {ProductFieldCollection} from "../../../../../src/TxBlog/Domain/Product/Collection/ProductFieldCollection";
import {ProductResponse} from "../../../../../src/TxBlog/Application/Product/Response/ProductResponse";

describe("Test get product by id", () => {
    let getProductByIdService: TypeMoq.IMock<GetProductByIdService>;

    beforeEach(() => {
        getProductByIdService = TypeMoq.Mock.ofType<GetProductByIdService>(HttpGetProductByIdService);
    });

    it("Test with productId", async (done) => {
        getProductByIdService.setup((obj) => {
            obj.execute(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return getProduct();
        });

        const service = new GetProductByIdUseCase(
            getProductByIdService.object,
        );

        const result = await service.execute(
            "12334567889",
        );

        getProductByIdService.verify((obj) => {
            obj.execute(
                TypeMoq.It.isValue(12345),
            );
        }, TypeMoq.Times.exactly(0));

        expect(result).toEqual(getProduct());

        done();
    });

    function getProduct(): ProductResponse {
        const productFieldCollection = new ProductFieldCollection();
        productFieldCollection.add(
            new ProductField(
                "firstName",
                "Felipe",
            ),
        );

        return new ProductResponse(
            "12345",
            productFieldCollection,
        );
    }
});
