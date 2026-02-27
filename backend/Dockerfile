# Stage 1: Build the Node.js app
FROM node:14 AS node-build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
# Stage 2: Build the Python environment
FROM python:3.9 AS python-build
WORKDIR /usr/src/app/python

COPY ./python ./  
RUN pip install pandas matplotlib numpy  

# Stage 3: Final stage
FROM node:14

# Install Python and pip
RUN apt-get update && apt-get install -y python3 python3-pip

WORKDIR /usr/src/app

COPY --from=node-build /usr/src/app . 
COPY --from=python-build /usr/src/app/python ./python  

# Install Python dependencies in the final image
RUN pip3 install pandas matplotlib numpy || true

EXPOSE 3000

CMD ["node", "server.js"]
