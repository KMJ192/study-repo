# Jenkins

- 코드를 배포하기전에 코드에 문제가 있는지 확인을 해봐야되고, 실제로 배포가 된 후 문제가 생길 수 있다.
- 이를 방지하기 위해 문제를 확인해야 되는데, application의 모든 부분을 직접 테스트를 하기에는 너무나 비용이 많이 드는 작업이다.
- **Jenkins**는 이러한 테스트를 자동화하여 CI/CD를 제공하는 툴이다.

```
CI (Continuous Integration, 지속적 통합)
- 수정한 코드를 지속적으로 통합, 테스트

CD (Continuous Delivery, 지속적 배포)
- 개발, 통합, 배포, 릴리즈, 테스트를 자동화
```

- git repository에 배포된 application의 코드가 있다고 하자.
- Jenkins를 사용한다면 application의 git에 push만 하더라도 자동으로 빌드가 되고 수정된 내용이 업데이트 된다.
