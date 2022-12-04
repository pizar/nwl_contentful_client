import axios from "axios";

class ContentfulClient {

  /**
   * Compose the endpoint using the enviroment variable.
   * 
   * @returns 
   */
  private _composeEndpoint():string {
    return `https://graphql.contentful.com/content/v1/spaces/`+process.env.CONTENTFUL_SPACE_ID;
  }

  /**
   * Compose the header of the request.
   * If preview is true, use the preview token instead
   * 
   * @param preview
   * @returns
   */
  private _composeHeader(preview: boolean = false): any {
    return {
      "content-type": "application/json",
      "Authorization": `Bearer ${
        preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
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
  private _composeGraphQLQuery(query: string): any {
    return {
       query 
    }
  };

  /**
   * Interrogate the graphql service in async way
   *
   * @param graphql the graphql query
   * @param preview if true, show the data in draft also
   *
   * @returns a promise with response json
   */
  async query(graphql: string, preview: boolean = false): Promise<any> {
    const response = await axios({
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
  syncQuery(graphql: string, preview: boolean = false): any {
    return this.query(graphql, preview).then((response) => { response });
  }
}

export { ContentfulClient };
