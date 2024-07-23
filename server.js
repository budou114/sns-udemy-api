const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const PORT = 5050;

const prisma = new PrismaClient();

// 新規ユーザー登録API
app.post("/api/auth/register", async (req, res) => {
    const { username, email, password } = req.body;

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password,
        },
    });

    return res.json({ user });
});

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));