// 다음의 배열을 오름차순으로 정렬하시오
const mergeArr = [6, 7, 1, 3, 5, 8, 2, 4]

// 메모리 사용문제로 전역에 선언
// sorted 배열의 크기가 
let sorted = [...mergeArr]

function merge(data, start, mid, end) {
    let i = start
    let j = mid + 1
    let k = start

    while (i <= mid && j <= end) {
        if (data[i] <= data[j]) {
            sorted[k] = data[i]
            i++
        } else {
            sorted[k] = data[j]
            j++
        }
        k++

        console.log(sorted)
    }

    if (i > mid) {
        for (let l = j; l <= end; l++) {
            sorted[k] = data[l]
            k++
        }
    } else {
        for (let l = i; l <= mid; l++) {
            sorted[k] = data[l]
            k++
        }
    }

    for (let l = 0; l < data.length; l++) {
        mergeArr[l] = sorted[l]
    }
}

function mergeSort(data, start, end) {
    // 배열의 크기가 2 이상일 경우에만 실행한다
    if (start < end) {
        // 중간값을 구해 소숫점을 버린다
        let middle = Math.floor((start + end) / 2)

        // data에는 길이 8의 [6, 7, 1, 3, 5, 8, 2, 4]가 들어가고
        // 재귀함수에서도 같이 들어가나
        // 사용하는 범위가 점점 줄어든다, start와 end가 같아 질때까지 ==> start === end === 1
        mergeSort(data, start, middle)
        mergeSort(data, middle + 1, end)

        // 배열을 병합하는 부분이다
        merge(data, start, middle, end)
    }
}

mergeSort(mergeArr, 0, mergeArr.length - 1)
console.log(mergeArr)