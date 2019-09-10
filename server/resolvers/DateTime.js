const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'DateTime custom scalar type',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value)
    }
    return null;
  },
});

module.exports = DateTime;
