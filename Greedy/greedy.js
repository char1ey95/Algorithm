function change(money) {
    let result = 0
    let coin = [500, 100, 50, 10]

    for (let i = 0; i < coin.length; i++) {
        let number = Math.floor(money / coin[i])
        result = result + number
        money = money % coin[i]

        coin[i] = [coin[i], number]
    }

    return [result, coin]
}


console.log(change(1660))