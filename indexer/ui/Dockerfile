FROM node:18.17.1-bullseye-slim

WORKDIR /app

RUN echo {} > package.json && \
  npm install prisma

COPY indexer/ui/prisma.sh prisma.sh
COPY indexer/ui/schema.prisma schema.prisma

RUN npx prisma generate --schema schema.prisma

CMD ["npx", "prisma", "studio", "--port", "5555", "--hostname", "0.0.0.0", "--schema", "schema.prisma" ]
