import test from 'tape';
import { MockConsole } from 'mock-console-es';

test('Singleton - MockConsole should be a singleton', (t) => {
  const mc = new MockConsole();
  const mc2 = new MockConsole();

  t.equal(mc, mc2, 'MockConsoles should all point to the same instance');

  t.end();
});
