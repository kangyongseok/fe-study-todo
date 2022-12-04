import './container.css';

const data = {
  todo: {
    title: '할일',
    list: [
      {
        title: '투두리스트 만들기', date: '2022-12-01 13:00'
      }
    ],
  },
  process: {
    title: '진행중',
    list: [
      {
        title: '화면 구현하기', date: '2022-12-01 13:00'
      }
    ],
  },
  done: {
    title: '종료',
    list: [
      {
        title: '환경설정', date: '2022-12-01 13:00'
      }
    ],
  },
};

function Container({ key }) {
  return `
    <h2>${data[key].title}</h2>
    ${key === 'todo' ? '<button class="add_todo">+</button>' : ''}
    <div class="list_area">
      <ul>
        <li>
          ${data[key].list.map(
    (item) =>
      `
        <div>
          <p class="item_title">${item.title}</p>
          <p class="date">${item.date}</p>
        </div>
      `
  )}
          <div class="btn_group">
            <button class="modify">수정</button>
            <button class="success">완료</button>
            <button class="delete">삭제</button>
          </div>
        </li>
      </ul>
    </div>
  `;
}

export default Container;
