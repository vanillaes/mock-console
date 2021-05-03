var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// index.js
__markAsModule(exports);
__export(exports, {
  MockConsole: () => MockConsole
});
var MockConsole = class {
  constructor() {
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
  disable() {
    console.log = () => {
    };
    console.info = () => {
    };
    console.error = () => {
    };
  }
  capture() {
    console.log = (log) => {
      this.logs.push(log);
    };
    console.info = (info) => {
      this.infos.push(info);
    };
    console.error = (err) => {
      this.errors.push(err);
    };
  }
  restore() {
    console.log = this.log;
    console.info = this.info;
    console.error = this.error;
  }
  flush() {
    this.logs = [];
    this.infos = [];
    this.errors = [];
  }
};
