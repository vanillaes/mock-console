import test from 'tape';
import { MockConsole } from '@vanillaes/mock-console';

test('MockConsole.restore() - Should restore built-in logging', (t) => {
  const mc = new MockConsole();
  mc.disable();
  mc.restore();

  t.equal(mc.log, console.log, 'console.log() should be restored');
  t.equal(mc.info, console.info, 'console.info() should be restored');
  t.equal(mc.error, console.error, 'console.error() should be restored');

  t.end();
});
