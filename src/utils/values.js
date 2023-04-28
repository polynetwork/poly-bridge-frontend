import { WalletName, ChainId } from './enums';
import { TARGET_MAINNET } from './env';

export const HTTP_BASE_URL = TARGET_MAINNET
  ? 'https://bridge.poly.network/v1'
  : 'https://bridge.poly.network/testnet/v1';
//    'https://bridge.poly.network/merge/v1/bridge'
//  : 'https://bridge.poly.network/testnet/merge/v1/bridge';

export const HTTP_NFT_BASE_URL = TARGET_MAINNET
  ? 'https://bridge.poly.network/nft/v1'
  : 'https://bridge.poly.network/testnet/nft/v1';
//    'https://bridge.poly.network/merge/v1/nft'
//  : 'https://bridge.poly.network/testnet/merge/v1/nft';

export const WALLETS = [
  {
    name: WalletName.MetaMask,
    supportedChainIds: [
      ChainId.Eth,
      ChainId.Bsc,
      ChainId.Heco,
      ChainId.Ok,
      ChainId.Polygon,
      ChainId.Palette,
      ChainId.Palette2,
      ChainId.BcsPalette,
      ChainId.BcsPalette2,
      ChainId.Milkomeda,
      ChainId.Arbitrum,
      ChainId.xDai,
      ChainId.HSC,
      ChainId.Harmony,
      ChainId.BYTOM,
      ChainId.Optimistic,
      ChainId.Boba,
      ChainId.Fantom,
      ChainId.Avalanche,
      ChainId.Metis,
      ChainId.Pixie,
      ChainId.Rinkeby,
      ChainId.Oasis,
      ChainId.Oasis1,
      ChainId.Boba,
      ChainId.Kcc,
      ChainId.OntEvm,
      ChainId.Cube,
      ChainId.Kava,
      ChainId.Celo,
      ChainId.CLV,
      ChainId.zkSync,
      ChainId.Astar,
      ChainId.Conflux,
      ChainId.Astar,
      ChainId.Goerli,
      ChainId.Bitgert,
      ChainId.Dexit,
      ChainId.CloudTx,
      ChainId.polygonZK_testnet,
      ChainId.Nautilus,
      ChainId.Goshen,
      ChainId.Xinfin,
      ChainId.Sepolia,
    ],
    icon: require('@/assets/svg/meta-mask.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
  },
  {
    name: WalletName.CoinBase,
    supportedChainIds: [
      ChainId.Eth,
      ChainId.Bsc,
      ChainId.Heco,
      ChainId.Ok,
      ChainId.Polygon,
      ChainId.Palette,
      ChainId.BcsPalette,
      ChainId.Arbitrum,
      ChainId.xDai,
      ChainId.HSC,
      ChainId.Harmony,
      ChainId.BYTOM,
      ChainId.Optimistic,
      ChainId.Fantom,
      ChainId.Avalanche,
      ChainId.Metis,
      ChainId.Pixie,
      ChainId.Rinkeby,
      ChainId.Boba,
      ChainId.Oasis,
      ChainId.Kcc,
    ],
    icon: require('@/assets/png/coinbase.png'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad',
  },
  // {
  //   name: WalletName.Bitkeep,
  //   supportedChainIds: [
  //     ChainId.Eth,
  //     ChainId.Bsc,
  //     ChainId.Heco,
  //     ChainId.Ok,
  //     ChainId.Polygon,
  //     ChainId.Palette,
  //     ChainId.BcsPalette,
  //     ChainId.Arbitrum,
  //     ChainId.xDai,
  //     ChainId.HSC,
  //     ChainId.Harmony,
  //     ChainId.BYTOM,
  //     ChainId.Optimistic,
  //     ChainId.Fantom,
  //     ChainId.Avalanche,
  //     ChainId.Metis,
  //     ChainId.Pixie,
  //     ChainId.Rinkeby,
  //     ChainId.Boba,
  //     ChainId.Oasis,
  //     ChainId.Kcc,
  //     ChainId.Xinfin,
  //   ],
  //   icon: require('@/assets/svg/bitkeep.svg'),
  //   downloadUrl:
  //     'https://chrome.google.com/webstore/detail/bitkeep-crypto-nft-wallet/jiidiaalihmmhddjgbnbgdfflelocpak',
  // },
  {
    name: WalletName.OkWallet,
    supportedChainIds: [
      ChainId.Eth,
      ChainId.Bsc,
      ChainId.Ok,
      ChainId.Polygon,
      ChainId.Arbitrum,
      ChainId.Optimistic,
      ChainId.Avalanche,
      ChainId.Boba,
      ChainId.Kcc,
      ChainId.Goerli,
    ],
    icon: require('@/assets/png/okwallet.png'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge',
  },
  {
    name: WalletName.Math,
    supportedChainIds: [ChainId.Eth, ChainId.Bsc, ChainId.Heco, ChainId.Ok],
    icon: require('@/assets/png/math.png'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/math-wallet/afbcbjpbpfadlkmhmclhkeeodmamcflc',
  },
  {
    name: WalletName.XUMM,
    supportedChainIds: [ChainId.Xrp],
    icon: require('@/assets/png/xumm.png'),
    downloadUrl: 'https://xumm.app/',
  },
  {
    name: WalletName.NeoLine,
    supportedChainIds: [ChainId.Neo],
    icon: require('@/assets/svg/neoline.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/neoline/cphhlgmgameodnhkjdmkpanlelnlohao',
  },
  {
    name: WalletName.NeoLineN3,
    supportedChainIds: [ChainId.N3],
    icon: require('@/assets/svg/neoline.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/neoline/cphhlgmgameodnhkjdmkpanlelnlohao',
  },
  {
    name: WalletName.O3,
    supportedChainIds: [ChainId.Neo],
    icon: require('@/assets/svg/o3.svg'),
    downloadUrl: 'https://o3.network/#download',
  },
  {
    name: WalletName.Binance,
    supportedChainIds: [ChainId.Bsc],
    icon: require('@/assets/svg/binance.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/binance-chain-wallet/fhbohimaelbohpjbbldcngcnapndodjp',
  },
  {
    name: WalletName.Cyano,
    supportedChainIds: [ChainId.Ont],
    icon: require('@/assets/svg/ONT.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/cyano-wallet/dkdedlpgdmmkkfjabffeganieamfklkm',
  },
  {
    name: WalletName.StarMask,
    supportedChainIds: [ChainId.Stc],
    icon: require('@/assets/svg/stc.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/starmask/mfhbebgoclkghebffdldpobeajmbecfk',
  },
  // ...(TARGET_MAINNET
  //   ? [
  {
    name: WalletName.WalletConnect,
    supportedChainIds: [ChainId.Eth],
    icon: require('@/assets/svg/wallet-connect.svg'),
    downloadUrl: 'https://walletconnect.org/wallets',
  },
  //   ]
  // : []),
  {
    name: WalletName.Martian,
    supportedChainIds: [ChainId.Aptos],
    icon: require('@/assets/png/martian.png'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/martian-aptos-wallet/efbglgofoippbgcjepnhiblaibcnclgk',
  },
  // {
  //   name: WalletName.Petra,
  //   supportedChainIds: [ChainId.Aptos],
  //   icon: require('@/assets/png/martian.png'),
  //   downloadUrl:
  //     'https://chrome.google.com/webstore/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci',
  // },
];

export const MAIN_CHAINS = [
  {
    id: ChainId.Poly,
    explorerUrl: TARGET_MAINNET
      ? 'http://explorer.poly.network/tx/{txHash}'
      : 'http://explorer.poly.network/testnet/tx/{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'http://explorer.poly.network/nfttx/{txHash}'
      : 'http://explorer.poly.network/testnet/nfttx/{txHash}',
  },
  {
    id: ChainId.Eth,
    nativeFee: true,
    icon: require('@/assets/svg/eth.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://etherscan.io/tx/0x{txHash}'
      : 'https://goerli.etherscan.io/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://etherscan.io/tx/0x{txHash}'
      : 'https://goerli.etherscan.io/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x81910675DbaF69deE0fD77570BFD07f8E436386A'
      : //   : '0xe498fb7D00468a67A79dE5D4Ca264d3350165280',
        '0xA058FC5427d3E634698d1185C1BA01ADAf998E14',
    nftLockContractHash: TARGET_MAINNET
      ? '0xe5204d62361A353C665668C858Ea213070CA159c'
      : '0xA4E492E0DFe2B930Bc0EaA94E3aa3531DE2Ef67C',
    pltNftLockContractHash: TARGET_MAINNET
      ? '0xD728e9844af285fA116806c273aa413686aE65e8'
      : '0xbaBaAF5CF7f63437755aAAFE7a4106463c5cD540',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    dst_ccm: TARGET_MAINNET
      ? '0x14413419452Aaf089762A0c5e95eD2A13bBC488C'
      : '0xbA6F835ECAE18f5Fc5eBc074e5A0B94422a13126',
    nftFeeName: 'ETH',
    symbol: 'ETH',
    name: TARGET_MAINNET ? 'Ethereum Mainnet' : 'Goerli TestNet',
    rpcUrl: TARGET_MAINNET ? 'https://mainnet.infura.io/v3/' : 'https://goerli.infura.io/v3/',
    chainExplorerUrl: TARGET_MAINNET ? 'https://etherscan.io/' : 'https://goerli.etherscan.io',
    selfPay: true,
  },
  {
    id: ChainId.N3,
    nativeFee: false,
    icon: require('@/assets/svg/neo.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://neo3.neotube.io/transaction/{txHash}'
      : 'https://n3t5.neotube.io/transaction/{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://neo3.neotube.io/transaction/{txHash}'
      : 'https://n3t5.neotube.io/transaction/{txHash}',
    lockContractHash: TARGET_MAINNET
      ? 'f8328398c4c8e77b6c5843f5e404be0170d5012e'
      : 'c3ac0347e9c4f65b7fff383201a1551da4301e09',
    nftLockContractHash: TARGET_MAINNET
      ? '6187d315b2ba2aadd52d88955d23a840473d5e25'
      : '6187d315b2ba2aadd52d88955d23a840473d5e25',
    nftFeeContractHash: 'd2a4cff31913016155e38e474a2c06d08be276cf',
    nftFeeName: 'GAS',
    selfPay: false,
  },
  {
    id: ChainId.Neo,
    nativeFee: false,
    icon: require('@/assets/svg/neo.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://neotube.io/transaction/0x{txHash}'
      : 'https://testnet.neotube.io/transaction/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '125c83403763670c215f9c7c815ef759b258a41b'
      : 'cd074cd290acc3d73c030784101afbcf40fd86a1',
  },
  {
    id: ChainId.xDai,
    nativeFee: true,
    icon: require('@/assets/png/xdai.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://blockscout.com/xdai/mainnet/tx/0x{txHash}'
      : 'https://blockscout.com/poa/sokol/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x74A7f2A3aFa8B0CB577985663B5811901A860619'
      : '0xa7eDA65F94A2a334a0de42d479585b65D27b2249',
    dst_ccm: TARGET_MAINNET
      ? '0x2f7ac9436ba4B548f9582af91CA1Ef02cd2F1f03'
      : '0xF87527a74215777391fE4AfD082FeeED3E5A0ca5',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'xDai',
    symbol: 'xDai',
    name: TARGET_MAINNET ? 'xDai Mainnet' : 'xDai Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://rpc.xdaichain.com' : 'https://sokol.poa.network',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://blockscout.com/xdai/mainnet'
      : 'https://blockscout.com/poa/sokol/',
    selfPay: true,
  },
  {
    id: ChainId.Metis,
    nativeFee: true,
    icon: require('@/assets/png/metis.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://andromeda-explorer.metis.io/tx/0x{txHash}'
      : 'http://stardust-explorer.metis.io/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xFbFDfc95B8EAe4719Ae7D7b94e6F7aCC2DC2e0D7'
      : '0xA09E4d0406123d14CFB1d60D78C6Dc386b7de7F9',
    dst_ccm: TARGET_MAINNET
      ? '0x2aA63cd0b28FB4C31fA8e4E95Ec11815Be07b9Ac'
      : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
    nftFeeContractHash: 'deaddeaddeaddeaddeaddeaddeaddeaddead0000',
    nftFeeName: 'Metis',
    symbol: TARGET_MAINNET ? 'METIS' : 'METIS',
    name: TARGET_MAINNET ? 'Metis Andromeda Mainnet' : 'Metis TESTNET Stardust',
    rpcUrl: TARGET_MAINNET
      ? 'https://andromeda.metis.io/?owner=1088'
      : 'https://stardust.metis.io/?owner=588',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://blockscout.com/xdai/mainnet'
      : 'https://stardust-explorer.metis.io',
    selfPay: true,
  },
  {
    id: ChainId.Boba,
    nativeFee: true,
    icon: require('@/assets/png/boba.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://blockexplorer.boba.network/tx/0x{txHash}'
      : 'https://blockexplorer.rinkeby.boba.network/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x33d9bF459b39a888422580916f01C4c44a68a615'
      : '0xF87527a74215777391fE4AfD082FeeED3E5A0ca5',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xa65bD4431C38A4dD9c92ebE60dE3cb8C252c04E5',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'ETH',
    symbol: TARGET_MAINNET ? 'ETH' : 'ETH',
    name: TARGET_MAINNET ? 'Boba Mainnet' : 'Boba Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://mainnet.boba.network' : 'https://rinkeby.boba.network/',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://blockexplorer.boba.network'
      : 'https://blockexplorer.rinkeby.boba.network/',
    selfPay: true,
  },
  {
    id: ChainId.Bsc,
    nativeFee: true,
    icon: require('@/assets/svg/bsc.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://bscscan.com/tx/0x{txHash}'
      : 'https://testnet.bscscan.com/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://bscscan.com/tx/0x{txHash}'
      : 'https://testnet.bscscan.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xbc3B4E7517c06019F30Bf2f707eD2770b85f9928'
      : //  : '0xCed7997C3e807Fcdc5ac18fFC0B8af93a15a9eE5',
        '0xfb717F8d478156fE7428369075bB2FaB4Ea659B5',
    nftLockContractHash: TARGET_MAINNET
      ? '0xe2bD9dD8FAF5C4C2087Ab82eC7E63F619CcAa152'
      : '0x61E289D43C1FEA7598786557A2F309979ad144D3',
    dst_ccm: TARGET_MAINNET
      ? '0x1c9Ca8aBb5da65d94DaD2E8Fb3f45535480d5909'
      : '0x906bC93FF690d6D3D2C4E7A7dfA4dEbdEF2cD7CA',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'BNB',
    symbol: TARGET_MAINNET ? 'BNB' : 'BNB',
    name: TARGET_MAINNET ? 'BNB Mainnet' : 'BNB Testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://bsc-dataseed4.ninicoin.io/'
      : 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    chainExplorerUrl: TARGET_MAINNET ? 'https://bscscan.com' : 'https://testnet.bscscan.com',
    selfPay: true,
  },
  {
    id: ChainId.Heco,
    nativeFee: true,
    icon: require('@/assets/svg/heco.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://hecoinfo.com/tx/0x{txHash}'
      : 'https://testnet.hecoinfo.com/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://hecoinfo.com/tx/0x{txHash}'
      : 'https://testnet.hecoinfo.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x1B0C55be400e2a7D924032B257Fbc75Bbfd256E7'
      : //  : '0x3c92F1E31aACA43Eb4fF8aE498C7E85618680F45',
        '0xCC8407Ee04AaC2AdC0E6A55E7E97176C701146cd',
    nftLockContractHash: TARGET_MAINNET
      ? '0xe2bD9dD8FAF5C4C2087Ab82eC7E63F619CcAa152'
      : '0xbaBaAF5CF7f63437755aAAFE7a4106463c5cD540',
    dst_ccm: TARGET_MAINNET
      ? '0x7109c5F898C5667941B3D2A6451b4bFBeD2bdBbF'
      : '0x4772274FE26130339563974F0229e71017230288',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'HT',
    symbol: TARGET_MAINNET ? 'HT' : 'HT',
    name: TARGET_MAINNET ? 'HECO Mainnet' : 'HECO Testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://http-mainnet.hecochain.com'
      : 'https://http-testnet.hecochain.com',
    chainExplorerUrl: TARGET_MAINNET ? 'https://hecoinfo.com' : 'https://testnet.hecoinfo.com',
    selfPay: true,
  },
  {
    id: ChainId.Oasis,
    nativeFee: true,
    icon: require('@/assets/png/oasis.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer.emerald.oasis.dev/tx/0x{txHash}'
      : 'https://testnet.explorer.emerald.oasis.dev/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xbaf396bD590D23D4F4dF5f21b09bA9F869C4B7A6'
      : '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99',
    dst_ccm: TARGET_MAINNET
      ? '0x0C611b42B78e7b5760B8EB9DA9fA1fb34Db86C2c'
      : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'ROSE',
    symbol: TARGET_MAINNET ? 'ROSE' : 'ROSE',
    name: TARGET_MAINNET ? 'Oasis Mainnet' : 'Oasis Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://emerald.oasis.dev' : 'https://testnet.emerald.oasis.dev',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://explorer.emerald.oasis.dev/'
      : 'https://testnet.explorer.emerald.oasis.dev/',
    selfPay: true,
  },
  {
    id: ChainId.Polygon,
    nativeFee: true,
    icon: require('@/assets/svg/polygon.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://polygonscan.com/tx/0x{txHash}'
      : 'https://mumbai.polygonscan.com/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://polygonscan.com/tx/0x{txHash}'
      : 'https://mumbai.polygonscan.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xB88f13682F3C602aCD84B4b2eEB96A9DD75Afd89'
      : '0xD5d63Dce45E0275Ca76a8b2e9BD8C11679A57D0D',
    nftLockContractHash: TARGET_MAINNET
      ? '0x6cEB2EC1E82880812F6aA60DfA260679D6C8323d'
      : '0xeA5B2a0cF4cA9bd5c72Ea1fbEE1FFe420e57f692',
    dst_ccm: TARGET_MAINNET
      ? '0xB16FED79a6Cb9270956f045F2E7989AFfb75d459'
      : '0xDC1045aD8956e14eC51B7824AB26b1360567ab51',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'MATIC',
    symbol: TARGET_MAINNET ? 'MATIC' : 'MATIC',
    name: TARGET_MAINNET ? 'Polygon Mainnet' : 'Polygon Testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://rpc-mainnet.maticvigil.com/'
      : 'https://rpc-mumbai.maticvigil.com',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://polygonscan.com/'
      : 'https://mumbai.polygonscan.com',
    selfPay: true,
  },
  {
    id: ChainId.Optimistic,
    nativeFee: true,
    icon: require('@/assets/svg/op.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://optimistic.etherscan.io/tx/0x{txHash}'
      : 'https://kovan-optimistic.etherscan.io/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? 'f06587dE89e289Ce480CDf21109A14547eb33A0d'
      : 'E324EF8cd52833DD117e8ca87b483E78b30C3696',
    dst_ccm: TARGET_MAINNET
      ? '0x2aA63cd0b28FB4C31fA8e4E95Ec11815Be07b9Ac'
      : '0xC8042579D6b60E0e35161F228827E3Fa0F51d5B6',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'ETH',
    symbol: TARGET_MAINNET ? 'ETH' : 'ETH',
    name: TARGET_MAINNET ? 'Optimism Ethereum' : 'Optimism Ethereum (Kovan)',
    rpcUrl: TARGET_MAINNET ? 'https://mainnet.optimism.io' : 'https://kovan.optimism.io',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://optimistic.etherscan.io'
      : 'https://kovan-optimistic.etherscan.io',
    selfPay: true,
  },
  {
    id: ChainId.Fantom,
    nativeFee: true,
    icon: require('@/assets/png/ftm.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://ftmscan.com/tx/0x{txHash}'
      : 'https://testnet.ftmscan.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? 'f06587dE89e289Ce480CDf21109A14547eb33A0d'
      : 'FAddf0cfb08F92779560db57BE6b2C7303aaD266',
    dst_ccm: TARGET_MAINNET
      ? '0x2aA63cd0b28FB4C31fA8e4E95Ec11815Be07b9Ac'
      : '0x1C84D74084c3C3301BE4777A568D78211189c871',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'FTM',
    symbol: TARGET_MAINNET ? 'FTM' : 'FTM',
    name: TARGET_MAINNET ? 'FTM Mainnet' : 'FTM Testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://ftmnode1.anyswap.exchange'
      : 'https://rpc.testnet.fantom.network/',
    chainExplorerUrl: TARGET_MAINNET ? 'https://ftmscan.com/' : 'https://testnet.ftmscan.com/',
    selfPay: true,
  },
  {
    id: ChainId.Avalanche,
    nativeFee: true,
    icon: require('@/assets/png/avax.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://avascan.info/blockchain/c/tx/0x{txHash}'
      : 'https://testnet.avascan.info/blockchain/c/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? 'f06587dE89e289Ce480CDf21109A14547eb33A0d'
      : 'ac0a6759696569B3729177ba6844D41FF6D57844',
    dst_ccm: TARGET_MAINNET
      ? '0x2aA63cd0b28FB4C31fA8e4E95Ec11815Be07b9Ac'
      : '0xf37D8C2d072b74d6532541B70319ef08f9F6a4a8',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'AVAX',
    symbol: TARGET_MAINNET ? 'AVAX' : 'AVAX',
    name: TARGET_MAINNET ? 'Avalanch Mainnet' : 'Avalanch Testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://api.avax.network/ext/bc/C/rpc'
      : 'https://api.avax-test.network/ext/bc/C/rpc',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://avascan.info/blockchain/c/'
      : 'https://testnet.avascan.info/blockchain/c/',
    selfPay: true,
  },
  {
    id: ChainId.Arbitrum,
    nativeFee: true,
    icon: require('@/assets/svg/Arbitrum.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://arbiscan.io/tx/0x{txHash}'
      : 'https://goerli.arbiscan.io/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x0f8C16BA16E58525Eb2aDc231ff360cfa00bB527'
      : '0xAefD220aE393144dcb5EFD6Ab55ABDf6a3d0444d',
    dst_ccm: TARGET_MAINNET
      ? '0x7ceA671DABFBa880aF6723bDdd6B9f4caA15C87B'
      : '0x55a59c57a133d1c999b3Eaf5B16ad5c1F2e365c8',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'ETH',
    symbol: TARGET_MAINNET ? 'ETH' : 'ETH',
    name: TARGET_MAINNET ? 'Arbitrum Mainnet' : 'Arbitrum Goerli',
    rpcUrl: TARGET_MAINNET
      ? 'https://arb1.arbitrum.io/rpc'
      : 'https://goerli-rollup.arbitrum.io/rpc',
    chainExplorerUrl: TARGET_MAINNET ? 'https://arbiscan.io/' : 'https://goerli.arbiscan.io/',
    selfPay: true,
  },
  {
    id: ChainId.Palette,
    nativeFee: true,
    icon: require('@/assets/svg/plt.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://palettescan.com/#/chain/tx/0x{txHash}'
      : 'http://106.75.251.68/#/chain/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://palettescan.com/#/chain/tx/0x{txHash}'
      : 'http://106.75.251.68/#/chain/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x0A9C412633465fdeE4861CeE02987386100bEAe6'
      : '0x3b855e095b32fcd2811663cba56bbfa6b1781821',
    nftLockContractHash: TARGET_MAINNET
      ? '0x41985E2A8826233618392e38d46d2060fbCC3F2A'
      : '0x0806e6925e6960E06cD4781e22A636bA233B53De',
    dst_ccm: TARGET_MAINNET
      ? '0x1b02EEE12A7bF02922113a70d3D343De4b43f776'
      : '0xB64EE4b7cf935C51233b6ED9b0732D3Bd26E3442',
    nftFeeContractHash: '0000000000000000000000000000000000000103',
    nftFeeName: 'PLT',
    symbol: TARGET_MAINNET ? 'PLT' : 'PLT',
    name: TARGET_MAINNET ? 'PLT Mainnet' : 'PLT Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://palette-rpc.com:22000' : 'http://106.75.246.130:22000',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://palettescan.com/#/chain/'
      : 'http://106.75.251.68/#/chain/',
    selfPay: true,
  },
  {
    id: ChainId.Ok,
    nativeFee: true,
    icon: require('@/assets/jpg/oecd.jpg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://www.oklink.com/okexchain/tx/0x{txHash}'
      : 'https://www.oklink.com/okexchain-test/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xbd4a08577476A521C41a21EF3f00b045b74175d5'
      : //  : '0x5598226aD2E8991deEFD03203739C87BdF6e6D03',
        '0xbAa40bBd7888f79614057d82bdcE88dF2D23bf55',
    dst_ccm: TARGET_MAINNET
      ? '0x6CE66Cf89A17B5C22e757cca01beAD901fC8C7f2'
      : '0x60Ab3e4a841c8a2E4148aAfc74C0E63c4B54d109',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'OKT',
    symbol: TARGET_MAINNET ? 'OKT' : 'OKT',
    name: TARGET_MAINNET ? 'OKEX Mainnet' : 'OKEX Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://exchainrpc.okex.org' : 'https://exchaintestrpc.okex.org',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://www.oklink.com/okexchain/'
      : 'https://www.oklink.com/okexchain-test/',
    selfPay: true,
  },
  {
    id: ChainId.Cube,
    nativeFee: true,
    icon: require('@/assets/png/cube.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://www.cubescan.network/en-us/tx/0x{txHash}'
      : 'https://testnet.cubescan.network/en-us/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x80C99516c49dB5e1F002c47c9d17ABF6208E8736'
      : '0x30e6ec356ceF1cfe3c7e14392EA08448382327bD',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xD5a240f7F755bCa2aE992E807b06d24eB6DF7C12',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'CUBE',
    symbol: TARGET_MAINNET ? 'CUBE' : 'CUBE',
    name: TARGET_MAINNET ? 'Cube Mainnet' : 'Cube Testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://http-mainnet.cube.network'
      : 'https://http-testnet.cube.network',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://www.cubescan.network'
      : 'https://testnet.cubescan.network',
    selfPay: true,
  },
  {
    id: ChainId.Kava,
    nativeFee: true,
    icon: require('@/assets/svg/kava.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer.kava.io/tx/0x{txHash}'
      : 'https://explorer.evm-alpha.kava.io/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x6cEB2EC1E82880812F6aA60DfA260679D6C8323d'
      : '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'KAVA',
    symbol: TARGET_MAINNET ? 'KAVA' : 'KAVA',
    name: TARGET_MAINNET ? 'KAVA Mainnet' : 'KAVA Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://evm.kava.io' : 'https://evm.evm-alpha.kava.io',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://explorer.kava.io'
      : 'https://explorer.evm-alpha.kava.io',
    selfPay: true,
  },
  {
    id: ChainId.Ont,
    nativeFee: false,
    icon: require('@/assets/svg/ONT.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer.ont.io/transaction/{txHash}'
      : 'https://explorer.ont.io/transaction/{txHash}/testnet',
    lockContractHash: TARGET_MAINNET
      ? 'c93837e82178d406af8c84e1841c6960af251cb5'
      : 'c16b8cd1effb3c103b18e43ebad8386ccf2e0db6',
    selfPay: false,
  },
  {
    id: ChainId.Stc,
    nativeFee: true,
    icon: require('@/assets/svg/stc.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://stcscan.io/main/transactions/detail/0x{txHash}'
      : 'https://stcscan.io/barnard/transactions/detail/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xe52552637c5897a2d499fbf08216f73e'
      : '0x416b32009fe49fcab1d5f2ba0153838f',
    dst_ccm: TARGET_MAINNET
      ? '0xe52552637c5897a2d499fbf08216f73e::CrossChainScript'
      : '0x416b32009fe49fcab1d5f2ba0153838f::CrossChainScript',
    nftFeeContractHash: '0x00000000000000000000000000000001::STC::STC',
    nftFeeName: 'STC',
  },
  {
    id: ChainId.HSC,
    nativeFee: true,
    icon: require('@/assets/png/hoo.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://hooscan.com/tx/0x{txHash}'
      : 'https://hooscan.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xC0F6d0443bAB01F4E1B843b96452a6DbA530d878'
      : '0x5906777d34257a2b479c291871C9BFdFB922D67D',
    dst_ccm: TARGET_MAINNET
      ? '0x18C0628876EFD2A235F81318e5Ba211189A1ddDF'
      : '0x0744b1802B9D879AdB2C4ea3b7A9bE38073f3a43',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'HSC',
    symbol: TARGET_MAINNET ? 'HSC' : 'HSC',
    name: TARGET_MAINNET ? 'Hoo Smart Chain Mainnet' : 'Hoo Smart Chain Testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://http-mainnet.hoosmartchain.com'
      : 'https://http-mainnet.hoosmartchain.com',
    chainExplorerUrl: TARGET_MAINNET ? 'https://hooscan.com/' : 'https://hooscan.com/',
    selfPay: true,
  } /* waiting info */,
  {
    id: ChainId.Kcc,
    nativeFee: true,
    icon: require('@/assets/png/kcc.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer.kcc.io/tx/0x{txHash}'
      : 'https://scan-testnet.kcc.network/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x5906777d34257a2b479c291871C9BFdFB922D67D'
      : '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'KCS',
    symbol: TARGET_MAINNET ? 'KCS' : 'KCS',
    name: TARGET_MAINNET ? 'KCC-MAINNET' : 'KCC-TESTNET',
    rpcUrl: TARGET_MAINNET ? 'https://rpc-mainnet.kcc.network' : 'https://rpc-testnet.kcc.network',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://explorer.kcc.io/en'
      : 'https://scan-testnet.kcc.network',
    selfPay: true,
  },
  {
    id: ChainId.Harmony,
    nativeFee: true,
    icon: require('@/assets/svg/Harmony.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer.harmony.one/tx/0x{txHash}'
      : 'https://explorer.pops.one/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x5906777d34257a2b479c291871C9BFdFB922D67D'
      : '0xc927f0EF4f25E19a40F0Cb34da841B45c13649fd',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0x55a59c57a133d1c999b3Eaf5B16ad5c1F2e365c8',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'ONE',
    symbol: 'ONE',
    name: TARGET_MAINNET ? 'Harmony Mainnet' : 'Harmony Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://api.harmony.one' : 'https://api.s0.b.hmny.io',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://explorer.harmony.one/'
      : 'https://explorer.pops.one/',
    selfPay: true,
  },
  {
    id: ChainId.BYTOM,
    nativeFee: true,
    icon: require('@/assets/png/bytom.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://bmc.blockmeta.com/tx/0x{txHash}'
      : 'https://bmctestnet.blockmeta.com/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://bmc.blockmeta.com/tx/0x{txHash}'
      : 'https://bmctestnet.blockmeta.com/tx/0x{txHash}',
    nftLockContractHash: TARGET_MAINNET
      ? '0x33d9bF459b39a888422580916f01C4c44a68a615'
      : '0x6fd13dd4181dDb0f7463e19caC659FD3e9FB8a82',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0x7877Ad76Dd6069035B56137707368C945D2aD452',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'BTM',
    symbol: TARGET_MAINNET ? 'BTM' : 'BTM',
    name: TARGET_MAINNET ? 'BMC Mainnet' : 'BMC Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://mainnet.bmcchain.com/' : 'https://testnet.bmcchain.com',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://bmc.blockmeta.com'
      : 'https://bmctestnet.blockmeta.com',
    selfPay: true,
  },
  {
    id: ChainId.Celo,
    nativeFee: true,
    icon: require('@/assets/png/celo.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer.celo.org/tx/0x{txHash}'
      : 'https://alfajores-blockscout.celo-testnet.org/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x80C99516c49dB5e1F002c47c9d17ABF6208E8736'
      : '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'CELO',
    symbol: TARGET_MAINNET ? 'CELO' : 'CELO',
    name: TARGET_MAINNET ? 'CELO Mainnet' : 'CELO Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://forno.celo.org' : 'https://alfajores-forno.celo-testnet.org',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://explorer.celo.org'
      : 'https://alfajores-blockscout.celo-testnet.org',
    selfPay: true,
  },
  {
    id: ChainId.CLV,
    nativeFee: true,
    icon: require('@/assets/svg/clv.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://clvscan.com/tx/0x{txHash}'
      : 'https://clvscan.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x5906777d34257a2b479c291871C9BFdFB922D67D'
      : '0x82E9948acA92412b8094fE649C3f32bEfFFEDb7C',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'CLV',
    symbol: TARGET_MAINNET ? 'CLV' : 'CLV',
    name: TARGET_MAINNET ? 'CLV Mainnet' : 'CLV Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://api-para.clover.finance' : 'https://rpc-3.clover.finance',
    chainExplorerUrl: TARGET_MAINNET ? 'https://clvscan.com/' : 'https://clvscan.com/',
    selfPay: true,
  },
  {
    id: ChainId.Conflux,
    nativeFee: true,
    icon: require('@/assets/svg/conflux.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://evm.confluxscan.net/tx/0x{txHash}'
      : 'https://evmtestnet.confluxscan.net/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x5906777d34257a2b479c291871C9BFdFB922D67D'
      : '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'CFX',
    symbol: TARGET_MAINNET ? 'CFX' : 'CFX',
    name: TARGET_MAINNET ? 'Conflux eSpace Hydra' : 'Conflux eSpace testnet',
    rpcUrl: TARGET_MAINNET ? 'https://evm.confluxrpc.com' : 'https://evmtestnet.confluxrpc.com',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://evm.confluxscan.net/'
      : 'https://evmtestnet.confluxscan.net/',
    selfPay: true,
  },
  {
    id: ChainId.Xrp,
    nativeFee: true,
    icon: require('@/assets/png/xrp.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://xrpscan.com/tx/{txHash}'
      : 'https://testnet.xrpl.org/transactions/{txHash}',
    WrapperContract: TARGET_MAINNET
      ? 'rNLAvVYSiVzrVLvk1GVnZnMd26YRKvYVL6'
      : 'rNLAvVYSiVzrVLvk1GVnZnMd26YRKvYVL6',
    lockProxyContractHash: TARGET_MAINNET
      ? 'r37ToMmnEYrrTf4WWu47Myn8m5vVgHa3yG'
      : 'r37ToMmnEYrrTf4WWu47Myn8m5vVgHa3yG',
    nftFeeName: 'XRP',
    nftFeeContractHash: '51fa7b7c1e0c79b54de202e6a24fef61bf54f442',
    selfPay: true,
  },
  {
    id: ChainId.Aptos,
    nativeFee: true,
    icon: require('@/assets/png/aptos.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer.aptoslabs.com/txn/0x{txHash}'
      : 'https://explorer.aptoslabs.com/txn/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xf12a4ff673797d20307f081103186c6a725a6c8609a551bdc13ee30862f2ce15'
      : '0xf12a4ff673797d20307f081103186c6a725a6c8609a551bdc13ee30862f2ce15',
    dst_ccm: TARGET_MAINNET
      ? '0xFcf7A3207b7442F29a9f88e2d7638633B494843f'
      : '0xFcf7A3207b7442F29a9f88e2d7638633B494843f',
    nftFeeContractHash: '0x1::aptos_coin::AptosCoin',
    nftFeeName: 'APT',
    symbol: TARGET_MAINNET ? 'APT' : 'APT',
    selfPay: true,
  },
  {
    id: ChainId.Astar,
    nativeFee: true,
    icon: require('@/assets/png/astar.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://blockscout.com/astar/tx/0x{txHash}'
      : 'https://blockscout.com/shibuya/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x5906777d34257a2b479c291871c9bfdfb922d67d'
      : '0xdD5CcD4B40afb869F00A092Ace0255f1942185De',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xFeE651E032197770B65516EFbBdeD11483533264',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: TARGET_MAINNET ? 'ASTR' : 'SBY',
    symbol: TARGET_MAINNET ? 'ASTR' : 'SBY',
    name: TARGET_MAINNET ? 'Astar Network' : 'ASTAR Shibuya Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://evm.astar.network' : 'https://evm.shibuya.astar.network',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://blockscout.com/astar/'
      : 'https://blockscout.com/shibuya/',
    selfPay: true,
  },
  {
    id: ChainId.Bitgert,
    nativeFee: true,
    icon: require('@/assets/jpg/bitgert.jpeg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://brisescan.com/tx/0x{txHash}'
      : 'https://testnet-explorer.brisescan.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x5906777d34257a2b479c291871C9BFdFB922D67D'
      : '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'BRISE',
    symbol: TARGET_MAINNET ? 'BRISE' : 'BRISE',
    name: TARGET_MAINNET ? 'Bitgert Main' : 'Bitgert Test',
    rpcUrl: TARGET_MAINNET
      ? 'https://mainnet-rpc.brisescan.com'
      : 'https://testnet-rpc.brisescan.com',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://brisescan.com'
      : 'https://testnet-explorer.brisescan.com',
    selfPay: true,
  },
  {
    id: ChainId.Dexit,
    nativeFee: true,
    icon: require('@/assets/png/dexit.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://dxtscan.com/tx/0x{txHash}'
      : 'https://testnet.dxtscan.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x80C99516c49dB5e1F002c47c9d17ABF6208E8736'
      : '0xc2d365475eef3ec83e59d1bcdf3a291d7b23ba99',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xd6fc5374649cea121395a4860fdb33f21783c4af',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'DXT',
    symbol: TARGET_MAINNET ? 'DXT' : 'DXT',
    name: TARGET_MAINNET ? 'Dexit Main' : 'Dexit Test',
    rpcUrl: TARGET_MAINNET ? 'https://dxt.dexit.network' : 'https://testnet.dexit.network',
    chainExplorerUrl: TARGET_MAINNET ? 'https://dxtscan.com' : 'https://testnet.dxtscan.com',
    selfPay: true,
  },
  {
    id: ChainId.CloudTx,
    nativeFee: true,
    icon: require('@/assets/png/cloudtx.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://scan.cloudtx.finance/tx/0x{txHash}'
      : 'https://explorer.cloudtx.finance/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x5906777d34257a2b479c291871C9BFdFB922D67D'
      : '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'CLD',
    symbol: TARGET_MAINNET ? 'CLD' : 'CLD',
    name: TARGET_MAINNET ? 'CloudTx Mainnet' : 'CloudTx Testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://mainnet-rpc.cloudtx.finance'
      : 'https://testnet-rpc.cloudtx.finance',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://scan.cloudtx.finance/'
      : 'https://explorer.cloudtx.finance/',
    selfPay: true,
  },
  {
    id: ChainId.zkSync,
    nativeFee: true,
    icon: require('@/assets/jpg/zk.jpeg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://zksync2-mainnet.zkscan.io/tx/0x{txHash}'
      : 'https://zksync2-testnet.zkscan.io/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xe40C9F8e576cFF6E0A274dd230835d55fE50BBc9'
      : '0xBBd81dBaF40BE09e7Fde684eF742259Fc1B6cfA6',
    dst_ccm: TARGET_MAINNET
      ? '0xb0cc68953b55E1eDE1B7985c7c70C428AF9abc3e'
      : '0xaC2E341cb8E8B04b7a3BD98626626DE3187d8D0B',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'ETH',
    symbol: TARGET_MAINNET ? 'ETH' : 'ETH',
    name: TARGET_MAINNET ? 'zkSync Era Mainnet' : 'zkSync alpha testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://zksync2-mainnet.zksync.io'
      : 'https://zksync2-testnet.zksync.dev',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://zksync2-mainnet.zkscan.io/'
      : 'https://zksync2-testnet.zkscan.io/',
    selfPay: true,
  },
  {
    id: ChainId.Xinfin,
    nativeFee: true,
    icon: require('@/assets/svg/xdc.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer.xinfin.network/tx/0x{txHash}'
      : 'https://explorer.apothem.network/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x5906777d34257a2b479c291871C9BFdFB922D67D'
      : '0xa65bD4431C38A4dD9c92ebE60dE3cb8C252c04E5',
    dst_ccm: TARGET_MAINNET
      ? '0xab7a3CA9bDcE476F0ECC04c127CFEe0F3D212BC5'
      : '0xFeE651E032197770B65516EFbBdeD11483533264',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'XDC',
    selfPay: true,
    symbol: TARGET_MAINNET ? 'XDC' : 'XDC',
    name: TARGET_MAINNET ? 'Xinfin Main' : 'Xinfin Test',
    rpcUrl: TARGET_MAINNET ? 'https://erpc.xinfin.network' : 'https://erpc.apothem.network',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://explorer.xinfin.network/'
      : 'https://explorer.apothem.network/',
  },
];

export const TEST_CHAINS = [
  // {
  //   id: ChainId.BcsPalette,
  //   nativeFee: true,
  //   icon: require('@/assets/svg/plt.svg'),
  //   explorerUrl: TARGET_MAINNET
  //     ? 'https://palettescan.com/#/chain/tx/0x{txHash}'
  //     : 'http://106.75.251.68/#/chain/tx/0x{txHash}',
  //   nftexplorerUrl: TARGET_MAINNET
  //     ? 'https://palettescan.com/#/chain/tx/0x{txHash}'
  //     : 'http://106.75.251.68/#/chain/tx/0x{txHash}',
  //   lockContractHash: TARGET_MAINNET
  //     ? '0x0c5c0b03e897e7b1828f2bc923ea4498ec891060'
  //     : '0x0c5c0b03e897e7b1828f2bc923ea4498ec891060',
  //   nftLockContractHash: TARGET_MAINNET
  //     ? '0x41985E2A8826233618392e38d46d2060fbCC3F2A'
  //     : '0x0806e6925e6960E06cD4781e22A636bA233B53De',
  //   dst_ccm: TARGET_MAINNET
  //     ? '0xf2cae31596433ada66393bde525f80aee97b3112'
  //     : '0xf2cae31596433ada66393bde525f80aee97b3112',
  //   nftFeeContractHash: '0000000000000000000000000000000000000103',
  //   nftFeeName: 'wePLT',
  //   symbol: TARGET_MAINNET ? 'wePLT' : 'wePLT',
  //   name: TARGET_MAINNET ? 'BcsPalette Mainnet' : 'BcsPalette Testnet',
  //   rpcUrl: TARGET_MAINNET ? 'http://13.231.222.1:22000' : 'http://106.75.246.130:22000',
  //   chainExplorerUrl: TARGET_MAINNET
  //     ? 'https://palettescan.com/#/chain/'
  //     : 'http://106.75.251.68/#/chain/',
  //   selfPay: true,
  // } /* waiting */,
  {
    id: ChainId.BcsPalette2,
    nativeFee: true,
    icon: require('@/assets/svg/plt.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://palettescan.com/#/chain/tx/0x{txHash}'
      : 'http://106.75.251.68/#/chain/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://palettescan.com/#/chain/tx/0x{txHash}'
      : 'http://106.75.251.68/#/chain/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x7A3C7a75EF1e44800d75101cb2baa53506559c76'
      : '0x7A3C7a75EF1e44800d75101cb2baa53506559c76',
    nftLockContractHash: TARGET_MAINNET
      ? '0x41985E2A8826233618392e38d46d2060fbCC3F2A'
      : '0x0806e6925e6960E06cD4781e22A636bA233B53De',
    dst_ccm: TARGET_MAINNET
      ? '0xC2CA384247EF3a121E2c4acA754652C7f8D8bA19'
      : '0xC2CA384247EF3a121E2c4acA754652C7f8D8bA19',
    nftFeeContractHash: '0000000000000000000000000000000000000103',
    nftFeeName: 'wePLT',
    symbol: TARGET_MAINNET ? 'wePLT' : 'wePLT',
    name: TARGET_MAINNET ? 'BcsPalette Mainnet' : 'BcsPalette Testnet',
    rpcUrl: TARGET_MAINNET ? 'http://13.231.222.1:22000' : 'http://106.75.246.130:22000',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://palettescan.com/#/chain/'
      : 'http://106.75.251.68/#/chain/',
    selfPay: true,
  } /* waiting info */,
  {
    id: ChainId.Milkomeda,
    nativeFee: true,
    icon: require('@/assets/png/milkomeda.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/tx/0x{txHash}'
      : 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xf4B609a3ca7353a8f379069f939964Db351B39c1'
      : '0xf4B609a3ca7353a8f379069f939964Db351B39c1',
    dst_ccm: TARGET_MAINNET
      ? '0xFcf7A3207b7442F29a9f88e2d7638633B494843f'
      : '0xFcf7A3207b7442F29a9f88e2d7638633B494843f',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'MilkADA',
    symbol: TARGET_MAINNET ? 'MlkADA' : 'MlkADA',
    name: TARGET_MAINNET ? 'Milkomeda Cardano (C1)' : 'Milkomeda Testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://rpc-mainnet-cardano-evm.c1.milkomeda.com'
      : 'https://rpc-devnet-cardano-evm.c1.milkomeda.com',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com'
      : 'https://explorer-devnet-cardano-evm.c1.milkomeda.com',
    selfPay: true,
  },
  {
    id: ChainId.Pixie,
    nativeFee: true,
    icon: require('@/assets/svg/pixie.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://scan-testnet.chain.pixie.xyz/tx/0x{txHash}'
      : 'https://scan-testnet.chain.pixie.xyz/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://scan-testnet.chain.pixie.xyz/tx/0x{txHash}'
      : 'https://scan-testnet.chain.pixie.xyz/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xE7Db150e4095Cbb35914b5dC980906C77B5990d2'
      : '0xE7Db150e4095Cbb35914b5dC980906C77B5990d2',
    nftLockContractHash: TARGET_MAINNET
      ? '0x06e3d8Eeb9DC4732e474c26674e08213c6e11921'
      : '0x06e3d8Eeb9DC4732e474c26674e08213c6e11921',
    dst_ccm: TARGET_MAINNET
      ? '0x2E830E0cf3dc8643B497F88C07c8A72EFE24B11f'
      : '0x2E830E0cf3dc8643B497F88C07c8A72EFE24B11f',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'PIX',
    symbol: TARGET_MAINNET ? 'PIX' : 'PIX',
    name: TARGET_MAINNET ? 'Pixie Mainnet' : 'Pixie Testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://http-testnet.chain.pixie.xyz'
      : 'https://http-testnet.chain.pixie.xyz',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://scan-testnet.chain.pixie.xyz'
      : 'https://scan-testnet.chain.pixie.xyz',
    selfPay: true,
  } /* waiting info */,
  // {
  //   id: ChainId.Rinkeby,
  //   nativeFee: true,
  //   icon: require('@/assets/svg/eth.svg'),
  //   explorerUrl: TARGET_MAINNET
  //     ? 'https://rinkeby.etherscan.io/tx/0x{txHash}'
  //     : 'https://rinkeby.etherscan.io/tx/0x{txHash}',
  //   nftexplorerUrl: TARGET_MAINNET
  //     ? 'https://rinkeby.etherscan.io/tx/0x{txHash}'
  //     : 'https://rinkeby.etherscan.io/tx/0x{txHash}',
  //   lockContractHash: TARGET_MAINNET
  //     ? '0xD5a240f7F755bCa2aE992E807b06d24eB6DF7C12'
  //     : '0xD5a240f7F755bCa2aE992E807b06d24eB6DF7C12',
  //   nftLockContractHash: TARGET_MAINNET
  //     ? '0x25BB8E9C0Cc03B30d09769735208a47d389Ff36c'
  //     : '0x25BB8E9C0Cc03B30d09769735208a47d389Ff36c',
  //   dst_ccm: TARGET_MAINNET
  //     ? '0xC8042579D6b60E0e35161F228827E3Fa0F51d5B6'
  //     : '0xC8042579D6b60E0e35161F228827E3Fa0F51d5B6',
  //   nftFeeContractHash: '0000000000000000000000000000000000000000',
  //   nftFeeName: 'ETH',
  //   selfPay: true,
  //   symbol: TARGET_MAINNET ? 'ETH' : 'ETH',
  //   name: TARGET_MAINNET ? 'Rinkeby Test Network' : 'Rinkeby Test Network',
  //   rpcUrl: TARGET_MAINNET ? 'https://rinkeby.infura.io/v3/' : 'https://rinkeby.infura.io/v3/',
  //   chainExplorerUrl: TARGET_MAINNET
  //     ? 'https://rinkeby.etherscan.io'
  //     : 'https://rinkeby.etherscan.io',
  // },
  // {
  //   id: ChainId.Goerli,
  //   nativeFee: true,
  //   icon: require('@/assets/svg/eth.svg'),
  //   explorerUrl: TARGET_MAINNET
  //     ? 'https://goerli.etherscan.io/tx/0x{txHash}'
  //     : 'https://goerli.etherscan.io/tx/0x{txHash}',
  //   nftexplorerUrl: TARGET_MAINNET
  //     ? 'https://goerli.etherscan.io/tx/0x{txHash}'
  //     : 'https://goerli.etherscan.io/tx/0x{txHash}',
  //   lockContractHash: TARGET_MAINNET
  //     ? '0xA058FC5427d3E634698d1185C1BA01ADAf998E14'
  //     : '0xA058FC5427d3E634698d1185C1BA01ADAf998E14',
  //   dst_ccm: TARGET_MAINNET
  //     ? '0xbA6F835ECAE18f5Fc5eBc074e5A0B94422a13126'
  //     : '0xbA6F835ECAE18f5Fc5eBc074e5A0B94422a13126',
  //   nftLockContractHash: TARGET_MAINNET
  //     ? '0xA4E492E0DFe2B930Bc0EaA94E3aa3531DE2Ef67C'
  //     : '0xA4E492E0DFe2B930Bc0EaA94E3aa3531DE2Ef67C',
  //   nftFeeContractHash: '0000000000000000000000000000000000000000',
  //   nftFeeName: 'GoerliETH',
  //   selfPay: true,
  //   symbol: TARGET_MAINNET ? 'GoerliETH' : 'GoerliETH',
  //   name: TARGET_MAINNET ? 'Goerli Test Network' : 'Goerli Test Network',
  //   rpcUrl: TARGET_MAINNET ? 'https://goerli.infura.io/v3/' : 'https://goerli.infura.io/v3/',
  //   chainExplorerUrl: TARGET_MAINNET
  //     ? 'https://goerli.etherscan.io'
  //     : 'https://goerli.etherscan.io',
  // },
  {
    id: ChainId.Sepolia,
    nativeFee: true,
    icon: require('@/assets/svg/eth.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://sepolia.etherscan.io/tx/0x{txHash}'
      : 'https://sepolia.etherscan.io/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xbA6F835ECAE18f5Fc5eBc074e5A0B94422a13126'
      : '0xbA6F835ECAE18f5Fc5eBc074e5A0B94422a13126',
    dst_ccm: TARGET_MAINNET
      ? '0x509fB7A017e33f18101dDC0d28Ac06aEaf6Edb4B'
      : '0x509fB7A017e33f18101dDC0d28Ac06aEaf6Edb4B',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'SepoliaETH',
    selfPay: true,
    symbol: TARGET_MAINNET ? 'SepoliaETH' : 'SepoliaETH',
    name: TARGET_MAINNET ? 'Sepolia Test Network' : 'Sepolia Test Network',
    rpcUrl: TARGET_MAINNET ? 'https://sepolia.infura.io/v3/' : 'https://sepolia.infura.io/v3/',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://sepolia.etherscan.io'
      : 'https://sepolia.etherscan.io',
  },
  {
    id: ChainId.Oasis1,
    nativeFee: true,
    icon: require('@/assets/png/oasis.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer.emerald.oasis.dev/tx/0x{txHash}'
      : 'https://explorer.emerald.oasis.dev/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x87bF79eF2Dd87535f762e47028345dF7527c3206'
      : '0x87bF79eF2Dd87535f762e47028345dF7527c3206',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'ROSE',
    symbol: TARGET_MAINNET ? 'ROSE' : 'ROSE',
    name: TARGET_MAINNET ? 'Oasis Mainnet' : 'Oasis Testnet',
    rpcUrl: TARGET_MAINNET ? 'https://emerald.oasis.dev' : 'https://testnet.emerald.oasis.dev',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://explorer.emerald.oasis.dev/'
      : 'https://testnet.explorer.emerald.oasis.dev/',
    selfPay: true,
  },
  {
    id: ChainId.Palette2,
    nativeFee: true,
    icon: require('@/assets/svg/plt.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://palettescan.com/#/chain/tx/0x{txHash}'
      : 'http://106.75.251.68/#/chain/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://palettescan.com/#/chain/tx/0x{txHash}'
      : 'http://106.75.251.68/#/chain/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xfe510c41f375e9839826def8e31a6e647f8354bc'
      : '0xfe510c41f375e9839826def8e31a6e647f8354bc',
    nftLockContractHash: TARGET_MAINNET
      ? '0xc996f81548f7ea423c6d7d50ae9d135ccd30d616'
      : '0xc996f81548f7ea423c6d7d50ae9d135ccd30d616',
    dst_ccm: TARGET_MAINNET
      ? '0x09ac48c414690d0e577583b7ad1174a473e32e1a'
      : '0x09ac48c414690d0e577583b7ad1174a473e32e1a',
    nftFeeContractHash: '0000000000000000000000000000000000000103',
    nftFeeName: 'PLT',
    symbol: TARGET_MAINNET ? 'PLT' : 'PLT',
    name: TARGET_MAINNET ? 'PLT Mainnet' : 'PLT Testnet',
    rpcUrl: TARGET_MAINNET
      ? 'https://testnet.palette-rpc.com:22000'
      : 'https://testnet.palette-rpc.com:22000',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://palettescan.com/#/chain/'
      : 'http://106.75.251.68/#/chain/',
    selfPay: true,
  },
  // {
  //   id: ChainId.polygonZK_testnet,
  //   nativeFee: true,
  //   icon: require('@/assets/svg/polygon.svg'),
  //   explorerUrl: TARGET_MAINNET
  //     ? 'https://explorer.public.zkevm-test.net/tx/0x{txHash}'
  //     : 'https://explorer.public.zkevm-test.net/tx/0x{txHash}',
  //   lockContractHash: TARGET_MAINNET
  //     ? '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99'
  //     : '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99',
  //   dst_ccm: TARGET_MAINNET
  //     ? '0xd6fc5374649cea121395a4860FdB33F21783c4Af'
  //     : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
  //   nftFeeContractHash: '0000000000000000000000000000000000000000',
  //   nftFeeName: 'ETH',
  //   selfPay: true,
  //   symbol: TARGET_MAINNET ? 'ETH' : 'ETH',
  //   name: TARGET_MAINNET ? 'polygonZK_testnet' : 'polygonZK_testnet',
  //   rpcUrl: TARGET_MAINNET
  //     ? 'https://rpc.public.zkevm-test.net'
  //     : 'https://rpc.public.zkevm-test.net',
  //   chainExplorerUrl: TARGET_MAINNET
  //     ? 'https://explorer.public.zkevm-test.net/'
  //     : 'https://explorer.public.zkevm-test.net/',
  // },
  {
    id: ChainId.Nautilus,
    nativeFee: true,
    icon: require('@/assets/svg/naut.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://triton.nautscan.com/tx/0x{txHash}'
      : 'https://triton.nautscan.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99'
      : '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99',
    dst_ccm: TARGET_MAINNET
      ? '0xd6fc5374649cea121395a4860FdB33F21783c4Af'
      : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'tZBC',
    selfPay: true,
    symbol: TARGET_MAINNET ? 'tZBC' : 'tZBC',
    name: TARGET_MAINNET ? 'Nautilus' : 'Nautilus',
    rpcUrl: TARGET_MAINNET
      ? 'https://triton.api.nautchain.xyz'
      : 'https://triton.api.nautchain.xyz',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://triton.nautscan.com/'
      : 'https://triton.nautscan.com/',
  },
  {
    id: ChainId.Goshen,
    nativeFee: true,
    icon: require('@/assets/svg/unknown.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer-testnet.goshen.network/tx/0x{txHash}'
      : 'https://explorer-testnet.goshen.network/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99'
      : '0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99',
    dst_ccm: TARGET_MAINNET
      ? '0xd6fc5374649cea121395a4860FdB33F21783c4Af'
      : '0xd6fc5374649cea121395a4860FdB33F21783c4Af',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'ETH',
    selfPay: true,
    symbol: TARGET_MAINNET ? 'ETH' : 'ETH',
    name: TARGET_MAINNET ? 'Goshen' : 'Goshen',
    rpcUrl: TARGET_MAINNET
      ? 'https://testnet-alpha.goshen.network/rpc/'
      : 'https://testnet-alpha.goshen.network/rpc/',
    chainExplorerUrl: TARGET_MAINNET
      ? 'https://explorer-testnet.goshen.network/'
      : 'https://explorer-testnet.goshen.network/',
  },
  // {
  //   id: ChainId.OntEvm,
  //   nativeFee: true,
  //   icon: require('@/assets/svg/ONT.svg'),
  //   explorerUrl: TARGET_MAINNET
  //     ? 'https://explorer.ont.io/tx/0x{txHash}'
  //     : 'https://explorer.ont.io/testnet/tx/0x{txHash}',
  //   lockContractHash: TARGET_MAINNET
  //     ? '0x66f1Ad12a2C7A6370CbD20ECD79D17a405061Efe'
  //     : '0x66f1Ad12a2C7A6370CbD20ECD79D17a405061Efe',
  //   dst_ccm: TARGET_MAINNET
  //     ? '0x74b77cbF04442BBf194380a7e4d99c923e0e56cc'
  //     : '0x74b77cbF04442BBf194380a7e4d99c923e0e56cc',
  //   nftFeeContractHash: '0000000000000000000000000000000000000000',
  //   nftFeeName: 'ONG',
  //   symbol: TARGET_MAINNET ? 'ONG' : 'ONG',
  //   name: TARGET_MAINNET ? 'Ontology Mainnet' : 'Ontology Testnet',
  //   rpcUrl: TARGET_MAINNET ? 'https://dappnode2.ont.io:10339' : 'https://polaris1.ont.io:10339',
  //   chainExplorerUrl: TARGET_MAINNET
  //     ? 'https://explorer.ont.io/'
  //     : 'https://explorer.ont.io/testnet/',
  //   selfPay: true,
  // },
];

export const CHAINS = TARGET_MAINNET ? MAIN_CHAINS : MAIN_CHAINS.concat(TEST_CHAINS);

export const UNKNOWN_ICON = require('@/assets/svg/unknown.svg');
export const UNKNOWN_NFT = require('@/assets/png/nft.png');

export const TOKEN_BASIC_ICONS = {
  NEO: require('@/assets/svg/neo-token.svg'),
  nNEO: require('@/assets/svg/neo-token.svg'),
  ETH: require('@/assets/svg/eth-token.svg'),
  USDT: require('@/assets/svg/usdt.svg'),
  USDC: require('@/assets/svg/usdc.svg'),
  DAI: require('@/assets/svg/dai.svg'),
  sUSD: require('@/assets/svg/susd.svg'),
  BAC: require('@/assets/svg/bac.svg'),
  BASv2: require('@/assets/svg/basv2.svg'),
  CWS: require('@/assets/png/cws.png'),
  SHARE: require('@/assets/svg/share.svg'),
  FLM: require('@/assets/svg/flm.svg'),
  SWTH: require('@/assets/svg/swth.svg'),
  ONTd: require('@/assets/svg/ONT.svg'),
  WING: require('@/assets/svg/wing.svg'),
  YFI: require('@/assets/svg/YFI.svg'),
  UNI: require('@/assets/svg/UNI.svg'),
  UNFI: require('@/assets/svg/UNFI.svg'),
  MDX: require('@/assets/svg/mdx.svg'),
  WBTC: require('@/assets/svg/WBTC.svg'),
  renBTC: require('@/assets/svg/renBTC.svg'),
  COOK: require('@/assets/svg/cook.svg'),
  FEI: require('@/assets/png/fei.png'),
  Tribe: require('@/assets/png/tribe.png'),
  YNI: require('@/assets/png/yni.png'),
  REVO: require('@/assets/svg/revo.svg'),
  revo: require('@/assets/svg/revo.svg'),
  Revo: require('@/assets/svg/revo.svg'),
  ESS: require('@/assets/svg/ESS.svg'),
  Bles: require('@/assets/svg/bles.svg'),
  BLES: require('@/assets/svg/bles.svg'),
  aDAI: require('@/assets/svg/adai.svg'),
  aETH: require('@/assets/svg/aeth.svg'),
  cDAI: require('@/assets/svg/cdai.svg'),
  cETH: require('@/assets/svg/ceth.svg'),
  FLUX: require('@/assets/svg/flux.svg'),
  CVT: require('@/assets/svg/cvt.svg'),
  KEL: require('@/assets/png/kel.png'),
  SHIB: require('@/assets/png/shib.png'),
  Shib: require('@/assets/png/shib.png'),
  STACK: require('@/assets/png/stack.png'),
  CC: require('@/assets/png/ccswap.png'),
  PLF: require('@/assets/png/plf.png'),
  TSX: require('@/assets/png/tsx.png'),
  O3: require('@/assets/png/o3.png'),
  KISHU: require('@/assets/png/kishu.png'),
  CELL: require('@/assets/png/cell.png'),
  ECELL: require('@/assets/svg/ecell.svg'),
  ISM: require('@/assets/jpg/ism.jpg'),
  BBANK: require('@/assets/jpg/bbank.jpg'),
  DOWS: require('@/assets/svg/shadows.svg'),
  PLUT: require('@/assets/svg/plut.svg'),
  mBTM: require('@/assets/svg/mbtm.svg'),
  LEV: require('@/assets/svg/lev.svg'),
  XTM: require('@/assets/svg/xtm.svg'),
  XTF: require('@/assets/svg/xtf.svg'),
  TAP: require('@/assets/svg/tap.svg'),
  // STC: require('@/assets/svg/stc.svg'),
  '8PAY': require('@/assets/jpg/8pay.jpg'),
};

export const DEFAULT_TOKEN_BASIC_NAME = 'USDT';
export const DEFAULT_CHAIN_NAME = 'ETH';

export const TOP_TOKEN_BASIC_NAMES = ['NEO', 'BNEO', 'ETH', 'USDT', 'USDC', 'DAI'];
