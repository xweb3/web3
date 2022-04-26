# @solana/web3.js

- [Account 帐户密钥对](./Account.md)
- [Authorized 授权](./Authorized.md)
- [BpfLoader 事务与程序加载器](./BpfLoader.md)
- [Connection 与完整节点 JSON RPC端点的连接](./Connection.md)

- [Ed25519Program Ed25519程序](./Ed25519Program.md)

- [Enum 枚举](./Enum.md)
- [EpochSchedule 大纪元时间表](./EpochSchedule.md)
- [Keypair 用于签署交易的帐户密钥对。](./Keypair.md)
- [Loader 程序加载器接口](./Loader.md)
- [Lockup 股份账户锁定信息](./Lockup.md)
- [Message 要进行原子化处理的指令列表](./Message.md)
- [NonceAccount 临时账户](./NonceAccount.md)
- [PublicKey 公开密钥](./PublicKey.md)
- [Secp256k1Program secp256k1程序](./Secp256k1Program.md)

- [StakeInstruction Stake 指令](./StakeInstruction.md)
- [StakeProgram Stake 程序](./StakeProgram.md)


- [Struct 结构](./Struct.md)


- [SystemInstruction 系统指令](./SystemInstruction.md)
- [SystemProgram 系统程序](./SystemProgram.md)


- [Transaction 交易](./Transaction.md)
- [TransactionInstruction 交易指令](./TransactionInstruction.md)
- [SendTransactionError 发送交易错误](./SendTransactionError.md)


- [ValidatorInfo 验证器信息](./ValidatorInfo.md)

- [VoteAccount 投票账户](./VoteAccount.md)
- [VoteInit 投票账户信息](./VoteInit.md)
- [VoteInstruction 投票指示](./VoteInstruction.md)
- [VoteProgram 投票程序](./VoteProgram.md)


## github

- [github](https://github.com/solana-labs/solana-web3.js)
- [doc](https://solana-labs.github.io/solana-web3.js/)

## 如何使用

```js
import * as web3 from '@solana/web3.js';
```

### 连接到集群

```js
// Connect to cluster
var connection = new web3.Connection(
  web3.clusterApiUrl('devnet'),
  'confirmed',
);
```

### 生成新的随机公钥

```js
// 第一种
// Generate a new random public key
var from = web3.Keypair.generate();
var airdropSignature = await connection.requestAirdrop(
  from.publicKey,
  web3.LAMPORTS_PER_SOL,
);
await connection.confirmTransaction(airdropSignature);

// Generate a new random public key
var to = web3.Keypair.generate();
```

```js
// 第二种
let secretKey = Uint8Array.from([
  202, 171, 192, 129, 150, 189, 204, 241, 142,  71, 205,
  2,  81,  97,   2, 176,  48,  81,  45,   1,  96, 138,
  220, 132, 231, 131, 120,  77,  66,  40,  97, 172,  91,
  245,  84, 221, 157, 190,   9, 145, 176, 130,  25,  43,
  72, 107, 190, 229,  75,  88, 191, 136,   7, 167, 109,
  91, 170, 164, 186,  15, 142,  36,  12,  23
]);

let keypair = web3.Keypair.fromSecretKey(secretKey);
```

### 获取帐户信息

```js
// get account info
// account data is bytecode that needs to be deserialized
// serialization and deserialization is program specific
let account = await connection.getAccountInfo(wallet.publicKey);
console.log(account);
```

### 创建新的代币造币厂

```js
import { createMint } from '@solana/spl-token';

// Create new token mint
const mint = await createMint(connection, fromWallet, fromWallet.publicKey, null, 9);
```

### 创建和发送事务

```js
// Creating and Sending Transactions
// Add transfer instruction to transaction
var transaction = new web3.Transaction().add(
  web3.SystemProgram.transfer({
    fromPubkey: from.publicKey,
    toPubkey: to.publicKey,
    lamports: web3.LAMPORTS_PER_SOL / 100,
  }),
);
```

### 签署交易、广播和确认 / 发送事务
```js
var signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [from],
);

console.log('SIGNATURE', signature);
```

### 验证钱包地址

```js
import { PublicKey } from '@solana/web3.js'

function validateSolAddress(address: string){
    try {
      let pubkey = new PublicKey(address)
      return PublicKey.isOnCurve(pubkey.toBuffer())
    } catch (error) {
      return false
    }
} 

function modalSubmit(modal: any){
  const firstResponse = modal.getTextInputValue(walletQuestFields.modal.componentsList[0].id)
 
  let isSolAddress = validateSolAddress(firstResponse)

  if (isSolAddress) {
    console.log('The address is valid')
  }else{
    console.log('The address is NOT valid')
  }
}
```