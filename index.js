// producto maximo de 3 numeros

let numbers = [-1, 2, -3, 4, -5];
let positiveNumbers = numbers.map(num => Math.abs(num));

function maxProduct(nums) {
    let positiveNumbers = nums.map(num => Math.abs(num));
    positiveNumbers.sort((a, b) => a - b);
    const n = nums.length;
    let max = positiveNumbers[n - 1] * positiveNumbers[n - 2] * positiveNumbers[n - 3]
    return  max 
       
}


// Ceros al final 

let input = [0,1,0,3,12,5,0,2]

function zeros(nums){

    let count = 0;

    for(let i = 0; i < nums.length; i++){

        if(nums[i] === 0){
            count++;
        }
        else {
            nums[i-count] = nums[i];
        }
    }
    
    while(count > 0){
        nums[nums.length - count] = 0
        count--;
    }
    console.log(count)

}


// pivot de enteros

let input1 = [1,7,3,6,5,6]
let input2 = [6,5,6,3,7,1]

let input3 = [1,2,3,4,1,1,1]

let arrMinMax = input2.sort((a,b) => b-a)

function pivot (nums){
    
    let l = nums.length - 1;
    let a = nums[0];
    let b = nums[l];

  if(a>=b || b === a){
    return -1
  }
    
    for(let i = 1; i < nums.length -1  ; i++){
        
        a += nums[i]
        b += nums[l--]

        if(a > b){
            return i
        }
        if(b > a){
            return l
        }

    }
    return -1
}



function isPositive(n){
    if(n === 0){
        throw new Error('ZERO ERROR')
    }
    else if(n<0){
        throw new Error('NEGATIVE ERROR')
    } 
    else{
        return 'YES'
    }
}


function isPositive1(a) {
    try{
        if(a > 0){
            return 'YES'
        }else if(a ===0){
                throw new Error ('Zero Error')
            }
        else if(a < 0){
            throw new Error('Negative Error')
        }
    }catch(error){
        return error.message
    }    
}

function Rectangle(l,w){
    const area = l*w
    const perimeter = 2*(l+w)

    return {
        length:l,
        width:w,
        area: area,
        perimeter: perimeter
    }
}

/** function Rectangle(a, b) {
    
    const area = a*b;
    const perimeter = 2*(a+b);
    
    const rec = {
        length: a,
        width: b,
        area: area,
        perimeter: perimeter
    }
    
    return rec;
}
**/

const rec = new Rectangle(8,4)
//console.log(rec)


let arrScore = [5,2,'C','D','+']

function setScore(s){
    let score = []
    let totalScore = 0

    for(let i = 0 ; i < s.length; i++){

        if(typeof(s[i]) === 'number'){
            score.push(s[i])
        }
        else if(s[i] === '+'){
            score.push(score[score.length-1] + score[score.length-2])
        }
        else if(s[i] === 'D'){
            score.push(score[score.length-1]*2)
        }
        else if(s[i] === 'C'){
            score.pop()
        }
    }

    for(let num of score){
        totalScore += num
    }

    return totalScore
}

const obj =[{x:1, y:1}, {x:2, y:3}, {x:3, y:3}, {x:4, y:5}, {x:6, y:7}]

function countEquals(a){
    count = 0

    for(let i = 0; i < obj.length; i++){
        if(obj[i].x === obj[i].y){
            count++
        }
    }
    return count
}

 class polygon{
    constructor(sides){
        this.sides = sides
    }

    Perimeter(){
        let perimeter = 0
        for(let i = 0; i < this.sides.length; i++){
            perimeter += this.sides[i]
        }
        return perimeter
    }

 }

 const square = new polygon([4,4,4,4])
// console.log(square)
 //console.log(square.Perimeter())

 let arr1 = [1,2,3,4,5,6]

 function multiplier(a){
    const result = a.map((x) => x % 2 === 0 ? x * 2 : x * 3)
    return result
 }

 //console.log(multiplier(arr1))

 /**function getMaxLessThanK(n,k){
    let max = -1    
    for(let i = 1; i < n; i++){
        const curr = i &(i+1)
        if(curr < k && curr >max){
            max = curr
        }
    }
    return max 
}*/

//console.log(getMaxLessThanK(7,8))

function getMaxLessThanK(n,k){
    
    let max = 0
    
        for(let i = 1; i <= n; i++){
            
            for(let j = i + 1; j <= n ; j++){
                
                const curr = i & j
                
                  if(curr < k && curr > max){
                      max = curr
                }
            }
        }
        return max
} 


const birthday = new Date("06/19/1993")
//console.log(birthday.toLocaleDateString("es-MX", {weekday: 'long'}))

//console.log(7&8)


function maxNumber(...n){
    let max = 0

    for(let num of n){
        if(num > max){
            max = num
        }
    }
    return max
}
const nums = [5,10,15,20,15]

//console.log(maxNumber(...nums))
const arrPorDos = nums.map((x)=> x % 2 === 0 ? x*2 : x)
//console.log(arrPorDos)

function contarRepeticiones(array) {
    let contador = {};
    
    // Iterar sobre cada elemento del array
    array.forEach(elemento => {
      // Si el elemento ya está en el contador, incrementa su conteo
      // de lo contrario, inicializa su conteo en 1
      if (contador[elemento]) {
        contador[elemento]++;
      } else {
        contador[elemento] = 1;
      }
    });
    
    return contador;
  }

  /**
   * Migratory arr
   * Count repetition of sights of each bird and return the most seen bird
   * if any bird is seen as much as other return the one with the smallest id
   * 
   * using map object to list by id and sights(key/value)
   */

  const birds = [1,1,2,3,3]

  function reps(arr){
    let sights = new Map()
    let maxBird = null
    let maxCount = 0

    for(let bird of arr){
        if(!sights.has(bird)){
            sights.set(bird,1)
        } else {
            sights.set(bird, sights.get(bird) +1)
            if(sights.get(bird) > maxCount){
                maxCount = sights.get(bird)
                maxBird = bird
            }
        }
    }   
    return maxBird
  }

  /**
   * Version menos noob del algoritmo de migratory birds
   * function reps(birds){
    let sights = new Map();

    for(let bird of birds){
        sights.set(bird, (sights.get(bird) || 0) + 1);
    }   

    let maxBird = null;
    for(let [bird, count] of sights.entries()){
        if (!maxBird || count > sights.get(maxBird)) {
            maxBird = bird;
        }
    }

    return maxBird;
}
   *
   */

//console.log(reps(birds))

const giftIds = [5,1,5,1]

function findFirstRepeatedId(arr){ // version jr

    let reps= []

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length ; j++){
            if(arr[j] === arr[i]){
                reps.push(j)
            
            }
        }
    }

    return reps.length === 0 ? -1 : arr[Math.min(...reps)]
    
}


function firstRepeat(arr){ //optimizado o menos noob
    let seen = new Set()

    for(let a of arr){
        if(seen.has(a)){
            
        }else{
            seen.add(a)
        }
    }
    return seen
}

//console.log(firstRepeat(giftIds))

function arraySum(ar){
    return ar.reduce((acc, num) => acc + num)
}

// console.log(arraySum([1,2,3]))

const gifts = ["oso", "tren", "pelota"]
const materials = "tronesa"

function manufacture(gifts, materials) {
    return gifts.filter(gift => gift.split('').every(char => materials.includes(char)));
}

// console.log(manufacture(gifts, materials))


const matrix = [[ 1,2,3], [4,5,6],[7,8,9]]
const arr3 = [0,1,2]

function absoluteX(m){

    let primarySum = 0 // suma de la diagonal principal
    let secondarySum = 0 //suma de la diagonal secundaria
    let n = m.length // longitud de la matriz

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m[i].length ; j++){
            if(i === j){ //estamos en la diagonal principal 0,0 1,1 2,2
                primarySum += m[i][j]
            }
        }
    }

    for(let i = n - 1; i >=0 ; i--){ //i en su maxima longitud para el ultimo elemento
        for(let j = 0; j < m[i].length; j++){ //j en su longtud minima para estar en el primer elemento de la d secundaria
            if(i + j === n - 1){ // diagonal secunaria 2,0 1,1 0,2 = 2 siempre
                secondarySum += m[i][j]
            }
        }
    }
    return Math.abs(primarySum + secondarySum) //si hay un negativo devuelve el absoluto
}
            
//console.log(absoluteX(matrix))
//console.log(matrix.length)
//console.log("array length is: " + arr3.length)

let nums1 = [1,2,3,4,3,2,1]

function palNum(a){

    for(let i = 0; i < a.length/2 ; i++){
        if(nums1[i] !== nums1[a.length - 1 - i])
        return false
    }
    return true
}

// console.log(palNum(nums1))

const string1 = "aa"
const re = /^([aeiou]).*\1$/

/**if(re.test(string1)){
    console.log('true')
} else {
    console.log('false')
}
*/

/*function staircase(n){
    for(let i = 0 ; i < n; i++){
        let row = ''
        for(let j = n - i -1 ; j >= 0; j--){
            if(j >= i){
                row+=' '
            }
            else{
                row+= '#'
            }
        }
        console.log(row)
    }
}
*/

function staircase(n){

    for(let i = 0; i < n  ;i++){
    let row = ''
    for(let j = 0; j < n - i - 1; j++){
        row+=' '
    }
    for(let k = n-i-1 ; k < n ; k++){
        row+='#'
    }
    console.log(row)
    }
}

//staircase(6)

function findNumber(arr,n){
    if(arr.includes(n)){
        return "YES"
    }
    return "NO"
}

// console.log(findNumber([1,2,3,4,5,6],1))

function oddNumbers(l, r) {
    let result = []
    for(let i = l; i <= r; i++){
        if(i % 2 !== 0){
            result.push(i)
        }
    }
    return result
}

// console.log(oddNumbers(3,9))

let arreglo = [2,7,152,33,1]
let arreglo1 = arreglo.sort((a,b) => a-b)
//console.log(arreglo1)

function birthdayCakeCandles(candles){

    let arr = candles.sort((a,b)=>a-b)
    let max = arr[arr.length - 1]
    let candleCount = 0

    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === max){
            candleCount++
        }
        else{
            return candleCount
        }
    }
    return -1
}

//console.log(birthdayCakeCandles([4,4,1,3,4]))

function birthdayCandles(candles){
    let maxHeight = candles[0]
    let curr = 0
    let count = 0;
    
    for(let i = 0; i < candles.length; i++){
        let curr = candles[i]
        if(curr > maxHeight){
            maxHeight = curr
            count = 1
        } else if(curr === maxHeight){
            count++
        }
    }
    return count
}

// console.log(birthdayCandles([4,4,1,3,4]))

function plusMinus(arr) {
    // Write your code here
    let length = arr.length;
    let pos = 0;
    let neg = 0;
    let zer = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zer++;
        }
        else if(arr[i] > 0){
            pos++;
        }
        else{
            neg++
        }
    }
    console.log((pos/length).toFixed(4))
    console.log((neg/length).toFixed(4))
    console.log((zer/length).toFixed(4))


}


function convert(s) { //convert 12h time to 24h time
    
    let[hours,minutes,seconds] = s.split(":");

    if(seconds.includes("PM") && hours !== "12"){
        hours = String(Number(hours) + 12)
    }
     if(seconds.includes("AM") && hours === "12"){
        hours = "00"
    }
    return `${hours}:${minutes}:${seconds.slice(0,-2)}`
}

//console.log(convert("01:45:00PM"))

function lonelyinteger(a) {
    
    for(let i = 0; i < a.length; i++){
        
        let count = 0
        
        for(let j = 0; j < a.length; j++){
            if(a[i] === a[j]){
                count++
            }
        }
        if(count === 1){
            return a[i]
        }
    }
}

//console.log(lonelyinteger([1,2,3,4,3,2,1]))

function diagonalDifference(arr) {
    
    let l = arr.length
    let primD = 0;
    let secD= 0;
    
    for(let i = 0; i < l; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(i === j){
                primD+= arr[i][j]
            }
        }
    }
    
    for(let i = l - 1; i>= 0; i--){
        for(let j = 0; j < l; j++){
            if(i + j === l-1){
                secD += arr[i][j]
            }
        }
    }
    
    return Math.abs(primD - secD)
}

//console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]))


function countingSort(arr) { //Hackerrank coutingsort
    // Write your code he
    let count = Array(100).fill(0)
    
    for(let i = 0; i<arr.length; i++){
        let num = arr[i]
        if(num >= 0 && num <= 100){
            count[num]++
        }
    }
    
    return count
}

// Day 1 mock test: Find the median 
function findMedian(arr) {
    let l = Math.floor(arr.length/2)
    let arr1 = arr.sort((a,b)=>a-b)
    
    return arr1[l]
}

const grade = 38;

function gradeSystem(g){
    if((g+1)%5 === 0){
        return g+1
    }
    else if((g+2)%5 === 0){
        return g+2
    }
    else{
        return g
    }
}

// console.log(gradeSystem(grade))

// console.log("module: " + 38%5)

function gradingStudents(grades) {
    
    let results = []
    
    for(let i = 0; i<grades.length; i++){
        
        let module = grades[i] % 5;
        
        if(5 - module >= 3){
            results.push(grades[i])
        } else{
            results.push(grades[i] + (5-module))
        }
    }
    return results
}

function gradingStudents1(grades){ 
    let finalGrades = grades.map((grade) => { 
        return grade >= 38 && grade % 5 >= 3  ? grade - (grade % 5) + 5 : grade;         
      }); 
    return finalGrades; 
   }

let alphabet = ['b','c','d','e','a','g','f']
// console.log(alphabet.sort())
// console.log(alphabet.sort((a,b) => b.localeCompare(a))) //ordenar en invertido


const getData = async () => {
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/blastoise")
        if(!response.ok){
            throw new Error(response.status)
           }
        const data = await response.json() 
            console.log(data.name)
  
        } catch(error) {
            console.error("ocurrio un error: ", error.message)
        }
}



function fairRations(B) { // repartir el pan de manera equitativa, para que todos queden pares, y darle uno enfrente o atras contar las barras que se usaron, retornar NO si es imposible
    // Write your code here
    let loaves=0;
    for(let i = 0; i< B.length - 1 ; i++){
        if(B[i]%2 !== 0){
            B[i]++;
            loaves++
            B[i+1]++;
            loaves++
        }
    }
    return B[B.length-1] % 2 === 0 ?  loaves :  "NO"
}

/**
 * Ejemplo de como trabajar con input en lineas 
 * ej: 3
 * sam 456123
 * tom 354965
 * harry 654321
 * sam
 * john 
 * harry 
 */

function processData(input){
 // manejar la entrada de datos 

    const inputArr = input.split("\n")
    const n = parseInt(inputArr[0], 10)
    const entries = inputArr.slice(1, n+1)
    const queries = inputArr.slice(n+1)


    //  cuidar los constraints
    if(n < 1 || n > 10000){
        return
    }

    if(queries.length < 1 || queries.length > 10000){
        return
    }
  // crear la agenda
    
    const contacts = new Map()
    for(entry of entries){
        const[name, phone] = entry.split(" "); // utilizar el espacio para crear arrays de valores 
        contacts.set(name, phone) //asignar los pares con los valores de los subarrays 
    }

    for(query of queries){
        if(contacts.has(query)){
            console.log(query + '=' + contacts.get(query))
        } else{
            console.log("Not found")
        }
    }
}