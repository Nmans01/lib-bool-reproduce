# lib-bool-reproduce

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