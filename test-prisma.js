const { PrismaClient } = require('@prisma/client');

async function main() {
  try {
    const prisma = new PrismaClient();
    console.log('Prisma Client initialized successfully');
    await prisma.$disconnect();
  } catch (e) {
    console.error('Error initializing Prisma Client:', e);
    process.exit(1);
  }
}

main();
