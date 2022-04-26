# [PublicKey](https://solana-labs.github.io/solana-web3.js/classes/PublicKey.html)
> 公开密钥

```s
Constructors

# 创建一个新的公开密钥对象
constructor
```

```s
Properties

# 默认的公开密钥值，都是 0
default
```

```s
Methods

encode

# 验证两个公开密钥是否相等
equals

# 返回公钥的 base58 表示形式
toBase58

# 返回公钥的 Buffer 表示形式
toBuffer

# 返回公钥的字节数组表示形式
toBytes

# 返回公钥的 JSON 表示形式
toJSON

# 返回公钥的字符串表示形式 （文档是否有错误）
toString

# createProgramAddressSync 异步版本，用于向后兼容
# Async version of createProgramAddressSync For backwards compatibility
createProgramAddress

# 从种子和程序ID派生程序地址。
# Derive a program address from seeds and a program ID.
createProgramAddressSync

# 从另一个密钥、种子和程序ID派生一个公钥。该程序ID还将作为公钥的所有者，授予其向帐户写入数据的权限。
# Derive a public key from another key, a seed, and a program ID. The program ID will also serve as the owner of the public key, giving it permission to write data to the account.
createWithSeed

decode

decodeUnchecked

# findProgramAddressSync的异步版本，用于向后兼容
findProgramAddress

# 有效的程序地址必须脱离ed25519曲线。此函数迭代一个nonce，直到找到一个与seeds组合时产生有效程序地址的nonce。
findProgramAddressSync

# 检查pubkey是否位于ed25519曲线上。
isOnCurve
```