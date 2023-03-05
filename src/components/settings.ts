class Settings {
  container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container');
  }

  render() {
    this.container.innerHTML = '<h2>Settings</h2>';
    return this.container;
  }

  destroy() {
    this.container.remove();
  }
}

const settings = new Settings();
export default settings;
