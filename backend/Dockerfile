FROM node:16 as ts-compiler
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:16 as ts-stripped
WORKDIR /app
COPY --from=ts-compiler /app/package*.json ./
COPY --from=ts-compiler /app/dist ./
RUN npm install --only=production

FROM gcr.io/distroless/nodejs:16 as production
WORKDIR /app
COPY --from=ts-stripped /app ./
USER 1000
CMD ["server.js"]