const { createAuthLink } = require("aws-appsync-auth-link");
const { createSubscriptionHandshakeLink } = require("aws-appsync-subscription-link");

const fetch = require('node-fetch')
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

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink({ url, region, auth }, httpLink)
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const LIST_LAB_PRACTICES = gql`
query listLabPractices {
  listLabPractices{
    items{
      id,
      name
    }
  }
  }
  `;

const UPDATE_COMMAND = gql`
mutation updateLabPracticeSessionCommand(
  $id: ID!
  $status: String!
  ) {
  updateLabPracticeSessionCommand(input: {id: $id status: $status}){
    id,
    status
  }
}
`;

// exports.handler = async (event) => {
//   switch (event.type) {
//     case "output":
//       break;
//     case "command":
//       try {
//         const ans = await client.mutate({
//           mutation: UPDATE_COMMAND,
//           variables: {
//             Command: {
//               id: event.uuid,
//               status: "ok"
//             }
//           }
//         })
//         console.log(ans)
//       } catch (error) {
//         console.log(error)
//       }
//       break;
//   }
//   try {
//     const Test = await client.query({
//       query: LIST_LAB_PRACTICES
//     })
//     console.log(Test.data.listLabPractices.items)
//   } catch (error) {
//     console.log(error)
//   }
// }

main();

async function main() {
  let event = {
    type: "command",
    uuid: "49b9fd50-ad16-4738-9132-f96cac186cc3",
    status: "fail"
  }
  switch (event.type) {
    case "output":
      break;
    case "command":
      try {
        const ans = await client.mutate({
          mutation: UPDATE_COMMAND,
          variables: {
            id: event.uuid,
            status: event.status
          }
        })
        console.log(ans)
      } catch (error) {
        console.log(error)
      }
      break;
  }
  try {
    const Test = await client.query({
      query: LIST_LAB_PRACTICES
    })
    console.log(Test.data.listLabPractices.items)
  } catch (error) {
    console.log(error)
  }
}

