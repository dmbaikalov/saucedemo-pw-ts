#Базовий образ
FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY tests /app/tests/
COPY package.json /app/
RUN npm ci
COPY . .

# Java
RUN apt-get update && apt-get install -y openjdk-11-jdk
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64

RUN npm cache clean --force 
RUN npm install -g playwright
RUN npm init -y
RUN apt-get update && apt-get install -y wget gnupg ca-certificates && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt install -y nodejs

CMD ["npx", "playwright", "test"]