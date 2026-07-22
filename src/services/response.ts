import { NextResponse } from "next/server";
import { AxiosError } from "axios";

import type { BaseResponse, Pagination } from "@/types/api";

const ResponseHelper = {
  apiSuccess: <T>(
    message: string,
    data: T,
    pagination?: Pagination
  ): NextResponse => {
    return NextResponse.json(
      {
        success: true,
        message,
        data,
        pagination,
      },
      { status: 200 }
    );
  },
  success: <T>(message: string, data: T): BaseResponse<T> => {
    return {
      success: true,
      message,
      data,
    };
  },
  apiError: (message: string, error?: unknown) => {
    console.log("API Error: ", error);
    const status = error instanceof AxiosError ? error.response?.status : 500;
    // if (status === 401) {
    //   deleteLocalSession();
    // }

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : message,
      },
      { status }
    );
  },
  error: (message: string, error?: unknown) => {
    // const status = error instanceof AxiosError ? error.response?.status : 500;
    // if (status === 401) {
    //   deleteLocalSession();
    //   redirect("/login");
    // }

    return {
      success: false,
      message:
        error instanceof AxiosError ? error.response?.data.message : message,
      data: null,
    };
  },
};

export default ResponseHelper;
