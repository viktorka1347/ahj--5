export default class Popover {
  constructor(targetElement) {
    this.targetElement = targetElement;
    this.title = targetElement.dataset.title;
    this.content = targetElement.dataset.content;
    this.create();
  }

  create() {
    this.element = document.createElement('div');
    this.element.className = 'popover';

    this.element.innerHTML = `
    <h3 class="popover-header">${this.title}</h3>
    <div class="popover-body">${this.content}</div>
    <div class="arrow"></div>
    `;

    document.body.appendChild(this.element);
    this.pos();

    window.addEventListener('resize', this.pos.bind(this));
  }

  pos() {
    const { top, left } = this.targetElement.getBoundingClientRect();
    this.element.style.left = `${
      window.scrollX
      + left
      + this.targetElement.offsetWidth / 2
      - this.element.offsetWidth / 2
    }px`;
    this.element.style.top = `${
      window.scrollY + top - this.element.offsetHeight - 8
    }px`;
  }

  delete() {
    document.body.removeChild(this.element);
    window.removeEventListener('resize', this.pos);
    delete this;
  }
}
