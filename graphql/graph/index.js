const { GraphQLSchema, GraphQLObjectType: Obj } = require("graphql");

const User = require("./User");

console.log(
  new GraphQLSchema({
    query: new Obj({
      name: "Query",
      fields: {
        getAllUsers: { type: User, resolve: () => {} }
      }
    })
  })
);
