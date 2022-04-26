# [Loader](https://solana-labs.github.io/solana-web3.js/classes/Loader.html)
> 程序加载器接口

```s
Properties
 # 每个加载事务中放置的程序数据量
chunkSize
```

```s
Methods

# 加载程序（不包括重试）所需的最小签名数
# 可用于计算交易费用
getMinNumSignatures

# 加载一个通用程序
load
```