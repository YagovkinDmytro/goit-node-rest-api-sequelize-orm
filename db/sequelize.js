import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "dmytro",
  database: "db_contacts_b5nk",
  password: "h8RIkGWjyis134ADMP3E6bLc1BQlFPUU",
  host: "dpg-cqmdmt08fa8c73cgudug-a.frankfurt-postgres.render.com",
  port: "5432",
  dialectOptions: {
    ssl: true,
  },
});

export default sequelize;
