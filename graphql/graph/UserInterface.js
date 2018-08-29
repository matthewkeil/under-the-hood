const {
  GraphQLInterfaceType,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString
} = require("graphql");

console.log(
  Object.entries(
    new GraphQLInterfaceType({
      name: "SerializedUser",
      description:
        "serialized user object that will be sent between client and server",
      fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        created: { type: new GraphQLNonNull(GraphQLInt) },
        token: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) }
      }
    })
  )
);
