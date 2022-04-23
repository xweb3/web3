# Solana 链

高性能、高TPS和低交易费用。

参与链上生态时，加密钱包必不可少的工具之一。
没有钱包调用数字资产的我们，在链上生态寸步难行。


我们若要参与其中，也需要创建一个钱包来发送、接收和兑换SOL代币。

## 钱包

- 移动应用钱包（Trust Wallet、Coin98等）
- 网页钱包（SolFlare、Sollet、Math Wallet等）
- 硬件钱包（Ledger Nano S和Nano X）
- 命令行钱包 Solana命令行工具可以和Solana上的几个不同类型钱包交互。
  - 1、文件系统钱包
  - 2、纸钱包
  - 3、硬件钱包

## 集群

- 集群
- 共享账本
- 错误和恶意节点


## 入门教程

- [从 Hello World 出发](https://mp.weixin.qq.com/s/oefXIhQP_o4BHdu9sCvZAQ)

### 安装 solana

```sh
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"

# 出现
  ✨ stable commit a41a814 initialized
Adding 
export PATH="/Users/x/.local/share/solana/install/active_release/bin:$PATH" to /Users/x/.profile
Adding 
export PATH="/Users/x/.local/share/solana/install/active_release/bin:$PATH" to /Users/x/.zprofile
Adding 
export PATH="/Users/x/.local/share/solana/install/active_release/bin:$PATH" to /Users/x/.bash_profile

Close and reopen your terminal to apply the PATH changes or run the following in your existing shell:
  
export PATH="/Users/x/.local/share/solana/install/active_release/bin:$PATH"

web3 % export PATH="/Users/x/.local/share/solana/install/active_release/bin:$PATH"

# 安装成功
```


### 连接Mainnet Beta(主网 Beta)

```sh
# 首先要生成身份信息，通过运行以下操作为你的验证节点创建身份密钥：

solana-keygen new -o ~/validator-keypair.json

# 运行后通过以下命令查看身份公钥是否创建成功：

solana-keygen pubkey ~/validator-keypair.json

# 然后运行以下节点命令：

solana-validator \
    --identity ~/validator-keypair.json \
    --trusted-validator 7Np41oeYqPefeNQEHSv1UDhYrehxin3NStELsSKCT4K2 \
    --trusted-validator GdnSyH3YtwcxFvQrVVJMm1JhTS4QVX7MFsX56uJLUfiZ \
    --trusted-validator DE1bawNcRJB9rVm3buyMVfr8mBEoyyu73NBovf2oXJsJ \
    --trusted-validator CakcnaRDHka2gXyfbEd2d3xsvkJkqsLw2akB3zsN1D2S \
    --no-untrusted-rpc \
    --ledger ~/validator-ledger \
    --rpc-port 8899 \
    --private-rpc \
    --no-port-check \
    --dynamic-port-range 8000-8012 \
    --entrypoint entrypoint.mainnet-beta.solana.com:8001 \
    --entrypoint entrypoint2.mainnet-beta.solana.com:8001 \
    --entrypoint entrypoint3.mainnet-beta.solana.com:8001 \
    --entrypoint entrypoint4.mainnet-beta.solana.com:8001 \
    --entrypoint entrypoint5.mainnet-beta.solana.com:8001 \
    --expected-genesis-hash 5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size\
    --log -
```

```sh
 ~ % solana config set --url localhost
Config File: /Users/x/.config/solana/cli/config.yml
RPC URL: http://localhost:8899 
WebSocket URL: ws://localhost:8900/ (computed)
Keypair Path: /Users/x/.config/solana/id.json 
Commitment: confirmed 

 ~ % solana config set --url devnet
Config File: /Users/x/.config/solana/cli/config.yml
RPC URL: https://api.devnet.solana.com 
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: /Users/x/.config/solana/id.json 
Commitment: confirmed 
```