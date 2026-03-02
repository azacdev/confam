import { query } from "./_generated/server";

export const ping = query({
  args: {},
  handler: async () => {
    return "Convex is successfully connected!";
  },
});
