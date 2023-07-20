const items = [
  { text: "Сделать проектную работу" },
  { text: "Полить цветы" },
  { text: "Пройти туториал по Реакту" },
  { text: "Сделать фронтенд для своего проекта" },
];

const container = document.querySelector(".list");
const template = document.querySelector(".todo-template");
const input = document.querySelector(".form__input");
const submitBtn = document.querySelector(".form__submit");

let editableEl = null;

const render = () => {
  items.forEach((item) => {
    // container.innerHTML += createElByInner(item);
    // container.insertAdjacentHTML("beforeend", createElByInner(item));
    container.append(createElByTemplate(item));
  });

  submitBtn.addEventListener("click", createEl);
};

const createEl = () => {
  if (editableEl) {
    const span = editableEl.querySelector(".item__text");
    span.textContent = input.value;
    input.value = "";
    submitBtn.textContent = "Добавить";
    editableEl = null;
    return;
  }
  const newEl = createElByTemplate({ text: input.value });
  input.value = "";

  container.append(newEl);
};

const createElByTemplate = (data) => {
  const el = template.content.cloneNode(true);
  const span = el.querySelector(".item__text");
  span.textContent = data.text;

  const deleteBtn = el.querySelector(".delete");
  deleteBtn.addEventListener("click", deleteEl);

  const duplicateBtn = el.querySelector(".duplicate");
  duplicateBtn.addEventListener("click", duplicateEl);

  const editBtn = el.querySelector(".edit");
  editBtn.addEventListener("click", editEl);

  return el;
};

const editEl = (e) => {
  const el = e.target.closest(".list__item");
  const text = el.querySelector(".item__text").textContent;
  input.value = text;
  submitBtn.textContent = "Обновить";
  editableEl = el;
};

const duplicateEl = (e) => {
  const currEl = e.target.closest(".list__item");
  const text = currEl.querySelector(".item__text").textContent;

  const newEl = createElByTemplate({ text });
  currEl.after(newEl);
};

const deleteEl = (e) => {
  const el = e.target.closest(".list__item");
  el.remove();
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
