function generateRandomArray(n: number): number[] {
  const arr: number[] = [];

  // 단 한 번만 등장하는 숫자를 추가합니다.
  const uniqueNumber = Math.floor(Math.random() * 201) - 100;
  arr.push(uniqueNumber);

  // 배열을 2n으로 채웁니다.
  const generatedNumbers = new Set<number>();
  while (generatedNumbers.size < n) {
    const randomNum = Math.floor(Math.random() * 201) - 100;
    if (randomNum !== uniqueNumber) {
      generatedNumbers.add(randomNum);
    }
  }

  generatedNumbers.forEach((num) => {
    arr.push(num, num);
  });

  // 배열의 원소들의 위치를 랜덤하게 바꿉니다.
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

// 단 한 번 등장한 원소를 찾는 방법
//  비트 연산자를 이용한다.
// 밑의 로직은 xor을 이용하여 중복 값을 찾고 추가적인 메모리를 사용하지 않기에 o(1)이 된다.
function findUniqueNumber(arr: number[]): number {
  let result = 0;
  for (const num of arr) {
    result ^= num;
  }
  return result;
}
