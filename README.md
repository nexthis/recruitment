# Install

App is [turbo monorepo](https://github.com/vercel/turbo) required: Docker, nodeJs (~18), NPM

- `cd <repository root>/apps/app`
- then `npm install`
- then `cp .env.default .env.local`
- `cd <repository root>/apps/backend`
- then `npm install`
- `cd <repository root>`
- run `npm run dev`

When running your docker images for the first time, it may take a while to download the necessary files. ☕

**urls**: \
**vue app**: http://localhost:5173/ \
**backend**: http://localhost:3000/ \
**Swagger UI**: http://localhost:3000/dev/api-docs/ \

# Clarification

Some issues that need clarification

- eslint and prettier -> I have only done minimal configuration and I am not paying attention to refining these modules because the project is only for demonstration purposes.
- pagination -> In a normal situation, I would add a pagination system, but then almost the entire filtering would be done on the backend side rather than the frontend side
