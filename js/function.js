function f1(x,y)
{
    console.log(Math.pow(x,2) + Math.pow(y,2))
}
console.log(`ƒ(x,y) = x*2 + y*2`);
f1(2,3)

//_____________________________//

function f2(x)
{
    console.log(Math.pow(x,Math.E))
}
console.log(`ƒ(x) = x*e`);
f2(2)

//_____________________________//

function f3(a,b)
{
    console.log(Math.pow(a,2) - Math.pow(b,2))
}
console.log(`ƒ(a,b) = a*2 - b*2`);
f3(2,3)

//_____________________________//

function f4(a,b,c)
{
    console.log(Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2))
}
console.log(`ƒ(a,b,c) = a*2 + b*2 + c*2`);
f4(2,3,4)

//_____________________________//

function f5(y)
{
    console.log(Math.pow(y,2) - (2 * y) + y)
}
console.log(`ƒ(y) = y*2 - (2 * y) + y`);
f5(2)

//_____________________________//

function f6(a,b)
{
    console.log((a - b) * (Math.pow(a,2) + Math.pow(b,2)) - a)
}
console.log(`ƒ(a,b) = (a - b)(a*2 + b*2) - a`);
f6(2,3)

//_____________________________//

function f7(a,b)
{
    console.log(2 * (a + b))
}
console.log(`ƒ(a,b) = 2 * (a + b)`);
f7(2,3)

//_____________________________//

function f8(a,b)
{
    console.log(Math.pow(a + b,2))
}
console.log(`ƒ(a,b) = (a + b)*2`);
f8(2,3)

//_____________________________//

function f9(a,b)
{
    console.log(Math.pow(a,2) - Math.pow(b,2))
}
console.log(`ƒ(a,b) = a*2 - b*2`);
f9(2,3)

//_____________________________//

function f10(a,b)
{
    console.log(a * b)
}
console.log(`ƒ(a,b) = a * b`);
f10(2,3)

//_____________________________//

function f11(a,b)
{
    console.log(3 * Math.pow(a + b,2))
}
console.log(`ƒ(a,b) = 3 * (a + b)*2`);
f11(2,3)

//_____________________________//

function f12(x,y)
{
    console.log(3 * Math.pow(x,3) - 2 * Math.pow(y,3))
}
console.log(`ƒ(x,y) = 3 * x*3 - 2 * y*3`);
f12(2,3)

//_____________________________//

function f13(a,b)
{
    console.log(a / b)
}
console.log(`ƒ(a,b) = a / b`);
f13(2,3)

//_____________________________//

function f14(y)
{
    console.log(Math.pow(y,3) - (3 * Math.pow(y,2)) + 8)
}
console.log(`ƒ(y) = y*3 - 3 + y*2 + 8`);
f14(2)

//_____________________________//

function f15(x,y)
{
    console.log(Math.pow(1/x,2) - Math.pow(1/y,2))
}
console.log(`ƒ(x,y) = (1/x)*2 - (1/y)*2`);
f15(2,3)

//_____________________________//

function f16(x,y)
{
    console.log(Math.sqrt(Math.pow(x,2) + Math.pow(y,2)))
}
console.log(`ƒ(x,y) = √x*2 + y*2`);
f16(2,3)

//_____________________________//

function factorial(x)
{
    let sum = 1
    for (let i = 1; i <= x; i++) {
        sum = sum * i
    }
    console.log(sum)
}
console.log(`ƒ(x) = x!`);
factorial(5)

//_____________________________//
console.log("_____________________________")

function myFunction(p1 , p2)
{
    return p1 + p2
}

console.log(myFunction(2,3))

console.log("_____________________________")
//_____________________________//

function isEven(number)
{
    if (number%2 == 0) 
    {
        console.log("It is even number")
    }
    else{
        console.log("It is odd number")
    }
}
isEven(5)
isEven(2)
isEven(3)
isEven(4)

console.log("_____________________________")
//_____________________________//

function isEven(number)
{
    let result = ''
    if (number%2 == 0) 
    {
        result = "It is even number"
    }
    else{
        result = "It is odd number"
    }

    return result
}
console.log(isEven(5))
console.log(isEven(2))
console.log(isEven(3))
console.log(isEven(4))

console.log("_____________________________")
//_____________________________//

function max(num1,num2)
{
    let result = ''
    if (num1 > num2)
    {
        result = `Num1 is Max, Num1 = ${num1}`
    }
    else if (num1 < num2)
    {
        result = `Num2 is Max, Num2 = ${num2}`
    }
    else
    {
        result = `Num1 = Num2, ${num1} = ${num2}`
    }

    return result
}

console.log(max(40,600))
console.log(max(500,5))
console.log(max(5,100))
console.log(max(9999,9999))

console.log("_____________________________")
//_____________________________//

let findMax = function(num1,num2)
{
    let result = ''
    if (num1 > num2)
    {
        result = `Num1 is Max, Num1 = ${num1}`
    }
    else if (num1 < num2)
    {
        result = `Num2 is Max, Num2 = ${num2}`
    }
    else
    {
        result = `Num1 = Num2, ${num1} = ${num2}`
    }

    return result
}

console.log(max(40,600))
console.log(max(500,5))
console.log(max(5,100))
console.log(max(9999,9999))

console.log("_____________________________")
//_____________________________//

let maxNUM = (num1,num2) =>
{
    let result = ''
    if (num1 > num2)
    {
        result = `Num1 is Max, Num1 = ${num1}`
    }
    else if (num1 < num2)
    {
        result = `Num2 is Max, Num2 = ${num2}`
    }
    else
    {
        result = `Num1 = Num2, ${num1} = ${num2}`
    }

    return result
}

console.log(max(40,600))
console.log(max(500,5))
console.log(max(5,100))
console.log(max(9999,9999))

console.log("_____________________________")
//_____________________________//

let NUM = (num1,num2) =>
{
    let result = ''
    if (num1 > num2)
    {
        result = `Num1 is Max, Num1 = ${num1}`
    }
    else if (num1 < num2)
    {
        result = `Num2 is Max, Num2 = ${num2}`
    }
    else
    {
        result = `Num1 = Num2, ${num1} = ${num2}`
    }

    return result
}

console.log(max(40,600))
console.log(max(500,5))
console.log(max(5,100))
console.log(max(9999,9999))