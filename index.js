const express = require("express");
const getmongoDb = require("./configr/server");
const RegistorRout = require("./controles/regitor.controle");
const app = express();
app.use(express.json());
const cors = require("cors");
const loginRout = require("./controles/login.control");
const CartRouter = require("./controles/cart.controle");
const ProductRouter = require("./controles/product.controle"); 
const dotenv = require("dotenv")

app.use(cors({
  origin :"*"
}));


app.get("/", (req, res) => {
  res.send("servser page");
});

app.use("/register", RegistorRout);
app.use("/cart",CartRouter)
app.use("/login", loginRout);
app.use("/productRout",ProductRouter)

const server = async () => {
  try {
    await app.listen(3000, () => {
      getmongoDb();
      console.log("server is run");
    });
  } catch (error) {
   console.log(error) 
  }

};
server();
