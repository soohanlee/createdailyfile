재귀 함수 (Recursive Function)
재귀 함수는 함수 내부에서 자기 자신을 호출하는 함수입니다. 재귀 함수는 일반적으로 문제를 더 작은 하위 문제로 분해하여 해결하는 방식으로 동작합니다. 재귀 함수를 작성할 때는 반드시 종료 조건을 명시해야 합니다. 그렇지 않으면 함수는 무한히 자기 자신을 호출하게 되어 스택 오버플로우가 발생할 수 있습니다.

기본 구조

function recursiveFunction(param: any): any {
// 종료 조건
if (someCondition) {
return someValue;
}

// 함수 로직
// ...

// 재귀 호출
return recursiveFunction(newParam);
}
예시: 팩토리얼 계산

```ts
    function factorial(n: number): number {
if (n === 0) {
return 1;
}
return n \* factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

예시: 피보나치 수열

```ts
function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5
```

예시: 배열의 합계

```ts
function arraySum(arr: number[], index: number = 0): number {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + arraySum(arr, index + 1);
}
console.log(arraySum([1, 2, 3, 4])); // Output: 10
```

장점과 단점
장점
코드가 간결하고 이해하기 쉬울 수 있습니다.
복잡한 알고리즘을 단순하게 표현할 수 있습니다.
단점
메모리 사용량이 늘어날 수 있습니다 (스택 메모리 사용).
종료 조건을 잘못 설정하면 무한 루프에 빠질 수 있습니다.
일반적으로 반복문을 사용한 경우보다 실행 속도가 느릴 수 있습니다.
최적화 기법
메모이제이션 (Memoization): 이미 계산한 값을 캐시에 저장하여 중복 계산을 피합니다.
꼬리 재귀 (Tail Recursion): 컴파일러나 런타임이 최적화를 지원하는 경우, 꼬리 재귀를 사용하여 스택 오버플로우를 방지할 수 있습니다.
재귀 함수는 알고리즘 구현에 있어 매우 유용한 도구입니다. 하지만 사용에 있어서 주의가 필요하며, 특히 종료 조건과 성능 최적화에 신경을 써야 합니다.
