// 다음의 배열을 오름차순으로 정렬하시오
const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9]

// 현재의 요소와 바꿀 수 있는 변수 temp
let temp

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 9 - i; j++) {
        // 왼쪽 요소가 오른쪽 요소보다 클 경우
        if (arr[j] > arr[j + 1]) {
            // 두 요소의 자리를 바꾼다
            temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}

console.log(arr)