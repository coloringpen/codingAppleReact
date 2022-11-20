import './App.css';
import { useState } from 'react';

function Modal() {
  return (
    <div className="modal">
      <h4>title</h4>
      <p>weather</p>
      <p>details</p>
    </div>
  );
}

function App() {
  /* let [postTitle1, setPostTitle] = useState('여자 코트 추천');
  let [postTitle2, setPostTitle2] = useState('오늘은 대청소날');
  let [postTitle3, setPostTitle3] = useState('오늘은 공부하는 날');*/

  let [postTitles, setTitles] = useState([
    '나는 내가 상상하는 세계 속에서 산다',
    '오늘은 청소하는 날',
    '오늘은 공부하는 날',
  ]);

  let [thumbUp, setThumbUp] = useState(0);

  // let [postTitle1, postTitle2, postTitle3] = postTitle;
  // 혹은 아래에서 바로 postTitle에서 인덱싱을 해서 뽑으면 됨

  /** 모달창 파트 */
  let [modal, setModal] = useState(false);
  // UI 상태를 state에 보관하는 것.
  // ex.모달창이라면, closed 아니면 opened. Boolean이나 숫자를 활용해도 됨

  const modalShow = () => {
    /* if (modal) {
      setModal(false);
    } else {
      setModal(true);
    } 여기가 내가짠 파트*/

    setModal(!modal); // 그냥 이전과 다른 불리언값을 넣어라 주문!
  };

  let isModal = modal ? <Modal /> : null;

  /** 붐업버튼 */
  const onClick = () => {
    setThumbUp((pre) => (pre += 1));
  };

  /** 제목바꾸기 파트 */
  const titleChange = () => {
    // setPostTitles({ ...postTitles, 0: '여자코트 추천' }); >> 객체로 바꿔서 코드짬
    // 배열 방식 그대로 해보기
    /*postTitles[0] = '여자코트 추천';
    console.log(postTitles);
    setTitles(postTitles); 
    원본을 못 살림. 그리고 이상하게 지연발생,,
    바로 리렌더링 안되고, 옆에있는 엄지손가락을 눌러야 다시 렌더링 됨*/

    let arr = [1, 2, 3]; // 의미 : [1,2,3]이 있는 곳의 주소만 arr에 저장해주세요~!
    // const copyTitles = postTitles;
    // console.log(copyTitles === postTitles); true

    const copyTitles = [...postTitles];
    copyTitles[0] = '여자코트추천';
    setTitles(copyTitles);
  };

  const rearrange = () => {
    const copyTitles = [...postTitles];
    copyTitles.sort();
    setTitles(copyTitles);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={rearrange}>가나다순 정렬</button>
      <button onClick={titleChange}>push push baby</button>

      <div className="list">
        {/* <h4>{postTitle1}</h4> */}
        <h4>
          {postTitles[0]} <span onClick={onClick}>👍</span> {thumbUp}
          <br />
        </h4>
        <p>Published in Februery 17th</p>
      </div>
      <div className="list">
        {/* <h4>{postTitle2}</h4> */}
        <h4>{postTitles[1]}</h4>
        <p>Published in November 20th</p>
      </div>
      <div className="list">
        {/* <h4>{postTitle3}</h4> */}
        <h4 onClick={modalShow}>{postTitles[2]}</h4>
        <p>Published in November 21st</p>
      </div>

      {isModal}
    </div>
  );
}

export default App;
