/* eslint-disable */
import test from 'tape';
import { MockConsole } from 'mock-console-es';

test('new MockConsole() - test the creation of the mock', (t) => {
  const mc = new MockConsole();

  t.notEqual(mc, null, 'MockConsole should exist');
  t.equal(mc.log, console.log, 'MockConsole.log should store a reference to console.log');
  t.equal(mc.info, console.info, 'MockConsole.info should store a reference to console.info');  
  t.equal(mc.error, console.error, 'MockConsole.error should store a reference to console.error');
  t.deepEqual(mc.logs, [], 'MockConsole.logs should contain an empty array');
  t.deepEqual(mc.infos, [], 'MockConsole.infos should contain an empty array');
  t.deepEqual(mc.errors, [], 'MockConsole.errors should contain an empty array');

  t.end();
});
