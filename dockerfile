FROM ubuntu
RUN apt update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_22.x | bash -
RUN apt upgrade -y
RUN apt install -y nodejs

COPY package.json ./authentication/package.json
COPY package-lock.json ./authentication/package-lock.json
COPY src ./authentication/src
COPY tsconfig.json ./authentication/tsconfig.json
COPY next.config.ts ./authentication/next.config.ts
COPY next-env.d.ts ./authentication/next-env.d.ts
COPY eslint.config.mjs ./authentication/eslint.config.mjs
COPY .next ./authentication/.next

WORKDIR /authentication
RUN npm install

ENTRYPOINT [ "node" ]