# [SystemProgram](https://solana-labs.github.io/solana-web3.js/classes/SystemProgram.html)


```s
Properties

# 验证系统程序的公钥
# Public key that identifies the System program
programId
```

```s
Methods

# 生成在没有资金的情况下分配帐户空间的事务指令
# Generate a transaction instruction that allocates space in an account without funding
allocate

# 生成将帐户分配给程序的事务指令
# Generate a transaction instruction that assigns an account to a program
assign

# 生成创建新帐户的交易指令
# Generate a transaction instruction that creates a new account
createAccount

# 生成一条事务指令，该指令在由from、seed和programId生成的地址创建一个新帐户
# Generate a transaction instruction that creates a new account at an address generated with from, a seed, and programId
createAccountWithSeed

# 生成创建新临时帐户的事务
# Generate a transaction that creates a new Nonce account
createNonceAccount

# 生成指令以在nonce帐户中提前使用nonce
# Generate an instruction to advance the nonce in a Nonce account
nonceAdvance

# 生成一条交易指令，授权新公钥作为临时帐户的授权。
# Generate a transaction instruction that authorizes a new PublicKey as the authority on a Nonce account.
nonceAuthorize

# 生成初始化Nonce帐户的指令
# Generate an instruction to initialize a Nonce account
nonceInitialize

# 生成从临时帐户中提取lamports的交易指令
# Generate a transaction instruction that withdraws lamports from a Nonce account
nonceWithdraw

# 生成将lamports从一个帐户转移到另一个帐户的事务指令
# Generate a transaction instruction that transfers lamports from one account to another
transfer
```