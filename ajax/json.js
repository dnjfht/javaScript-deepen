const obj = {
  name: "승민",
  age: 26,
  alive: true,
  hobby: ["listening music", "sleeping"],
};

const json = JSON.stringify(obj);
console.log(typeof json, json);
// string {"name":"승민","age":26,"alive":true,"hobby":["listening music","sleeping"]}

// JSON.stringify의 인수들
// value: 문자열화할 객체
// replacer: 객체의 모든 속성에 대해 호출되는 함수이거나 최종 출력에 존재해야 하는 키가 포함된 배열일 수 있다.
// space: 최종 출력의 공백
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);
// string {
//   "name": "승민",
//   "age": 26,
//   "alive": true,
//   "hobby": [
//     "listening music",
//     "sleeping"
//   ]
// }

// replacer 콜백함수
// replacer에서 콜백 함수를 대체 함수로 사용하면 JSON.stringify 속성을 반복하고 최종 출력을 수정할 수 있다.
const replaceCallback = (key, value) => {
  if (key === "name") return `Ms. ${value}`;
  if (key === "age") return `I'm ${value} years old.`;
  if (key === "alive") return `I'm ${value ? "alive" : "dead"}...!`;
  if (key === "hobby") {
    let comment = "My hobby is";
    for (let i = 0; i < value.length; i++) {
      comment += ` ${value[i]}`;
      if (i !== value.length - 1) comment += ",";
    }
    return comment;
  }

  return value;
};

let replaceJson = JSON.stringify(obj, replaceCallback, 2);
console.log(typeof replaceJson, replaceJson);
// string {
//   "name": "Ms. 승민",
//   "age": "I'm 26 years old.",
//   "alive": "I'm alive...!",
//   "hobby": "My hobby is listening music, sleeping"
// }

// replacer 배열
// 배열을 치환자로 사용하면 속성을 수정할 수 없지만, 최종 출력에 포함될 속성을 지정할 수 있다.
const replacerArr = ["name", "age"];
replaceJson = JSON.stringify(obj, replacerArr, 2);
console.log(typeof replaceJson, replaceJson);
// string {
//   "name": "승민",
//   "age": 26
// }

const todos = [
  { id: 1, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "JAVASCRIPT", completed: false },
];

// JSON.stringify 메서드는 객체 뿐만 아니라 배열도 JSON 포맷의 문자열로 변환한다.
const jsonArr = JSON.stringify(todos, null, 2);
console.log(typeof jsonArr, jsonArr);
// string [
//   {
//     "id": 1,
//     "content": "HTML",
//     "completed": false
//   },
//   {
//     "id": 2,
//     "content": "CSS",
//     "completed": true
//   },
//   {
//     "id": 3,
//     "content": "JAVASCRIPT",
//     "completed": false
//   }
// ]

const parsedJson = JSON.parse(replaceJson);
console.log(typeof parsedJson, parsedJson);
// object { name: '승민', age: 26 }
