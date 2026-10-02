// console.log("初めてのJS!!!!");
// let total = 1 + 3;
// let random = Math.random()
// if (random < 0.5) {
//     console.log("0.5より小さい")
// }
// else if (random >= 0.5) {
//     console.log("0.5以上")
// }
// console.log(random)
// let day = prompt("何曜日？")
// if (day === "Monday") {
//     console.log("It's fucking day!!")
// }
// else {
//     console.log("ああああああああ")
// }

// const password = prompt("パスワードを入力してください")
// if (password.length >= 6) {
//     if (password.indexOf(" ") === -1) {
//         console.log("nice")
//     } else {
//         console.log("空白消して")
//     }
// } else {
//     console.log("短すぎます")
// }
// // かつ &&
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("素晴らしいパスワード");
// } else{
//     console.log("passwordは無効です")
// }
// orについて : 片方trueならtrue 

const age = 39;
if ((0 <= age && age < 5) || age >= 65) {
    console.log("無料");
} else if (age < 10 && 5 <= age) {
    console.log("子供料金");
} else if (age >= 10 && age < 65) {
    console.log("大人料金");
} else{
    console.log("無効な年齢");
}
// NOT !

