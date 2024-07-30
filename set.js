// const set = new Set()
// console.log(set)

// const set1 = new Set([1,2,3,3])
// console.log(set1)

// const uniq = arr=>[...new Set(arr)]
// console.log(uniq([2,1,2,3,4,5]))

// const {size} = new Set([1,2,3,3])
// console.log(size)

// const set = new Set()
// set.add(1).add(2)
// console.log(set)

// const set = new Set([1,2,3])
// set.clear()
// console.log(set)

// let odd = new Set([1,3,5,7,9])
// let sum = 0;
// for(let i of odd)
//     sum+=i
// console.log(sum)

// let p = 1
// odd.forEach(i => p *=i)
// console.log(p)

// const id = [101,102,101,103,102]
// const uniq = new Set(id)
// uniq.forEach(id => {
//     console.log(`ID: ${id}`)
// })

// const tag = ['JavaScript', 'CSS','HTML','HTML']
// const uni = new Set(tag)
// uni.forEach(tag => {
//     console.log(`tag: ${tag}`)
// })

// const set = new Set([1,2,3])
// console.log([...set])

// const[a, ...rest] = set
// console.log(a, rest)

// const a = new Set([1,2,3])
// const b = new Set([3,4,5])
// let union = new Set([...a, ...b])
// let inter = new Set([...a].filter(x=>b.has(x)))
// console.log(inter)
// let minus = new Set([...a].filter(x=>!b.has(x)))
// console.log(minus)

// const set = new Set("I am a student")
// console.log(set.size)
