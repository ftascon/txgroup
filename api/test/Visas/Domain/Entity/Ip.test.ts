import {Ip} from "../../../../src/TxBlog/Domain/Entity/Ip";

describe("Test ip object", () => {
    it("fails on create", async (done) => {
        try {
            const ip = new Ip("2747.523.425.432");
            done.fail("no exception throw");
        } catch (e) {
            if (e.message.match(/is not a valid ip/) === null) {
                done.fail("Bad exception throw");
            }
        }

        done();
    });

    it("creates object correctly", async (done) => {
        const ip = new Ip("8.8.8.8");

        expect(ip.ip).toEqual("8.8.8.8");

        done();
    });
});
