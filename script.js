const items = [
  { text: "Сделать проектную работу" },
  { text: "Полить цветы" },
  { text: "Пройти туториал по Реакту" },
  { text: "Сделать фронтенд для своего проекта" },
  // { text: `<img src='e' onerror='alert("Ваш сайт взломан!")'` },
];

const container = document.querySelector(".list");

const render = () => {
  items.forEach((item) => {
    // container.innerHTML += createElByInner(item);
    container.insertAdjacentHTML("beforeend", createElByInner(item));
  });
};

const createElByInner = (data) => {
  const el = `
    <li class="list__item">
      <span class="item__text">${data.text}</span>
      <img class="edit" src="images/Edit.png" alt="Редактировать" />
      <img class="duplicate" src="images/Duplicate.png" alt="Копировать" />
      <img class="delete" src="images/Delete.png" alt="Удалить" />
    </li>
  `;
  return el;
};

render();
