# [StakeProgram](https://solana-labs.github.io/solana-web3.js/classes/StakeProgram.html)
> 用于事务处理的工厂类，以与 Stack 程序交互。
> Factory class for transactions to interact with the Stake program

```s
Properties

# 鉴定 Stake 程序的公钥。
# Public key that identifies the Stake program
programId

# 股份帐户的最大空间
# Max space of a Stake account
space
```

```s
Methods

# 生成一项交易，授权新公钥作为赌注帐户上的赌注或取款人。
# Generate a Transaction that authorizes a new PublicKey as Staker or Withdrawer on the Stake account.
authorize

# 使用种子生成一项交易，授权新公钥作为赌注帐户上的赌注或取款人。（翻译问题）
# Generate a Transaction that authorizes a new PublicKey as Staker or Withdrawer on the Stake account.
authorizeWithSeed

# 生成创建新股份账户的交易
# Generate a Transaction that creates a new Stake account
createAccount

# 生成一个事务，该事务在由from、seed和stack programId生成的地址创建一个新的stack帐户。
# Generate a Transaction that creates a new Stake account at an address generated with from, a seed, and the Stake programId
createAccountWithSeed

# 生成一个取消激活股权代币的交易。
# Generate a Transaction that deactivates Stake tokens.
deactivate

# 生成一个事务，将赌注代币委托给验证器投票公钥。该交易还可用于将股份重新分配给新的验证器投票公钥。
# Generate a Transaction that delegates Stake tokens to a validator Vote PublicKey. This transaction can also be used to redelegate Stake to a new validator Vote PublicKey.
delegate

# 生成初始化指令以添加到桩创建事务
# Generate an Initialize instruction to add to a Stake Create transaction
initialize

# 生成合并股权账户的交易。
# Generate a Transaction that merges Stake accounts.
merge

# 生成一个将赌注代币拆分为另一个赌注帐户的交易
# Generate a Transaction that splits Stake tokens into another stake account
split

# 生成一个事务，该事务将赌注令牌拆分为从基本公钥和种子派生的另一个帐户
# Generate a Transaction that splits Stake tokens into another account derived from a base public key and seed
splitWithSeed

# 生成一个提取停用的股权代币的交易。
# Generate a Transaction that withdraws deactivated Stake tokens.
withdraw
```