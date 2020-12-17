module.exports = {
  client: {
    addTypename: false,
    excludes: [],
    includes: ["./src/**/*.tsx", "./src/**/*.ts", "./plugins/**/*.js"],
    service: {
      name: "gatsbySchema",
      localSchemaFile: "./graphql.schema.json"
    },
    tagName: "graphql"
  }
};
