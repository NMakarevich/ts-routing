class Home {
  container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container');
  }

  render() {
    this.container.innerHTML = '<h2>Home</h2>';
    return this.container;
  }

  destroy() {
    this.container.remove();
  }
}

const home = new Home();
export default home;
