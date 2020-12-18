import "reflect-metadata";
import * as fs from "fs";
import {JWTTokenService} from "../../../../src/TxBlog/Domain/Service/JWTTokenService";

describe("JWT Token Service test", () => {
    const path = __dirname + "/jwtFiles/";

    function partsOfObject(object: any) {
        return JSON.stringify(object).replace("{", "").replace("}", "");
    }

    function wait(ms: number) {
        return new Promise((success) => {
            setTimeout(() => {
                success();
            }, ms);
        });
    }

    it("Test generation of JWT Token", async (done) => {
        const service = new JWTTokenService(
            await fs.readFileSync(path + "public.pem") as unknown as string,
            await fs.readFileSync(path + "private.pem") as unknown as string,
        );

        const object = {test: "test"};

        const signedToken = service.sign(object);

        const objectVerified = service.verify(signedToken);

        expect(partsOfObject(objectVerified)).toContain(partsOfObject(object));

        done();
    });

    it("Test verify invalid token", async (done) => {
        const tokenPast = await fs.readFileSync(path + "tokenInvalid.txt", "utf8") as unknown as string;

        const service = new JWTTokenService(
            await fs.readFileSync(__dirname + "/jwtFiles/public.pem") as unknown as string,
            await fs.readFileSync(__dirname + "/jwtFiles/private.pem") as unknown as string,
        );

        try {
            service.verify(tokenPast);
            done.fail("No exception throw");
        } catch (e) {
            if (e.message.match(/invalid token/) === null) {
                console.log(e);
                done.fail("Bad exception");
            }
        }

        done();
    });

    it("Test verify encryption", async (done) => {
        const service = new JWTTokenService(
            await fs.readFileSync(__dirname + "/jwtFiles/public.pem") as unknown as string,
            await fs.readFileSync(__dirname + "/jwtFiles/private.pem") as unknown as string,
        );

        const testPhrase = "Ay dios mio que calvario";

        const encrypted = service.encrypt(testPhrase);

        const decrypted = service.decrypt(encrypted);

        expect(decrypted).toEqual(testPhrase);

        done();
    });

    it("Test refresh token", async (done) => {
        const service = new JWTTokenService(
            await fs.readFileSync(path + "public.pem") as unknown as string,
            await fs.readFileSync(path + "private.pem") as unknown as string,
        );

        const object = {test: "test"};

        const signedToken = service.sign(object);

        const objectVerified = service.verify(signedToken);

        await wait(1000);

        const renewToken = service.refreshToken(signedToken);

        const objectVerifiedRenewed = service.verify(renewToken);

        expect(partsOfObject(objectVerified)).toContain(partsOfObject(object));

        done();
    });
});
