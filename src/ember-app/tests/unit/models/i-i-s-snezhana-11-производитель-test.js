import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhana-11-производитель', 'Unit | Model | i-i-s-snezhana-11-производитель', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-snezhana-11-заказ',
    'model:i-i-s-snezhana-11-клиент',
    'model:i-i-s-snezhana-11-менеджер',
    'model:i-i-s-snezhana-11-оплата',
    'model:i-i-s-snezhana-11-поставщик',
    'model:i-i-s-snezhana-11-производитель',
    'model:i-i-s-snezhana-11-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
