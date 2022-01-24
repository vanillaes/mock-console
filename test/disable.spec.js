import test from 'tape'
import { MockConsole } from '@vanillaes/mock-console'

test('MockConsole.disable() - Should disable logging', (t) => {
  const mc = new MockConsole()
  mc.disable()

  t.notEqual(mc.log, console.log, 'console.log() should be disabled')
  t.notEqual(mc.info, console.info, 'console.info() should be disabled')
  t.notEqual(mc.warn, console.warn, 'console.warn() should be disabled')
  t.notEqual(mc.error, console.error, 'console.error() should be disabled')

  mc.restore()
  t.end()
})
