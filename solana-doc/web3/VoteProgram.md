# [VoteProgram](https://solana-labs.github.io/solana-web3.js/classes/VoteProgram.html)
> 用于与投票程序交互的事务的工厂类
> Factory class for transactions to interact with the Vote program

```s
Properties

# 标识投票程序的公钥
# Public key that identifies the Vote program
programId

# 这是从solana投票程序VoteState struct生成的，名为VoteState:：size_of（）
# This is generated from the solana-vote-program VoteState struct as VoteState::size_of():
space
```

```s
Methods

# 生成一个事务，授权投票帐户上的新投票人或取款人。
# Generate a transaction that authorizes a new Voter or Withdrawer on the Vote account.
authorize

# 生成创建新投票帐户的事务。
# Generate a transaction that creates a new Vote account.
createAccount

# 生成一条初始化指令。
# Generate an Initialize instruction.
initializeAccount

# 生成从投票帐户中提取的交易记录。
# Generate a transaction to withdraw from a Vote account.
withdraw
```