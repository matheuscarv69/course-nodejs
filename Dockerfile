# Criando img com base no node em uma distribuição da alpine
FROM node:alpine

# Cria um diretório no caminho abaixo
WORKDIR /usr/src/app

# Copia * os arquivos package .json para o WORKDIR acima
COPY package*.json ./

# Executa o comando abaixo para instalar as dependências
RUN npm install 

# Copia tudo do diretório dist para a raiz 
COPY ./dist .

# Expõe a porta 3050
EXPOSE 3050

# Executa o comando npm start, para que possa ser executado o projeto
# Esse comando é o mesmo encontrado no package.json
CMD ["npm", "start"]