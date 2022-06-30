import { ethers } from 'ethers'

const sequencerAddress = '0x097355Eb2dc107409AD25112448B0d380E91B9a5'

const startingTimestamp = 1656550636
const config = {
  submissionInterval: 6,
  genesisOutput: ethers.constants.HashZero,
  historicalBlocks: 0,
  startingBlockNumber: 0,
  l2BlockTime: 2,
  startingTimestamp,
  sequencerAddress,

  l2CrossDomainMessengerOwner: ethers.constants.AddressZero,
  gasPriceOracleOwner: ethers.constants.AddressZero,
  gasPriceOracleOverhead: 2100,
  gasPriceOracleScalar: 1000000,
  gasPriceOracleDecimals: 6,

  l1BlockInitialNumber: 0,
  l1BlockInitialTimestamp: 0,
  l1BlockInitialBasefee: 10,
  l1BlockInitialHash: ethers.constants.HashZero,
  l1BlockInitialSequenceNumber: 0,

  proxyAdmin: '0x62790eFcB3a5f3A5D398F95B47930A9Addd83807',
  genesisBlockExtradata: ethers.utils.hexConcat([
    ethers.constants.HashZero,
    sequencerAddress,
    ethers.utils.hexZeroPad('0x', 65),
  ]),
  genesisBlockGasLimit: ethers.BigNumber.from(15000000).toHexString(),

  genesisBlockChainid: 111,
  fundDevAccounts: true,
  optimismBaseFeeRecipient: '0x3a2baA0160275024A50C1be1FC677375E7DB4Bd7',
  optimismL1FeeRecipient: '0x88BCa4Af3d950625752867f826E073E337076581',
  optimismL2FeeRecipient: '0x7C97EEd527B38928E16cEe057978a1eda927a8c1',
  p2pSequencerAddress: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',

  deploymentWaitConfirmations: 1,

  maxSequencerDrift: 10,
  sequencerWindowSize: 240,
  channelTimeout: 240,

  ownerAddress: '0x3CE0f9784a5973d82560Ff227254FBC27707985f',
  batchSenderAddress: '0xBF252F2724daD2cD109dB5BB8620b5601F2783Db'
}

export default config
