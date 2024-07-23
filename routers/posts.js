const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// 呟き投稿用API
router.post("/post", async (req, res) => {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ message: "投稿内奥がありません。"});
    }

    try {
        const newPost = await prisma.post.create({
            data: {
                content,
                authorId: 1,
            },
        });

        res.status(201).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "サーバーエラーです。"});

    }

    return res.json({ user });
});

// 最新呟き取得用API
// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     const user = await prisma.user.findUnique({ where: { email }});

//     if (!user) {
//         return res.status(401).json({ error: "そのユーザーは存在しません。" });
//     }

//     const isPasswordVaild = await bcrypt.compare(password, user.password);

//     if (!isPasswordVaild) {
//         return res.status(401).json({ error: "そのパスワードは間違っています。" });
//     }

//     const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
//         expiresIn: "1d",
//     });

//     return res.json({ token });
// });

module.exports = router;