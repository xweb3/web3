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