const express = require('express');
const app = express();
const mongoos = require('mongoose');
const productRoutes = require('./Routes/product');
const dotenv = require('dotenv');
const mongodb = "mongodb://localhost:27017/ecommerce";
dotenv.config();
// mongoos.set("strictQuery", false);
mongoos.connect(process.env.DB_CONECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
).then(() => console.log("database is connected !")).catch(err => console.log(err))
// midleware
app.use(express.json());
app.use(cors());
app.use('/api/product', productRoutes);
app.listen(6000, () => {
  console.log("Sever is Started 6000 !");
})