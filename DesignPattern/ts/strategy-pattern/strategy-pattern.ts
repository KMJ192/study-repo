interface QuackBehaviorInterface {
  quack: () => void;
}

class QuackBehavior implements QuackBehaviorInterface {
  public quack = () => {
    console.log('Quack');
  };
}

class MuteQuack implements QuackBehaviorInterface {
  public quack = () => {
    console.log('<< 조용 >>');
  };
}

class SqueakQuack implements QuackBehaviorInterface {
  public quack = () => {
    console.log('삑');
  };
}

interface FlyBehaviorInterface {
  fly: () => void;
}

class FlyBehavior {
  public fly = () => {
    console.log('Fly');
  };
}

interface DuckInterface {
  performQuack: () => void;
  performFly: () => void;
  swim: () => void;
}

class Duck implements DuckInterface {
  quackBehavior: QuackBehavior;
  flyBehavior: FlyBehavior;

  constructor() {
    this.quackBehavior = new QuackBehavior();

    this.flyBehavior = new FlyBehavior();
  }

  public setFlyBehavior = (fb: FlyBehavior) => {
    this.flyBehavior = fb;
  };

  public setQuackBehavior = (qb: QuackBehavior) => {
    this.quackBehavior = qb;
  };

  public performQuack = () => {
    this.quackBehavior.quack();
  };

  public performFly = () => {
    this.flyBehavior.fly();
  };

  public swim = () => {
    // ...
  };
}

class MallardDuck extends Duck {}

const md = new MallardDuck();
md.performQuack();
md.performFly();
md.setFlyBehavior(new FlyBehavior());
md.performFly();
