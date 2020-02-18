import queries from "./queries";
import resolvers from "./resolvers";
import schemas from "./schemas";

export default async function register(app) {
  await app.registerPlugin({
    label: "Vendors",
    name: "daniel-rosiak-vendors",
    autoEnable: true,
    graphQL: {
      resolvers,
      schemas
    },
    queries
  });
}
