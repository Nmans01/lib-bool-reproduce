# lib-bool-reproduce

> Reproduces an error in which a database entry fails to be added to a libsql db, presumably due to having a boolean column.

To install dependencies:

```bash
bun install
```

To initialize db via prisma:

```bash
bun x prisma db push
```

To run:

```bash
bun start
```

> Should fail with `RangeError: Loss of precision reading BigInt (1)`