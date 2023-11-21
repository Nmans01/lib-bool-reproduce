import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

function invariant(thing: any, message: string) {
    if (!thing) throw new Error(message);
    return thing;
}

const url = invariant(process.env.DATABASE_URL, 'DATABASE_URL is missing in .env.');

// Create a new instance of the libSQL database client
const libsql = createClient({ url });

// Create a Prisma "adapter" for libSQL
const adapter = new PrismaLibSQL(libsql);

// Pass the adapter option to the Prisma Client instance
const prisma = new PrismaClient({ adapter });

const user = await prisma.user.create({
    data: {
        name: 'Jon',
        enabled: true,
    }
});

console.log(user);