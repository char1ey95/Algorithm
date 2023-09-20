# Algorithm

알고리즘 이란 문제를 해결하는 절차이다.

-   알고리즘은 입력, 출력, 유한성, 명백성,효과성을 만족해야한다.

-   분석을 통해 좋고 나쁨을 평가할 수 있다.

## 어디에서 사용되는가?

알고리즘은 프로그램을 개발할 떄 효율적인 알고리즘을 적용하여 원하는 결과를 도출해야한다.

ex) 달력에서 특정한 달에 해당하는 일 수, 여러 개의 중간 지점을 거쳐서 특정 지점으로 가는 가장 빠른 길, 게시글을 10개 씩 출력하는 법 등등

# 시간복잡도 - 빅오 표기법

빅오 표기법은 다음과 같이 나타낸다.

O(2^n), O(n^2), O(n\*log n),O(n), O(log n), O(1)

입력 범위 n을 기준으로 로직이 몇 번이나 반복되는지 나타내는 것

가장 영향을 많이 끼치는 항의 상수 인자를 뺀 나머지 항을 없앤것이다.

**필요성**

효율적인 코드로 개선하는 데 쓰이는 척도가 된다.

예를 들어 O(n^2)의 시간 복잡도를 가지고 16초가 걸리는 경우에
O(n)으로 알고리즘을 개선한다면,

4초로 줄어들게 된다

> 참고자료
>
> 동빈나 유튜브
> https://www.youtube.com/watch?v=qQ5iLNjpxSk&list=PLRx0vPvlEmdDHxCvAQS1_6XV4deOwfVrz
