const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require("graphql");
const UserInterface = require("./UserInterface");

console.log(
  Object.entries(
    new GraphQLObjectType({
      name: "User",
      interfaces: [UserInterface],
      description: "Serialized user that gets sent to the client",
      fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        created: { type: new GraphQLNonNull(GraphQLInt) },
        emails: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        email: {
          type: new GraphQLNonNull(GraphQLString),
          resolve: obj => {
            return obj.emails[0];
          }
        },
        passwords: { type: new GraphQLNonNull(GraphQLString) },
        password: {
          type: new GraphQLNonNull(GraphQLString),
          resolve: obj => {
            return obj.passwords[0];
          }
        },
        tokens: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        token: {
          type: new GraphQLNonNull(GraphQLString),
          resolve: obj => {
            return obj.tokens[0];
          }
        }
      }
    })
  )
);
