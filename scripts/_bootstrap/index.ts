import dotenv from "dotenv";

const baseResult = dotenv.config({
  path: ".env",
});

const localResult = dotenv.config({
  path: ".env.local",
});

process.env = {
  ...process.env,
  ...baseResult.parsed,
  ...localResult.parsed,
};
