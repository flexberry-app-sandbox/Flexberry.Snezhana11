import {
  defineNamespace,
  defineProjections,
  Model as ЗаказMixin
} from '../mixins/regenerated/models/i-i-s-snezhana-11-заказ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаказMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
