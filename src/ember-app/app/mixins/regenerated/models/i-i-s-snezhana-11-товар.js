import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  изображение: DS.attr('string'),
  наименование: DS.attr('string'),
  свойства: DS.attr('string'),
  поставщик: DS.belongsTo('i-i-s-snezhana-11-поставщик', { inverse: null, async: false }),
  производитель: DS.belongsTo('i-i-s-snezhana-11-производитель', { inverse: null, async: false })
});

export let ValidationRules = {
  изображение: {
    descriptionKey: 'models.i-i-s-snezhana-11-товар.validations.изображение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-snezhana-11-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  свойства: {
    descriptionKey: 'models.i-i-s-snezhana-11-товар.validations.свойства.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-snezhana-11-товар.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-snezhana-11-товар.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-snezhana-11-товар', {
    наименование: attr('Наименование', { index: 0 }),
    изображение: attr('Изображение', { index: 1 }),
    свойства: attr('Свойства', { index: 2 }),
    производитель: belongsTo('i-i-s-snezhana-11-производитель', 'Производитель', {
      производитель: attr('Производитель', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'производитель' }),
    поставщик: belongsTo('i-i-s-snezhana-11-поставщик', 'Поставщик', {
      поставщик: attr('Поставщик', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'поставщик' })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-snezhana-11-товар', {
    наименование: attr('Наименование', { index: 0 }),
    изображение: attr('Изображение', { index: 1 }),
    свойства: attr('Свойства', { index: 2 }),
    производитель: belongsTo('i-i-s-snezhana-11-производитель', 'Производитель', {
      производитель: attr('Производитель', { index: 3 })
    }, { index: -1, hidden: true }),
    поставщик: belongsTo('i-i-s-snezhana-11-поставщик', 'Поставщик', {
      поставщик: attr('Поставщик', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
