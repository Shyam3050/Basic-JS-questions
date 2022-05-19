let t1 = 0,
  t2 = 1,
  nt,
  i;
let num = parseInt(prompt("Enter number of fibonaci series"));
console.log(t1);
console.log(t2);
for (i = 2; i < num; i++) {
  nt = t1 + t2;
  console.log(nt);
  t1 = t2;
  t2 = nt;
}
