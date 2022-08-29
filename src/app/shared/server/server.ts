import { Model, Response, Registry, Server } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { addressData as addressData, employeesData as employeesData } from './data';
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
const addresses: AddressDetails[] = [addressData];

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

      this.get('/employee', (schema: AppSchema) => {
        const employee = schema.all('employee');

        return new Response(200, {}, employee || 'foo');
      });

      this.get('/employee/:id', (schema: AppSchema, request) => {
        const param = request.params['id'];
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

      this.get('/address', (schema: AppSchema) => {
        const address = schema.all('address');

        return new Response(200, {}, address || 'foo');
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
