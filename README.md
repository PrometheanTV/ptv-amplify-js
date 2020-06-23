# PTV Amplify - Setup instructions

This package will share `aws-sdk` entities as global  `API, graphqlOperation, Auth, Amplify, AWS` 

## Install dependencies
```bash
yarn install
```
## Build 
```bash
yarn build
```

## Amplify@3.x.x has breaking changes. Please see the breaking changes below:
```
    AWS.credentials and AWS.config don’t exist anymore anywhere in Amplify JS
        Both options will not be available to use in version 3. You will not be able to use and set your own credentials. Migration plan on “How to migrate to using Amplify provided credentials” will follow in the coming weeks after GA launch.
    aws-sdk@2.x has been removed from Amplify@3.x.x in favor of version 3 of aws-sdk-js. We recommend to migrate to aws-sdk-js-v3 if you rely on AWS services that are not supported by Amplify, since aws-sdk-js-v3 is imported modularly.
  Details: https://github.com/aws-amplify/amplify-js
```