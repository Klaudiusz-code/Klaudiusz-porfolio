
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://adamaszekwebdev.pl/graphql",
  documents: "./gql-queries",
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: ["typescript"],
    },
  },
};

export default config;
