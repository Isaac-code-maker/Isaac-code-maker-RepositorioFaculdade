import "dotenv/config";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import router from "./routes";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173/',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors());

app.use(express());
app.use(express.json());
app.use(router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({
    status: 500,
    message: "Internal server error!",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}/`);
});
