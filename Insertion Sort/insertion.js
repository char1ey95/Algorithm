// 다음의 배열을 오름차순으로 정렬하시오
const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9]

// 변수들을 바꿀때 사용하는 일시적 변수 temp
let temp

// 
let j

for (let i = 0; i < arr.length; i++) {
    j = i
    // 왼쪽 요소와 오른쪽 요소를 비교하여
    // 왼쪽의 요소가 더 큰 경우에 코드를 실행한다
    while (arr[j] > arr[j + 1]) {
        // 위치를 바꾸는 연산을 하고
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

        // 위치가 변경되었으므로 다음 요소와 비교를 위해서 j를 1만큼 줄인다
        j--
    }
}

console.log(arr)