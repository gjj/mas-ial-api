# MAS Investor Alert List API

[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://circleci.com/gjj/mas-ial-api)

The [MAS Investor Alert List](https://www.mas.gov.sg/investor-alert-list) is a list of unregulated persons (in Singapore and overseas) who, based on information received by MAS, may have been wrongly perceived as being licensed or authorised by MAS.

While the MAS Investor Alert List is available for the public to search, the APIs on the page itself are not meant for the public and hence, the original APIs do not have CORS enabled.

This Node.js app provides CORS-enabled endpoints that proxies through the original MAS IAL APIs. However, it's not supported by the MAS and no SLA is provided. More of a personal project for me to learn Serverless and configuring ESLint, etc.

## How it works

You can just call the API endpoint as if you are calling the actual MAS IAL API. In other words, the parameters should be the same. CORS is enabled via the AWS API Gateway.

## Endpoints

```
/ialsearch?json.nl=map&wt=json&sort=date_dt%20desc&q=*:*&rows=10&start=0
```

- `json.nl` must be set to `map`
- `wt` should be set to `json`
- `sort` 
- `q` is the search term, wrap the search term in `*` for wildcard search
- `rows`
- `start` is the offset

```
/ialsuggest
```

## Stack

- Serverless
- Seed.run
