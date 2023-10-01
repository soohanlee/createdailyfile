프로그래머스 옹알이 문제 순열

function solution(babbling) {
var answer = 0;
const pronunciations = ["aya", "ye", "woo", "ma"];
let totalCombinations = [];

// 순열을 통해 모든 경우의 수를 가져옴
for (let i = 1; i <= 4; i++) {
const partialCombinations = getPermutations(pronunciations, i);
totalCombinations = [...totalCombinations, ...partialCombinations];
}

// babbling 배열 내 각 문자열의 출현 횟수를 카운트
const babblingCount = {};
babbling.forEach((item) => {
if (!babblingCount[item]) {
babblingCount[item] = 0;
}
babblingCount[item]++;
});

// 경우의 수를 babbling와 모두 비교 같은 값이 있다면 answer의 카운트를 올림.
for (let i = 0; i < totalCombinations.length; i++) {
if (babblingCount[totalCombinations[i]]) {
answer += babblingCount[totalCombinations[i]];
}
}

return answer;
}

const getPermutations = (arr, selectNum) => {
const results = [];
if (selectNum === 1) return arr;

arr.forEach((fixed, index, origin) => {
const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
const permutations = getPermutations(rest, selectNum - 1);
const attached = permutations.map((permutation) => fixed + permutation);
results.push(...attached);
});

return results;
};
