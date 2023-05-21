# Base
FROM node:18-alpine AS base

RUN apk add --no-cache libc6-compat
RUN npm i -g npm@latest foreman@latest

WORKDIR /app

# Build arguments
ARG GIT_REV


# Build
FROM base AS builder

# Environment variables
ENV GIT_REV ${GIT_REV}

COPY . .

RUN npm ci
RUN npm run build

# Run
FROM base as runner

# Environment variables
ENV PORT 5000
ENV NODE_ENV production
ENV PATH $PATH:/app/node_modules/.bin

COPY --from=builder /app/node_modules/ /app/node_modules/
COPY --from=builder /app/ /app/

EXPOSE 5000

ENTRYPOINT ["nf", "start"]

CMD ["--help"]