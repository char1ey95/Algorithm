// 거스름돈: 센트
// 동전
// [25, 10, 5, 1]

function change(cent) {
    let result = 0
    let coin = [25, 10, 5, 1]

    for (let i = 0; i < coin.length; i++) {
        let possible = Math.floor(cent / coin[i])
        cent = cent % coin[i]
        coin[i] = possible
    }

    return coin
}

let coin = change(124)

console.log(`${coin[0]} ${coin[1]} ${coin[2]} ${coin[3]}`)

