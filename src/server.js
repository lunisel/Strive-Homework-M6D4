import express from "express";
import cors from "cors";
import productRouter from "./services/pruducts/index.js";
import reviewRouter from "./services/reviews/index.js";
import categoryRouter from "./services/categories/index.js";
import usersRouter from "./services/users/index.js";
/* import cartRouter from "./services/cart/index.js"; */
import { syncSequelize } from "./db/index.js";

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use("/products", productRouter);
app.use("/reviews", reviewRouter);
app.use("/category", categoryRouter);
app.use("/users", usersRouter);
/* app.use("/cart", cartRouter); */

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await syncSequelize();
});
app.on("error", (error) => console.log(`Server faild to run : ${error}`));
