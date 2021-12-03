# Mongodb를 Docker를 이용하여 실행하는 방법

1. Download MongoDB Docker image

```
docker pull mongo
```

2. Check Docker image

```
docker images
```

- Docker images all info

```
docker ps -a -s
```

3. Create Mongo container and run Docker

- this exam, set port 27017

```
docker run --name <container name> -v ~/data:/data/db -d -p 27017:27017 mongo
```

4. Check Docker container list

```
docker ps -a
```

5. start, stop, restart the MongoDB Docker container

```
// start
docker start <container name>

// stop
docker stop <container name>

// restart
docker restart <container name>
```

6. Delete docker image

```
docker rmi <image id>
```

7. Access to MongoDB Docker container

```
docker exec -it algo-project-mongodb bash
```
