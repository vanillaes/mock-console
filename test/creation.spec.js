/* eslint-disable */
import test from 'tape';
import { MockConsole } from '@vanillaes/mock-console';

test('new MockConsole() - test the creation of the mock', (t) => {
  const mc = new MockConsole();

  t.notEqual(mc, null, 'MockConsole should exist');
  t.equal(mc.log, console.log, 'MockConsole.log should store a reference to console.log');
  t.equal(mc.info, console.info, 'MockConsole.info should store a reference to console.info');  
  t.equal(mc.warn, console.warn, 'MockConsole.warn should store a reference to console.warn');  
  t.equal(mc.error, console.error, 'MockConsole.error should store a reference to console.error');
  t.deepEqual(mc.logs, [], 'MockConsole.logs should contain an empty array');
  t.deepEqual(mc.infos, [], 'MockConsole.infos should contain an empty array');
  t.deepEqual(mc.warns, [], 'MockConsole.warns should contain an empty array');
  t.deepEqual(mc.errors, [], 'MockConsole.errors should contain an empty array');

  t.end();
});
