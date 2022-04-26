# [EpochSchedule](https://solana-labs.github.io/solana-web3.js/classes/EpochSchedule.html)
> 大纪元时间表（见https://docs.solana.com/terminology#epoch)可以使用{@link connection.getEpochSchedule}方法检索
> Epoch schedule (see https://docs.solana.com/terminology#epoch) Can be retrieved with the {@link connection.getEpochSchedule} method

```
Constructors

constructor
```

```s
Properties

# 第一个有slotsPerEpoch槽的标志
firstNormalEpoch

# firstNormalEpoch 的第一个插槽
firstNormalSlot

# 在一个历元开始之前的插槽数，用于计算该历元的先导计划
leaderScheduleSlotOffset

# 每个历元中的最大时隙数
slotsPerEpoch

# 指示时代是否从短到长
warmup
```

```s
Methods

# 
getEpoch

# 
getEpochAndSlotIndex

# 
getFirstSlotInEpoch

# 
getLastSlotInEpoch

# 
getSlotsInEpoch
```
