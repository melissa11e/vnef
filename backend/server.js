import express from "express";
import cors from "cors";

import db from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

db.serialize(() => {

  // COLABORADORES IMPORTADOS

  db.run(`
    CREATE TABLE IF NOT EXISTS colaboradores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,

      matricula TEXT,
      matricula_drt TEXT,

      nome_completo TEXT,

      email TEXT,
      email_pessoal TEXT,

      endereco_rua TEXT,
      endereco_num TEXT,

      endereco_cep TEXT,

      bairro TEXT,
      cidade TEXT,

      complemento_end TEXT,

      estado TEXT
    )
  `);

  // REGISTROS

  db.run(`
    CREATE TABLE IF NOT EXISTS registros (
      id INTEGER PRIMARY KEY AUTOINCREMENT,

      matricula_registrada TEXT,

      empresa TEXT,
      beneficio TEXT,
      fazer TEXT,

      data_chegada TEXT,
      data_saida TEXT,

      nome_completo TEXT,

      matricula TEXT,
      matricula_drt TEXT,

      email TEXT,
      email_pessoal TEXT,

      endereco_rua TEXT,
      endereco_num TEXT,

      complemento_end TEXT,

      endereco_cep TEXT,

      bairro TEXT,
      cidade TEXT,

      estado TEXT
    )
  `);

  console.log("Tabelas criadas com sucesso!");
});

app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando!"
  });
});

app.get("/registros", (req, res) => {

  db.all(
    "SELECT * FROM registros",
    [],
    (err, rows) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(rows);
    }
  );

});

app.listen(3001, () => {
  console.log(
    "Servidor rodando na porta 3001"
  );
});