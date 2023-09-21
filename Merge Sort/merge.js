// 다음의 배열을 오름차순으로 정렬하시오
const mergeArr = [6, 7, 1, 3, 5, 8, 2, 4]

// 메모리 사용문제로 전역에 선언
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
    if (start < end) {
        let middle = Math.floor((start + end) / 2)
        mergeSort(data, start, middle)
        mergeSort(data, middle + 1, end)
        merge(data, start, middle, end)
    }
}

mergeSort(mergeArr, 0, 7)
console.log(mergeArr)