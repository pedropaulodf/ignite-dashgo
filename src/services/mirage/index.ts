import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    // models é como se fosse a tabela no banco
    models: {
      user: Model.extend<Partial<User>>({})
    },

    // Gerar dados em massa
    factories: {
      // nome do model
      user: Factory.extend({
        name(i: number) {
          // returna User 1, User 2 ...
          return `User ${i + 1}`
          // return `${faker.name.firstName()} ${faker.name.lastName()}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          // Data, recente, ultimos 10 dias. Posso remover o new Date()
          return faker.date.recent(10, new Date());
        },
      })
    },

    // Usado para gerar dados no mirage ao iniciar a plicação
    seeds(server) {
      // Usa o model e a quantidade de usuarios
      server.createList('user', 20);
    },

    routes () {
      // Seta o caminho default da api
      this.namespace = 'api';

      // Seta um delay para TODA requisição do mirage
      this.timing = 750;

      // Seta os métodos
      this.get('/users');
      this.post('/users');

      // Reseta o namespace para não conflitar com próprio o next/api
      this.namespace = '';

      // Faz com que as requisições não tratadas pelo mirage, funcionem corretamente pelo caminho "/api"
      this.passthrough();
    }
  })

  return server;
}