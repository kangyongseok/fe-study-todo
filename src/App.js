import { useState } from '../core/hooks.js';

function App({ $target }) {
  const [count, setCount] = useState(0)
  const [cat, setCat] = useState('고양이')
  const [obj, setObj] = useState({
    id: 1,
    name: '',
  })
  $target.innerHTML = `
    <h1 class="title">10일 (목)</h1>
    <section class="content_wrap">
      <div class="container todo_wrap">
        <h2>할일</h2>
        <button class="add_todo">+</button>
        <div class="list_area">
          <ul>
            <li>
              <div>
                <p class="item_title">투두리스트 만들기</p>
                <p class="date">2022-12-01 13:00</p>
              </div>
              <div class="btn_group">
                <button class="modify">수정</button>
                <button class="success">진행</button>
                <button class="delete">삭제</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="container process_wrap">
        <h2>진행중</h2>
        <div class="list_area">
          <ul>
            <li>
              <div>
                <p class="item_title">투두리스트 만들기</p>
                <p class="date">2022-12-01 13:00</p>
              </div>
              <div class="btn_group">
                <button class="success">완료</button>
                <button class="delete">삭제</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="container done_wrap">
        <h2>종료</h2>
        <div class="list_area">
          <ul>
            <li>
              <div>
                <p class="item_title">환경 설정</p>
                <p class="date">2022-12-01 13:00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `

  const plus = document.querySelector('.plus')
  const minus = document.querySelector('.minus')
  const catEl = document.querySelector('.cat')
  plus.addEventListener('click', () => {
    setCount(count + 1)
  })

  minus.addEventListener('click', () => {
    setCount(count - 1)
  })

  catEl.addEventListener('click', () => {
    setCat(cat + '야옹')
  })

}

export default App;