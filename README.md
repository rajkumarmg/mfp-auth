## setup instruction
### To start dev env in windows, please follow the below steps on Windows Cmd or Bash CLI

Assuming you already have nodejs installed.
Run the following command one by one.
```
git clone https://github.com/rajkumarmg/mfp-auth.git
cd mfp-auth
npm i
npm start
```
Once started try accessing http://localhost:8082 in Google Chrome.

### To start dev environment in linux, please run,


```
sudo npm start
```

To build for production, please run

```
sudo npm run build
```

To build dev docker imagee please use the following command

```
sudo docker build -f ./Dockerfile.dev -t mfp-auth-image-dev .
```
To build prod docker imagee please use the following command

```
sudo docker build -f ./Dockerfile.prod -t mfp-auth-image-prod .
```

To start a development container, please run

```
sudo docker container run -d -p 8082:8082 --name mfp-auth-dev mfp-auth-image-dev
```

To start a prod container, please run

```
sudo docker container run -d -p 8082:80 --name mfp-auth-prod mfp-auth-image-prod
```

To bash into to the container, please use

```
 sudo docker exec -it mfp-auth-dev bash
```

To stop the dev container, use,

```
sudo docker container stop mfp-auth-dev
```

To remove the dev container, use,

```
sudo docker container rm mfp-auth-dev
```

To remove the dev image, use,

```
sudo docker image rm mfp-auth-image-dev
```