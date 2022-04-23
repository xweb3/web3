// 实现了将程序被调用次数存储在链上账户中。

// 用于序列化和反序列化数据。
use borsh::{BorshDeserialize, BorshSerialize};

// 将 Solana Rust SDK 的模块引入本地作用域，使用 Rust 编写程序都需要这个 SDK。
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
};

/// Define the type of state stored in accounts
#[derive(BorshSerialize, BorshDeserialize, Debug)]
// 定义了 GreetingAccount 结构体作为存储在账户中的状态类型，里面有一个 u32 类型的字段 counter，用于记录程序被有效调用的次数。
pub struct GreetingAccount {
    /// number of greetings
    pub counter: u32,
}

// Declare and export the program's entrypoint
// entrypoint 声明了 process_instruction 函数是程序入口，每个程序都有一个唯一的入口。
entrypoint!(process_instruction);

// Program entrypoint's implementation
// process_instruction 函数签名
pub fn process_instruction(
    // 链上程序的部署地址，在这里也就是 helloworld 程序账户的公钥。
    program_id: &Pubkey, // Public key of the account the hello world program was loaded into
    // 与程序交互的账户列表，当前程序会使用账户列表中的账户来存储状态或修改账户中的数据。如果当前程序不是某个账户的所有者，那就无法使用该账户存储状态或修改数据，当前交易会执行失败。
    accounts: &[AccountInfo], // The account to say hello to
    // 指令数据，比如要转账的代币数量、转账地址等。
    _instruction_data: &[u8], // Ignored, all helloworld instructions are hellos
) -> ProgramResult {
    // 使用 msg! 宏将字符串输出到日志中，方便观察业务的执行逻辑和调试信息。
    msg!("Hello World Rust program entrypoint");

    // Iterating accounts is safer than indexing
    // 通过 iter 方法将账户列表转换为迭代器，以安全的方式获取账户地址.
    let accounts_iter = &mut accounts.iter();

    // Get the account to say hello to
    // 使用了 ? 操作符，如果迭代器中有账户地址，会将账户地址与变量 account 绑定。如果迭代器中没有账户地址，? 操作符会让程序执行失败。
    let account = next_account_info(accounts_iter)?;

    // 判断存储状态的账户所有者是否是当前程序。只有账户所有者才能修改数据，否则输出日志并返回。
    // The account must be owned by the program in order to modify its data
    if account.owner != program_id {
        msg!("Greeted account does not have the correct program id");
        return Err(ProgramError::IncorrectProgramId);
    }

    // 先对账户中的数据进行反序列化操作，再将 counter 加一，最后将其序列化后存储到账户中。
    // Increment and store the number of times the account has been greeted
    let mut greeting_account = GreetingAccount::try_from_slice(&account.data.borrow())?;
    greeting_account.counter += 1;
    greeting_account.serialize(&mut &mut account.data.borrow_mut()[..])?;

    msg!("Greeted {} time(s)!", greeting_account.counter);
    // 当程序的逻辑执行成功时返回 Ok(())，否则将 ProgramError 错误返回。ProgramError 是自定义错误的枚举类型，其中包含程序可能失败的各种原因。
    Ok(())
}

// Sanity tests
#[cfg(test)]
mod test {
    use super::*;
    use solana_program::clock::Epoch;
    use std::mem;

    #[test]
    fn test_sanity() {
        let program_id = Pubkey::default();
        let key = Pubkey::default();
        let mut lamports = 0;
        let mut data = vec![0; mem::size_of::<u32>()];
        let owner = Pubkey::default();
        let account = AccountInfo::new(
            &key,
            false,
            true,
            &mut lamports,
            &mut data,
            &owner,
            false,
            Epoch::default(),
        );
        let instruction_data: Vec<u8> = Vec::new();

        let accounts = vec![account];

        assert_eq!(
            GreetingAccount::try_from_slice(&accounts[0].data.borrow())
                .unwrap()
                .counter,
            0
        );
        process_instruction(&program_id, &accounts, &instruction_data).unwrap();
        assert_eq!(
            GreetingAccount::try_from_slice(&accounts[0].data.borrow())
                .unwrap()
                .counter,
            1
        );
        process_instruction(&program_id, &accounts, &instruction_data).unwrap();
        assert_eq!(
            GreetingAccount::try_from_slice(&accounts[0].data.borrow())
                .unwrap()
                .counter,
            2
        );
    }
}
