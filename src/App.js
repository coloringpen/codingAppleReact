import './App.css';
import { useState } from 'react';

function Modal({ title, postTitles }) {
  return (
    <div className="modal">
      <h4>{postTitles[title]}</h4>
      <p>weather</p>
      <p>details</p>
    </div>
  );
}

function App() {
  let [postTitles, setTitles] = useState([
    '나는 내가 상상하는 세계 속에서 산다',
    '오늘은 청소하는 날',
    '오늘은 공부하는 날',
  ]);

  let [thumbUp, setThumbUp] = useState([0, 0, 0]);

  /** 모달창 파트 */
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0); // 숫자에 따라 다른 제목이 보이는 상태

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {postTitles.map(function (item, index) {
        return (
          <div className="list" key={index}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle(index);
              }}
            >
              {postTitles[index]}
            </h4>
            <span
              onClick={() => {
                let newThumb = [...thumbUp];
                newThumb[index] = thumbUp[index] + 1;
                setThumbUp(newThumb);
              }}
            >
              👍
            </span>
            <span>{thumbUp[index]}</span>
            <p>Published in November 20th</p>
          </div>
        );
      })}
      {modal ? <Modal title={title} postTitles={postTitles} /> : null}
    </div>
  );
}

export default App;
