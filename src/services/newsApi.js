import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-BingApis-SDK", "true");
      headers.set(
        "X-RapidAPI-Key",
        "f2ac778b22msh96f235ce38eaefep1441a9jsn1bb402bf0c72"
      );
      headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "/news",
      params: {
        safeSearch: "Off",
        textFormat: "Raw",
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
