import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  имя: DS.attr('string'),
  номерПаспорта: DS.attr('number'),
  отчество: DS.attr('string'),
  серияПаспорта: DS.attr('number'),
  телефон: DS.attr('number'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-snezhana-11-менеджер.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-snezhana-11-менеджер.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-snezhana-11-менеджер.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-snezhana-11-менеджер.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-snezhana-11-менеджер.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-snezhana-11-менеджер.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-snezhana-11-менеджер.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МенеджерE', 'i-i-s-snezhana-11-менеджер', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    серияПаспорта: attr('Серия паспорта', { index: 3 }),
    номерПаспорта: attr('Номер паспорта', { index: 4 }),
    адрес: attr('Адрес', { index: 5 }),
    телефон: attr('Телефон', { index: 6 })
  });

  modelClass.defineProjection('МенеджерL', 'i-i-s-snezhana-11-менеджер', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    серияПаспорта: attr('Серия паспорта', { index: 3 }),
    номерПаспорта: attr('Номер паспорта', { index: 4 }),
    адрес: attr('Адрес', { index: 5 }),
    телефон: attr('Телефон', { index: 6 })
  });
};
