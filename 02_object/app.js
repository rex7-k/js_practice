const person = { firstName: "Taro", lastName: "Ymada" };
console.log(person);
const cat = {
    name: "Tama",
    age: 2,
    colors: ["orange", "white"],
    isHungry: true
};
console.log(cat);
// オブジェクトのデータのアクセス方法
console.log(person["firstName"]);
console.log(person.firstName);
// キーはstringに変換される
const midterms = { taro: 96, jiro: 78 };
// 更新
midterms.jiro = 79;
console.log(midterms);
// 追加
midterms.saburo = "80";
console.log(midterms);
// 組み合わせ
const comments = [
    { username: "yamada", text: "aaa", votes: 9 },
    { username: "tanaka", text: "iii", votes: 5 }
];
// iiiにアクセスするなら
console.log(comments[1].text)