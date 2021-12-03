# PM2 - Nodejs process manager

- nodejs는 node.js는 Chrome V8 javascript엔진으로 빌드된 브라우저 밖에서 javascript를 실행하도록 해주는 javascript run time 환경이다.

- Event Driven, Non-Blocking I/O 모델을 사용하여 가볍고 성능이 뛰어나서 Server side 개발할 때 Nodejs를 많이 선택한다고 한다.

- **PM2**는 무중단 서비스를 제공해주는 툴이다.

```
만약 어떤 서비스를 배포하여 서비스하고 있다고 하자. 배포된 서비스의 평균 동시접속 유저의 숫자가 5000명이다.

근데 어떠한 이유(처리하지 못한 예외사항)등으로 배포된 프로그램이 종료되었다.
이때 이 서비스를 이용하는 5000명 이상의 유저가 피해를 보게 된다. 정기결제를 해야되는 서비스이거나,
결제 프로세스와 같이 금액이 발생하는 서비스일 경우 이러한 프로그램 중단으로 인한 피해는 더욱 심각지게 될것이다.

PM2는 이러한 문제점을 방지하기 위해, 프로세스를 관찰하고 있다가, 프로세스가 중단될 경우 자동으로 재실행시켜줄 수 있다.
```

### PM2 사용해보기

- pm2설치가 필요하다. 아래 명령어는 global로 pm2를 설치한다

```
npm install -g pm2
```

- 간단한 application이 있다.

```
// app.js
const http = require("http");
let i = 0;
let app = http.createServer((req, res) => {
  console.log(i);
  res.end(String(i));
  i = i + 1;
});
app.listen(3000);
```

- pm2를 이용하여 app.js를 실행하는 명령어다,

```
pm2 start app.js
```

- app.js는 port 3000을 사용하는 application인데 강제로 application을 죽이더라도 pm2가 다시 application을 실행시킨다.

- pm2로 실행한 application을 보고 싶다면 아래 명령어를 실행한다.

```
pm2 list
```

- pm2 start로 실행한 application은 stop, restart명령어를 사용할 수 있다.

```
pm2 stop <id>
pm2 restart <id>
```

- hot reload를 할 수 있다.

```
pm2 app.js --watch
```

- log를 확인할수 있다.

```
pm2 log
```

- development 모드로 실행할 수 있다.

```
pm2-dev app.js
```

- pm2에서는 device를 재부팅 하더라도 실행할 수 있도록 도옴을 준다.

  1. pm2를 이용하여 application을 실행

  ```
  pm2 start app.js
  ```

  2. pm2 명령어로 현재 상태를 저장한다.

  ```
  pm2 save
  ```

  3. pm2 명령어로 os가 실행되었을 때 동작해야되는 프로세스를 실행시켜주는(스케줄링을 걸어주는) 스크립트를 생성한다.

  ```
  pm2 startup
  ```

  - 위 명령어를 실행하면 스크립트를 출력하는데 그 명령어를 복사해서 실행하면 스케줄링이 걸린다. (window에서는 지원하지 않음)

- pm2로 Multi thread를 관리할 수 있다.

```
Node.js는 Event-loop라는 single thread를 사용하고, Node.js Application은 CPU의 single core에서만 실행되므로, multi core 시스템은 사용할 수 없다.
이러한 문제를 해결하기위해 Cluster 모듈을 통해 single 프로세스를 multi process(worker)로 늘릴 수 있는 방법을 제공한다.
그렇다면 클러스터 모듈을 사용하여 마스터 프로세스에서 CPU 코어 수 만큼 워커 프로세스를 생성해서 모든 코어를 사용하게끔 개발할 수 있다.

 Application 실행 시 처음에는 마스터 프로세스만 생성되는데,
 이때 CPU 개수만큼 워커 프로세스를 생성하고 마스터 프로세스와 워커 프로세스가 각각 수행해야 할 일들을 정리하여
 구현하면 되는데 이는 매우 번거로운 작업이지만 PM2를 이용하여 간단하게 실행할 수 있다.
```

- pm2의 간단한 명령어로 thread의 숫자를 조절할 수 있다. 아래 명령어는 cpu의 모든 thread를 사용하는 명령어이다. (사용하는 thread를 조절하려면 *max*대신 숫자를 넣어주면 된다.)

```
pm2 start app.js -i max
```

### 파일을 이용하여 다양한 pm2 옵션 사용하기

- 위에서 사용한 명령어는 fork(기본)모드로 application을 실행한다.

- pm2의 옵션을 설정한 파일으로 pm2실행을 할 수 있다. 파일명은 ecosystem.config.js로 한다.

```
module.exports = {
  apps: [
    {
      name: "app",
      script: "./app.js",
      instance: 0,
      exec_mode: "cluster",
    },
  ],
};
```

- ecosystem.config.js로 pm2를 실행하려면 아래의 명령어를 실행한다.

```
pm2 start ecosystem.config.js
```

- 설정파일 옵션들은 [공식문서](https://pm2.keymetrics.io/docs/usage/application-declaration/)에서 확인이 가능하다.
