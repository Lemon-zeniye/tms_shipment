import { baseQuery } from "../base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const sampleApi = createApi({
  reducerPath: "sampleApi",
  refetchOnFocus: true,
  baseQuery: baseQuery("https://nominatim.openstreetmap.org"),
  endpoints: (builder) => ({
    getLocation: builder.query({
      query: (searchQuery) => ({
        url: "/search",
        params: {
          q: searchQuery, // 'q' is the query parameter used by Nominatim for searches
          format: "json", // Ensure results are returned in JSON format
        },
      }),
    }),
  }),
});

export const { useGetLocationQuery, useLazyGetLocationQuery } = sampleApi;
