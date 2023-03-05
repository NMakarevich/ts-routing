import router from '../router/router';

class Header {
  container: HTMLElement;

  constructor() {
    this.container = document.createElement('header');
    this.container.classList.add('header');
  }

  render() {
    this.container.innerHTML = `
      <div class='container'>
        <nav class='nav'>
          <ul class='nav-list'>
            <li class='nav-item' id='/'>Home</li>
            <li class='nav-item' id='/about'>About</li>
            <li class='nav-item' id='/settings'>Settings</li>
          </ul>
        </nav>
      </div>`;
    this.clickHandler();
    return this.container;
  }

  get navList() {
    return this.container.querySelector('.nav-list');
  }

  clickHandler = () => {
    this.navList.addEventListener('click', (event: Event) => {
      if (!event.target || !event.currentTarget) return;
      const target: HTMLElement = event.target as HTMLElement;
      if (target.classList.contains('nav-item')) {
        const url = target.id;
        router.navigateTo(url);
      }
    });
  };
}

const header = new Header();
export default header;
