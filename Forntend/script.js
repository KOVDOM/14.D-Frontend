/*let value=true;
alert(typeof value);
value=String(value);
console.log(typeof value);
alert(typeof(value));
*/
//alert("6"/"2");
/*let str ="123";
alert (typeof str); //string
let num =Number(str); //Szám lesz
alert(typeof num); //number*/

/*let age=String("97");
alert(typeof age);*/

//alert(Boolean(""));

/*let x=1;
x=-x;
alert(x);*/

/*let x=1, y=3;
alert(y-x);*/
/*alert(5%2);
alert(8%3);*/
/*alert(2**2);
alert(2**3);
alert(4**(1/2));
alert(8**(1/3));*/
/*let s="my"+"string";
alert(s);*/
/*alert(2+'1'+2);
alert(2+2+'1');
alert(6-'2');*/
/*alert(+true);
alert(+"");
let apples="2"//string;
let oranges="3"//string;
alert(+apples+ +oranges)//5;
alert(Number(apples)+Number(oranges));//5*/
/*let x=2*2+1;
alert(x);//5*/
/*let a=1;
let b=2;
let c=3-(a=b+1);
alert(a);//3
alert(c);*//*
let a,b,c;
a=b=c=2+2;
alert(a);
alert(b);
alert(a+b+c);*/
/*c=2+2;
b=c;
a=b+(a=b/c)+2;
alert("a: "+a);
alert("b: "+b);
alert("c: "+c);
let n=2;
n+=5;
n*=2;
alert(n);*/

/*let n=2;
n*=3+5;
alert(n);*/

/*let counter = 1;
let a = ++counter; //prefix
alert(a);

let counter2 = 1;
let b = counter2++; //postfix
alert(b);*/

/*let counter=01;
counter++;
++counter;
alert(2*counter);//2*/

/*let counter=1;
counter++;
alert(2*counter);//4*/

/*let a=(1+2,3+4);
alert(a);//7*/

/*let a=1; b=1;
alert(++a);
alert(b++);
alert(a);
alert(b);*/
/*let message1="Hello, I'm JavaScript!";
function showMessage(){
    let message="Hello, I'm JavaScript!";
    alert(message);
}
//alert(message);-->nem jó!
alert(message1);
showMessage();*/


/*function showMessage(szeleseg,hosszusag,tipus=" Nem adott meg típust"){
    let terulet=szeleseg*hosszusag;
    alert("Terület "+terulet+ " Ilyen típusú ruha: "+tipus);
}

showMessage(3,9);
showMessage(200,300," gyapjú");*/

function szerKeszt(alfa, beta){
    if(alfa+(2*beta)==180){
        alert("Szerkesztehtő!");
    }else{
        alert("Nem szerkeszthető!");
    }
}

szerKeszt(120,30);