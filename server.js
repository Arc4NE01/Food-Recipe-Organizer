import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import mealRoute from "./routes/mealRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

// configure env
dotenv.config();

//configure database
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/meal", mealRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/user", userRoute)

// rest api
app.get("/", (req, res) => {
  res.send("<h1> Welcome to Food Recipe App.. </h1>");
});

// port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
