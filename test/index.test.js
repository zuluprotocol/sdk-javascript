const test = require('tape');
const mainExport = require('../index')

test('Basic test: Can be imported', t => {
  t.equal(typeof mainExport, 'object');
  t.end()
});

test('Basic fields are exported', t => {
  /* This is a pretty naive test, but it's set not to fail if we *add* fields, only if
  * fields shift unexpectedly. */
  t.ok(mainExport.data_node.api.v1.trading_data)

  t.ok(mainExport.vega.api.trading)
  t.ok(mainExport.vega.commands)
  t.ok(mainExport.vega.coreapi)
  t.ok(mainExport.vega.events)
  t.ok(mainExport.vega.oracles)
  t.ok(mainExport.vega.snapshot)
  t.ok(mainExport.vega.tm.replay)
  t.ok(mainExport.vega.wallet)

  t.ok(mainExport.vega.assets)
  t.ok(mainExport.vega.chain_events)
  t.ok(mainExport.vega.governance)
  t.ok(mainExport.vega.markets)
  t.ok(mainExport.vega.vega)

  t.end()
})
