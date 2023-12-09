import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSnezhana_11ЗаказLForm from './forms/i-i-s-snezhana-11-заказ-l';
import IISSnezhana_11КлиентLForm from './forms/i-i-s-snezhana-11-клиент-l';
import IISSnezhana_11МенеджерLForm from './forms/i-i-s-snezhana-11-менеджер-l';
import IISSnezhana_11ПоставщикLForm from './forms/i-i-s-snezhana-11-поставщик-l';
import IISSnezhana_11ПроизводительLForm from './forms/i-i-s-snezhana-11-производитель-l';
import IISSnezhana_11ТоварLForm from './forms/i-i-s-snezhana-11-товар-l';
import IISSnezhana_11ЗаказEForm from './forms/i-i-s-snezhana-11-заказ-e';
import IISSnezhana_11КлиентEForm from './forms/i-i-s-snezhana-11-клиент-e';
import IISSnezhana_11МенеджерEForm from './forms/i-i-s-snezhana-11-менеджер-e';
import IISSnezhana_11ПоставщикEForm from './forms/i-i-s-snezhana-11-поставщик-e';
import IISSnezhana_11ПроизводительEForm from './forms/i-i-s-snezhana-11-производитель-e';
import IISSnezhana_11ТоварEForm from './forms/i-i-s-snezhana-11-товар-e';
import IISSnezhana_11ЗаказModel from './models/i-i-s-snezhana-11-заказ';
import IISSnezhana_11КлиентModel from './models/i-i-s-snezhana-11-клиент';
import IISSnezhana_11МенеджерModel from './models/i-i-s-snezhana-11-менеджер';
import IISSnezhana_11ОплатаModel from './models/i-i-s-snezhana-11-оплата';
import IISSnezhana_11ПоставщикModel from './models/i-i-s-snezhana-11-поставщик';
import IISSnezhana_11ПроизводительModel from './models/i-i-s-snezhana-11-производитель';
import IISSnezhana_11ТоварModel from './models/i-i-s-snezhana-11-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-snezhana-11-заказ': IISSnezhana_11ЗаказModel,
    'i-i-s-snezhana-11-клиент': IISSnezhana_11КлиентModel,
    'i-i-s-snezhana-11-менеджер': IISSnezhana_11МенеджерModel,
    'i-i-s-snezhana-11-оплата': IISSnezhana_11ОплатаModel,
    'i-i-s-snezhana-11-поставщик': IISSnezhana_11ПоставщикModel,
    'i-i-s-snezhana-11-производитель': IISSnezhana_11ПроизводительModel,
    'i-i-s-snezhana-11-товар': IISSnezhana_11ТоварModel
  },

  'application-name': 'Snezhana_11',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Snezhana_11',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Snezhana_11',
          title: 'Snezhana_11'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        заказ: {
          caption: 'Заказ',
          title: 'Заказ',
          'i-i-s-snezhana-11-заказ-l': {
            caption: 'Заказ',
            title: 'Заказ'
          }
        },
        'справочник-по-товарам': {
          caption: 'Справочник по товарам',
          title: 'Справочник по товарам',
          'i-i-s-snezhana-11-поставщик-l': {
            caption: 'Поставщик',
            title: 'Поставщик'
          },
          'i-i-s-snezhana-11-товар-l': {
            caption: 'Товар',
            title: 'Товар'
          },
          'i-i-s-snezhana-11-производитель-l': {
            caption: 'Производитель',
            title: 'Производитель'
          }
        },
        клиенты: {
          caption: 'Клиенты',
          title: 'Клиенты',
          'i-i-s-snezhana-11-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          }
        },
        менеджеры: {
          caption: 'Менеджеры',
          title: 'Менеджеры',
          'i-i-s-snezhana-11-менеджер-l': {
            caption: 'Менеджер',
            title: 'Менеджер'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-snezhana-11-заказ-l': IISSnezhana_11ЗаказLForm,
    'i-i-s-snezhana-11-клиент-l': IISSnezhana_11КлиентLForm,
    'i-i-s-snezhana-11-менеджер-l': IISSnezhana_11МенеджерLForm,
    'i-i-s-snezhana-11-поставщик-l': IISSnezhana_11ПоставщикLForm,
    'i-i-s-snezhana-11-производитель-l': IISSnezhana_11ПроизводительLForm,
    'i-i-s-snezhana-11-товар-l': IISSnezhana_11ТоварLForm,
    'i-i-s-snezhana-11-заказ-e': IISSnezhana_11ЗаказEForm,
    'i-i-s-snezhana-11-клиент-e': IISSnezhana_11КлиентEForm,
    'i-i-s-snezhana-11-менеджер-e': IISSnezhana_11МенеджерEForm,
    'i-i-s-snezhana-11-поставщик-e': IISSnezhana_11ПоставщикEForm,
    'i-i-s-snezhana-11-производитель-e': IISSnezhana_11ПроизводительEForm,
    'i-i-s-snezhana-11-товар-e': IISSnezhana_11ТоварEForm
  },

});

export default translations;
