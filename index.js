const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

//get, post, put, patch, delete
//localhost:3000

app.get("/", (req, res) => {
  res.send("Hola que hace");
});

const autores = ["mata", "mata2", "mata3"];
const book_Autors = ["libro1", "libro2", "libro3"];
const books = ["libro1", "libro2", "libro3"];
const loans = ["prestamo1", "prestamo2", "prestamo3"];
const users = ["usuario1", "usuario2", "usuario3"];
//autores|
app.get("/autores", (req, res) => {
  console.log("autores");
  res.json(autores);
});

app.put("/autores/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = autores.findIndex((U) => U.id === id);
  if (index !== -1) {
    autores[index] = { ...autores[index], ...req.body };
    res.json(autores[index]);
  } else {
    res.status(404).json({ error: "Autor no encontrado" });
  }
});
app.delete("/autores", (req, res) => {
  const id = parseInt(req.params.id);
  const index = autores.findIndex((U) => U.id === id);
  if (index !== -1) {
    const DeleteAutor = autores.splice(index, 1);
    res.json(DeleteAutor[0]);
  } else {
    res.status(404).json({ error: "Autor no encontrado" });
  }
});
app.post("/autores", (req, res) => {
  const autor = req.body;
  autor.id = autor.lenght + 1;
  autor.push(autor);
  res.status(201).json(autor);
});
app.get("/autores/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const autores = autores.find((autor) => autor.id === id);
  if (autores) {
    res.json(autores);
  } else {
    res.status(404).json({ error: "Autor no encontrado" });
  }
});

//libros|
app.get("/books", (req, res) => {
  console.log("books");
  res.json(books);
});
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((U) => U.id === id);
  if (index !== -1) {
    libros[index] = { ...libros[index], ...req.body };
    res.json(libros[index]);
  } else {
    res.status(404).json({ error: "libro no encontrado" });
  }
});
app.delete("/books", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((U) => U.id === id);
  if (index !== -1) {
    const DeleteLibro = libros.splice(index, 1);
    res.json(DeleteLibro[0]);
  } else {
    res.status(404).json({ error: "libro no encontrado" });
  }
});
app.post("/books", (req, res) => {
  const book = req.body;
  book.id = book.lenght + 1;
  book.push(book);
  res.status(201).json(book);
});
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const books = books.find((book) => book.id === id);
  if (books) {
    res.json(books);
  } else {
    res.status(404).json({ error: "libro no encontrado" });
  }
});

//book_Autors|
app.get("/book_Autors", (req, res) => {
  console.log("book_Autors");
  res.json(book_Autors);
});
app.put("/book_Autors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = book_Autors.findIndex((U) => U.id === id);
  if (index !== -1) {
    book_Autors[index] = { ...book_Autors[index], ...req.body };
    res.json(book_Autors[index]);
  } else {
    res.status(404).json({ error: "libro no encontrado" });
  }
});
app.delete("/book_Autors", (req, res) => {
  const id = parseInt(req.params.id);
  const index = book_Autors.findIndex((U) => U.id === id);
  if (index !== -1) {
    const DeleteLibro = book_Autors.splice(index, 1);
    res.json(DeleteLibro[0]);
  } else {
    res.status(404).json({ error: "libro no encontrado" });
  }
});
app.post("/book_Autors", (req, res) => {
  const book_Autor = req.body;
  book_Autor.id = book_Autor.lenght + 1;
  book_Autor.push(book_Autor);
  res.status(201).json(book_Autor);
});
app.get("/book_Autors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book_Autors = book_Autors.find((book_Autor) => book_Autor.id === id);
  if (book_Autors) {
    res.json(book_Autors);
  } else {
    res.status(404).json({ error: "libro no encontrado" });
  }
});

//loans|
app.get("/loans", (req, res) => {
  console.log("loans");
  res.json(loans);
});
app.put("/loans/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = loans.findIndex((U) => U.id === id);
  if (index !== -1) {
    loans[index] = { ...loans[index], ...req.body };
    res.json(loans[index]);
  } else {
    res.status(404).json({ error: "Prestamo no encontrado" });
  }
});
app.delete("/book_Autors", (req, res) => {
  const id = parseInt(req.params.id);
  const index = book_Autors.findIndex((U) => U.id === id);
  if (index !== -1) {
    const Deleteprestamo = loans.splice(index, 1);
    res.json(Deleteprestamo[0]);
  } else {
    res.status(404).json({ error: "Prestamo no encontrado" });
  }
});
app.post("/loans", (req, res) => {
  const loan = req.body;
  loan.id = loan.lenght + 1;
  loan.push(loan);
  res.status(201).json(loan);
});
app.get("/loans/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const loans = loans.find((loan) => loan.id === id);
  if (loans) {
    res.json(loans);
  } else {
    res.status(404).json({ error: "Prestamo no encontrado" });
  }
});

//users|
app.get("/users", (req, res) => {
  console.log("users");
  res.json(users);
});
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((U) => U.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
});
app.delete("/book_Autors", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((U) => U.id === id);
  if (index !== -1) {
    const Deleteusuario = users.splice(index, 1);
    res.json(Deleteusuario[0]);
  } else {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
});
app.post("/users", (req, res) => {
  const user = req.body;
  user.id = user.lenght + 1;
  user.push(user);
  res.status(201).json(user);
});
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const users = users.find((user) => user.id === id);
  if (users) {
    res.json(users);
  } else {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
});
//iniciar el servidor
app.listen(port, () => {
  console.log(`me amarraron como puerco', port`);
});
