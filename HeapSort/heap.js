// 배열에서 두 요소를 교환하는 헬퍼 함수
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 최대 힙(Max Heap)을 구성하는 함수
function buildMaxHeap(arr) {
    const length = arr.length;
    for (let i = Math.floor(length / 2); i >= 0; i--) {
        heapify(arr, length, i);
    }
}

// 힙을 조정하는 함수
function heapify(arr, length, i) {
    // 왼쪽 자식 노드
    const left = 2 * i + 1;

    // 오른쪽 자식 노드
    const right = 2 * i + 2;

    // 부모 노드
    let largest = i;

    // 자식노드가 부모 노드보다 데이터가 클 경우 실행
    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    // 자식노드가 부모 노드보다 데이터가 클 경우 실행
    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    // 부모 노드와 자식 노드의 데이터 스왑
    // 힙 생성 실행
    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, length, largest);
    }
}

// 힙 정렬 함수
function heapSort(arr) {
    let length = arr.length;

    // 최대 힙을 구성
    buildMaxHeap(arr);

    for (let i = length - 1; i > 0; i--) {
        // 최대값을 배열 끝으로 보내기
        swap(arr, 0, i);

        // 힙 크기 축소 (정렬된 것 제외)
        length--;

        // 힙을 재조정 (힙 생성)
        heapify(arr, length, 0);

    }
}

const data = [7, 6, 5, 8, 3, 5, 9, 1, 6];
heapSort(data);