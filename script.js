//Operators
let a=5
let b=2
//arithmatic oparetors
//1.addition
console.log("a+b=",a+b);
//2.subtraction
console.log("a-b=",a-b);
//3.multiplication
console.log("a*b=",a*b);
//4.division
console.log("a/b=",a/b);
//5.modulus
console.log("a%b=",a%b);
//6.exponentiation
console.log("a**b=",a**b);
//unary oparetor
//7.post increment(only use in programming)
a++;
console.log("a=",a);
//8.post decrement(only use in programming)
b--;
console.log("b=",b);
//9.pre increment(only use in programming)
++a;
console.log("a=",a);
//10.pre decrement(only use in programming)
--b;
console.log("b=",b);

//assignment oparetors(to assign somthing)
let d=5;
let e=3;
//1.equal to
let c=3;
//2. + equal to
e+=4;//e=e+4
console.log("e=",e);
//3. - equal to
d-=3;//d=d-3
console.log("d=",d);
//4. * equal to
e*=3;//e=e*3
console.log("e=",e);
//5. % equal to
d%=2;//d=d%3
console.log("d=",d);
//6. / equal to
e/=3;//e=e/3
console.log("e=",e);
//7. ** equal to
d**=1;//d=d**1
console.log("d=",d);

//Comparision operators
//1.equal to(==)
let p=2;
let q=2;
console.log("p==q",p==q);
//2.not equal to(!=)
let m=2;
let n=2;
console.log("m!=n",m!=n);
//3.equal to & type (===)
let r=3;
let t=2;
console.log("r===t",r===t);
//4.not equal to & type(!==)
let y=3;
let z=4
console.log("y!==z",y!==z);
//5.greater than(>) & greater than equal to(>=)
let s=9;
let f=10;
console.log("s>f",s>f);
console.log("s>=f",s>=f);
//6.less than(<) & less than equal to(<=)
let g=2;
let h=23;
console.log("g<h",g<h);
console.log("g<=h",g<=h);

//logical operator

let k=1;
let l=3;
let cond1 = k<l; //true
let cond2 = k===l; //false
//1.logical AND(&&)
console.log("cond1&&cond2",cond1&&cond2);
//2.logical OR(||)
console.log("cond1||cond2",cond1||cond2);
//3.logical NOT(!)
console.log("!cond1=",!(cond1));