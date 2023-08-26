This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to use 
pass the ip to as query in the url for exemple https://country-from-ip.vercel.app/api/country?address=77.111.247.44 this will return 
json 
{
  "continent": {
    "code": "EU",
    "name": "Europe"
  },
  "country": {
    "code": "NO",
    "name": "Norway"
  },
  "traits": {
    "ipAddress": "77.111.247.44",
    "network": "77.111.247.0/24",
    "isAnonymous": false,
    "isAnonymousProxy": false,
    "isAnonymousVpn": false,
    "isHostingProvider": false,
    "isLegitimateProxy": false,
    "isPublicProxy": false,
    "isResidentialProxy": false,
    "isSatelliteProvider": false,
    "isTorExitNode": false
  }
}
