# Solana

## 链上程序

Solana 的智能合约叫做链上程序（On-chain Program）。
开发者可以使用工具将程序编译成 Berkley Packet Filter (BPF) 字节码（文件以 .so 为扩展名)，再部署到 Solana 链上，通过 Sealevel 并行智能合约运行时去执行智能合约的逻辑。此外，基于 Solana JSON RPC API，官方提供了诸多 SDK 用于客户端与 Solana 链上数据交互。


## 账户模型

基于账户模型的区块链。通过将任意状态存储于链上账户并同步复制给集群中的所有节点，可以创建复杂而强大的去中心化应用程序。

Solana 的账户可以分为可执行账户和不可执行账户。
可执行账户：存储不可变的数据，主要用于存储程序的 BPF 字节码。
不可执行账户：存储可变的数据，主要用于存储程序的状态。

Solana 链上程序是只读或无状态的，即程序的账户（可执行账户）只存储 BPF 字节码，不存储任何状态，
程序会把状态存储在其他独立的账户（不可执行账户）中。
为了区分某个账户是用作哪个程序的状态存储，每个账户都指定了一个程序作为其所有者。
程序可以读取其不作为所有者的账户中的状态，但只有作为所有者的程序才能修改账户中的状态，任何其他程序所做的修改都会被还原并导致交易失败。
https://solana.wiki/zh-cn/docs/account-model/

## 搭建编程环境

### 安装 Solana CLI

Solana CLI 是与 Solana 集群进行交互的命令行管理工具，包含节点程序 solana-validator、密钥对生成工具 solana-keygen，以及合约开发工具 cargo-build-bpf、cargo-test-bpf 等。


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

```sh
solana --version

solana-install update
```

### 配置 Solana CLI

#### 连接到集群

Solana 集群有本地集群（localhost）和 公开集群。根据不同的用途，公开集群又分为开发者网络（devnet），测试网（testnet）和 主网（mainnet-beta）。

- devnet 适用于开发者的集群，开发者可以获得 SOL token 的空投，但这个 SOL 不具有真实价值，仅限测试使用。devnet 的 RPC 链接是 https://api.devnet.solana.com 。
- testnet 是用于测试最新应用的集群，入网络性能、稳定性和验证程序行为等。同样可获得 SOL token 的空投，但也仅限测试使用。testnet 的 RPC 链接是 https://api.testnet.solana.com
- mainnet-beta 是主网集群，在 Mainnet Beta 上发行的 SOL token 具有真实价值，mainnet-beta 的 RPC 链接是 https://api.mainnet-beta.solana.com

运行以下命令，根据实际需要来选择集群。

```
// 选择localhost集群
solana config set --url localhost

// 选择devnet集群
solana config set --url devnet
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


### 创建账户

```sh
# 生成密钥对，默认地址 创建账户
solana-keygen new

# 查看公钥
solana-keygen pubkey

# 查看账户余额
# 当前如果是在 devnet 集群，该账户的余额为 0 SOL，可以运行以下命令查询余额。
solana balance

# 在 devnet 上申请 SOL 空投，运行以下命令后再次查询当前账户的余额，会发现余额为 2 SOL。
solana airdrop 2

```

## solana-web3 程序启动


### 1. 启动 localhost 集群

```sh
solana config set --url localhost

# 启动集群
solana-test-validator
```


### 2. 打包 rust 程序

```sh
cd src/program-rust/
cargo build-bpf

# 构建完成后，src/program-rust/target/deploy 目录下的 helloworld.so 就是可在 Solana 集群部署的链上程序的 BPF 字节码文件。
```
## 部署链上程序

在 localhost 集群上部署链上程序。

```sh
solana program deploy target/deploy/helloword.so

// Program Id: 6AArMEBpFhhtU2mBnEMEPeEH7xkhfUwPseUeG4fhLYto
```



## 调用链上程序

### client react 程序

```sh
cd solana-web3
npm install
```

```sh
npm run start

> helloworld@0.0.1 start
> ts-node src/client/main.ts

PROGRAM_SO_PATH /Users/x/web3/doc/solana-web3/dist/program/helloworld.so
Let's say hello to a Solana account...
FetchError: request to http://localhost:8899/ failed, reason: connect ECONNREFUSED ::1:8899
    at ClientRequest.<anonymous> (/Users/x/web3/doc/solana-web3/node_modules/node-fetch/lib/index.js:1491:11)
    at ClientRequest.emit (node:events:527:28)
    at ClientRequest.emit (node:domain:475:12)
    at Socket.socketErrorListener (node:_http_client:454:9)
    at Socket.emit (node:events:527:28)
    at Socket.emit (node:domain:475:12)
    at emitErrorNT (node:internal/streams/destroy:164:8)
    at emitErrorCloseNT (node:internal/streams/destroy:129:3)
    at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  type: 'system',
  errno: 'ECONNREFUSED',
  code: 'ECONNREFUSED'
}
```

出现以上错误，因为 node 17 版本的问题，将版本改成 16 ，运行

```sh
n 16.8.0
```

```sh
npm run start

> helloworld@0.0.1 start
> ts-node src/client/main.ts

PROGRAM_SO_PATH /Users/x/web3/doc/solana-web3/dist/program/helloworld.so
Let's say hello to a Solana account...
Connection to cluster established: http://localhost:8899 { 'feature-set': 1070292356, 'solana-core': '1.9.18' }
Using account HmNo3qAyyEEPYYpGgpBkmyB3chz7gLTTdzje4YH7FWAR containing 499999998.73823273 SOL to pay for fees
Using program ECQ1PLPHnSp8hLfMuatGE7SRS6CTrqroSXygfQvsK3H1
Creating account 6ovHkNwquAMJeDxsAXn55Fq3AXQnDc199Ne8U6xsNQuM to say hello to
Saying hello to 6ovHkNwquAMJeDxsAXn55Fq3AXQnDc199Ne8U6xsNQuM
6ovHkNwquAMJeDxsAXn55Fq3AXQnDc199Ne8U6xsNQuM has been greeted 1 time(s)
Success
```

## 查看日志

```sh
solana logs
```