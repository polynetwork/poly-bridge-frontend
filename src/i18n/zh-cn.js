import element from 'element-ui/lib/locale/lang/en';
import { TARGET_MAINNET } from '@/utils/env';
import { WalletName, ChainId, TransactionStatus } from '@/utils/enums';

export default {
  ...element,
  common: {
    header: {
      brandName: 'PolyBridge',
    },
    wallets: {
      connectWallet: 'Connect Wallet',
    },
    networks: {
      mainnet: 'MainNet',
      testnet: 'TestNet',
    },
    menu: {
      audit: 'Audit Report',
      token: 'Token Asset',
      nft: 'NFT Asset',
    },
    connectWallet: {
      chainName: '{chainName} Wallet',
      walletConnected: '{walletName} Connected',
      connectWallet: 'Connect {walletName}',
    },
    footer: {
      copyright: '© 2022 Polynetwork. All rights reserved.',
    },
  },
  home: {
    index: {
      slogon:
        'To\nbuild the next generation\nInternet infrastructure,\nrealize interoperability\nbetween\nmultiple <em>chains</em>',
    },
    form: {
      title: 'Bridge',
      asset: 'Asset',
      collection: 'Collection',
      from: 'From',
      to: 'To',
      chainName: '{chainName}',
      amount: 'Amount',
      max: 'MAX',
      balance: 'Balance',
      fee: 'Fee',
      time: 'Estimated Transaction Time',
      o3ToolTip: 'Available Balance',
      feeTooltip: 'Transaction fee on target chain',
      selfPay: 'Self Pay',
      speedup:
        'If the waiting time is too long, you can try to speed up the transaction. Please refer to ',
      speedUpMSG: 'Your Speed Up transaction has been sent, please wait for it to be settled',
      timeTooltip:
        'An estimation of how long funds will arrive in the destination address based on overall transfer history.',
      connectWallet: 'Connect Wallet',
      historyPrefix: 'You can view your',
      historyLink: 'history',
      maxamount: 'Max Available Amount',
      warningMsg:
        'Please note that there is a potential risk that your transaction will be pending due to lack of liquidity.',
      maxamountTooltip:
        'The largest available number of cross-chain assets on the currently selected target chain (estimated value)',
    },
    selectTokenBasic: {
      title: 'Select Asset',
      inputPlaceholder: 'Search name',
      hint: 'Token Name',
    },
    selectChain: {
      title: 'Select Network',
    },
    selectAsset: {
      title: 'Select Collection',
    },
    selectItem: {
      title: 'Select Item',
    },
    connectWallet: {
      title: 'Connect Wallet',
      chainName: '{chainName} Network',
      walletConnected: '{walletName} Connected',
      connectWallet: 'Connect {walletName}',
    },
    confirm: {
      title: 'Confirm',
      amount: 'Amount',
      from: 'From',
      to: 'To',
      fee: 'Fee',
      chainName: '{chainName} Network',
      receiving: 'You will receive',
      packing: 'Transaction is packing on {chainName}. Please be patient...',
      hash: 'Hash: {hash}',
    },
  },
  nft: {
    form: {
      chain: 'Chain',
      items: 'Items',
      item: 'Item',
      search: 'Search',
      result: 'results',
    },
  },
  transactions: {
    index: {
      title: 'Transaction Records',
      nfttitle: 'NFT Transaction Records',
      fromChain: 'Source Chain',
      toChain: 'Destination Chain',
      hash: 'Hash: {hash}',
      collection: 'Collection',
      amount: 'Amount',
      fee: 'Fee',
      asset: 'Item',
      time: 'Time',
      status: 'Status',
      pagination: 'Page {page} of {pageCount}',
    },
    details: {
      title: 'Transaction Details',
      waiting:
        'The transaction is waiting to be processed on the {chainName}. Please be patient...',
      pending: 'The transaction is proceeding on the {chainName}. Please be patient...',
      succeeded: 'The transaction has succeeded on the {chainName}.',
      failed: 'The transaction is failed on the {chainName}.',
      confirmation: '{blocks}/{needBlocks} Confirm',
      hash: 'Hash: {hash}',
      failedTitle: 'Failed',
      finishedTitle: 'Finished',
      gotoHistory: 'Goto History',
    },
  },
  buttons: {
    speedup: 'Speed Up',
    pay: 'Pay',
    next: 'Next',
    confirm: 'Confirm',
    confirming: 'Confirming...',
    approve: 'Approve',
    approving: 'Approving...',
  },
  messages: {
    copied: '"{text}" has been copied to clipboard.',
  },
  enums: {
    walletName: {
      [WalletName.MetaMask]: 'MetaMask',
      [WalletName.Math]: 'Math Wallet',
      [WalletName.NeoLine]: 'NeoLine',
      [WalletName.NeoLineN3]: 'NeoLine',
      [WalletName.O3]: 'O3',
      [WalletName.Binance]: 'Binance',
      [WalletName.Cyano]: 'Cyano',
      [WalletName.WalletConnect]: 'WalletConnect',
      [WalletName.StarMask]: 'StarMask',
    },
    chainName: {
      [ChainId.Poly]: 'Poly',
      [ChainId.Eth]: 'Ethereum',
      [ChainId.Neo]: 'Neo',
      [ChainId.N3]: 'N3',
      [ChainId.xDai]: 'Gnosis Chain',
      [ChainId.HSC]: 'HSC',
      [ChainId.Kcc]: 'Kcc',
      [ChainId.Harmony]: 'Harmony',
      [ChainId.BYTOM]: 'BYTOM',
      [ChainId.Bsc]: 'BNB',
      [ChainId.Heco]: 'Heco',
      [ChainId.Ont]: 'Ontology',
      [ChainId.Ok]: 'OKExChain',
      [ChainId.Polygon]: 'Polygon',
      [ChainId.Palette]: 'Palette',
      [ChainId.Palette2]: 'Palette2',
      [ChainId.BcsPalette]: 'Bcs Palette',
      [ChainId.Arbitrum]: 'Arbitrum',
      [ChainId.OntEvm]: 'Ontology EVM',
      [ChainId.Optimistic]: 'Optimism',
      [ChainId.Boba]: 'Boba',
      [ChainId.Fantom]: 'Fantom',
      [ChainId.Avalanche]: 'Avalanche',
      [ChainId.Metis]: 'Metis',
      [ChainId.Pixie]: 'Pixie Chain',
      [ChainId.Rinkeby]: 'Rinkeby',
      [ChainId.Boba]: 'Boba',
      [ChainId.Stc]: 'Starcoin',
      [ChainId.Oasis]: 'Oasis',
      [ChainId.Oasis1]: 'Oasis1',
      [ChainId.Boba]: 'Boba',
      [ChainId.BcsPalette2]: 'Bcs Palette2',
      [ChainId.Milkomeda]: 'Milkomeda',
      [ChainId.Cube]: 'Cube',
      [ChainId.Kava]: 'Kava',
      [ChainId.Xrp]: 'Ripple',
      [ChainId.Celo]: 'Celo',
      [ChainId.CLV]: 'CLV P-Chain',
      [ChainId.zkSync]: 'zkSync',
      [ChainId.Astar]: 'Astar',
      [ChainId.Conflux]: 'Conflux eSpace',
      [ChainId.Astar]: 'Astar',
      [ChainId.N3T5]: 'N3T5',
      [ChainId.Aptos]: 'Aptos',
      [ChainId.Goerli]: 'Goerli',
      [ChainId.Bitgert]: 'Bitgert',
      [ChainId.Dexit]: 'Dexit',
      [ChainId.CloudTx]: 'CloudTx',
      [ChainId.polygonZK_testnet]: 'polygonZK_testnet',
      [ChainId.zebec_testnet]: 'zebec_testnet',
      [ChainId.goshen_testnet]: 'goshen_testnet',
      [ChainId.xinfin_testnet]: 'xinfin_testnet',
    },
    chainNetworkName: {
      [ChainId.Poly]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Polygon]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Arbitrum]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.OntEvm]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Optimistic]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Boba]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Palette]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Palette2]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.BcsPalette]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Eth]: TARGET_MAINNET ? 'MainNet' : 'Ropsten TestNet',
      [ChainId.Neo]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.xDai]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.HSC]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Kcc]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Harmony]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.BYTOM]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Bsc]: TARGET_MAINNET ? 'BNB MainNet' : 'BNB TestNet',
      [ChainId.Heco]: TARGET_MAINNET ? 'Heco MainNet' : 'Heco TestNet',
      [ChainId.Ont]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Fantom]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Avalanche]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Metis]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Pixie]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Rinkeby]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Boba]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Stc]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Oasis]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Oasis1]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Boba]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.BcsPalette2]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Milkomeda]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Cube]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Kava]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Xrp]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Celo]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.CLV]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.zkSync]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Astar]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Conflux]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Astar]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.N3T5]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Aptos]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Goerli]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Bitgert]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.Dexit]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.CloudTx]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.polygonZK_testnet]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.zebec_testnet]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.goshen_testnet]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
      [ChainId.xinfin_testnet]: TARGET_MAINNET ? 'MainNet' : 'TestNet',
    },
    transactionStatus: {
      [TransactionStatus.Finished]: 'Finished',
      [TransactionStatus.Pending]: 'Pending',
      [TransactionStatus.SourceDone]: 'Pending',
      [TransactionStatus.SourceConfirmed]: 'Pending',
      [TransactionStatus.PolyConfirmed]: 'Pending',
      [TransactionStatus.FromchainFeePending]: 'Pending',
    },
  },
  errors: {
    wallet: {
      UNKNOWN_ERROR: 'Unknown wallet error.',
      NOT_SUPPORTED: 'Wallet is not supported.',
      NOT_INSTALLED: 'Wallet is not installed.',
      NOT_CONNECTED: '{chainName} wallet is not connected.',
      NOT_SUPPORTED_NETWORK: 'The network in {walletName} wallet is not supported.',
      INCORRECT_NETWORK: 'Please switch network to {chainNetworkName} on {walletName} wallet.',
      USER_REJECTED: 'Request is rejected by user.',
      MALFORMED_INPUT: 'Malformed input.',
      INSUFFICIENT_FUNDS: 'Insufficient funds.',
      COMMUNICATE_FAILED: 'Communicate failed with wallet.',
      TOKEN_IS_NOT_ACCEPT: 'is not accepted yet.',
    },
    chain: {
      UNKNOWN_ERROR: 'Unknown chain error.',
      NOT_SUPPORTED: 'Chain is not supported.',
      COMMUNICATE_FAILED: 'Communicate failed with RPC.',
    },
    http: {
      UNKNOWN_ERROR: 'Unknown request error.',
      NETWORK_ERROR: 'Network error.',
      BAD_REQUEST: 'Bad request.',
      INTERNAL_SERVICE_ERROR: 'Internal server error.',
    },
  },
  validations: {
    required: 'Required.',
    number: 'Please input a number.',
    positive: 'Please input a positive number.',
    maxDecimals: "You've exceeded the decimal limit.",
    maxValue: "You've exceeded the max amount.",
    minValue: 'You entered less than the minimum amount.',
    address: "You've entered an invalid address.",
  },
};
