> the project still in working,

# nwl_contentful_client
Simple client implementation for contentful. 
The test project birth with this test purpose: _create a node module and use it into a larger project._

**Table of Contents**
[TOC]

## Install
```shell
npm install nwl_contentful_client
```

## Use
Create (or add to) your `.env` file. Below the variables needed from the system:
- CONTENTFUL_SPACE_ID
- CONTENTFUL_ACCESS_TOKEN=
- CONTENTFUL_PREVIEW_ACCESS_TOKEN=

then...
```node
import {ContentfulClient} from "nwl_contentful_client";

const client = new ContentfulClient();
const entries = await client.query(graphql);
```
