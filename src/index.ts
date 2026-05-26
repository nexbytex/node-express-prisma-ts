import prisma from "./prisma";

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "Alice",
            email: "alice@example.com"
        }
    })
}

// main()
//     .then(() => {
//         console.log("User created successfully");
//     })
//     .catch((error) => {
//         console.error("Error creating user:", error);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });

async function getUsers() {
    const users = await prisma.user.findMany();
    console.log(users);
}

getUsers()
    .then(() => {
        console.log("Users retrieved successfully ✔️");
    })
    .catch((error) => {
        console.error("Error retrieving users:", error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

