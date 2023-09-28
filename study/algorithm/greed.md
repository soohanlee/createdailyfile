# 개발 일지

## 공부한 것

- **목표**: 알고리즘의 기초 중 하나인 탐욕 알고리즘 (Greedy Algorithm)에 대해 공부
- **이유**: 알고리즘 공부를 시작하기 위해 기초적인 알고리즘을 공부하고 싶어서 선택함.

## 상세 작업 내용

### 1. 탐욕 알고리즘 (Greedy Algorithm)에 대한 정의

- 탐욕 알고리즘은 각 단계에서 지역적으로 최적의 선택을 하는 방식으로 문제를 해결합니다.

### 2. 이해

- 탐욕 알고리즘은 항상 최적의 결과를 도출하는 것은 아니지만, 어느 정도 최적에 근사한 값을 빠르게 도출할 수 있는 장점이 있습니다.

### 3. 예시

- 탐욕 알고리즘을 일상 예시 1 – 매트로이드

## 발생한 이슈 및 해결 방법

### 이슈 1

- **상황**: 하나몬은 오늘도 편의점에서 열심히 아르바이트하고 있습니다.
  손님으로 온 박해커는 과자와 음료를 하나씩 집어 들었고, 물건 가격은 총 4,040원이 나왔습니다.
  박해커는 계산을 하기 위해 5,000원을 내밀며, 거스름돈은 동전의 개수를 최소한으로 하여 거슬러 달라고 하였습니다.

- **해결 방법**: 탐욕 알고리즘의 문제 해결 과정을 적용합니다.

```ts
type CoinType = {
  value: number;
  count: number;
};

function minChangeGreedy(totalMoney: number, totalPrice: number): CoinType[] {
  const coinTypes = [500, 100, 50, 10];
  let change = totalMoney - totalPrice;
  const result: CoinType[] = [];

  for (const coin of coinTypes) {
    const coinCount = Math.floor(change / coin);
    if (coinCount > 0) {
      result.push({ value: coin, count: coinCount });
      change -= coin * coinCount;
    }
  }

  return result;
}

const totalMoney = 5000;
const totalPrice = 4040;

const result = minChangeGreedy(totalMoney, totalPrice);
console.log(result);
```

reduce로도 가능.

위 예시와 탐욕 알고리즘에 대한 설명은 [블로그](https://hanamon.kr/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%83%90%EC%9A%95%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-greedy-algorithm/)에서 가져옴.
