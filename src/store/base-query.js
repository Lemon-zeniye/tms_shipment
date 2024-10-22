import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = (baseUrl = "/") => {
  return async (args, api, extraOptions) => {
    const fetchBase = fetchBaseQuery({
      baseUrl: baseUrl,
      prepareHeaders: async (headers) => {
        // const token = getCookie("token");
        // if (token) {
        //   headers.set("authorization", `Bearer ${token}`);
        // }
        return headers;
      },
    });

    return fetchBase(args, api, extraOptions);
  };
};
