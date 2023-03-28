import { TARGET_MAINNET } from '@/utils/env';

export const WalletName = {
  MetaMask: 'MetaMask',
  CoinBase: 'CoinBase',
  Math: 'Math Wallet',
  NeoLine: 'NeoLine',
  NeoLineN3: 'NeoLineN3',
  O3: 'O3',
  Binance: 'Binance',
  Cyano: 'Cyano',
  WalletConnect: 'WalletConnnect',
  StarMask: 'StarMask',
  XUMM: 'XUMM',
  Martian: 'Martian',
  Petra: 'Petra',
  OkWallet: 'OKX Wallet',
  Bitkeep: 'Bitkeep',
};

export const ChainId = {
  Poly: 0,
  Eth: TARGET_MAINNET ? 2 : 502,
  Ont: 3,
  Neo: TARGET_MAINNET ? 4 : 5,
  N3: TARGET_MAINNET ? 14 : 888,
  xDai: TARGET_MAINNET ? 20 : 206,
  HSC: TARGET_MAINNET ? 28 : 603,
  Harmony: TARGET_MAINNET ? 27 : 800,
  BYTOM: TARGET_MAINNET ? 29 : 701,
  Bsc: TARGET_MAINNET ? 6 : 79,
  Heco: 7,
  Ok: TARGET_MAINNET ? 12 : 200,
  Palette: TARGET_MAINNET ? 8 : 107,
  Palette2: TARGET_MAINNET ? 108 : 108,
  Polygon: TARGET_MAINNET ? 17 : 202,
  Arbitrum: TARGET_MAINNET ? 19 : 215,
  Optimistic: TARGET_MAINNET ? 23 : 210,
  Boba: TARGET_MAINNET ? 25 : 400,
  Oasis: TARGET_MAINNET ? 26 : 500,
  Fantom: TARGET_MAINNET ? 22 : 208,
  Avalanche: TARGET_MAINNET ? 21 : 209,
  Metis: TARGET_MAINNET ? 24 : 300,
  Pixie: TARGET_MAINNET ? 316 : 316,
  Rinkeby: TARGET_MAINNET ? 402 : 402,
  Oasis1: TARGET_MAINNET ? 501 : 501,
  Stc: TARGET_MAINNET ? 31 : 318,
  Kcc: TARGET_MAINNET ? 30 : 900,
  OntEvm: TARGET_MAINNET ? 333 : 333,
  BcsPalette: TARGET_MAINNET ? 1001 : 1001,
  BcsPalette2: TARGET_MAINNET ? 1002 : 1002,
  Milkomeda: TARGET_MAINNET ? 810 : 810,
  Kava: TARGET_MAINNET ? 32 : 920,
  Cube: TARGET_MAINNET ? 35 : 930,
  Xrp: TARGET_MAINNET ? 39 : 223,
  Celo: TARGET_MAINNET ? 36 : 960,
  CLV: TARGET_MAINNET ? 37 : 970,
  zkSync: TARGET_MAINNET ? 45 : 941,
  Conflux: TARGET_MAINNET ? 38 : 980,
  Astar: TARGET_MAINNET ? 40 : 990,
  Aptos: TARGET_MAINNET ? 41 : 998,
  // Goerli: TARGET_MAINNET ? 502 : 502,
  Bitgert: TARGET_MAINNET ? 42 : 1010,
  Dexit: TARGET_MAINNET ? 43 : 1020,
  CloudTx: TARGET_MAINNET ? 44 : 1030,
  polygonZK_testnet: TARGET_MAINNET ? 1040 : 1040,
  Nautilus: TARGET_MAINNET ? 1060 : 1060,
  goshen_testnet: TARGET_MAINNET ? 1070 : 1070,
  xinfin_testnet: TARGET_MAINNET ? 1070 : 1070,
  Sepolia: TARGET_MAINNET ? 602 : 602,
};

export const NetworkChainIdMaps = {
  [TARGET_MAINNET ? 1 : 5]: ChainId.Eth,
  [TARGET_MAINNET ? 56 : 97]: ChainId.Bsc,
  [TARGET_MAINNET ? 128 : 256]: ChainId.Heco,
  [TARGET_MAINNET ? 66 : 65]: ChainId.Ok,
  [TARGET_MAINNET ? 100 : 77]: ChainId.xDai,
  [TARGET_MAINNET ? 70 : 70]: ChainId.HSC,
  [TARGET_MAINNET ? 188 : 189]: ChainId.BYTOM,
  [TARGET_MAINNET ? 1666600000 : 1666700000]: ChainId.Harmony,
  [TARGET_MAINNET ? 137 : 80001]: ChainId.Polygon,
  [TARGET_MAINNET ? 1718 : 1718]: ChainId.Palette,
  [TARGET_MAINNET ? 101 : 101]: ChainId.Palette2,
  [TARGET_MAINNET ? 42161 : 421613]: ChainId.Arbitrum,
  [TARGET_MAINNET ? 10 : 69]: ChainId.Optimistic,
  [TARGET_MAINNET ? 250 : 4002]: ChainId.Fantom,
  [TARGET_MAINNET ? 43114 : 43113]: ChainId.Avalanche,
  [TARGET_MAINNET ? 1088 : 588]: ChainId.Metis,
  [TARGET_MAINNET ? 6626 : 666]: ChainId.Pixie,
  [TARGET_MAINNET ? 4 : 4]: ChainId.Rinkeby,
  [TARGET_MAINNET ? 288 : 28]: ChainId.Boba,
  [TARGET_MAINNET ? 42262 : 42261]: ChainId.Oasis,
  [TARGET_MAINNET ? 321 : 322]: ChainId.Kcc,
  [TARGET_MAINNET ? 58 : 5851]: ChainId.OntEvm,
  [TARGET_MAINNET ? 104 : 104]: ChainId.BcsPalette,
  [TARGET_MAINNET ? 200 : 200]: ChainId.BcsPalette2,
  [TARGET_MAINNET ? 2001 : 200101]: ChainId.Milkomeda,
  [TARGET_MAINNET ? 2222 : 2221]: ChainId.Kava,
  [TARGET_MAINNET ? 1818 : 1819]: ChainId.Cube,
  [TARGET_MAINNET ? 42220 : 44787]: ChainId.Celo,
  [TARGET_MAINNET ? 1024 : 1023]: ChainId.CLV,
  [TARGET_MAINNET ? 324 : 280]: ChainId.zkSync,
  [TARGET_MAINNET ? 1030 : 71]: ChainId.Conflux,
  [TARGET_MAINNET ? 592 : 81]: ChainId.Astar,
  // [TARGET_MAINNET ? 5 : 5]: ChainId.Goerli,
  [TARGET_MAINNET ? 32520 : 64668]: ChainId.Bitgert,
  [TARGET_MAINNET ? 877 : 899]: ChainId.Dexit,
  [TARGET_MAINNET ? 31223 : 31224]: ChainId.CloudTx,
  [TARGET_MAINNET ? 1442 : 1442]: ChainId.polygonZK_testnet,
  [TARGET_MAINNET ? 31229 : 31229]: ChainId.Nautilus,
  [TARGET_MAINNET ? 21772 : 21772]: ChainId.goshen_testnet,
  [TARGET_MAINNET ? 50 : 51]: ChainId.xinfin_testnet,
  [TARGET_MAINNET ? 11155111 : 11155111]: ChainId.Sepolia,
};

export const EthNetworkChainIdMaps = {
  [ChainId.Eth]: TARGET_MAINNET ? 1 : 5,
  [ChainId.Bsc]: TARGET_MAINNET ? 56 : 97,
  [ChainId.Heco]: TARGET_MAINNET ? 128 : 256,
  [ChainId.Ok]: TARGET_MAINNET ? 66 : 65,
  [ChainId.xDai]: TARGET_MAINNET ? 100 : 77,
  [ChainId.Harmony]: TARGET_MAINNET ? 1666600000 : 1666700000,
  [ChainId.HSC]: TARGET_MAINNET ? 70 : 70,
  [ChainId.BYTOM]: TARGET_MAINNET ? 188 : 189,
  [ChainId.Polygon]: TARGET_MAINNET ? 137 : 80001,
  [ChainId.Palette]: TARGET_MAINNET ? 1718 : 1718,
  [ChainId.Palette2]: TARGET_MAINNET ? 101 : 101,
  [ChainId.Arbitrum]: TARGET_MAINNET ? 42161 : 421613,
  [ChainId.Optimistic]: TARGET_MAINNET ? 10 : 69,
  [ChainId.Fantom]: TARGET_MAINNET ? 250 : 4002,
  [ChainId.Avalanche]: TARGET_MAINNET ? 43114 : 43113,
  [ChainId.Metis]: TARGET_MAINNET ? 1088 : 588,
  [ChainId.Pixie]: TARGET_MAINNET ? 6626 : 666,
  [ChainId.Rinkeby]: TARGET_MAINNET ? 4 : 4,
  [ChainId.Boba]: TARGET_MAINNET ? 288 : 28,
  [ChainId.Oasis]: TARGET_MAINNET ? 42262 : 42261,
  [ChainId.Kcc]: TARGET_MAINNET ? 321 : 322,
  [ChainId.OntEvm]: TARGET_MAINNET ? 58 : 5851,
  [ChainId.BcsPalette]: TARGET_MAINNET ? 104 : 104,
  [ChainId.BcsPalette2]: TARGET_MAINNET ? 200 : 200,
  [ChainId.Milkomeda]: TARGET_MAINNET ? 2001 : 200101,
  [ChainId.Kava]: TARGET_MAINNET ? 2222 : 2221,
  [ChainId.Cube]: TARGET_MAINNET ? 1818 : 1819,
  [ChainId.Stc]: TARGET_MAINNET ? 1 : 251,
  [ChainId.Celo]: TARGET_MAINNET ? 42220 : 44787,
  [ChainId.CLV]: TARGET_MAINNET ? 1024 : 1023,
  [ChainId.zkSync]: TARGET_MAINNET ? 324 : 280,
  [ChainId.Astar]: TARGET_MAINNET ? 592 : 81,
  [ChainId.Conflux]: TARGET_MAINNET ? 1030 : 71,
  // [ChainId.Goerli]: TARGET_MAINNET ? 5 : 5,
  [ChainId.Bitgert]: TARGET_MAINNET ? 32520 : 64668,
  [ChainId.Dexit]: TARGET_MAINNET ? 877 : 899,
  [ChainId.CloudTx]: TARGET_MAINNET ? 31223 : 31224,
  [ChainId.polygonZK_testnet]: TARGET_MAINNET ? 1442 : 1442,
  [ChainId.Nautilus]: TARGET_MAINNET ? 31229 : 31229,
  [ChainId.goshen_testnet]: TARGET_MAINNET ? 21772 : 21772,
  [ChainId.xinfin_testnet]: TARGET_MAINNET ? 50 : 51,
  [ChainId.Sepolia]: TARGET_MAINNET ? 11155111 : 11155111,
};

export const SingleTransactionStatus = {
  Failed: -1,
  Pending: 1,
  Done: 2,
};

export const TransactionStatus = {
  Failed: -1,
  Finished: 0,
  Pending: 1,
  SourceDone: 2,
  SourceConfirmed: 3,
  PolyConfirmed: 4,
  FromchainFeePending: 11,
};
