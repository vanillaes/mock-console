import test from 'tape';
import { MockConsole } from '@vanillaes/mock-console';

test('MockConsole.capture() - Should should capture logs', (t) => {
  const mc = new MockConsole();
  mc.capture();
  const log = 'console.log captured';
  const info = 'console.info captured';
  const error = 'console.error captured';
  console.log(log);
  console.info(info);
  console.error(error);
  mc.restore();

  t.deepEqual(mc.logs, [log], 'console.log() should be captured');
  t.deepEqual(mc.infos, [info], 'console.info() should be captured');
  t.deepEqual(mc.errors, [error], 'console.error() should be captured');

  t.end();
});
