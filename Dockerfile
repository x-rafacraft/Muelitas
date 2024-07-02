# Usar una imagen base oficial de Node.js
FROM node:20 AS build

ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Crear un directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm ci

# Copiar el resto de la aplicación
COPY . ./

RUN npm run build

RUN ls -la

# Comando para iniciar la aplicación
FROM caddy

WORKDIR /app

COPY --from=build /app/dist/odontologia/browser ./dist

COPY Caddyfile ./

CMD exec caddy run --config Caddyfile --adapter caddyfile 2>&1
