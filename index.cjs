'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * MockConsole class used to manage the 'console' built-in methods (ex log, info, error)
 */
class MockConsole {
  constructor () {
    const proto = Object.getPrototypeOf(this);
    if (!proto.instance) {
      this.log = console.log;
      this.info = console.info;
      this.error = console.error;
      this.logs = [];
      this.infos = [];
      this.errors = [];
      proto.instance = this;
    }
    return proto.instance;
  }

  /**
   * Disable the console built-in methods
   */
  disable () {
    console.log = () => {};
    console.info = () => {};
    console.error = () => {};
  }

  /**
   * Capture the output of the console built-ins
   */
  capture () {
    console.log = log => { this.logs.push(log); };
    console.info = info => { this.infos.push(info); };
    console.error = err => { this.errors.push(err); };
  }

  /**
   * Restore the built-in console methods
   */
  restore () {
    console.log = this.log;
    console.info = this.info;
    console.error = this.error;
  }

  /**
   * Flush the captured console output
   */
  flush () {
    this.logs = [];
    this.infos = [];
    this.errors = [];
  }
}

exports.MockConsole = MockConsole;
exports.default = MockConsole;
