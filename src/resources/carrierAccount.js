import T from 'proptypes';
import base from './base';

export default api => (
  class CarrierAccount extends base(api) {
    static _name = 'CarrierAccount';
    static _url = 'v2/carrier_accounts';
    static _collectionKey = 'carrier_accounts';
    static key = 'carrier_account';

    static propTypes = {
      id: T.string,
      object: T.string,
      type: T.string,
      fields: T.object,
      clone: T.bool,
      description: T.string,
      reference: T.string,
      readable: T.string,
      credentials: T.object,
      test_credentials: T.object,
      created_at: T.oneOfType([T.object, T.string]),
      updated_at: T.oneOfType([T.object, T.string]),
    }

    static retrieve() {
      return super.notImplemented('retrieve');
    }

    async save() {
      return this.constructor.notImplemented('save');
    }
  }
);
