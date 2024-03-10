/*let num = [1, 2, 3, 4]
console.log(`Nosso valor é ${num}`)
num[1] = 7
console.log (`${num}`)
num.push(9)
console.log(`${num}`)
console.log(`${num.length}`)
num.sort()
console.log(`${num}`)*/

let valores = [1,2,9,4,3,6,7]
/*console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])*/

/*let valores = [9,4,6,2,7,1,8]
for ( let val = 0; val < valores.length ; val++ ){
    console.log (valores[val])
}*/

/*for(let val in valores){
    console.log( `${val}- ${valores[val]}`)
}*/
let pos = valores.indexOf(2)
if( pos == -1){
    console.log(` O valor não foi encontrado!! Tente outro!!`)
} else {
    console.log(` o valor esta na posição ${pos}`)
}


