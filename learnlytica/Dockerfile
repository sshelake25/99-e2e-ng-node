FROM node as build-step
WORKDIR /thbs-app
COPY . .
RUN npm install
# generate bowser compitable
RUN npm run build 

#stage 2
FROM nginx:alpine
COPY --from=build-step /thbs-app/dist/* /usr/share/nginx/html

# docker build
# docker build -t ngexpress .
# docker run -d -p 9090:80 ngexpress
# http://localhost:9090 --
# http://127.0.0.1:9090
