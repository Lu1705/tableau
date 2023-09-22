"use strict";

let names=[]; // nous avons créé un tableau vide

names.push('hugo', 'thomas', 'greg');

names.forEach(name =>{
    name += ' va se promener';
    console.log(name);
})