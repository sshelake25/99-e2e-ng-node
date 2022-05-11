# Devlopment phase docker file
# base image
FROM node  
# setting working dir so that any command run will 
# in set directory -- /thbs-app -->npm run start
WORKDIR /thbs-app
# first . #Copy all the code of where docker file is #learnlytica folder
# second .#Where to copy inside container in workdir
COPY . .
# Install all npm package and angular cli
RUN npm install -g @angular/cli && npm install
# going to run 4200
EXPOSE 4200
# start dev build -- on any host->
CMD ["ng","serve","--host", "0.0.0.0"]