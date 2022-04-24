# Authorized

授权

```js
new Authorized(staker: PublicKey, withdrawer: PublicKey): Authorized
```

```js
let authorizedAccount = web3.Keypair.generate();

let createAccountTransaction = web3.StakeProgram.createAccount({
    fromPubkey: fromPublicKey.publicKey,
    authorized: new web3.Authorized(authorizedAccount.publicKey, authorizedAccount.publicKey),
    lamports: lamportsForStakeAccount,
    lockup: new web3.Lockup(0, 0, fromPublicKey.publicKey),
    stakePubkey: stakeAccount.publicKey
});
```

