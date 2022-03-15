import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    // models é como se fosse a tabela no banco
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    // Gerar dados em massa
    factories: {
      // nome do model
      user: Factory.extend({
        name(i: number) {
          // returna User 1, User 2 ...
          return `User ${i + 1}`;
          // return `${faker.name.firstName()} ${faker.name.lastName()}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          // Data, recente, ultimos 10 dias. Posso remover o new Date()
          return faker.date.recent(10, new Date());
        },
      }),
    },

    // Usado para gerar dados no mirage ao iniciar a plicação
    seeds(server) {
      // Usa o model e a quantidade de usuarios
      server.createList("user", 123);
    },

    routes() {
      // Seta o caminho default da api
      this.namespace = "api";

      // Seta um delay para TODA requisição do mirage
      this.timing = 750;

      // Seta os métodos
      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user"))
          .users.slice(pageStart, pageEnd);

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.get("/users/:id");
      this.post("/users");

      // Reseta o namespace para não conflitar com próprio o next/api
      this.namespace = "";

      // Faz com que as requisições não tratadas pelo mirage, funcionem corretamente pelo caminho "/api"
      // this.passthrough();
      this.passthrough('/_next/static/development/_devPagesManifest.json');
      // this.passthrough((request) => {
      //   console.log("request.url:",request.url);
      //   if (request.url === "/_next/static/development/_devPagesManifest.json") return true;
      // });
    },
  });

  return server;
}
