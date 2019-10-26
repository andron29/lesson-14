let x = prompt("x?",'');
x = parseInt(x);

let n = prompt("n?",'');
n = parseInt(n);

result=Math.pow(x, n);

document.querySelector("div > h2").innerText ="result";
alert(result);