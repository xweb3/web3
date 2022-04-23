/**
 * Hello world
 */

import {
  establishConnection,
  establishPayer,
  checkProgram,
  sayHello,
  reportGreetings,
} from './hello_world';

async function main() {
  console.log("Let's say hello to a Solana account...");

  // Establish connection to the cluster
  // 客户端调用 establishConnection 函数与集群建立连接。
  await establishConnection();

  // Determine who pays for the fees
  // 客户端调用 establishPayer 函数来确保有一个有支付能力的账户。
  await establishPayer();

  // Check if the program has been deployed
  // 客户端调用 checkProgram 函数从 src/program-rust/target/deploy/helloworld-keypair.json 中加载已部署程序的密钥对（此操作前需先构建链上程序，详见 1.3.2 节），并使用密钥对的公钥来获取程序账户。
  // 如果程序不存在，客户端会报错并停止执行。如果程序存在，将创建一个新账户来存储状态，并以该程序作为新账户所有者。这里新账户存储的状态，就是程序被调用的次数。
  await checkProgram();

  // Say hello to an account
  // 客户端再调用 sayHello 函数向链上程序发送交易。
  // 一个交易可以包含一个或多个不同的指令，当前该交易包含了一个指令，指令中带有要调用链上程序的 Program Id 以及客户端要交互的账户地址。
  // 需要注意的是，如果交易中包含多个不同的指令，其中有一个指令执行失败，那么所有指令所做的操作都会被还原。
  await sayHello();

  // Find out how many times that account has been greeted
  // 客户端再调用 sayHello 函数向链上程序发送交易。一个交易可以包含一个或多个不同的指令，当前该交易包含了一个指令，指令中带有要调用链上程序的 Program Id 以及客户端要交互的账户地址。需要注意的是，如果交易中包含多个不同的指令，其中有一个指令执行失败，那么所有指令所做的操作都会被还原。
  await reportGreetings();

  console.log('Success');
}

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);
