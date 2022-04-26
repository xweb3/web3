# [BpfLoader](https://solana-labs.github.io/solana-web3.js/classes/BpfLoader.html)
> 事务与程序加载器交互的工厂类

### getMinNumSignatures

加载程序所需的最小签名数，不包括
 - 重试
 - 可用于计算交易费用

```js
// getMinNumSignatures(dataLength: number): number

static getMinNumSignatures(dataLength: number): number {
  return Loader.getMinNumSignatures(dataLength);
}

```


### load

加载 Bpf 程序

```ts
static load(
  connection: Connection, // connection要使用的连接
  payer: Signer, // payer帐户，用于支付程序加载费
  program: Signer, // 程序帐户将程序加载到
  elf: Buffer | Uint8Array | Array<number>,  // 包含BPF程序的整个elf
  loaderProgramId: PublicKey, // ProgramId要使用的BPF加载程序的程序id
): Promise<boolean> {
  return Loader.load(connection, payer, program, loaderProgramId, elf);
}
```
