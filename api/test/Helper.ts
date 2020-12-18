import {Session} from "../src/core/session/Session";

export function getSessionFromObject(object: any) {
    const session = new Session();

    for (const key in object) {
        if (typeof key === "string" && object.hasOwnProperty(key)) {
            session.set(key, object[key]);
        }
    }

    return session;
}
