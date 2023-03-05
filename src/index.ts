import router from './router/router';
import './style.scss';
import header from './components/header';

class App {
  init(): void {
    this.render();
    router.init();
  }

  render() {
    document.body.prepend(header.render());
  }
}

const app = new App();

app.init();
