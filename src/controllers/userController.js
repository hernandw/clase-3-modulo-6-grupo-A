import fs from "fs";

const home = (req, res) => {
  res.send("Página Principal desde controller");
};

const about = (req, res) => {
  res.send("Página de Nosotros desde controller");
};

const login = (req, res) => {
  res.send("Página de login desde controller");
};

const contact = (req, res) => {
  res.send("Página de contacto desde controller");
};

const getUsers = (req, res) => {
  const users = JSON.parse(fs.readFileSync("./src/data/users.json", "utf8"));

  res.send(users);
};

const getProducts = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync("./src/data/products.json", "utf8"),
  );
  res.json(products);
};

const addUser = (req, res) => {
  //leer lo que enviamos en el body
  const user = req.body;

  //LEER el archivo con los usurios
  const users = JSON.parse(fs.readFileSync("./src/data/users.json", "utf8"));
  users.push(user);

  //Escribir el archivo
  fs.writeFileSync("./src/data/users.json", JSON.stringify(users));
  res.send("Archivo creado");
};


const addProduct = (req, res)=>{
  const product = req.body
  const products = JSON.parse(fs.readFileSync("./src/data/products.json", "utf8"));
  products.push(product)
  fs.writeFileSync("./src/data/products.json", JSON.stringify(products));
  res.send('Producto fue agregado con exito')
}

export {
  home,
  about,
  login,
  contact,
  getUsers,
  getProducts,
  addUser,
  addProduct,
};
