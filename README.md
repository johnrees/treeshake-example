[`@solana/web3.js`](https://github.com/solana-labs/solana-web3.js) is not tree-shakeable.

In `src/index.ts` I'm only importing a numeric const (`LAMPORTS_PER_SOL`)

```typescript
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
console.log(LAMPORTS_PER_SOL);
```

the expected compiled file would look something like this

```typescript
const LAMPORTS_PER_SOL = 1000000000;
console.log(LAMPORTS_PER_SOL);
```

but currently the entire web3.js package is injected, which means the output filesize is about 1000x larger than this and includes many extra libraries (that can have issues with react native etc) that aren't necessary.

## Builds

Outputs for `ncc`, `rollup` and `webpack` are in the `dist/` directory.

| tool    | command                 | minified filesize |
| ------- | ----------------------- | ----------------- |
| ncc     | `npm run build:ncc`     | 512 kB            |
| rollup  | `npm run build:rollup`  | 483 kB            |
| webpack | `npm run build:webpack` | 381 kB            |

## Notes

I tried building `@solana/web3.js` with typescript's `tsc` instead of `rollup` but https://github.com/Rich-Harris/agadoo still claims its not tree-shakeable.
