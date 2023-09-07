FROM node:18 as build

# Cria e defina o diretório de trabalho
WORKDIR /app

# Copia o arquivo package.json e package-lock.json
COPY package.json ./

# Instale as dependências
RUN yarn cache clean \ rm node_modules \ yarn install

# Copia o restante dos arquivos do front-end
COPY . .

EXPOSE 8080

# Construa e rode a aplicação Next.js
RUN yarn build
RUN yarn start
