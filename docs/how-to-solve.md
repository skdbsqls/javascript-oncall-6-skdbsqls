### 미션 해결 전략

#### 1. 본인이 이해하고 구현한 내용에 기반해 '다른 근무자와 순서를 바꿔야 하는 경우'를 자신만의 예시를 들어 설명하세요. (필수)

우선 제가 이해하고 구현한 바는 입력 받은 월과 시작 요일을 가지고 며칠 그리고 무슨 요일인지 알 수 있는 캘린더를 그려냅니다. 그다음 입력 받은 월에 맞는 법정 공휴일이 있는지 여부를 판단하고 해당 월의 캘린더를 완성합니다. 이렇게 완성한 캘린더와 입력 받은 평일 및 휴일 비상 근무 순서를 가지고 업무를 배정합니다. 평일인 경우에는 평일 근무 순서를 가지고 캘린더에 근무자 이름을 추가하고, 휴일일 경우 휴일 근무 순서를 가지고 캘린더에 근무자 이름을 추가합니다. 만약 평일 및 휴일 근무자가 해당 월의 일수보다 적을 경우 평일 및 휴일 근무자가 한 번씩 자신의 차례를 지난 후 다시 반복할 수 있도록 했습니다. 이러한 과정을 거치면 중복을 고려하지 않은 근무 캘린더가 완성이 됩니다. 이 이후에 다시 캘린더를 체크하면서 순번상 특정 근무자가 연속 2일 근무하게 되는 상황을 찾아 다음 근무자와 순서를 바꿔줍니다. 이때 앞의 날짜부터 순서를 변경하기 위해 변경 사항이 발생하면 변경 사항을 적용한 캘린더를 가지고 다음 변경사항을 적용하는 식으로 구현하였습니다.

#### 2. 요구사항에서 제시한 앞의 날짜부터 순서를 변경하는 방법 외에 다른 방법이 있다면 어떤 방식이 있는지, 이 방법은 기존에 제시된 방식과 비교해 어떤 차이가 있는지 설명하세요. (선택)
