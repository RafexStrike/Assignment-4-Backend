// src/server.ts
import app from "./app";
// import { prisma } from "./lib/prisma";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await prisma.$connect();
    console.log("Connected to prisma successfully!");

    app.listen(PORT, () => {
      console.log("Server is running successfully on the port:", PORT);
    });
  } catch (errror) {
    console.log(
      "sorry there has been an error in server.ts's main function, the error is:",
      errror,
    );
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
