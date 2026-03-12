import express from "express";
import userRouter from "./routes/userRoutes.js";


const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json())

//rutas
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
