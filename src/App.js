import './App.css';
import React, { useState } from 'react';

function Modal({ title, postTitles }) {
  return (
    <div className="modal">
      <h4>{postTitles[title]}</h4>
      <p>weather</p>
      <p>details</p>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'kim',
      age: 20,
    };
  }
  render() {
    return (
      <div>
        안녕! {this.state.name}
        <button
          onClick={() => {
            this.setState({ name: 'hoho' });
            console.log(this.state);
          }}
        >
          change!
        </button>
      </div>
    );
  }
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

  /** input 파트 */
  let [input, setInput] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let newTitles = postTitles.concat(input);
          let newThumbs = thumbUp.concat(0);
          setTitles(newTitles);
          setThumbUp(newThumbs);
        }}
      >
        add post!
      </button>
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
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let newThumb = [...thumbUp];
                  newThumb[index] = thumbUp[index] + 1;
                  setThumbUp(newThumb);
                }}
              >
                👍
              </span>
              {thumbUp[index]}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  {
                    /*e.stopPropagation();
                  setTitles(
                    postTitles.filter(
                      (post) => postTitles.indexOf(post) !== index
                    )
                    )*/
                  }
                  let copy = [...postTitles];
                  copy.splice(index, 1);
                  setTitles(copy);
                }}
              >
                delete!
              </button>
            </h4>
            <p>Published in November 20th</p>
          </div>
        );
      })}
      {modal ? <Modal title={title} postTitles={postTitles} /> : null}
      <Modal2></Modal2>
    </div>
  );
}

export default App;
