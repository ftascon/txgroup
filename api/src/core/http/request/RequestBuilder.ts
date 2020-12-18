import { Request } from "./Request";

export interface RequestBuilder {
    build(url: string,
          method: string,
          headers: object,
          body?: any,
          proxy?: string | undefined,
          options?: object | undefined): Request;
}
