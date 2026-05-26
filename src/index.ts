import express, { Request, Response } from "express"
import "dotenv/config"
import prisma from "./prisma"

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello, World!" });
});

app.get("/users", async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        console.error("Error retrieving users:", error)
        res.status(500).json({ message: "Failed to retrieve users" })
    }
})

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;


app.listen(PORT, () => {
    console.log(` ✔️ Server is running on port ${PORT}`);
});
