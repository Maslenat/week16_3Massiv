let MassStr=['js', 'css', 'html'];

alert(MassStr[0]);

let Mass= [0, 1, false, 2, undefined, '', 3, null];

const result = Mass.filter(number =>number > +0);

alert(result);

let Massiv=[[1,2], [1,2,3], [1,2,3,4]];
let n=Massiv.length;
for (let i=0; i<n; i++)
{
 
   
        if (Massiv[i].length > 3)  {alert (`Элемент массива ${i} имеет длину больше 3`);}
    
       
         
        
}   