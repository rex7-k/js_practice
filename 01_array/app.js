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