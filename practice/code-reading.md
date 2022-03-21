# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
Ans: because line 4 is declared inside the block of code inside the function while line 7 logs the global variable that come from line 1

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
Ans: the value of x is declared globally as 5. therefore the function f1 has access to it. when we console log it from inside the function, it logs the value 5. Whereas, y is declared inside the function. so, it is not accessible from outside the function. Thus, line 34 will log undefined.



## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
Ans: the first output will be from the line 55. It will log 9. Because it cant be changed by the function f1(val) since the function can only change the value of the agruement given to it. 
The second output from line 64 will return {x : 10}
The third output from line 65 will log {x: 9} because that is the global value of the object declared in line 57
