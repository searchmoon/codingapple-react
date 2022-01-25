//위니브 리액트 교안 연습
//2.JSX

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
<React.StrictMode>
	<App />
</React.StrictMode>,
document.querySelector("#root")
);




import './App.css';

function App() {
	const name = '라이캣!';
  const someStyle = {backgroundColor:"black", color:"white"};
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
      <div>
        <h1 style={someStyle}>안녕, {name} 1호</h1>
        <h1>안녕, 라이캣 2호!</h1>
        <div className="newClass"/>
      </div>
      <div style={{backgroundColor:"black", color:"white"}}>
        <h1 style={{color:'red'}}>년 : {year}</h1>
        <h1>월/일 : {month}/{date}</h1>
        <h1>시간 : {hour}시 {min}분 {sec}초</h1>
      </div>
    </div>
  );
}

export default App;



//3.fragment


import React, { fragment } from 'react';
//모듈 추가

//fragment를 사용하여 작성해봅시다.
function App() {
	return (
		<React.Fragment>
			<h1> 안뇽? </h1>
			<h2> 안농? </h2>
		</React.Fragment>
	);

//<React.Fragment> 대신 <> 을 써주어도 됩니다.(생략가능)

function App() {
	return (
		<>
			<h1> 안뇽? </h1>
			<h2> 안농? </h2>
		</>
	);


//4.component 만들기


 function App(props) {
	const someStyle = {backgroundColor:"black", color:"white"};
  return (
    <div>
			<h1 style={someStyle}>안녕, {props.name} 1호</h1>
			<h1>안녕, {name} 2호</h1>
			<div className="newClass"/>
    </div>
  );
}



import Hello from './Components/Hello';
import Time from './Components/Time';

function App() {
  return (
    <div>
      <Hello name="개리"/>
      <Time />
			<Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
    </div>
  );
}

export default App;



function Resume(props) {
	return(
		<div style={{border: "1px solid black", width: "500px"}}>
			<h1>{props.name} 자기소개서</h1>
			<h1>{props.hello}</h1>
			<h2>취미 : {props.hobby}</h2>
			<h2>좋아하는 음식 : {props.food}</h2>
			<h2>좋아하는 색 : <span style={{color:props.color}}>{props.color}</span></h2>
		</div>
)
}
export default Resume;


//5.Hook - useState

const [like, setLike] = useState(0)

//라이크는 값이 바뀌는 변수, 0이 초기값이 되었다. =

//setLike는 like값을 변경하기 위한 함수

//useState: 일반적인 변수를 할당해줘도 되지만, 값이 바뀔때마다 변화하는 값을 변경해주는 코드를 작성해야 하기때문에 더 편리한 useState를 사용하여 값이 바뀔 때 마다 리렌더링을 해주기 때문에 이것을 사용한다.


import React, { useState } from 'react';

function Resume (props) {
	const [like, setLike] = useState('')

function clickLike() {
	if(like === "") {
	setLike("Like");
} else {
	setLike("");
}

return (
	    <div style={{ border: "solid 1px", width: "500px" }}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>좋아하는 음식 : {props.food}</h2>
      <h2>
        좋아하는 색 : <span style={styleColor}>{myColor}</span>
      </h2>
      <button onClick={clickLike}>like</button> <span>{like}</span>
    </div>
)

}



//7.컴포넌트 리스트 만들기


import React from "react";

const Home = () => {
	const productList = {
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ],
	}

return (
	<>
		{productList.products.map((item, idx) => (
        <li
          key={item.id}
          style={{
            listStyle: "none",
          }}
        >
            <h2>
              {idx + 1} {item.title}
            </h2>
            <span>{`${item.price}원`}</span>
        </li>
      ))}

	</>

)

}