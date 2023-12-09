import { Serializer as МенеджерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-snezhana-11-менеджер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МенеджерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
