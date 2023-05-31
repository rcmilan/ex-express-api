import express, { Request, Response } from "express";
import { User } from "./models/user";
import { UserService } from "./services/userService";

const app = express();
const userService = new UserService();

app.use(express.json());

app.post("/user", (req: Request, res: Response) => {
  const { name, email, code } = req.body;
  const user = new User(name, email, code);
  userService.saveUser(user);
  res.status(200).json(user);
});

app.get("/user/:id", (req: Request, res: Response) => {
  const user = userService.getUser(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
