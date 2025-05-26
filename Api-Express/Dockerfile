FROM node:alpine AS builder
 
WORKDIR /app
 
COPY . .
 
#RUN npm i
 
RUN npm install 

RUN npx tsc
 
FROM node:alpine AS produccion
 
WORKDIR /app
 
COPY --from=builder /app/package*.json ./
COPY --from=builder . .
RUN npm install --omit=dev
#ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
 
EXPOSE 3000
 
CMD ["node", "dist/main.js"]
