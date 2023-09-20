# Design Pattern

프로그램을 설계할 때 자주 발생하는 문제를 해결하기 위한 하나의 규약이다.

## 1. 싱글톤 패턴

싱글톤 패턴이란 하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴이다.

클래스 하나에 단 하나의 인스턴스만을 생성하여 로직을 만든다.

데이터 베이스 연결 모듈에 많이 사용된다.

**장점**

하나의 인스턴스만을 생성하기 때문에 생성시 드는 비용이 적다.

**단점**

인스턴스가 단 하나이기 때문에 의존성이 높아진다.

```js
class Singleton {
    constructor(){
        if(!Singleton.instance){
            Singleton.instace = this
        }
        return Singleton.instance
    }

    getInstance() {
        return this.instance
    }
}

const a = new Singleton()
const b = new Singleton()

console.log(a === b) // true
```