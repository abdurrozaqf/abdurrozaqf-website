import { NextResponse } from "next/server";

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

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : message,
      },
      { status: 500 }
    );
  },
  error: (message: string, error?: unknown) => {
    return {
      success: false,
      message: error instanceof Error ? error.message : message,
      data: null,
    };
  },
};

export default ResponseHelper;
