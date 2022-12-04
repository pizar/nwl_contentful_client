"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentfulClient = void 0;
const axios_1 = __importDefault(require("axios"));
class ContentfulClient {
    /**
     * Compose the endpoint using the enviroment variable.
     *
     * @returns
     */
    _composeEndpoint() {
        return `https://graphql.contentful.com/content/v1/spaces/` + process.env.CONTENTFUL_SPACE_ID;
    }
    /**
     * Compose the header of the request.
     * If preview is true, use the preview token instead
     *
     * @param preview
     * @returns
     */
    _composeHeader(preview = false) {
        return {
            "content-type": "application/json",
            "Authorization": `Bearer ${preview
                ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                : process.env.CONTENTFUL_ACCESS_TOKEN}`,
        };
    }
    /**
     * Compose the request body for the graphql client,
     * using authentication credentials from .env file and considering preview if needed.
     *
     * @param graphql the graphql query
     * @param preview if true, show the data in draft also
     *
     * @returns a request object for fetch/sync-fetch function
     */
    _composeGraphQLQuery(query) {
        return {
            query
        };
    }
    ;
    /**
     * Interrogate the graphql service in async way
     *
     * @param graphql the graphql query
     * @param preview if true, show the data in draft also
     *
     * @returns a promise with response json
     */
    async query(graphql, preview = false) {
        const response = await (0, axios_1.default)({
            url: this._composeEndpoint(),
            method: 'post',
            headers: this._composeHeader(preview),
            data: this._composeGraphQLQuery(graphql)
        });
        return response.data;
    }
    /**
     * Interrogate the graphql service in sync way
     *
     * @param graphql the graphql query
     * @param preview if true, show the data in draft also
     *
     * @returns response json
     */
    syncQuery(graphql, preview = false) {
        return this.query(graphql, preview).then((response) => { response; });
    }
}
exports.ContentfulClient = ContentfulClient;
