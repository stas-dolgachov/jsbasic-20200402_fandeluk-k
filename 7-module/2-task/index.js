import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    // Получаем элементы
    let container = document.querySelector(".container");
    // Делаем ссылки на элементы
    this.container = container;
    this.openModal(event);
    // this.setTitle();
    // this.setBody();
  }
  openModal(event) {
    let button = event.target.closest("button");
    let template = `  <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>

      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>`;
    if (button) {
      document.body.classList.toggle("is-modal-open");
      this.container.insertAdjacentHTML(`beforeend`, template);
    }
  }
  // setTitle() {}
  // setBody() {}
}
