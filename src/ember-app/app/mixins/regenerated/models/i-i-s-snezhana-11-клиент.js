import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  mail: DS.attr('string'),
  адрес: DS.attr('string'),
  имя: DS.attr('string'),
  логин: DS.attr('string'),
  отчество: DS.attr('string'),
  пароль: DS.attr('string'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  mail: {
    descriptionKey: 'models.i-i-s-snezhana-11-клиент.validations.mail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-snezhana-11-клиент.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-snezhana-11-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  логин: {
    descriptionKey: 'models.i-i-s-snezhana-11-клиент.validations.логин.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-snezhana-11-клиент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пароль: {
    descriptionKey: 'models.i-i-s-snezhana-11-клиент.validations.пароль.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-snezhana-11-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-snezhana-11-клиент', {
    фамилия: attr('Фамилия клиента', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    адрес: attr('Адрес', { index: 3 }),
    логин: attr('Логин', { index: 4 }),
    пароль: attr('Пароль', { index: 5 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-snezhana-11-клиент', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    адрес: attr('Адрес', { index: 3 }),
    логин: attr('Логин', { index: 4 }),
    пароль: attr('Пароль', { index: 5 })
  });
};
