import API, { graphqlOperation } from "@aws-amplify/api";
import Storage from "@aws-amplify/storage";
import Auth from "@aws-amplify/auth";
import Amplify from "@aws-amplify/core";
import AWS from 'aws-sdk/global';
import PubSub from "@aws-amplify/pubsub";

export {
    API, graphqlOperation, Auth, Amplify, AWS, PubSub, Storage
};