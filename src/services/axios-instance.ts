import axios from "axios";

const GITHUB_BASE_URL = process.env.NEXT_PUBLIC_GITHUB_BASE_URL;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const axios_github = axios.create({
  baseURL: GITHUB_BASE_URL,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});
