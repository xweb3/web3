import { IsArray, IsNumberString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
// import { IEncoding, IRPCAction } from './types';

export const publicKey = 'vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg'
export class IbaseInfo {
  @ApiProperty({
    example: '2.0'
  })
  @IsNumberString()
  jsonrpc: string

  @ApiProperty({
    example: 1
  })
  @IsNumberString()
  id: number

  @ApiProperty({
    example: ""
  })
  @IsNumberString()
  method: string
}
export class IgetAccountInfo extends IbaseInfo {
  @ApiProperty({
    example: "getAccountInfo"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [publicKey, {
      "encoding": "base58"
    }]
  })
  @IsArray()
  params: []
}
export class IgetBalance extends IbaseInfo {
  @ApiProperty({
    example: "getBalance"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [publicKey]
  })
  @IsArray()
  params: []
}
export class IgetBlock extends IbaseInfo {
  @ApiProperty({
    example: "getBlock"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      430,
      {
        "encoding": "json",
        "transactionDetails":"full",
        "rewards":false
      }
    ]
  })
  @IsArray()
  params: (number | object)[]
}
export class IgetBlockHeight extends IbaseInfo {
  @ApiProperty({
    example: "getBlockHeight"
  })
  @IsNumberString()
  method: string
}
export class IgetBlockProduction extends IbaseInfo {
  @ApiProperty({
    example: "getBlockProduction"
  })
  @IsNumberString()
  method: string
}
export class IgetBlockCommitment extends IbaseInfo {
  @ApiProperty({
    example: "getBlockCommitment"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      5
    ]
  })
  @IsArray()
  params: []
}
export class IgetBlocks extends IbaseInfo {
  @ApiProperty({
    example: "getBlocks"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      5, 10
    ]
  })
  @IsArray()
  params: []
}
export class IgetBlocksWithLimit extends IbaseInfo {
  @ApiProperty({
    example: "getBlocksWithLimit"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      5, 3
    ]
  })
  @IsArray()
  params: []
}
export class IgetBlockTime extends IbaseInfo {
  @ApiProperty({
    example: "getBlockTime"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      5
    ]
  })
  @IsArray()
  params: []
}
export class IgetClusterNodes extends IbaseInfo {
  @ApiProperty({
    example: "getClusterNodes"
  })
  @IsNumberString()
  method: string
}
export class IgetEpochInfo extends IbaseInfo {
  @ApiProperty({
    example: "getEpochInfo"
  })
  @IsNumberString()
  method: string
}
export class IgetEpochSchedule extends IbaseInfo {
  @ApiProperty({
    example: "getEpochSchedule"
  })
  @IsNumberString()
  method: string
}
export class IgetFeeCalculatorForBlockhash extends IbaseInfo {
  @ApiProperty({
    example: "getFeeCalculatorForBlockhash",
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [publicKey]
  })
  @IsArray()
  params: []
}
export class IgetFeeRateGovernor extends IbaseInfo {
  @ApiProperty({
    example: "getFeeRateGovernor"
  })
  @IsNumberString()
  method: string
}
export class IgetFees extends IbaseInfo {
  @ApiProperty({
    example: "getFees"
  })
  @IsNumberString()
  method: string
}
export class IgetFirstAvailableBlock extends IbaseInfo {
  @ApiProperty({
    example: "getFirstAvailableBlock"
  })
  @IsNumberString()
  method: string
}
export class IgetGenesisHash extends IbaseInfo {
  @ApiProperty({
    example: "getGenesisHash"
  })
  @IsNumberString()
  method: string
}
export class IgetHealth extends IbaseInfo {
  @ApiProperty({
    example: "getHealth"
  })
  @IsNumberString()
  method: string
}
export class IgetIdentity extends IbaseInfo {
  @ApiProperty({
    example: "getIdentity"
  })
  @IsNumberString()
  method: string
}
export class IgetInflationGovernor extends IbaseInfo {
  @ApiProperty({
    example: "getInflationGovernor"
  })
  @IsNumberString()
  method: string
}
export class IgetInflationRate extends IbaseInfo {
  @ApiProperty({
    example: "getInflationRate"
  })
  @IsNumberString()
  method: string
}
export class IgetInflationReward extends IbaseInfo {
  @ApiProperty({
    example: "getInflationReward"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      ["6dmNQ5jwLeLk5REvio1JcMshcbvkYMwy26sJ8pbkvStu", "BGsqMegLpV6n6Ve146sSX2dTjUMj3M92HnU8BbNRMhF2"],
      2
    ]
  })
  @IsArray()
  params: []
}
export class IgetLargestAccounts extends IbaseInfo {
  @ApiProperty({
    example: "getLargestAccounts"
  })
  @IsNumberString()
  method: string
}
export class IgetLeaderSchedule extends IbaseInfo {
  @ApiProperty({
    example: "getLeaderSchedule"
  })
  @IsNumberString()
  method: string
}
export class IgetMaxRetransmitSlot extends IbaseInfo {
  @ApiProperty({
    example: "getMaxRetransmitSlot"
  })
  @IsNumberString()
  method: string
}
export class IgetMaxShredInsertSlot extends IbaseInfo {
  @ApiProperty({
    example: "getMaxShredInsertSlot"
  })
  @IsNumberString()
  method: string
}
export class IgetMinimumBalanceForRentExemption extends IbaseInfo {
  @ApiProperty({
    example: "getMinimumBalanceForRentExemption"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      50
    ]
  })
  @IsArray()
  params: []
}
export class IgetMultipleAccounts extends IbaseInfo {
  @ApiProperty({
    example: "getMultipleAccounts"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      [
        "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
        "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"
      ],
      {
        "dataSlice": {
          "offset": 0,
          "length": 0
        }
      }
    ]
  })
  @IsArray()
  params: []
}
export class IgetProgramAccounts extends IbaseInfo {
  @ApiProperty({
    example: "getProgramAccounts"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      publicKey
    ]
  })
  @IsArray()
  params: []
}
export class IgetRecentBlockhash extends IbaseInfo {
  @ApiProperty({
    example: "getRecentBlockhash"
  })
  @IsNumberString()
  method: string
}
export class IgetRecentPerformanceSamples extends IbaseInfo {
  @ApiProperty({
    example: "getRecentPerformanceSamples"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      4
    ]
  })
  @IsArray()
  params: []
}
export class IgetSnapshotSlot extends IbaseInfo {
  @ApiProperty({
    example: "getSnapshotSlot"
  })
  @IsNumberString()
  method: string
}
export class IgetSignaturesForAddress extends IbaseInfo {
  @ApiProperty({
    example: "getSignaturesForAddress"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      "Vote111111111111111111111111111111111111111",
      {
        "limit": 1
      }
    ]
  })
  @IsArray()
  params: []
}
export class IgetSignatureStatuses extends IbaseInfo {
  @ApiProperty({
    example: "getSignatureStatuses"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      [
        "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW",
        "5j7s6NiJS3JAkvgkoc18WVAsiSaci2pxB2A6ueCJP4tprA2TFg9wSyTLeYouxPBJEMzJinENTkpA52YStRW5Dia7"
      ]
    ]
  })
  @IsArray()
  params: []
}
export class IgetSlot extends IbaseInfo {
  @ApiProperty({
    example: "getSlot"
  })
  @IsNumberString()
  method: string
}
export class IgetSlotLeader extends IbaseInfo {
  @ApiProperty({
    example: "getSlotLeader"
  })
  @IsNumberString()
  method: string
}
export class IgetSlotLeaders extends IbaseInfo {
  @ApiProperty({
    example: "getSlotLeaders"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      100,
      10
    ]
  })
  @IsArray()
  params: []
}
export class IgetStakeActivation extends IbaseInfo {
  @ApiProperty({
    example: "getStakeActivation"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      publicKey
    ]
  })
  @IsArray()
  params: []
}
export class IgetSupply extends IbaseInfo {
  @ApiProperty({
    example: "getSupply"
  })
  @IsNumberString()
  method: string
}
export class IgetTokenAccountBalance extends IbaseInfo {
  @ApiProperty({
    example: "getTokenAccountBalance"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      publicKey
    ]
  })
  @IsArray()
  params: []
}
export class IgetTokenAccountsByDelegate extends IbaseInfo {
  @ApiProperty({
    example: "getTokenAccountsByDelegate"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
      {
        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
      },
      {
        "encoding": "jsonParsed"
      }
    ]
  })
  @IsArray()
  params: []
}
export class IgetTokenAccountsByOwner extends IbaseInfo {
  @ApiProperty({
    example: "getTokenAccountsByOwner"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F",
      {
        "mint": "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"
      },
      {
        "encoding": "jsonParsed"
      }
    ]
  })
  @IsArray()
  params: []
}
export class IgetTokenLargestAccounts extends IbaseInfo {
  @ApiProperty({
    example: "getTokenLargestAccounts"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      publicKey
    ]
  })
  @IsArray()
  params: []
}
export class IgetTokenSupply extends IbaseInfo {
  @ApiProperty({
    example: "getTokenSupply"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      publicKey
    ]
  })
  @IsArray()
  params: []
}
export class IgetTransaction extends IbaseInfo {
  @ApiProperty({
    example: "getTransaction"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      publicKey,
      'json'
    ]
  })
  @IsArray()
  params: []
}
export class IgetTransactionCount extends IbaseInfo {
  @ApiProperty({
    example: "getTransactionCount"
  })
  @IsNumberString()
  method: string
}
export class IgetVersion extends IbaseInfo {
  @ApiProperty({
    example: "getVersion"
  })
  @IsNumberString()
  method: string
}
export class IgetVoteAccounts extends IbaseInfo {
  @ApiProperty({
    example: "getVoteAccounts"
  })
  @IsNumberString()
  method: string
}
export class IminimumLedgerSlot extends IbaseInfo {
  @ApiProperty({
    example: "minimumLedgerSlot"
  })
  @IsNumberString()
  method: string
}
export class IrequestAirdrop extends IbaseInfo {
  @ApiProperty({
    example: "requestAirdrop"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      publicKey,
      1000000000
    ]
  })
  @IsArray()
  params: []
}
export class IsendTransaction extends IbaseInfo {
  @ApiProperty({
    example: "sendTransaction"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      "4hXTCkRzt9WyecNzV1XPgCDfGAZzQKNxLXgynz5QDuWWPSAZBZSHptvWRL3BjCvzUXRdKvHL2b7yGrRQcWyaqsaBCncVG7BFggS8w9snUts67BSh3EqKpXLUm5UMHfD7ZBe9GhARjbNQMLJ1QD3Spr6oMTBU6EhdB4RD8CP2xUxr2u3d6fos36PD98XS6oX8TQjLpsMwncs5DAMiD4nNnR8NBfyghGCWvCVifVwvA8B8TJxE1aiyiv2L429BCWfyzAme5sZW8rDb14NeCQHhZbtNqfXhcp2tAnaAT"
    ]
  })
  @IsArray()
  params: []
}
export class IsimulateTransaction extends IbaseInfo {
  @ApiProperty({
    example: "simulateTransaction"
  })
  @IsNumberString()
  method: string

  @ApiProperty({
    example: [
      "4hXTCkRzt9WyecNzV1XPgCDfGAZzQKNxLXgynz5QDuWWPSAZBZSHptvWRL3BjCvzUXRdKvHL2b7yGrRQcWyaqsaBCncVG7BFggS8w9snUts67BSh3EqKpXLUm5UMHfD7ZBe9GhARjbNQMLJ1QD3Spr6oMTBU6EhdB4RD8CP2xUxr2u3d6fos36PD98XS6oX8TQjLpsMwncs5DAMiD4nNnR8NBfyghGCWvCVifVwvA8B8TJxE1aiyiv2L429BCWfyzAme5sZW8rDb14NeCQHhZbtNqfXhcp2tAnaAT"
    ]
  })
  @IsArray()
  params: []
}
