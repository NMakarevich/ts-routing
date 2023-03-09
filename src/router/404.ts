class NotFoundPage {
  container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container');
  }

  render() {
    this.container.innerHTML = '<h2>Page is not found :((</h2>';
    return this.container;
  }

  destroy() {
    this.container.remove();
  }
}

const notFoundPage = new NotFoundPage();
export default notFoundPage;
