let movieLine = ["yamada", "tanaka"];
// 末尾に追加
movieLine[2] = "suzuki";
movieLine.push("sato");
movieLine.push("kondo", "fujiwara");
console.log(movieLine);
// 末尾を取り除く (返す)
movieLine.pop();
console.log(movieLine);
// 先頭を取り出す (返す)
movieLine.shift();
console.log(movieLine);
// 先頭に追加
movieLine.unshift("kato");
console.log(movieLine);
let cats = ["tama", "tora"];
let dogs = ["pochi", "hachi"];
console.log(cats.concat(dogs));
console.log(cats.includes("tama"));
let pets = cats.concat(dogs);
console.log(pets.indexOf("tama"));
// reverseは元も変わる
console.log(pets.reverse());
// sliceメソッドは切り取る　もとはそのまま
let colors = ["red", "orange", "yellow", "green", "blue", "white"];
console.log(colors.slice(1));
console.log(colors.slice(2, 5));
// spliceメソッドは元も変わる
console.log(colors.splice(5, 1));
// 追加もできる　複数も可能
colors.splice(1, 0, "red-orange");
// 配列の比較は同じ配列を参照しているか