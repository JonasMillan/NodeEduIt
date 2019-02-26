/**
 * 1) Iniciar un repositorio en GITHUB llamado fizzmod
 * 2) Agregarlo como remoto de origen a un repositorio local. En este repositorio se iran subiendo las respuestas de los siguientes
 *  ejercicios
 * 3) Crear una función que reemplace de manera provisoria la funcionalidad obtenia por el método map() del prototipo de Array que pueda pasar los siguientes tests :
*/
// let numeros = [1,2,3,4]
// const mapCustomizado = (arr, cb) =>{
//     const returnData = []
//     for (let index = 0; index < arr.length; index++) {
//         let resp = cb(arr[index],index)
//         returnData.push(resp)
//     }
//     return returnData
// }

//mapCustomizado => representa la funcion que ustedes tendrían que crear
// let jon = mapCustomizado(numeros,numero=>numero+1) //[2,3,4,5]
// let pepe = mapCustomizado(numeros,(numero,indice)=>numero+indice) //[1,3,5,7]
// let lulu = mapCustomizado(numeros,numero=>{}) //[undefined,undefined,undefined,undefined]
// console.log(jon, pepe, lulu)

/**
 * 4) Modificar el prototipo de la funcion constructora Array para que admita como nuevo método la funcion customizada del paso anterior para que cumpla los siguientes tests :
 */
// Array.prototype.mapCustomizado = function(cb) {
//     const returnData = []
//     for (let index = 0; index < this.length; index++) {
//         let resp = cb(this[index],index)
//         returnData.push(resp)
//     }
//     return returnData
// }
// let pepe = numeros.mapCustomizado(numero=>numero+1) //[2,3,4,5]
// let jon = numeros.mapCustomizado((numero,indice)=>numero+indice) //[1,3,5,7]
// let lulu = numeros.mapCustomizado(numero=>{}) //[undefined,undefined,undefined,undefined]
// let has = numeros.hasOwnProperty("mapCustomizado") //false
// let map = "mapCustomizado" in numeros //true
// console.log(pepe, jon, lulu, has, map)
/**
 * 5) Los miembros de trabajo especificados en el siguiente objeto usan su nombre como indice y su edad como valor.
 *  Separa los miembros mayores de 40 años y menores de 25 años en un array y todo el resto en un segundo array.
 *  Ambos arrays tienen que estar compuestos únicamente por los nombres de las personas.
 *  Por último cada array tiene que estar ordenado alfabeticamente.
 */

// let miembros = { pedro : 35 , ana : 18 , carlos : 43 , juan : 21 , maria : 29 , angela : 31 , jose : 23 , mariana : 41 , eugenio : 19 }

// const result = (obj) => Object.keys(obj).map((key) => {
//     return [key, obj[key]]
// })

// let pepe = result(miembros)
// .reduce((total ,e) => {
//     if(e[1] >= 40 && e[1] >= 25){
//         total[0].push(e[0])
//     }else{
//         total[1].push(e[0])
//     }
//     return total
// },[[],[]])
// .map(e => e.sort())

// console.log(pepe)
/**
 * 4) Crear un fork de este repositorio en sus propias cuentas
 * 5) Clonar el fork obtenido
 * 6) Encontrar todos los errores en el siguiente programa ,
 *    corregirlo y elevarlo como Push Request al repositorio de origen :
*/

// (function(){
//     "use strict"

//     const x = 1 , arr = [] , y = 2
    
//     arr.push(x,y)

//     const res = arr.map((n , indice) => {
//         console.log(`El numero en el indice ${indice} es : ${n}`)
//         return n + 1
//     })
//     console.log(res) // [2,3]
// })()

/**
 * 7) Crear un modulo .js que contenga una variable llamada base cuyo valor es el número 2 y tres funciones,
 *  las cual va a exportar cada vez que se requiera el archivo llamadas multiplicar , cambiarBase y consultarBase.
 *  La función multiplicar toma un valor como input de tipo Number o String y lo multiplica por el valor de la variable base.
 *  La función cambiarBase modifica el valor de la variable base el cual se mantiene para las próximas ejecuciones y
 *  consultarBase retorna el valor actual de la variable base
 */

// const modulo = (
//     () => {
//         let base = 2

//         const multiplicar = x =>  base*x
//         const getBase = () => base
//         const setBase = x => base = x

//         return {
//             multiplicar,
//             getBase,
//             setBase
//         }
//     }
// )()
// modulo.setBase(3)
// let number = modulo.getBase()
// console.log(number)
// number = modulo.multiplicar('3')
// console.log(number)