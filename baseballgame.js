// 콘솔에 값을 입력하기위한 readline import
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let strike = 0
let ball = 0
let try_count = 1

// 0~9중 random한 숫자를 생성하는 함수
function random() {
    return Math.floor(Math.random() * 10)
}


// random() 을 이용하여 중복되지않는 3자리 숫자 만들기
let random_number = random().toString()

let i = 0
while (i < 2) {
    let random_temp = random()
    if (random_number.includes(random_temp)) {
        continue;
    } else {
        random_number += random_temp
        i++
    }
}



// input값 받기
function baseball() {
    console.log('3자리 숫자를 입력해주세요')
    rl.on("line", (guess) => {
        // 입력값의 format 검사
        if (!Number(guess)) {
            console.log('입력하신 값은 숫자가 아닙니다')
        } else if (guess.length !== 3){
            console.log('3자리의 숫자만 유효합니다')
        } else if (guess[0] === guess[1] || guess[0] === guess[2] || guess[1] === guess[2]){
            console.log('중복된 숫자입니다. 중복되지 않는 3자리 숫자를 입력해주세요')
        } else {
        // input값의 strike과 ball 갯수 count
        for (let i = 0; i < guess.length; i++) {
            if (random_number[i] === guess[i]) {
                strike++
            } else if (random_number.includes(guess[i])) {
                ball++
            }
        }

        // strike과 ball 갯수 출력, strike === 3 일경우 게임 종료
        if (strike !== 3) {
            try_count++
            console.log(`strike:${strike}, ball:${ball}`)
            console.log('다시 시도해보세요')
            strike = 0
            ball = 0
        } else {
            console.log(`축하합니다!! ${try_count} 번만에 정답을 맞추셨습니다~`)
            rl.close();
        }
    }
}
    )
}

baseball()
