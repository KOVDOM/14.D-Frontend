"use strict";
        /*let x=Math.floor((Math.random()*90)+1);
         const tomb=[];
         for(let j=1;j<100;j++){
         for(let i=0;i<5;i++){
            x=Math.floor((Math.random()*90)+1);
             if(tomb.includes(x)){
                 x=Math.floor((Math.random()*90)+1);
             }else{
                 tomb.push(x);
             }
            }
         console.log(tomb);
         for(let k=1;k<=5;k++){
             tomb.pop();
         }
         }*/

/*const a=[[],[]];
for(let i=0;i<100;i++){
    for(let j=0;j<5;j++){
        let x=Math.floor((Math.random()*90)+1)
        while(a.includes(x)){
            x=Math.floor((Math.random()*90)+1)
        }
        a.push(x);
        console.table(a[i,j]);
    }
    //console.log(a[i,j]);
}
//console.log(a);
*/
const m3x5=[[1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5],];
console.table(m3x5)
console.log(m3x5[1,2]);