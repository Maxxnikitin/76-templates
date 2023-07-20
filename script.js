const items = [
  { text: "Сделать проектную работу" },
  { text: "Полить цветы" },
  { text: "Пройти туториал по Реакту" },
  { text: "Сделать фронтенд для своего проекта" },
];

const container = document.querySelector(".list");
const template = document.querySelector(".todo-template");

const render = () => {
  items.forEach((item) => {
    // container.innerHTML += createElByInner(item);
    // container.insertAdjacentHTML("beforeend", createElByInner(item));
    container.append(createElByTemplate(item));
  });
};

const createElByTemplate = (data) => {
  const el = template.content.cloneNode(true);
  const span = el.querySelector(".item__text");
  span.textContent = data.text;

  return el;
};

const createElByCreateEl = (data) => {
  const el = document.createElement("li");
  el.classList.add("list__item");

  const span = document.createElement("span");
  span.classList.add("item__text");
  span.textContent = data.text;

  const editBtn = document.createElement("img");
  editBtn.classList.add("edit");
  editBtn.src = "images/Edit.png";
  editBtn.alt = "Редактировать";

  el.append(span, editBtn);

  return el;
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
