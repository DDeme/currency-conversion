const { PrismaClient } = require("@prisma/client");
const { history } = require("./data.js");

const prisma = new PrismaClient();

// TODO: fix ts-node run
const load = async () => {
  try {
    await prisma.history.deleteMany();
    // console.log("Deleted records in history table");

    // await prisma.$queryRaw`ALTER TABLE History AUTO_INCREMENT = 1`;
    // console.log("reset history auto increment to 1");

    // await prisma.history.createMany({
    //   data: history,
    // });
    // console.log("Added history data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
