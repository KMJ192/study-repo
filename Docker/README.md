# Docker

- Container 기반 오픈소스 가상화 플랫폼이다.
- 다양한 프로그램의 실행환경을 Container로 추상화 하여 동일한 interface로 프로그램의 배포, 관리를 해준다.

```
Container
각각 S/W의 실행환경을 독립적으로 실행하도록 하는 OS수준의 격리
```

### Docker 설치

- Window(pro) 환경에서 도커를 사용하기 위해 ubuntu 설치가 필요함
- ubuntu는 Microsoft store에서 설치가 가능하다.
- [Docker 공식 홈페이지](https://www.docker.com/get-started)에서 Docker를 설치한다.
- Docker Desktop을 이용하여 도커를 편하게 다룰 수 있다.[Docker Desktop](https://www.docker.com/products/docker-desktop)
- Docker Deskotop은 2022년 2월 기업(250명 이상) 대상으로는 유료화가 된다고 한다. 개인은 무료로 사용할 수 있다.

### ubuntu에서 Docker 설치

- ubuntu에서 Docker를 사용하려면 Docker 관련 프로그램 설치가 필요하다.

1. 저장소 설정

- HTTPS를 통해 repogitory를 사용할 수 있도록 apt패키지를 업데이트하고 설치한다.

```
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release
```

- Docker의 공식 GPG키를 추가한다.

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

- 안정적인 저장소 설정

```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

2. Docker engine을 설치한다.

```
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
```

3. Docker를 실행한다.

```
service docker start restart
service docker status
```

- 실행하면 _Docker is running_ 문구가 뜬다.

### Docker image 작업

```
docker run hello-world
```

- 위 명령어를 실행하면 Local에서 해당 이미지를 찾아보고 없으면 기본 repogitory(Docker Hub)에서 이미지를 다운로드 한다.
- docker container를 확인하기 위해 아래 명령어를 실행한다.

```
docker container ls --all
```

![Docker containers](DockerContainerResult.png)

### Dockerfile
