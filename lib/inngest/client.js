import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "SarthAI", // Unique app ID
  name: "SarthAI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
