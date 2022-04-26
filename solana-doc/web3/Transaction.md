# [Transaction](https://solana-labs.github.io/solana-web3.js/classes/Transaction.html)
> 交易;处理;业务;买卖;办理

```s
Constructors

# 构造一个空事务
# Construct an empty Transaction
constructor
```

```s
Properties

# 交易费支付人
# The transaction fee payer
feePayer

# 原子执行的指令
# The instructions to atomically execute
instructions

# 可选的临时信息。如果已填充，事务将使用持久的Nonce哈希，而不是recentBlockhash。必须由调用方填充
# Optional Nonce information. If populated, transaction will use a durable Nonce hash instead of a recentBlockhash. Must be populated by the caller
nonceInfo

# 最近的事务id。必须由调用方填充
# A recent transaction id. Must be populated by the caller
recentBlockhash

# 交易的签名。通常通过调用sign（）方法创建
# Signatures for the transaction. Typically created by invoking the sign() method
signatures
```

```s
Accessors

# 第一个（付款人）交易签名
# The first (payer) Transaction signature
signature
```

```s
Methods

# 向该事务添加一个或多个说明
# Add one or more instructions to this Transaction
add

# 将外部创建的签名添加到事务中。公钥必须与交易指令中的费用支付人或签名人帐户相对应。
# Add an externally created signature to a transaction. The public key must correspond to either the fee payer or a signer account in the transaction instructions.
addSignature

# 编译事务数据
# Compile transaction data
compileMessage

# 获取与交易相关的估计费用
# Get the estimated fee associated with a transaction
getEstimatedFee

# 使用指定帐户对交易进行部分签名。所有账户必须与交易说明中的费用支付人或签名人账户对应。
# sign方法的所有注意事项都适用于partialSign
# Partially sign a transaction with the specified accounts. All accounts must correspond to either the fee payer or a signer account in the transaction instructions.
# All the caveats from the sign method apply to partialSign
partialSign

# 以wire格式序列化事务。
# Serialize the Transaction in the wire format.
serialize

# 获取需要由签名覆盖的事务数据的缓冲区
# Get a buffer of the Transaction data that need to be covered by signatures
serializeMessage

# 指定将用于签署交易的公钥。第一个签名人将用作交易费支付人帐户。
# 签名可以与partialSign或addSignature一起添加
# Specify the public keys which will be used to sign the Transaction. The first signer will be used as the transaction fee payer account.
# Signatures can be added with either partialSign or addSignature
setSigners

# 使用指定的签名者对事务进行签名。多个签名可应用于一项交易。第一个签名被视为“主要”，用于识别和确认交易。
# 如果未设置交易费支付人，则第一个签名人将用作交易费支付人帐户。
# 在第一次调用签名后，不应修改交易字段，因为这样做可能会使签名无效并导致交易被拒绝。
# 在调用此方法之前，必须为事务分配有效的recentBlockhash
# Sign the Transaction with the specified signers. Multiple signatures may be applied to a Transaction. The first signature is considered "primary" and is used identify and confirm transactions.
# If the Transaction feePayer is not set, the first signer will be used as the transaction fee payer account.
# Transaction fields should not be modified after the first call to sign, as doing so may invalidate the signature and cause the Transaction to be rejected.
# The Transaction must be assigned a valid recentBlockhash before invoking this method
sign

# 验证已签署的完整交易的签名
# Verify signatures of a complete, signed Transaction
verifySignatures

# 将wire事务解析为事务对象。
# Parse a wire transaction into a Transaction object.
from

# 从消息和签名填充事务对象
# Populate Transaction object from message and signatures
populate
```
