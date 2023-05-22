import express from "express";
import { User } from "./models/user";
import { UserService } from "./services/userService";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const userService = new UserService();

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Simple User API",
      version: "1.0.0",
      description: "A simple API to create and retrieve users",
    },
    servers: [
      {
        url: "http://localhost:4200",
      },
    ],
  },
  apis: ["./src/index.ts", "./src/schemas/userSchema.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
app.post("/user", (req, res) => {
  const { name, email, code } = req.body;
  const user = new User(name, email, code);
  userService.saveUser(user);
  res.json(user);
});

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get a user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The user was found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 */
app.get("/user/:id", (req, res) => {
  const user = userService.getUser(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
