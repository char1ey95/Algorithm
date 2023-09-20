// 다음의 배열을 오름차순으로 정렬하시오
const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9]

// 최솟값을 담아줄 변수 min
let min

// 최솟값의 인덱스를 저장할 변수 min_index
let min_index

// 현재값을 저장해 둘 변수 temp
let temp

for (let i = 0; i < arr.length; i++) {

    // 단, 최솟값을 담아줄 변수이기 때문에 요소들보다 큰 숫자를 넣어주어 비교할 첫 번째 요소가 들어갈 수 있도록 한다
    min = 9999
    for (let j = i; j < 10; j++) {
        if (min > arr[j]) {
            min = arr[j]
            // 최솟값으로 설정된 인덱스를 기억한다
            min_index = j
        }
    }
    // 인덱스의 값을 temp변수에 담는다
    temp = arr[i]
    // 최솟값을 해당 인덱스에 넣어준다
    arr[i] = arr[min_index]
    // 최솟값의 자리에 현재의 값을 넣어줌으로 자리를 스왑한다
    arr[min_index] = temp
}

console.log(arr)