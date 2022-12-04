declare class ContentfulClient {
    /**
     * Compose the endpoint using the enviroment variable.
     *
     * @returns
     */
    private _composeEndpoint;
    /**
     * Compose the header of the request.
     * If preview is true, use the preview token instead
     *
     * @param preview
     * @returns
     */
    private _composeHeader;
    /**
     * Compose the request body for the graphql client,
     * using authentication credentials from .env file and considering preview if needed.
     *
     * @param graphql the graphql query
     * @param preview if true, show the data in draft also
     *
     * @returns a request object for fetch/sync-fetch function
     */
    private _composeGraphQLQuery;
    /**
     * Interrogate the graphql service in async way
     *
     * @param graphql the graphql query
     * @param preview if true, show the data in draft also
     *
     * @returns a promise with response json
     */
    query(graphql: string, preview?: boolean): Promise<any>;
    /**
     * Interrogate the graphql service in sync way
     *
     * @param graphql the graphql query
     * @param preview if true, show the data in draft also
     *
     * @returns response json
     */
    syncQuery(graphql: string, preview?: boolean): any;
}
export { ContentfulClient };
