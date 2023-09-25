# 개발 일지

## 공부한 것

### 목표

- 기본 정렬 알고리즘을 공부

### 이유

- 프로젝트나 문제 해결 과정에서 정렬이 필수적으로 필요하기 때문에, 여러 가지 정렬 알고리즘에 대해 학습하고 정리합니다.

## 상세 작업 내용

### 1. 정렬 알고리즘에 대한 정의

- 정렬 알고리즘은 주어진 데이터를 특정 순서대로 나열하는 알고리즘이다. 일반적으로 오름차순이나 내림차순으로 데이터를 정렬한다.

### 2. 종류 및 특성

- **버블 정렬(Bubble Sort)**: 가장 간단하지만, 가장 비효율적인 정렬 알고리즘
- **삽입 정렬(Insertion Sort)**: 데이터가 거의 정렬되어 있을 때 효율적
- **선택 정렬(Selection Sort)**: 매번 가장 작은(또는 큰) 원소를 선택해 위치를 교환
- **퀵 정렬(Quick Sort)**: 피벗을 기준으로 데이터를 분할, 대규모 데이터에 효율적
- **병합 정렬(Merge Sort)**: 분할 정복 방법을 이용, 안정적인 정렬을 보장

# Sorting Algorithms: In-Place and Not In-Place

## In-Place Sorting Algorithms

"In-place" sorting algorithms modify the input array itself to produce a sorted array. Consequently, they use a constant amount of additional memory, making them space-efficient.

### Bubble Sort

- **Time Complexity**: \(O(n^2)\) (Worst, Average), \(O(n)\) (Best)
- **Space Complexity**: \(O(1)\) (In-Place)

### Insertion Sort

- **Time Complexity**: \(O(n^2)\) (Worst, Average), \(O(n)\) (Best)
- **Space Complexity**: \(O(1)\) (In-Place)

### Selection Sort

- **Time Complexity**: \(O(n^2)\) (Worst, Average, Best)
- **Space Complexity**: \(O(1)\) (In-Place)

### Quick Sort

- **Time Complexity**: \(O(n^2)\) (Worst), \(O(n \log n)\) (Average, Best)
- **Space Complexity**: \(O(\log n)\) (However, most implementations are In-Place)

## Not In-Place Sorting Algorithm

### Merge Sort

- **Time Complexity**: \(O(n \log n)\) (Worst, Average, Best)
- **Space Complexity**: \(O(n)\) (Not In-Place)

## Summary

- **In-Place Sorting Algorithms**: Bubble, Insertion, Selection, and Quick sorts are in-place sorting algorithms.
- **Not In-Place Sorting Algorithm**: Merge sort uses additional memory, making it a not in-place sorting algorithm.

In summary, algorithms with a space complexity of \(O(1)\) are highly space-efficient in-place sorting algorithms. Merge sort ensures stable sorting but has a space complexity of \(O(n)\), making it a not in-place sorting algorithm.

# Sorting Algorithms in TypeScript

## Table of Contents

1. [Bubble Sort](#bubble-sort)
2. [Insertion Sort](#insertion-sort)
3. [Selection Sort](#selection-sort)
4. [Quick Sort](#quick-sort)
5. [Merge Sort](#merge-sort)

---

## 1. Bubble Sort

### 설명

인접한 두 개의 원소를 검사하여 정렬하는 방법입니다. 연속적인 비교와 교환으로 정렬이 이루어집니다.

### TypeScript 코드 예시

```typescript
function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

---

## 2. Insertion Sort

### 설명

하나의 원소를 적절한 위치에 삽입하는 과정을 반복하여 정렬을 완성합니다.

### TypeScript 코드 예시

```typescript
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
```

---

## 3. Selection Sort

### 설명

주어진 리스트 중에 최소값을 찾아 맨 앞의 값과 교환하는 방식으로 진행합니다.

### TypeScript 코드 예시

```typescript
function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}
```

---

## 4. Quick Sort

### 설명

피벗을 선택하여 피벗보다 작은 원소와 큰 원소로 분할한 뒤, 각 부분 배열을 정렬합니다.

### TypeScript 코드 예시

```typescript
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

---

## 5. Merge Sort

### 설명

배열을 두 부분으로 나누고, 각각을 정렬한 후 병합하는 방식을 사용합니다.

### TypeScript 코드 예시

```typescript
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}
```
