import './App.css';
import { useState } from 'react';

function App() {
    // 대충 서버에서 가져온 변수임
    let [글제목, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '대충 제목임']);
    let [좋아요, likeChange] = useState(0);


    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            <button onClick={() => {
                let copy = [...글제목];
                copy[0] = '여자 코트 추천';
                titleChange(copy);
            }}>글수정</button>
            <button onClick={() => {
                let copy = [...글제목];
                copy.sort();
                titleChange(copy);
            }}>정렬</button>
            <div className='list'>
                <h4>{글제목[0]} <button onClick={() => { likeChange(좋아요 + 1) }}><span>👍 {좋아요}</span></button> </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{글제목[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{글제목[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}

export default App;
