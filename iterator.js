// let arr = [1,2,3,4,5]
// let it = arr[Symbol.iterator]()
// console.log(it)
// let result = it.next()
// console.log(result)

// while(!result.done){
//     console.log(result.value)
//     result = it.next()
// }

// let cp = [...it]
// console.log(cp)



// Seq 클래스 정의
class Seq {
    // 생성자: 시퀀스의 시작값 (from), 종료값 (to), 간격 (interval)을 초기화
    constructor(from = 0, to = Infinity, interval = 1) {
        this.from = from       // 시퀀스의 시작값
        this.to = to           // 시퀀스의 종료값
        this.interval = interval // 시퀀스의 간격
    }
    // Symbol.iterator 메서드를 정의하여 Seq 객체를 이터러블하게 만듦
    [Symbol.iterator]() {
        let next = this.from // 현재 시퀀스의 값 초기화
        return {
            // next 메서드는 이터레이터 프로토콜의 핵심 부분으로, 시퀀스의 다음 값을 반환
            next: () => {
                // 현재 값이 종료값보다 작거나 같으면
                if (next <= this.to) {
                    let result = { value: next, done: false } // 반환할 값과 done 플래그 설정
                    next += this.interval // 다음 값을 위해 현재 값에 간격을 추가
                    return result // 현재 값 반환
                }
                // 종료값을 초과한 경우, done 플래그를 true로 설정하여 이터레이션 종료를 알림
                return { value: undefined, done: true }
            }
        }
    }
}
// Seq 클래스의 인스턴스를 생성: 시작값 2, 종료값 10, 간격 2로 설정
let even = new Seq(2, 10, 2)
// 이터레이터 객체 생성
let it = even[Symbol.iterator]()
// 이터레이터의 next 메서드를 호출하여 첫 번째 값을 가져옴
let result = it.next()
// result 객체를 콘솔에 출력
console.log(result) // { value: 2, done: false }
while(!result.done){
    console.log(result.value)
    result = it.next()
}
for(let i of even)
    console.log(i)