import {Author} from "./Author";

export class AuthorFactory {
    public static retrieveAuthorFromRawData(rawData: any): Author {
        return new Author(
            rawData.author.name,
            rawData.author.email
        );
    }
}
