- bip39

- sha256

- 分层确定性钱包

- 助记词

- seed 种子

- aes 对称加密
  --以太坊私钥的对称加密算法。用的是 aes-128-ctr

- feature:
  --1.创建 fil 地址

- 存储私钥 -我们来完整梳理一下 Keystore 文件的产生：

使用 scrypt(kbpdf)函数 （根据密码 和 相应的参数） 生成秘钥
使用上一步生成的秘钥 + 账号私钥 + 参数 进行对称加密(aes)。
把相关的参数 和 输出的密文 保存为以上格式的 JSON 文件

example ethers.Js

https://github.com/ethers-io/ethers.js/blob/master/packages/json-wallets/src.ts/keystore.ts#L227
代码示例

- metamask
  没有导出 keyStore 功能，只有导出私钥/助记词功能
  他存储的是类似于 keyStore 的结构:
  {"data":"nzZ47f3wNr0ULLlkOU0Tjna1GsaHgnLXhp3zRnnf...","iv":"Ycw729UY5Neie9zsDx6L2w==","salt":"aA6CrbmDmRRUjGbDo0DLS3kPKIc+H0izzswu9N46rvw="}
  解密后:
  [{"type":"HD Key Tree","data":{"mnemonic":"edge toe crack never place route tree embrace clock hurdle brisk estate","numberOfAccounts":1,"hdPath":"m/44'/60'/0'/0"}},{"type":"Ledger Hardware","data":{"hdPath":"m/44'/60'/0'","accounts":[],"accountDetails":{},"bridgeUrl":"https://metamask.github.io/eth-ledger-bridge-keyring","implementFullBIP44":false}}]

- scrypt

- aes 加密
  -- CTR 块模式 1.生成密钥： 先生成 256 位的 key，派生密钥由 64 个十六进制(32 个字节组成) KBPDF(密码明文，salt)再使用 hex 编码
  2.iv (需要存储)
  3.key
  2.aes.encrypt(message,key, iv)

- todo:
  -- 1.生成种子的 passpharse 怎么确定?
  -- 2. private key --> 地址
  -- 3. 存储 private key(finish)
  -- 4. 导出,解密(finish)

参考链接 1.https://cryptobook.nakov.com/symmetric-key-ciphers/aes-encrypt-decrypt-examples

2.https://github.com/ethers-io/ethers.js/blob/master/packages/json-wallets/src.ts/keystore.ts#L227
