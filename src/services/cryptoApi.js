import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": "f2ac778b22msh96f235ce38eaefep1441a9jsn1bb402bf0c72",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (referenceCurrencyUuid) => ({
        url: "/coins",
        params: {
          referenceCurrencyUuid,
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "50",
          offset: "0",
        },
      }),
    }),
  }),
});

export const { useGetCoinsQuery } = cryptoApi;
export default cryptoApi;
