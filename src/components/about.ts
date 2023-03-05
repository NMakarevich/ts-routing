class About {
  container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container');
  }

  render() {
    this.container.innerHTML = '<h2>About</h2><p>this is paragraph</p>';
    return this.container;
  }

  destroy() {
    this.container.remove();
  }
}

const about = new About();
export default about;
