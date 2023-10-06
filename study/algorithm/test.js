// function solution(name, yearning, photo) {
//   var answer = [];
//   //     name 배열
//   //     yearning 배열
//   //     photo 이차원 배열
//   //     점수와 이름 맵핑 한 다음 해당 점수를 다시 photo 돌면서 점수 더하고 answer에 push

//   const gradeWithName = name.map((item, i) => {
//     return {
//       name: item,
//       grade: yearning[i],
//     };
//   });

//   photo.forEach((item) => {
//     let grade = 0;
//     item.forEach((name) => {
//       gradeWithName.forEach((item) => {
//         if (item.name === name) {
//           grade += item.grade;
//         }
//       });
//     });
//     answer.push(grade);
//   });

//   console.log(answer);
//   return answer;
// }

// solution(
//   ["soohan", "hi"],
//   [15, 7],
//   [
//     ["sooa", "soohan"],
//     ["Asdfsf", "hi"],
//   ]
// );
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
// 모든 수를 다 한번 씩 더해야하기 때문에 이중 for문을 사용하면 된다. 이중포문의 시간복잡도는 O(n^2)이다.
//  중복을 제거하기위해 includes를 사용하면 된다.
// function solution(numbers) {
//   var answer = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       let sum = numbers[i] + numbers[j];
//       if (!answer.includes(sum)) {
//         answer.push(sum);
//       }
//     }
//   }
//   answer.sort((a, b) => a - b);
//   return answer;
// }

// function solution(s) {
//   var answer = [];
//   const stringMap = new Map();
//   // value index result
//   const splitString = s.split("");
//   splitString.forEach((item, index) => {
//     if (!stringMap.has(item)) {
//       const result = -1;
//       stringMap.set(item, {
//         index,
//         result: -1,
//       });
//       answer.push(result);
//     } else {
//       const result = index - stringMap.get(item).index;
//       stringMap.set(item, {
//         index: index,
//         result: result,
//       });
//       answer.push(result);
//     }
//   });

//   return answer;
// }

// solution("banaba");

// 네가지 발음을 통해 나올수있는 경우의 수를 모두 조합한다.
//  경우의 수배열 안에 입출력 예시 가 있는지 확인한다. 잇으면 count를 플러스 없으면 그대로 둔다.
카카;
const newMap = new Map();
newMap.set("a", 1);
newMap.set("b", 2);

Array.from(newMap.values()).reduce((acc, cur) => {
  return acc + cur;
}, 0);
