const generateRandomArray = (n: number): number[] | null => {
  if (isInteger(n) && n <= 150) {
    const arrayList: number[] = [];
    for (let i = 0; i < 2 * n + 1; i++) {
      const newRandomNumber = Math.floor(Math.random() * 201) - 100;
      arrayList.push(newRandomNumber);
    }
    return arrayList;
  } else {
    return null;
  }
};

const isInteger = (n: number): boolean => {
  return Number.isInteger(n);
};

//  위코드에서 중복을 제거 하는 코드가 추가되면 아래와 같다.

const generateUniqueRandomArray = (n: number): number[] | null => {
  if (isInteger(n) && n <= 150) {
    const numElements = 2 * n + 1;
    if (numElements > 201) {
      return null;
    } // Unique numbers in [-100, 100] can only be 201 elements

    const numberSet = new Set<number>();
    while (numberSet.size < numElements) {
      const newRandomNumber = Math.floor(Math.random() * 201) - 100;
      numberSet.add(newRandomNumber);
    }

    return Array.from(numberSet);
  } else {
    return null;
  }
};
