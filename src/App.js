import './App.css';
import { useState } from 'react';

function Modal({ title, color, updatePost }) {
  return (
    <div className="modal" style={{ backgroundColor: color }}>
      <h4>{title}</h4>
      <p>weather</p>
      <p>details</p>
      <button onClick={updatePost}>update a post</button>
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

  /** 붐업버튼 */
  /* const onClick = (e) => {
    const thumbNum = Number(e.target.attributes.index.nodeValue);
    let newThumb = [...thumbUp];
    newThumb[thumbNum] += 1;
    setThumbUp(newThumb); 어떡해서든 속성을 활용하고자했던 몸부림
    // setThumbUp((pre) => (pre += 1));
  };*/

  /** 제목바꾸기 파트 */
  const titleChange = () => {
    const copyTitles = [...postTitles];
    copyTitles[0] = '여자코트추천';
    setTitles(copyTitles);
  };

  /** 가나다순 정렬 */
  const rearrange = () => {
    const copyTitles = [...postTitles];
    copyTitles.sort();
    setTitles(copyTitles);
  };

  /** 모달창 파트 */
  let [modal, setModal] = useState({ state: false, title: '' });

  const modalShow = () => {
    setModal(!modal); // 그냥 이전과 다른 불리언값을 넣어라 주문!
  };

  let isModal = modal.state ? (
    <Modal updatePost={titleChange} title={modal.title} color="skyblue" />
  ) : null;

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={rearrange}>가나다순 정렬</button>
      <button onClick={titleChange}>push push baby</button>

      {postTitles.map(function (item, index) {
        return (
          <div className="list" key={index}>
            <h4
              onClick={() => {
                setModal({
                  ...modal,
                  state: true,
                  title: `${postTitles[index]}`,
                });
              }}
            >
              {postTitles[index]}
            </h4>
            <span
              index={index}
              onClick={() => {
                setThumbUp(thumbUp + 1);
              }}
            >
              👍 {thumbUp[index]}
            </span>
            <p>Published in November 20th</p>
          </div>
        );
      })}
      {isModal}
    </div>
  );
}

export default App;
