import "reflect-metadata";
import * as TypeMoq from "typemoq";
import {LocalizeUserByIpService} from "../../../../../src/TxBlog/Domain/Service/LocalizeUserByIpService";
import {GeoIpLocalizeUserByIpService} from "../../../../../src/TxBlog/Infrastructure/Service/GeoIpLocalizeUserByIpService";
import { GetUserCountryCodeByIpService } from "../../../../../src/TxBlog/Application/Common/Service/GetUserCountryCodeByIpService";

describe("Test get user country code by ip service", () => {
    let localizeUserByIpService: TypeMoq.IMock<LocalizeUserByIpService>;

    beforeEach(() => {
        localizeUserByIpService = TypeMoq.Mock.ofType<LocalizeUserByIpService>(GeoIpLocalizeUserByIpService);
    });

    it("Runs and returns country iso code", async (done) => {
        localizeUserByIpService.setup((obj) => {
            obj.get(TypeMoq.It.isAny());
        }).returns(() => {
            return {
                iso: "US",
            } as any;
        });

        const service = new GetUserCountryCodeByIpService(
            localizeUserByIpService.object,
        );

        const countryCode = service.execute("8.8.8.8");

        localizeUserByIpService.verify((obj) => {
            obj.get(TypeMoq.It.isAny());
        }, TypeMoq.Times.exactly(1));

        expect(countryCode).toEqual("US");

        done();
    });
});
