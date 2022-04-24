## Solana RPC API中文文档

Solana 节点提供遵循 JSON-RPC 2.0 规范的 API 接口。

要在 JavaScript 程序内方法 Solana 节点，可以使用 solana-web3.js 库，它提供了访问Solana 节点的 RPC 方法的便捷接口。

Solana 节点支持 HTTP 和 WebSocket 访问，端口及端接点 URL 如下所示：

## HTTP

默认端口：8899

访问端节点：例如：http://localhost:8899

## WebSocket

默认端口：8900

访问端接点：例如：ws://localhost:8900


## HTTP API

```
getAccountInfo：查询账号信息
getBalance：查询账号余额
getBlock：查询区块数据
getBlockHeight：查询区块高度
getBlockProduction：查询区块生产信息
getBlockCommitment：查询区块提交信息
getBlocks：查询区块集
getBlocksWithLimit：查询指定区间内的区块
getBlockTime：查询区块时间
getClusterNodes：查询集群节点
getEpochInfo：查询周期信息
getEpochSchedule：查询周期计划
getFeeCalculatorForBlockhash：查询指定区块的费率计算器
getFeeRateGovernor：查询费率治理人
getFees：查询费率
getFirstAvailableBlock：查询第一个有效区块
getGenesisHash：查询创世哈希
getHealth：查询健康状态
getIdentity：查询实体标识
getInflationGovernor：查询通胀治理人
getInflationRate：查询通胀率
getInflationReward：查询通胀奖励
getLargestAccounts：查询最大账号
getLeaderSchedule：查询主导人计划表
getMaxRetransmitSlot：查询最大重发槽位
getMaxShredInsertSlot：查询最大插入槽位
getMinimumBalanceForRentExemption：查询可豁免租金的最小余额
getMultipleAccounts：查询多个账号
getProgramAccounts：查询程序账号
getRecentBlockhash：查询最近的区块哈希
getRecentPerformanceSamples：查询最近的性能样本
getSnapshotSlot：获取快照槽位
getSignaturesForAddress：获取地址签名
getSignatureStatuses：获取签名状态
getSlot：查询槽位
getSlotLeader：查询槽位主导人
getSlotLeaders：查询槽位主导人集合
getStakeActivation：查询抵押激活信息
getSupply：查询供应量
getTokenAccountBalance：查询通证账号余额
getTokenAccountsByDelegate：按代表查询通证账号
getTokenAccountsByOwner：按持有人查询通证账号
getTokenLargestAccounts：查询通证的最大账号
getTokenSupply：查询通证供应量
getTransaction：查询交易
getTransactionCount：查询交易数量
getVersion：查询版本
getVoteAccounts：查询投票账号
minimumLedgerSlot：最小账本槽位
requestAirdrop：请求空投
sendTransaction：发送交易
simulateTransaction：模拟交易
```

## WebSocket API

```
Websocket连接概述
accountSubscribe：订阅账号事件
accountUnsubscribe：取消订阅账号事件
logsSubscribe：订阅日志事件
logsUnsubscribe：取消订阅日志事件
programSubscribe：订阅程序事件
programUnsubscribe：取消订阅程序事件
signatureSubscribe：订阅签名事件
signatureUnsubscribe：取消订阅签名事件
slotSubscribe：订阅槽位事件
slotUnsubscribe：取消订阅槽位事件
```
