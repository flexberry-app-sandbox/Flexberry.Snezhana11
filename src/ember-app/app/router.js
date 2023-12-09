import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-snezhana-11-заказ-l');
  this.route('i-i-s-snezhana-11-заказ-e',
  { path: 'i-i-s-snezhana-11-заказ-e/:id' });
  this.route('i-i-s-snezhana-11-заказ-e.new',
  { path: 'i-i-s-snezhana-11-заказ-e/new' });
  this.route('i-i-s-snezhana-11-клиент-l');
  this.route('i-i-s-snezhana-11-клиент-e',
  { path: 'i-i-s-snezhana-11-клиент-e/:id' });
  this.route('i-i-s-snezhana-11-клиент-e.new',
  { path: 'i-i-s-snezhana-11-клиент-e/new' });
  this.route('i-i-s-snezhana-11-менеджер-l');
  this.route('i-i-s-snezhana-11-менеджер-e',
  { path: 'i-i-s-snezhana-11-менеджер-e/:id' });
  this.route('i-i-s-snezhana-11-менеджер-e.new',
  { path: 'i-i-s-snezhana-11-менеджер-e/new' });
  this.route('i-i-s-snezhana-11-поставщик-l');
  this.route('i-i-s-snezhana-11-поставщик-e',
  { path: 'i-i-s-snezhana-11-поставщик-e/:id' });
  this.route('i-i-s-snezhana-11-поставщик-e.new',
  { path: 'i-i-s-snezhana-11-поставщик-e/new' });
  this.route('i-i-s-snezhana-11-производитель-l');
  this.route('i-i-s-snezhana-11-производитель-e',
  { path: 'i-i-s-snezhana-11-производитель-e/:id' });
  this.route('i-i-s-snezhana-11-производитель-e.new',
  { path: 'i-i-s-snezhana-11-производитель-e/new' });
  this.route('i-i-s-snezhana-11-товар-l');
  this.route('i-i-s-snezhana-11-товар-e',
  { path: 'i-i-s-snezhana-11-товар-e/:id' });
  this.route('i-i-s-snezhana-11-товар-e.new',
  { path: 'i-i-s-snezhana-11-товар-e/new' });
});

export default Router;
