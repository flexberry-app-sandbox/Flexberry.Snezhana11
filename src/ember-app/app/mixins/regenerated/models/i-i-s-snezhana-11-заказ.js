import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  доставка: DS.attr('i-i-s-snezhana-11-тип-доставки'),
  номерЗаказа: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-snezhana-11-клиент', { inverse: null, async: false }),
  менеджер: DS.belongsTo('i-i-s-snezhana-11-менеджер', { inverse: null, async: false }),
  товар: DS.belongsTo('i-i-s-snezhana-11-товар', { inverse: null, async: false }),
  оплата: DS.hasMany('i-i-s-snezhana-11-оплата', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-snezhana-11-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  доставка: {
    descriptionKey: 'models.i-i-s-snezhana-11-заказ.validations.доставка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-snezhana-11-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-snezhana-11-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  менеджер: {
    descriptionKey: 'models.i-i-s-snezhana-11-заказ.validations.менеджер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-snezhana-11-заказ.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-snezhana-11-заказ.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-snezhana-11-заказ', {
    дата: attr('Дата', { index: 0 }),
    номерЗаказа: attr('Номер заказа', { index: 1 }),
    доставка: attr('Доставка', { index: 2 }),
    менеджер: belongsTo('i-i-s-snezhana-11-менеджер', 'Менеджер', {
      фамилия: attr('Фамилия менеджера', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фамилия' }),
    товар: belongsTo('i-i-s-snezhana-11-товар', 'Товар', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' }),
    клиент: belongsTo('i-i-s-snezhana-11-клиент', 'Клиент', {
      фамилия: attr('Фамилия клиента', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фамилия' }),
    оплата: hasMany('i-i-s-snezhana-11-оплата', 'Табличная часть оплата', {
      способ: attr('Способ', { index: 0 }),
      дата: attr('Дата', { index: 1 }),
      сумма: attr('Сумма', { index: 2 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-snezhana-11-заказ', {
    дата: attr('Дата', { index: 0 }),
    номерЗаказа: attr('Номер заказа', { index: 1 }),
    доставка: attr('Доставка', { index: 2 }),
    менеджер: belongsTo('i-i-s-snezhana-11-менеджер', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true }),
    товар: belongsTo('i-i-s-snezhana-11-товар', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-snezhana-11-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
