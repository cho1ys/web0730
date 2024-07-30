// //const me = [1, 2, 3, 4, 5]
// //console.log(me)

// let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450]
// console.log(carSales)

// //let carSales2 = new Array(300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450)
// //console.log(carSales2)

// //let concat = [0,...carSales,300,500]
// //console.log(concat)

// //let numbers = [..."0123456789"]
// //console.log(numbers)

// // let may = carSales[4]
// // console.log(may)

// // let june = carSales["5"]
// // console.log(june)

// // carSales[12] = -50
// // console.log(carSales[12])

// // let a = [1,2,3,4,5]
// // let l = a.length
// // console.log(l)
// // a.length = 0
// // console.log(a)

// // let jan,fab,mar,rest
// // [jan,fab,mar,...rest] = carSales
// // console.log(jan,fab,mar,rest)

// // let sum = 0 ;
// // for(let sale of carSales)
// //     sum += sale
// // let avg = sum/carSales.length
// // let roundedAverage = avg.toFixed(2)
// // console.log(roundedAverage)

// // let sum = 0
// // for(let [index,sale]of carSales.entries()){
// //     if(index % 2 === 0)
// //         sum += sale
// // }
// // let avg = sum / (carSales.length/2)
// // console.log(avg)


// // let list = [4,5,6]
// // for(let i in list){
// //     console.log(i)
// // }
// // for(let i of list){
// //     console.log(i)
// // }

// // const car = {
// //     maker : "bmw",
// //     color : "red",
// //     year : "2012'"
// // }
// // for (let prop of car){
// //     console.log(prop)
// // }

// // let sum = 0
// // carSales.forEach(sale => {sum += sale})
// // let avg = sum / carSales.length
// // console.log(avg)

// // carSales.forEach((sale,index,array)=>{array[index] = sale + 50})
// // console.log(carSales)

// // let newCarSales = carSales.map(sale => sale + 50)
// // console.log(newCarSales)
// // console.log(carSales)

// // let highSales = carSales.filter(sale => sale > 500)
// // console.log(highSales)

// // let evenSales = carSales.filter((sale,index) => index%2===1)
// // console.log(evenSales)

// // let firstSaleSix = carSales.find(sale => sale>600)
// // console.log(firstSaleSix)

// // let firstSaleSixIndex = carSales.findIndex(sale => sale>600)
// // console.log(firstSaleSixIndex)

// // let allsalesix = carSales.every(sale => sale>600)
// // console.log(allsalesix)

// // let anysalesix = carSales.some(sale => sale>600)
// // console.log(anysalesix)

// // let sum = carSales.reduce((t1,t2) => t1 + t2,0)
// // console.log(sum)

// // let avg = sum/carSales.length
// // console.log(avg)

// // let highest = carSales.reduce((t1,t2) => t1>t2 ? t1:t2)
// // console.log(highest)

// // let flat = [1,[2,3]].flat()
// // console.log(flat)

// // let msg = ["오늘은 날씨가", "매우 좋습니다"]
// // let word = msg.flatMap(msg => msg.split(""))
// // console.log(word)
// // let map = msg.map(msg => msg.split(""))
// // console.log(map)
// // let wd = map.flat()
// // console.log(wd)

// // const arr1 = [...'abc']
// // const arr2 = [...'def']
// // const arr3 = arr1.concat(arr2)
// // console.log(arr3)

// // let org = [1,2,3]
// // let newArr = org.concat(4,5)
// // console.log(newArr)
// // newArr = org.concat([4,5],[6,7])
// // console.log(newArr)

// // let st = []
// // st.push(1)
// // st.push(2,3)
// // st.pop()
// // console.log(st)
// // st.push(4)
// // console.log(st)

// // let st = []
// // st.unshift(1)
// // st.unshift(2,3)
// // st.shift()
// // console.log(st)

// // const number = [20,37,-21,32,-2]
// // let num = number.filter(num => num>30)
// // document.write(num[0],num[1])

// let a= [1,2,3,4,5]
// //a.splice(0,2)
// //a.splice(2)
// //a.splice(0,2,10,20)
// //console.log(a)

// let b = a.slice(0,2)
// let c = a.slice(1,-1)
// console.log(c)

// let a = new Array(5)
// a.fill(0)
// //a.fill(3,1) // 첫번째 요소가 값, 두번째가 인덱스 => 1번 인덱스부터 1로 채움
// a.fill(3,1,-1) // 1번 인덱스부터 -1인덱스(끝)까지 3으로 채움
// console.log(a)

// let a= [0,1,2,3,2,1,0]
// let b = a.indexOf(2) // 2의 값을 갖는 첫번째 인덱스 번호
// console.log(b)
// let c = a.lastIndexOf(2) // 2의 값을 갖는 마지막 인덱스 번호
// console.log(c)
// let d = a.indexOf(5)
// console.log(d)  // 5라는 값이 배열에 존재하지 않기에 -1 출력

// let a = [0,true,2,false,NaN]
// let b = a.includes(true)
// let c = a.includes(2)
// let d = a.includes(NaN)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// let a = ["apple", "cherry", "banana"]
// let b = a.sort()
// console.log(b)
// let c = [22, 333, 121]
// let d = c.sort()
// console.log(c.sort())
// let e = c.sort((a,b)=> a-b)
// console.log(e)

// let a = [1,2,3]
// let b = a.join("")
// console.log(b)

// const scores = [67,82,97,100,92]
// for(let i = 0;i<scores.length;i++){
//     console.log(scores[i])
// }

// for(let i of scores){
//     console.log(i)
// }

// const tel = ["010","1234","5678"]
// let t = tel.join("-")
// console.log(t)

// const colors = ["빨강", "노랑", "파랑","주황"]
// let a = colors.shift()
// console.log(colors+'/'+a)

// let arr = new Array(2)
// for(let i = 0;i<arr.length;++i)
//     arr[i] = new Array(3)

// console.log(arr)

// let arr = Array.from(new Array(2), () => new Array(3))
// console.log(arr)
// arr[0][0] = 1
// arr[0][1] = 2
// arr[0][2] = 3
// arr[1][0] = 4
// arr[1][1] = 5
// arr[1][2] = 6
// console.table(arr)

// for(let i =0; i<arr.length;i++){
//     for(let j = 0; j<arr.length;j++){
//         console.log(arr[i][j]) 
//     }
// }

// const arr = [[83, 90, 70, 87], [87, 93, 62, 83], [98, 90, 77, 97]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
// console.log(sum + ', ' + sum/12);

// const math = [90,85,70,86,97]
// let sum = 0
// for(let i =0;i<math.length;i++){
//     sum += math[i]
// }
// document.write(sum +', '+sum/math.length)

// const n = [7,-24,-8,10,17,-18]
// let k = n.find(aa => aa<0 )
// document.write(k)
// for(let i =0;i<n.length;i++){
//     if(n[i]<0){
//         document.write(n[i])
//         break
//     }
// }

// const a = [12,0,2,5,4]
// const b = [0,2,3,12,8]
// let c = []
// b.forEach(e =>{
//     if(a.includes(e))
//         c.push(e)
// })
// document.write(c)

const num = [1,3,5]
let h = num.map(e => e*10)
document.write(h)