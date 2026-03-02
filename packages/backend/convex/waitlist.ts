import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const join = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    // Check if the email is already on the waitlist
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      throw new Error("Email is already on the waitlist!");
    }

    // Insert new entry
    await ctx.db.insert("waitlist", {
      email: args.email,
    });
  },
});
