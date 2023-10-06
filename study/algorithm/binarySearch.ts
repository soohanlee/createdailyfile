const binarySearch = (arr: number[], target: number): number => {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // 찾지 못했을 경우
};

const arr: number[] = [1, 3, 5, 7, 9, 11, 13, 15];
const target: number = 7;

const result: number = binarySearch(arr, target); // Output: 3
