import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    // 대충 서버에서 가져온 변수임
    let post = '강남 우동 맛집';

    let [글제목, b] = useState(['남자 코트 추천', post, '대충 제목임']);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            <div className='list'>
                <h4>{글제목[0]}</h4>
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
