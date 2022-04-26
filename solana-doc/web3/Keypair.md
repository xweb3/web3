# [Keypair](https://solana-labs.github.io/solana-web3.js/classes/Keypair.html)
> 用于签署交易的帐户密钥对。
> An account keypair used for signing transactions.

```s
Constructors

# 创建一个新的密钥对实例。如果未提供ED25519密钥对，则生成随机密钥对。
constructor
```

```s
Accessors

# 此密钥对的公钥
publicKey

# 此密钥对的原始密钥
secretKey
```

```s
Methods

# 从原始密钥字节数组创建密钥对。
fromSecretKey

# 从32字节的种子生成密钥对。
fromSeed

# 生成一个新的随机密钥对
generate
```