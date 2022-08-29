import { Model, Registry, Response, Server } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { addressesData, employeesData } from './data';
import { AddressDetails, EmployeeDetails } from './data.interface';

const EmployeeModel: ModelDefinition<EmployeeDetails> = Model.extend({});
const AddressModel: ModelDefinition<AddressDetails> = Model.extend({});

type AppRegistry = Registry<
  {
    employee: typeof EmployeeModel;
    address: typeof AddressModel;
  },
  {}
>;
type AppSchema = Schema<AppRegistry>;

const employees: EmployeeDetails[] = employeesData;
const addresses: AddressDetails[] = addressesData;

export function makeServer() {
  return new Server({
    logging: true,
    models: {
      employee: EmployeeModel,
      address: AddressModel,
    },

    routes() {
      this.namespace = 'api';
      let newEmployeeId = 3;
      let newAddressId = 2;

      this.get('/employee', (schema: AppSchema) => {
        const employee = schema.all('employee');

        return new Response(200, {}, employee || 'foo');
      });

      this.get('/employee/:id', (schema: AppSchema, request) => {
        const param: string = request.params['id'];
        const response = schema.find('employee', param);

        return new Response(200, {}, response || 'foo');
      });

      this.post('/employee', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = newEmployeeId++;
        schema.create('employee', attrs);
        const response = schema.find('employee', attrs.id);

        return new Response(200, {}, response || 'foo');
      });

      this.get('/address/succursal', (schema: AppSchema) => {
        const address = schema.where('address', { isSuccursal: true });

        return new Response(200, {}, address || 'foo');
      });

      this.post('/address', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = newAddressId++;
        schema.create('address', attrs);

        return new Response(
          200,
          {},
          schema.find('address', attrs.id) ?? undefined
        );
      });

      this.put('/address/:id', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const param: string = request.params['id'];
        const address = schema.find('address', param);
        address?.update(attrs);

        return new Response(
          200,
          {},
          schema.find('address', param) ?? undefined
        );
      });
    },
    seeds(server) {
      server.db.loadData({
        employees,
        addresses,
      });
    },
  });
}

export default {
  makeServer,
};
