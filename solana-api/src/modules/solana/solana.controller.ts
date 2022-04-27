import {
  Controller,
  Post,
  Body
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { getAction, IOptions } from '../../common/rpc-api';
import {
  IgetAccountInfo, IgetBalance, IgetBlock, IgetBlockCommitment,
  IgetBlockHeight, IgetBlockProduction, IgetBlocks, IgetBlocksWithLimit,
  IgetBlockTime, IgetClusterNodes, IgetEpochInfo, IgetEpochSchedule,
  IgetFeeCalculatorForBlockhash, IgetFeeRateGovernor, IgetFees,
  IgetFirstAvailableBlock, IgetGenesisHash, IgetHealth, IgetIdentity,
  IgetInflationGovernor, IgetInflationRate, IgetInflationReward,
  IgetLargestAccounts, IgetLeaderSchedule, IgetMaxRetransmitSlot,
  IgetMaxShredInsertSlot, IgetMinimumBalanceForRentExemption,
  IgetMultipleAccounts, IgetProgramAccounts, IgetRecentBlockhash,
  IgetRecentPerformanceSamples, IgetSignaturesForAddress, IgetSignatureStatuses,
  IgetSlot, IgetSlotLeader, IgetSlotLeaders, IgetSnapshotSlot,
  IgetStakeActivation, IgetSupply, IgetTokenAccountBalance,
  IgetTokenAccountsByDelegate, IgetTokenAccountsByOwner, IgetTokenLargestAccounts,
  IgetTokenSupply, IgetTransaction, IgetTransactionCount, IgetVersion,
  IgetVoteAccounts, IminimumLedgerSlot, IrequestAirdrop, IsendTransaction,
  IsimulateTransaction
} from './solana.type';

export type RpcResponse = {
  jsonrpc: string;
  result: object;
  id: number;
}

@ApiBearerAuth()
@ApiTags('Solana API')
@Controller('api/solana')
export class SolanaController {
  constructor() { }

  @Post('getAccountInfo')
  @ApiOperation({ summary: '查询指定公钥对应账号的信息。' })
  async getAccountInfo(@Body() options: IgetAccountInfo) {
    return await getAction(options as IOptions)
  }

  @Post('getBalance')
  @ApiOperation({ summary: '查询账号余额' })
  async getBalance(@Body() options: IgetBalance) {
    return await getAction(options as IOptions)
  }

  @Post('getBlock')
  @ApiOperation({ summary: '查询区块数据' })
  async getBlock(@Body() options: IgetBlock) {
    return await getAction(options as IOptions)
  }

  @Post('getBlockHeight')
  @ApiOperation({ summary: '查询区块高度' })
  async getBlockHeight(@Body() options: IgetBlockHeight) {
    return await getAction(options as IOptions)
  }

  @Post('getBlockProduction')
  @ApiOperation({ summary: '查询区块生产信息' })
  async getBlockProduction(@Body() options: IgetBlockProduction) {
    return await getAction(options as IOptions)
  }

  @Post('getBlockCommitment')
  @ApiOperation({ summary: '查询区块提交信息' })
  async getBlockCommitment(@Body() options: IgetBlockCommitment) {
    return await getAction(options as IOptions)
  }

  @Post('getBlocks')
  @ApiOperation({ summary: '查询区块集' })
  async getBlocks(@Body() options: IgetBlocks) {
    return await getAction(options as IOptions)
  }

  @Post('getBlocksWithLimit')
  @ApiOperation({ summary: '查询指定区间内的区块' })
  async getBlocksWithLimit(@Body() options: IgetBlocksWithLimit) {
    return await getAction(options as IOptions)
  }

  @Post('getBlockTime')
  @ApiOperation({ summary: '查询区块时间' })
  async getBlockTime(@Body() options: IgetBlockTime) {
    return await getAction(options as IOptions)
  }

  @Post('getClusterNodes')
  @ApiOperation({ summary: '查询集群节点' })
  async getClusterNodes(@Body() options: IgetClusterNodes) {
    return await getAction(options as IOptions)
  }

  @Post('getEpochInfo')
  @ApiOperation({ summary: '查询周期信息' })
  async getEpochInfo(@Body() options: IgetEpochInfo) {
    return await getAction(options as IOptions)
  }

  @Post('getEpochSchedule')
  @ApiOperation({ summary: '查询周期计划' })
  async getEpochSchedule(@Body() options: IgetEpochSchedule) {
    return await getAction(options as IOptions)
  }

  @Post('getFeeCalculatorForBlockhash')
  @ApiOperation({ summary: '查询指定区块的费率计算器' })
  async getFeeCalculatorForBlockhash(@Body() options: IgetFeeCalculatorForBlockhash) {
    return await getAction(options as IOptions)
  }

  @Post('getFeeRateGovernor')
  @ApiOperation({ summary: '查询费率治理人' })
  async getFeeRateGovernor(@Body() options: IgetFeeRateGovernor) {
    return await getAction(options as IOptions)
  }

  @Post('getFees')
  @ApiOperation({ summary: '查询费率' })
  async getFees(@Body() options: IgetFees) {
    return await getAction(options as IOptions)
  }

  @Post('getFirstAvailableBlock')
  @ApiOperation({ summary: '查询第一个有效区块' })
  async getFirstAvailableBlock(@Body() options: IgetFirstAvailableBlock) {
    return await getAction(options as IOptions)
  }

  @Post('getGenesisHash')
  @ApiOperation({ summary: '查询创世哈希' })
  async getGenesisHash(@Body() options: IgetGenesisHash) {
    return await getAction(options as IOptions)
  }

  @Post('getHealth')
  @ApiOperation({ summary: '查询健康状态' })
  async getHealth(@Body() options: IgetHealth) {
    return await getAction(options as IOptions)
  }

  @Post('getIdentity')
  @ApiOperation({ summary: '查询实体标识' })
  async getIdentity(@Body() options: IgetIdentity) {
    return await getAction(options as IOptions)
  }

  @Post('getInflationGovernor')
  @ApiOperation({ summary: '查询通胀治理人' })
  async getInflationGovernor(@Body() options: IgetInflationGovernor) {
    return await getAction(options as IOptions)
  }

  @Post('getInflationRate')
  @ApiOperation({ summary: '查询通胀率' })
  async getInflationRate(@Body() options: IgetInflationRate) {
    return await getAction(options as IOptions)
  }

  @Post('getInflationReward')
  @ApiOperation({ summary: '查询通胀奖励' })
  async getInflationReward(@Body() options: IgetInflationReward) {
    return await getAction(options as IOptions)
  }

  @Post('getLargestAccounts')
  @ApiOperation({ summary: '查询最大账号' })
  async getLargestAccounts(@Body() options: IgetLargestAccounts) {
    return await getAction(options as IOptions)
  }

  @Post('getLeaderSchedule')
  @ApiOperation({ summary: '查询主导人计划表' })
  async getLeaderSchedule(@Body() options: IgetLeaderSchedule) {
    return await getAction(options as IOptions)
  }

  @Post('getMaxRetransmitSlot')
  @ApiOperation({ summary: '查询最大重发槽位' })
  async getMaxRetransmitSlot(@Body() options: IgetMaxRetransmitSlot) {
    return await getAction(options as IOptions)
  }

  

  @Post('getMaxShredInsertSlot')
  @ApiOperation({ summary: '查询最大插入槽位' })
  async getMaxShredInsertSlot(@Body() options: IgetMaxShredInsertSlot) {
    return await getAction(options as IOptions)
  }
  

  @Post('getMinimumBalanceForRentExemption')
  @ApiOperation({ summary: '查询可豁免租金的最小余额' })
  async getMinimumBalanceForRentExemption(@Body() options: IgetMinimumBalanceForRentExemption) {
    return await getAction(options as IOptions)
  }
  

  @Post('getMultipleAccounts')
  @ApiOperation({ summary: '查询多个账号' })
  async getMultipleAccounts(@Body() options: IgetMultipleAccounts) {
    return await getAction(options as IOptions)
  }
  

  @Post('getProgramAccounts')
  @ApiOperation({ summary: '查询程序账号' })
  async getProgramAccounts(@Body() options: IgetProgramAccounts) {
    return await getAction(options as IOptions)
  }
  

  @Post('getRecentBlockhash')
  @ApiOperation({ summary: '查询最近的区块哈希' })
  async getRecentBlockhash(@Body() options: IgetRecentBlockhash) {
    return await getAction(options as IOptions)
  }
  

  @Post('getRecentPerformanceSamples')
  @ApiOperation({ summary: '查询最近的性能样本' })
  async getRecentPerformanceSamples(@Body() options: IgetRecentPerformanceSamples) {
    return await getAction(options as IOptions)
  }
  

  @Post('getSnapshotSlot')
  @ApiOperation({ summary: '获取快照槽位' })
  async getSnapshotSlot(@Body() options: IgetSnapshotSlot) {
    return await getAction(options as IOptions)
  }
  

  @Post('getSignaturesForAddress')
  @ApiOperation({ summary: '获取地址签名' })
  async getSignaturesForAddress(@Body() options: IgetSignaturesForAddress) {
    return await getAction(options as IOptions)
  }
  

  @Post('getSignatureStatuses')
  @ApiOperation({ summary: '获取签名状态' })
  async getSignatureStatuses(@Body() options: IgetSignatureStatuses) {
    return await getAction(options as IOptions)
  }
  

  @Post('getSlot')
  @ApiOperation({ summary: '查询槽位' })
  async getSlot(@Body() options: IgetSlot) {
    return await getAction(options as IOptions)
  }
  

  @Post('getSlotLeader')
  @ApiOperation({ summary: '查询槽位主导人' })
  async getSlotLeader(@Body() options: IgetSlotLeader) {
    return await getAction(options as IOptions)
  }
  

  @Post('getSlotLeaders')
  @ApiOperation({ summary: '查询槽位主导人集合' })
  async getSlotLeaders(@Body() options: IgetSlotLeaders) {
    return await getAction(options as IOptions)
  }
  

  @Post('getStakeActivation')
  @ApiOperation({ summary: '查询抵押激活信息' })
  async getStakeActivation(@Body() options: IgetStakeActivation) {
    return await getAction(options as IOptions)
  }
  

  @Post('getSupply')
  @ApiOperation({ summary: '查询供应量' })
  async getSupply(@Body() options: IgetSupply) {
    return await getAction(options as IOptions)
  }
  

  @Post('getTokenAccountBalance')
  @ApiOperation({ summary: '查询通证账号余额' })
  async getTokenAccountBalance(@Body() options: IgetTokenAccountBalance) {
    return await getAction(options as IOptions)
  }
  

  @Post('getTokenAccountsByDelegate')
  @ApiOperation({ summary: '按代表查询通证账号' })
  async getTokenAccountsByDelegate(@Body() options: IgetTokenAccountsByDelegate) {
    return await getAction(options as IOptions)
  }
  

  @Post('getTokenAccountsByOwner')
  @ApiOperation({ summary: '按持有人查询通证账号' })
  async getTokenAccountsByOwner(@Body() options: IgetTokenAccountsByOwner) {
    return await getAction(options as IOptions)
  }
  

  @Post('getTokenLargestAccounts')
  @ApiOperation({ summary: '查询通证的最大账号' })
  async getTokenLargestAccounts(@Body() options: IgetTokenLargestAccounts) {
    return await getAction(options as IOptions)
  }
  

  @Post('getTokenSupply')
  @ApiOperation({ summary: '查询通证供应量' })
  async getTokenSupply(@Body() options: IgetTokenSupply) {
    return await getAction(options as IOptions)
  }
  

  @Post('getTransaction')
  @ApiOperation({ summary: '查询交易' })
  async getTransaction(@Body() options: IgetTransaction) {
    return await getAction(options as IOptions)
  }
  

  @Post('getTransactionCount')
  @ApiOperation({ summary: '查询交易数量' })
  async getTransactionCount(@Body() options: IgetTransactionCount) {
    return await getAction(options as IOptions)
  }
  

  @Post('getVersion')
  @ApiOperation({ summary: '查询版本' })
  async getVersion(@Body() options: IgetVersion) {
    return await getAction(options as IOptions)
  }
  

  @Post('getVoteAccounts')
  @ApiOperation({ summary: '查询投票账号' })
  async getVoteAccounts(@Body() options: IgetVoteAccounts) {
    return await getAction(options as IOptions)
  }
  

  @Post('minimumLedgerSlot')
  @ApiOperation({ summary: '最小账本槽位' })
  async minimumLedgerSlot(@Body() options: IminimumLedgerSlot) {
    return await getAction(options as IOptions)
  }
  

  @Post('requestAirdrop')
  @ApiOperation({ summary: '请求空投' })
  async requestAirdrop(@Body() options: IrequestAirdrop) {
    return await getAction(options as IOptions)
  }
  

  @Post('sendTransaction')
  @ApiOperation({ summary: '发送交易' })
  async sendTransaction(@Body() options: IsendTransaction) {
    return await getAction(options as IOptions)
  }
  

  @Post('simulateTransaction')
  @ApiOperation({ summary: '模拟交易' })
  async simulateTransaction(@Body() options: IsimulateTransaction) {
    return await getAction(options as IOptions)
  }

}

