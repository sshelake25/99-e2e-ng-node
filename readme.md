
Deployment steps.

1. Create EC2 machine open port (9090).

2. Install docker git docker-compose on it
    sudo su 
    apt install docker.io
    apt install git
    apt install docker-compose

3. Will build docker image for both front end and backend app

4. Will push both images to docker hub
   
5. Created images we will use in docker-compose file
   image: --sshelake25/th_mean_mern:angular
   
6. On EC2 machine will run docker-compose up
   root@ip-172-31-2-102:/home/ubuntu/99-e2e-ng-node# docker-compose up