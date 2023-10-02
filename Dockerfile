# ---- Стадия Build ----
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

# Установите зависимости
COPY package*.json ./
RUN npm ci

# Скопируйте проект и постройте его
COPY . .
RUN npm run build

# ---- Стадия Production ----
FROM node:20-alpine
WORKDIR /usr/src/app

# Копируйте откомпилированный код и зависимости с стадии builder
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package*.json ./

# Экспонируйте порт и укажите команду для запуска приложения
EXPOSE 80
CMD ["npm", "start"]
