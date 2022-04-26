# [Secp256k1Program](https://solana-labs.github.io/solana-web3.js/classes/Secp256k1Program.html)
> secp256k1程序

```s
Properties

# 识别secp256k1程序的公钥
# Public key that identifies the secp256k1 program
programId
```

```s
Methods

# 创建带有以太坊地址的secp256k1指令。地址必须是十六进制字符串或20字节长的缓冲区。
# Create an secp256k1 instruction with an Ethereum address. The address must be a hex string or a buffer that is 20 bytes long.
createInstructionWithEthAddress

# 通过私钥创建一个secp256k1指令，这个私钥缓存区必须有32字节长。
createInstructionWithPrivateKey

# 通过公钥创建一个secp256k1指令，这个公钥必须是64字节长的缓存区。
createInstructionWithPublicKey

# 从secp256k1公钥缓冲区构造以太坊地址。
publicKeyToEthAddress

```