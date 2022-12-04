import {ContentfulClient} from '../src/ContentfulClient';

const dotenv = require('dotenv');
dotenv.config({ path: '.env.test' });

console.info("",process.env.CONTENTFUL_MANAGEMENT_TOKEN)
const client = new ContentfulClient();
const graphql = `query {
  pageCollection(
    where:  { slug: "about" }, 
    preview: false
  ) {
    items{
      sys{
          id
      }
      slug
      title
      order
    }
  }
  
  labelCollection(
    where: { page: { slug: "about" } }
    preview: false
  ) {
    items {
      sys {
        id
      }
      key
      value
    }
  }
}`;

/**
 * 
 */
describe('Testing Configuration', () => {
  it('CONTENTFUL_SPACE_ID', () => {
    expect(process.env.CONTENTFUL_SPACE_ID).toBeTruthy();
  });

  it('CONTENTFUL_MANAGEMENT_TOKEN', () => {
    expect(process.env.CONTENTFUL_MANAGEMENT_TOKEN).toBeTruthy();
  });

  it('CONTENTFUL_ACCESS_TOKEN', () => {
    expect(process.env.CONTENTFUL_ACCESS_TOKEN).toBeTruthy();
  });

  it('CONTENTFUL_PREVIEW_ACCESS_TOKEN', () => {
    expect(process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN).toBeTruthy();
  });

  it('CONTENTFUL_PREVIEW_SECRET', () => {
    expect(process.env.CONTENTFUL_PREVIEW_SECRET).toBeTruthy();
  });

  it('CONTENTFUL_REVALIDATE_SECRET', () => {
    expect(process.env.CONTENTFUL_REVALIDATE_SECRET).toBeTruthy();
  });
});

/**
 * 
 */
describe("Test GraphQL Client", function () {
  it("Asynchronous query", done => {
      client.query(graphql).then(function (response) {
          expect(response.data.pageCollection).toBeTruthy();
          done();
      }).catch(error => {
          console.log(error);
          done(error);
      });
  });

  it("Synchronous query", () => {
    expect(client.syncQuery(graphql).data.pageCollection).toBeTruthy();
  });
});

