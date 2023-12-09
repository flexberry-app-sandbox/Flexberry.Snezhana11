import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhana-11-товар', 'Unit | Serializer | i-i-s-snezhana-11-товар', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-snezhana-11-товар',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-snezhana-11-способ1',
    'transform:i-i-s-snezhana-11-тип-доставки',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
