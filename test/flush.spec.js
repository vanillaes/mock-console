import test from 'tape';
import { MockConsole } from 'mock-console-es';

test('MockConsole.flush() - Should flushes all log buffers', (t) => {
  const mc = new MockConsole();
  mc.capture();
  console.log('console.log captured');
  console.info('console.info captured');
  console.error('console.error captured');
  mc.flush();
  mc.restore();

  t.deepEqual(mc.logs, [], 'console.logs should be empty');
  t.deepEqual(mc.infos, [], 'console.infos should be empty');
  t.deepEqual(mc.errors, [], 'console.errors should be empty');

  t.end();
});
