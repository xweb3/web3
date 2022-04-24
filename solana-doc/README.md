# @solana/web3.js

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