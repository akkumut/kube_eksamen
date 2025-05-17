# Base image
FROM node:18

# Sæt working directory
WORKDIR /app

# Kopiér package.json og installér afhængigheder
COPY package*.json ./
RUN npm install

# Kopiér resten af kildekoden
COPY . .

# Eksponér porten backend kører på
EXPOSE 3000

# Start backend
CMD ["node", "server.js"]
