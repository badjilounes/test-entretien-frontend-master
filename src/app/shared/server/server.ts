import { Model, Response, Registry, Server } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { adresseData, employesData } from './data';
import { AdresseDetails, EmployeDetails } from './data.interface';

const EmployeModel: ModelDefinition<EmployeDetails> = Model.extend({});
const AdresseModel: ModelDefinition<AdresseDetails> = Model.extend({});

type AppRegistry = Registry<
  {
    employe: typeof EmployeModel;
    adresse: typeof AdresseModel;
  },
  {}
>;
type AppSchema = Schema<AppRegistry>;

const employes: EmployeDetails[] = employesData;
const adresses: AdresseDetails[] = [adresseData];

export function makeServer() {
  return new Server({
    logging: true,
    models: {
      employe: EmployeModel,
      adresse: AdresseModel,
    },

    routes() {
      this.namespace = 'api';
      let newEmployeId = 3;

      this.get('/employe', (schema: AppSchema) => {
        const employe = schema.all('employe');

        return new Response(200, {}, employe || 'foo');
      });

      this.get('/employe/:id', (schema: AppSchema, request) => {
        const param = request.params['id'];
        const response = schema.find('employe', param);

        return new Response(200, {}, response || 'foo');
      });

      this.post('/employe', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = newEmployeId++;
        schema.create('employe', attrs);
        const response = schema.find('employe', attrs.id);

        return new Response(200, {}, response || 'foo');
      });

      this.get('/adresse', (schema: AppSchema) => {
        const adresse = schema.all('adresse');

        return new Response(200, {}, adresse || 'foo');
      });
    },
    seeds(server) {
      server.db.loadData({
        employes: employes,
        adresses: adresses,
      });
    },
  });
}

export default {
  makeServer,
};
