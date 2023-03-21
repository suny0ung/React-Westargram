import React, {useState} from "react";

//+버튼은 클릭하면 +1, -1을 클릭하면 -1씩 계산됨.
//리엑트에서 동적으러 변경되는(동적인) 값을 state라고 부름
//state(상태)를 관리하는 값을 usestate라고 부름
const Counter = () => {
  //num은 useState안의 '0'의 값을 갖는 변수 -> const num = 0;
  //num값을 세팅할 수 있는 세터 함수임
  const [num, setNumber] = useState(0)

  //+1씩 증가하는 함수
  const increase = () => {
    setNumber(num +1);
    //num = num + 1; 같은 의미
  }

  //-1씩 감소하는 함수
  const decrease = () => {
    setNumber(num - 1);
  }

  return (
    <div>
      <button onClick={increase}> +1 </button>
      <button onClick={decrease}> -1 </button>
      <p>{num}</p>
    </div>
  )
}

export default Counter;