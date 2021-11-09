const { createAuthLink } = require("aws-appsync-auth-link");
const { createSubscriptionHandshakeLink } = require("aws-appsync-subscription-link");

const fetch = require("node-fetch");
const { ApolloLink } = require("apollo-link");
const { createHttpLink } = require("apollo-link-http");
const apolloClient = require("@apollo/client/core");
const { ApolloClient } = apolloClient;
const { InMemoryCache } = require("@apollo/client/core");
const apolloCore = require("@apollo/client/core");
const { gql } = apolloCore;

const appSyncConfig = require("./aws-exports.js");

const url = appSyncConfig.aws_appsync_graphqlEndpoint;
const region = appSyncConfig.aws_appsync_region;
const auth = {
  type: appSyncConfig.aws_appsync_authenticationType,
  apiKey: appSyncConfig.aws_appsync_apiKey,
  // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  // credentials: async () => credentials, // Required when you use IAM-based auth.
};

const httpLink = createHttpLink({ uri: url, fetch: fetch });

const link = ApolloLink.from([createAuthLink({ url, region, auth }), createSubscriptionHandshakeLink({ url, region, auth }, httpLink)]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

//---GQL Queries---
const QUERY_OUTPUT = gql`
  query getLabPracticeSessionOutput($id: ID!) {
    getLabPracticeSessionOutput(id: $id) {
      id
      _version
    }
  }
`;

const UPDATE_OUTPUT = gql`
  mutation updateLabPracticeSessionOutput($id: ID!, $value: String!, $version: Int!, $captureDate: AWSDateTime!, $storageDate: AWSDateTime!) {
    updateLabPracticeSessionOutput(input: { id: $id, value: $value, _version: $version, captureDate: $captureDate, storageDate: $storageDate }) {
      id
      value
      _version
      captureDate
    }
  }
`;

const QUERY_COMMAND = gql`
  query getLabPracticeSessionCommand($id: ID!) {
    getLabPracticeSessionCommand(id: $id) {
      id
      _version
    }
  }
`;

const UPDATE_COMMAND = gql`
  mutation updateLabPracticeSessionCommand($id: ID!, $status: String!, $version: Int!, $executionDate: AWSDateTime!) {
    updateLabPracticeSessionCommand(input: { id: $id, status: $status, _version: $version, executionDate: $executionDate }) {
      id
      status
      _version
      executionDate
    }
  }
`;
//---------------

async function updateLabPracticeSessionCommand(uuid, status, executionDate) {
  try {
    //Query labPracticeSessionCommand to get version information (See AppSync version control)
    const queryAns = await client.query({
      query: QUERY_COMMAND,
      variables: { id: uuid },
    });

    const commandData = queryAns.data.getLabPracticeSessionCommand;
    console.log(commandData);

    //Update labPracticeSessionCommand
    try {
      const mutationAns = await client.mutate({
        mutation: UPDATE_COMMAND,
        variables: {
          id: uuid,
          status: status,
          version: commandData._version,
          executionDate: executionDate,
        },
      });
      console.log(mutationAns.data.updateLabPracticeSessionCommand);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateLabPracticeSessionOutput(uuid, value, captureDate) {
  try {
    //Query labPracticeSessionOutput to get version information (See AppSync version control)
    const queryAns = await client.query({
      query: QUERY_OUTPUT,
      variables: { id: uuid },
    });

    const outputData = queryAns.data.getLabPracticeSessionOutput;
    console.log(outputData);

    //Update labPracticeSessionOutput
    try {
      const mutationAns = await client.mutate({
        mutation: UPDATE_OUTPUT,
        variables: {
          id: uuid,
          value: value,
          version: outputData._version,
          captureDate: captureDate
        },
      });
      console.log(mutationAns.data.updateLabPracticeSessionOutput);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

exports.handler = async (event) => {
  switch (event.type) {
    case "output":
      updateLabPracticeSessionOutput(event.uuid, event.value, event.captureDate);
      break;
    case "command":
      updateLabPracticeSessionCommand(event.uuid, event.status, event.executionDate);
      break;
  }
};

// main();

// async function main() {
//   let event = {
//     type: "output",
//     uuid: "c78ac980-186d-4b89-9347-b77f3f771346",
//     value: "Hey",
//     captureDate: "2021-11-09T17:16:00-05:00",
//   };
//   // let event = {
//   //   type: "command",
//   //   uuid: "49b9fd50-ad16-4738-9132-f96cac186cc3",
//   //   status: "Hi",
//   //   executionDate: "2021-11-09T16:40:00-05:00",
//   // };
//   switch (event.type) {
//     case "output":
//       updateLabPracticeSessionOutput(event.uuid, event.value, event.captureDate);
//       break;
//     case "command":
//       updateLabPracticeSessionCommand(event.uuid, event.status, event.executionDate);
//       break;
//   }
// }
