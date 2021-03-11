FROM node:current-alpine AS base
ENV NODE_ENV=production
WORKDIR /base
COPY . .
RUN npm install
RUN npm run build
RUN ls /base


FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=base /base/package*.json ./
COPY --from=base /base/.next ./.next
COPY --from=base /base/public ./public
RUN echo "RUN" && ls /app
RUN npm install next
EXPOSE 3000
CMD npm run start