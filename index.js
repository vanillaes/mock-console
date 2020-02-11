export class MockConsole {
  static instance;

  constructor () {
    if (MockConsole.instance) {
      return MockConsole.instance;
    }

    this.log = console.log;
    this.info = console.info;
    this.error = console.error;
    this.logs = [];
    this.infos = [];
    this.errors = [];
  }

  disable () {
    console.log = () => {};
    console.info = () => {};
    console.error = () => {};
    this.flush();
  }

  trap () {
    console.log = log => { this.logs.push(log); };
    console.info = info => { this.infos.push(info); };
    console.error = err => { this.errors.push(err); };
  }

  restore () {
    console.log = this.log;
    console.info = this.info;
    console.error = this.error;
    this.flush();
  }

  flush () {
    this.logs = [];
    this.infos = [];
    this.errors = [];
  }
}
