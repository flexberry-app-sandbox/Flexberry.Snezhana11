import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  способ: DS.attr('i-i-s-snezhana-11-способ1'),
  сумма: DS.attr('decimal'),
  заказ: DS.belongsTo('i-i-s-snezhana-11-заказ', { inverse: 'оплата', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-snezhana-11-оплата.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  способ: {
    descriptionKey: 'models.i-i-s-snezhana-11-оплата.validations.способ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-snezhana-11-оплата.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-snezhana-11-оплата.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-snezhana-11-оплата', {
    способ: attr('Способ', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сумма: attr('Сумма', { index: 2 })
  });
};
