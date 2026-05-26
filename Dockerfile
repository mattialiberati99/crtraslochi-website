# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Enable corepack for pnpm
RUN corepack enable

# Copy manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install all dependencies (dev included, needed for build)
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build the SvelteKit application (adapter-node)
RUN pnpm build

# Production stage
FROM node:20-alpine

WORKDIR /app

RUN corepack enable

# dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Copy manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy built application
COPY --from=builder /app/build ./build

# Non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "const port = process.env.PORT || 3000; require('http').get('http://localhost:' + port, (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "build/index.js"]
