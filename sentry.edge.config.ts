// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
if (process.env.NEXT_PUBLIC_ENABLE_SENTRY === "true") {
  Sentry.init({
    dsn: "https://e8459aa50c6e621cc30f1db942c6f25b@o1259815.ingest.sentry.io/4506515122749440",

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
}