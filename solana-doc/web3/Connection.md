# [Connection](https://solana-labs.github.io/solana-web3.js/classes/Connection.html)

A connection to a fullnode JSON RPC endpoint
与完整节点 JSON RPC端点的连接

```s
# 构造器
Constructors

# 建立JSON RPC连接
constructor
```

```s
# 访问器
Accessors

# 用于请求的默认承诺
commitment

# RPC端点
rpcEndpoint
```

```s
# 方法
Methods

_buildArgs
# 确认指定签名标识的交易。
confirmTransaction
# 获取指定公钥的所有帐户信息
getAccountInfo
# 获取指定公钥的所有帐户信息，返回上下文
getAccountInfoAndContext
# 获取指定公钥的余额
getBalance
# 获取指定公钥的余额，返回上下文
getBalanceAndContext
# 从集群中获取已处理的块。
getBlock
getBlockHeight
getBlockProduction
# 从群集中获取区块的签名列表，不包括奖励
getBlockSignatures
# 获取块的估计生产时间
getBlockTime
# 在两个插槽之间获取已确认的块
getBlocks
# 返回当前参与群集的节点列表
getClusterNodes
# 从集群中获取确认块的事务和事务状态列表。
getConfirmedBlock
# 从集群中获取确认块的签名列表，不包括奖励
# Deprecated since Solana v1.8.0. Please use getBlockSignatures instead.
getConfirmedBlockSignatures
# 获取涉及指定插槽范围内地址的交易的所有已确认签名的列表。允许的最大范围为10000个插槽。
getConfirmedSignaturesForAddress
# 返回交易的确认签名，该交易涉及从提供的签名或最近的确认数据块向后的地址
getConfirmedSignaturesForAddress2
# 获取确认交易的交易详细信息
getConfirmedTransaction
# 获取Epoch Info参数
getEpochInfo
# 获取历元计划参数
getEpochSchedule
# 从集群中获取最近区块哈希的费用计算器，返回上下文
# Deprecated since Solana v1.8.0. Please use getFeeForMessage instead.
getFeeCalculatorForBlockhash
# 从集群获取消息的费用，返回上下文
getFeeForMessage
# 获取尚未从分类账中清除的最低确认块的插槽
getFirstAvailableBlock
# 获取创世哈希
getGenesisHash
# 获取集群调速器参数
getInflationGovernor
# 为一个时代的地址列表获取通货膨胀奖励
getInflationReward
# 取20个最大的账户及其当前余额
getLargestAccounts
# 从集群获取最新的区块哈希
getLatestBlockhash
# 从集群获取最新的区块哈希，返回上下文
getLatestBlockhashAndContext
# 获取当前历元的先导计划
getLeaderSchedule
# 获取免除数据长度大小的帐户租金所需的最小余额
getMinimumBalanceForRentExemption
# 获取节点在其分类账中具有相关信息的最低插槽。如果节点配置为清除较旧的分类账数据，则该值可能会随着时间的推移而增加
getMinimumLedgerSlot
# 获取由公钥数组指定的多个帐户的所有帐户信息
getMultipleAccountsInfo
# 获取由公钥数组指定的多个帐户的所有帐户信息，并返回上下文
getMultipleAccountsInfoAndContext
# 从集群获取 Nonce 帐户的内容
getNonce
# 从集群获取 Nonce 帐户的内容，并返回上下文
getNonceAndContext
# 获取指定公钥的已解析帐户信息
getParsedAccountInfo
# 获取已确认交易的已解析交易详细信息
getParsedConfirmedTransaction
# 获取一批已确认交易的已解析交易详细信息
getParsedConfirmedTransactions
# 获取并分析指定程序id拥有的所有帐户
getParsedProgramAccounts
# 获取指定帐户拥有的已解析令牌帐户
getParsedTokenAccountsByOwner
# 获取已确认或已完成交易的已解析交易详细信息
getParsedTransaction
# 获取一批已确认交易的已解析交易详细信息
getParsedTransactions
# 获取指定程序id拥有的所有帐户
getProgramAccounts
# 从集群获取最近的区块哈希
getRecentBlockhash
# 从集群获取最近的区块哈希，并返回上下文
getRecentBlockhashAndContext
# 获取最近的性能样本
getRecentPerformanceSamples
# 获取签名的当前状态
getSignatureStatus
# 获取一批签名的当前状态
getSignatureStatuses
# 返回交易的确认签名，该交易涉及从提供的签名或最近的确认数据块向后的地址
getSignaturesForAddress
# 获取节点正在处理的当前插槽
getSlot
# 获取群集的当前插槽引线
getSlotLeader
# 从 startSlot 开始获取限制数量的插槽引线
getSlotLeaders
# 返回已委托的股份帐户的激活信息
getStakeActivation
# 获取有关当前供应的信息
getSupply
# 获取令牌帐户的当前余额
getTokenAccountBalance
# 获取指定帐户拥有的所有令牌帐户
getTokenAccountsByOwner
# 获取20个最大的代币账户，以及它们在给定铸币厂的当前余额。
getTokenLargestAccounts
# 获取当前供应的代币生成工具
getTokenSupply
# 获取集群当前的总货币供应量（以lamports为单位）
# Deprecated since v1.2.8. Please use getSupply instead.
getTotalSupply
# 从集群获取已确认或已完成的事务。
getTransaction
# 获取群集的当前事务计数
getTransactionCount
# 获取节点版本
getVersion
# 返回当前参与群集的节点列表
getVoteAccounts
# 注册在指定帐户更改时调用的回调
onAccountChange
# 注册在发出日志时调用的回调。
onLogs
# 注册一个回调，在指定程序拥有的帐户发生更改时调用
onProgramAccountChange
# 注册根目录更改时要调用的回调
onRootChange
# 注册在签名更新时调用的回调
onSignature
# 注册在接收和/或处理事务时调用的回调。
onSignatureWithOptions
# 注册要在插槽更改时调用的回调
onSlotChange
# 注册一个在插槽更新时调用的回调。SlotUpdate可能有助于跟踪集群的实时进度。
onSlotUpdate
# 取消注册帐户通知回调
removeAccountChangeListener
# 注销日志回调。
removeOnLogsListener
# 取消注册帐户通知回调
removeProgramAccountChangeListener
# 注销根通知回调
removeRootChangeListener
# 取消注册签名通知回调
removeSignatureListener
# 注销插槽通知回调
removeSlotChangeListener
# 注销插槽更新通知回调
removeSlotUpdateListener
# 请求将lamport分配到指定的地址
requestAirdrop
# 发送已签名、序列化为wire格式并编码为base64字符串的事务
sendEncodedTransaction
# 发送已签名并序列化为wire格式的事务
sendRawTransaction
# 签署并发送交易
sendTransaction
# 模拟交易
simulateTransaction
```
