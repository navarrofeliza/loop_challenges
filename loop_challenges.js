// 1. Print odds 1-20
for (var i=1; i<21; i+=2){
    console.log(i);
}

// 2. Decreasing Multiple of 3
for (var num = 0; num < 20; num++) {
    if (num % 3 == 0) {
        console.log(num);
    }
}

// 3. Print the sequence [4, 2.5, 1, -0.5, -2, -3.5]
num = 4;
while(num>-3){
    num-=1.5;
    console.log(num);
}

// 4. Sigma
var a = 0;
var b = 100;
while(a <= b){
    console.log(a, "+", a+=1);
    a++;
    sum = (a/2)*(b/2);
}
console.log(sum);

// 5. Factorial
var sum = 1;
for (var i = 12; i > 0; i--){
  sum *= i;
}
console.log(sum);