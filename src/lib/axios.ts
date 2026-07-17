"use server";

import { cookies } from "next/headers";
import axios from "axios";

// ================================ GITHUB API ================================
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_BASE_URL = process.env.NEXT_PUBLIC_GITHUB_BASE_URL;

export const axiosGithub = axios.create({
  baseURL: GITHUB_BASE_URL,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

axiosGithub.interceptors.request.use(async (config) => {
  console.log(
    "-------------------------------------------------------------------"
  );
  console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
  console.log(
    "-------------------------------------------------------------------"
  );
  return config;
});

axiosGithub.interceptors.response.use(
  (response) => {
    console.log(
      "-------------------------------------------------------------------"
    );
    console.log(
      `[API Response] ${response.config.method?.toUpperCase()} ${
        response.config.url
      } ${response.status}`
    );
    console.log(
      "-------------------------------------------------------------------"
    );
    return response;
  },
  (error) => {
    console.error(
      `[API Error] ${error.config?.method?.toUpperCase()} ${
        error.config?.url
      } ${error.response?.status}`
    );
    console.log(
      "-------------------------------------------------------------------"
    );
    return Promise.reject(error);
  }
);

// ================================ AUTH API ================================
export const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosAuth.interceptors.request.use(async (config) => {
  console.log(
    "-------------------------------------------------------------------"
  );
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return Promise.reject({
      response: { status: 401, message: "Unauthorized: No token" },
    });
  }

  config.headers.Authorization = `Bearer ${token}`;

  // Log request
  console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);

  return config;
});

axiosAuth.interceptors.response.use(
  (response) => {
    // Log successful response
    console.log(
      `[API Response] ${response.config.method?.toUpperCase()} ${
        response.config.url
      } ${response.status}`
    );
    console.log(
      "-------------------------------------------------------------------"
    );

    return response;
  },
  async (error) => {
    // Log error response
    console.error(
      `[API Error] ${error.config?.method?.toUpperCase()} ${
        error.config?.url
      } ${error.response?.status}`
    );
    console.log(
      "-------------------------------------------------------------------"
    );

    return Promise.reject(error);
  }
);

// ================================ PUBLIC API ================================
export const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosPublic.interceptors.request.use(async (config) => {
  // Log request
  console.log(
    "-------------------------------------------------------------------"
  );
  console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);

  return config;
});

axiosPublic.interceptors.response.use(
  (response) => {
    // Log successful response
    console.log(
      `[API Response] ${response.config.method?.toUpperCase()} ${
        response.config.url
      } ${response.status}`
    );
    console.log(
      "-------------------------------------------------------------------"
    );

    return response;
  },
  (error) => {
    // Log error response
    console.error(
      `[API Error] ${error.config?.method?.toUpperCase()} ${
        error.config?.url
      } ${error.response?.status}`
    );
    console.log(
      "-------------------------------------------------------------------"
    );

    return Promise.reject(error);
  }
);
