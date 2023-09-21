// 다음의 배열을 오름차순으로 정렬하시오
const quickArr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9]

function quickSort(arr, start, end) {
    if (start >= end) { // 원소가 1개인 경우
        return
    }

    let pivotIndex = start; // 피벗은 첫번째원소
    let i = start + 1; // 왼쪽 출발
    let j = end; // 오른쪽 출발
    let temp // 잠시 저장할 변수

    // 왼쪽에서 출발한 i가 오른쪽에서 출발한 j보다 큰 경우 엇갈린 것이다
    while (i <= j) {
        // 엇갈릴때 까지 반복한다

        // 왼쪽 출발 i와 피벗값을 비교하여
        // i번째 요소가 피벗값보다 작으면 다음 요소를 비교하기 위해 i를 증가시킨다
        while (arr[i] < arr[pivotIndex]) {
            i++
        }

        // 오른쪽 출발 j와 피벗값을 비교하여
        // j번째 요소가 피벗값보다 크면 j를 감소시킨다
        // 이 때, 오른쪽부터 시작하는 j는 start 인덱스보다 커야한다
        while (arr[j] >= arr[pivotIndex] && j > start) {
            j--
        }

        // 위의 두 과정을 진행한 뒤

        // i번째 요소와 j번째 요소의 자리를 바꿔준다
        if (i > j) {
            temp = arr[j]
            arr[j] = arr[pivotIndex]
            arr[pivotIndex] = temp
        } else {
            temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }

    // 위의 과정을 하위 배열에서 재귀적으로 호출하여 진행한다.

    // 왼쪽 배열에서 진행하고
    quickSort(arr, start, j - 1)

    // 오른쪽 배열에서 진행한다
    quickSort(arr, j + 1, end)

    // 위의 두 재귀 함수로 인해 log2로 나타낼 수 있게된다
}

quickSort(quickArr, 0, quickArr.length - 1)

console.log(quickArr)
