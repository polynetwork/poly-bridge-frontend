<template>
  <Page class="transactions">
    <img class="top-decoration" src="@/assets/svg/poly-bg.svg" />
    <div class="bottom-decoration-wrapper">
      <img class="bottom-decoration" src="@/assets/svg/poly-bg.svg" />
    </div>
    <div class="airdrop-container">
      <div class="info">
        <img src="@/assets/png/airdrop.png" />
        <div v-if="airdropStatus !== 2" class="info-title">{{ $t('airdrop.thanksTitle') }}</div>
        <div v-if="airdropStatus === 2 && !addressFlag" class="info-title">
          {{ $t('airdrop.endTitle') }}
        </div>
        <p v-if="airdropStatus === 1">
          <span>Make sure to claim your NFT between Sep 9th and Sep 20th, 2022.</span>
        </p>
        <!-- <p v-if="airdropStatus === 1 && !addressFlag">
          <span>{{ $t('airdrop.desc1') }}</span>
        </p>
        <p v-if="airdropStatus === 1 && userData[currentId].Rank === 0">
          <span>{{ $t('airdrop.desc2') }}</span>
        </p>
        <p v-if="airdropStatus === 1 && userData[currentId].Rank > 1000">
          <span>{{ $t('airdrop.desc3') }}</span>
        </p>
        <p
          v-if="
            airdropStatus === 1 && userData[currentId].Rank <= 1000 && userData[currentId].Rank > 0
          "
        >
          <span>{{ $t('airdrop.desc4') }}</span>
        </p> -->
        <!-- in 1000 -->
        <div
          v-if="
            airdropStatus === 2 && userData[currentId].Rank > 0 && userData[currentId].Rank < 1001
          "
          class="info-title"
        >
          {{ $t('airdrop.congratulationTitle') }}
        </div>
        <p
          v-if="
            airdropStatus === 2 && userData[currentId].Rank > 100 && userData[currentId].Rank < 1001
          "
        >
          {{ $t('airdrop.winTitle') }} 1 {{ $t('airdrop.nft') }}
        </p>
        <p
          v-if="
            airdropStatus === 2 && userData[currentId].Rank > 0 && userData[currentId].Rank < 101
          "
        >
          {{ $t('airdrop.winTitle') }} 2 {{ $t('airdrop.nfts') }}
        </p>
        <!-- over 1000 -->
        <div
          v-if="
            airdropStatus === 2 &&
              (userData[currentId].Rank > 1000 || userData[currentId].Rank === 0)
          "
          class="info-title"
        >
          {{ $t('airdrop.endTitle') }}
        </div>
        <p
          v-if="
            airdropStatus === 2 &&
              (userData[currentId].Rank > 1000 || userData[currentId].Rank === 0)
          "
        >
          <span>{{ $t('airdrop.desc12') }}</span>
        </p>
        <p
          v-if="
            airdropStatus === 2 &&
              userData[currentId].Rank > 0 &&
              userData[currentId].Rank < 1001 &&
              isNoEvm
          "
        >
          Please connect your ETH wallet ({{ userData[currentId].AirDropAddr.substr(0, 8) }} ...{{
            userData[currentId].AirDropAddr.substr(32, 100)
          }})
        </p>
      </div>
      <div class="data">
        <div v-if="!addressFlag" class="content">
          <div class="item">
            <div class="num">08-08-2022</div>
            <div class="title">START</div>
          </div>
          <div class="line"></div>
          <div class="item">
            <div class="num">1000</div>
            <div class="title">WINNERS</div>
          </div>
          <div class="line"></div>
          <div class="item">
            <div class="num">09-08-2022</div>
            <div class="title">END</div>
          </div>
        </div>
        <div v-if="addressFlag" class="content">
          <div class="item">
            <div class="no">
              <div class="rank">
                {{ userData[currentId].Rank === 0 ? 'N/A' : userData[currentId].Rank }}
              </div>
              <div class="small"></div>
              <div class="big"></div>
            </div>
          </div>
          <div class="item">
            <div class="title">Wallet Address</div>
            <el-dropdown trigger="click" @command="handleCommand">
              <div class="address-data">
                {{ currentAddress.substr(0, 8) }}...{{ currentAddress.substr(32, 100)
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item, index) in wallets" :key="index" :command="index">
                  <span
                    :class="item.address === currentAddress ? 'el-dropdown-menu__item_active' : ''"
                    >{{ item.address }}</span
                  >
                  <img
                    :class="
                      item.address === currentAddress
                        ? 'el-dropdown-menu__item_active_img'
                        : 'el-dropdown-menu__item_noactive_img'
                    "
                    src="@/assets/svg/check-w.svg"
                  />
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="item">
            <div class="title">Expenditure</div>
            <div class="address-data">{{ userData[currentId].Amount }} USD</div>
          </div>
        </div>
      </div>
      <div class="btn">
        <div class="content" v-if="!addressFlag">
          <div class="btn-out">
            <div class="btn-in active" @click="openWallets()">{{ $t('airdrop.btn1') }}</div>
          </div>
          <div class="btn-out">
            <div class="btn-in" @click="openRule()">{{ $t('airdrop.btn2') }}</div>
          </div>
        </div>
        <div class="content" v-if="addressFlag && airdropStatus === 1">
          <div class="btn-out">
            <div class="btn-in active" @click="toBridge()">{{ $t('airdrop.btn3') }}</div>
          </div>
          <div class="btn-out">
            <div class="btn-in" @click="openRule()">{{ $t('airdrop.btn2') }}</div>
          </div>
        </div>
        <div
          class="content content-one"
          v-if="
            addressFlag &&
              airdropStatus === 2 &&
              (userData[currentId].Rank > 1000 || userData[currentId].Rank === 0)
          "
        >
          <div class="btn-out">
            <div class="btn-in" @click="openRule()">{{ $t('airdrop.btn2') }}</div>
          </div>
        </div>
        <!-- <div class="content" v-if="addressFlag && joinFlag">
          <div class="btn-out">
            <div class="btn-in">{{ $t('airdrop.btn2') }}</div>
          </div>
        </div> -->
        <div class="content" v-if="getNFTFlag && !checkFlag[currentId]">
          <div
            class="btn-out"
            v-if="
              currentChainId !== 3 &&
                currentChainId !== 4 &&
                currentChainId !== 5 &&
                currentChainId !== 14 &&
                currentChainId !== 88 &&
                currentChainId !== 888 &&
                currentChainId !== 31 &&
                currentChainId !== 318
            "
          >
            <div class="btn-in active" @click="claimNft()" v-if="claiming">
              <i class="el-icon-loading"></i> {{ $t('airdrop.btn6') }}
            </div>
            <div class="btn-in active" @click="claimNft()" v-if="!claiming">
              {{ $t('airdrop.btn4') }}
            </div>
          </div>
          <div
            class="btn-out"
            v-if="
              currentChainId === 3 ||
                currentChainId === 4 ||
                currentChainId === 5 ||
                currentChainId === 14 ||
                currentChainId === 88 ||
                currentChainId === 888 ||
                currentChainId === 31 ||
                currentChainId === 318
            "
          >
            <div class="btn-in active" @click="openDiscord()">Contact us</div>
          </div>
          <div class="btn-out">
            <div class="btn-in" @click="openRule()">{{ $t('airdrop.btn2') }}</div>
          </div>
        </div>
        <div class="content" v-if="getNFTFlag && checkFlag[currentId]">
          <div class="btn-out" v-if="airDropClaimNft[currentId].NftDfOpenseaUrl">
            <div class="btn-in active" @click="openNFT(airDropClaimNft[currentId].NftDfOpenseaUrl)">
              {{ $t('airdrop.btn7') }}
            </div>
          </div>
          <div class="btn-out" v-if="airDropClaimNft[currentId].NftTbOpenseaUrl">
            <div class="btn-in active" @click="openNFT(airDropClaimNft[currentId].NftTbOpenseaUrl)">
              {{ $t('airdrop.btn8') }}
            </div>
          </div>
          <div class="btn-out">
            <div class="btn-in" @click="openRule()">{{ $t('airdrop.btn2') }}</div>
          </div>
        </div>
      </div>
    </div>

    <ConnectWallet :visible.sync="connectWalletVisible" />
  </Page>
</template>

<script>
import _ from 'lodash';
import httpApi from '@/utils/httpApi';
import Page from '@/views/common/Page';
import delay from 'delay';
import { TARGET_MAINNET } from '@/utils/env';
import { getWalletApi } from '@/utils/walletApi';
import { SingleTransactionStatus } from '@/utils/enums';
import ConnectWallet from './ConnectWallet';

export default {
  name: 'Transactions',
  components: {
    Page,
    ConnectWallet,
  },
  data() {
    return {
      connectWalletVisible: false,
      joinFlag: false,
      claiming: false,
      currentAddress: '',
      currentId: 0,
      currentChainId: 0,
      userData: [
        {
          rank: 'N/A',
        },
      ],
      airDropClaimNft: [],
    };
  },
  computed: {
    getNFTFlag() {
      const res =
        this.airdropStatus === 2 &&
        this.userData[this.currentId].Rank > 0 &&
        this.userData[this.currentId].Rank < 1001;
      return res;
    },
    claimFlag() {
      return this.airDropClaimNft;
    },
    isNoEvm() {
      console.log('this.currentChainId', this.currentChainId);
      return (
        this.currentChainId === 3 ||
        this.currentChainId === 4 ||
        this.currentChainId === 5 ||
        this.currentChainId === 14 ||
        this.currentChainId === 88 ||
        this.currentChainId === 888 ||
        this.currentChainId === 31 ||
        this.currentChainId === 318
      );
    },
    checkFlag() {
      const checkFlagArr = [];
      for (let i = 0; i < this.wallets.length; i += 1) {
        if (this.airDropClaimNft[i]) {
          let dfFlag;
          if (this.airDropClaimNft[i].NftDfContract === '') {
            dfFlag = true;
          } else {
            dfFlag = this.airDropClaimNft[i].IsClaimDf;
          }
          let tbFlag;
          if (this.airDropClaimNft[i].NftTbContract === '') {
            tbFlag = true;
          } else {
            tbFlag = this.airDropClaimNft[i].IsClaimTb;
          }
          checkFlagArr.push(dfFlag && tbFlag);
        } else {
          checkFlagArr.push(false);
        }
      }
      console.log(checkFlagArr);
      return checkFlagArr;
    },
    airdropStatus() {
      const timestamp = new Date().getTime();
      let res = 0;
      if (timestamp < 1659927600000) {
        res = 0;
      }
      /* 1662606000000 */
      /* 1662739199000 */
      /* 202209092359 */
      if (timestamp >= 1659927600000 && timestamp < 1659927600001) {
        res = 1;
      }
      if (timestamp >= 1659927600001) {
        res = 2;
      }
      return res;
    },
    addressFlag() {
      let flag = false;
      if (this.wallets && this.wallets.length > 0) {
        flag = true;
      }
      return flag;
    },
    wallets() {
      return this.$store.getters.wallets.filter(wallet => wallet.addressHex);
    },
    addressHexs() {
      return this.$store.getters.wallets
        .filter(wallet => wallet.addressHex)
        .map(wallet => wallet.walletChainId);
    },
    getTransactionsParams() {
      return {
        addressHexs: this.addressHexs,
        page: this.page,
        pageSize: this.pageSize,
        vary: ['pageSize'],
      };
    },
    netTransactions() {
      return this.$store.getters.getTransactions(this.getTransactionsParams) || {};
    },
    fromWallet() {
      const chainId = TARGET_MAINNET ? 2 : 402;
      return this.$store.getters.getChainConnectedWallet(chainId);
    },
  },
  created() {
    sessionStorage.setItem('AIRDROP_BANNER', 'true');
    this.getAirdropData(this.wallets);
    this.currentAddress = this.wallets[0].address;
    this.currentChainId = this.wallets[0].walletChainId;
    this.currentId = 0;
  },
  watch: {
    getTransactionsParams: {
      handler(value, oldValue) {
        if (!_.isEqual(value, oldValue)) {
          // this.$store.dispatch('getTransactions', value);
        }
      },
      immediate: true,
    },
    netTransactions(value, oldValue) {
      if (oldValue.items) {
        if (value.total >= this.transactions.total) {
          this.transactions = value;
        }
      } else {
        this.transactions = value;
      }
    },
    wallets(value, oldValue) {
      this.currentAddress = this.wallets[0].address;
      this.currentChainId = this.wallets[0].walletChainId;
      this.getAirdropData(this.wallets);
    },
  },
  methods: {
    openRule() {
      window.open(
        'https://medium.com/poly-network/poly-network-celebrates-the-second-anniversary-releases-limited-edition-nfts-162423f1f632',
      );
    },
    openDiscord() {
      window.open('https://discord.com/invite/y6MuEnq');
    },
    getChain(chainId) {
      return this.$store.getters.getChain(chainId);
    },
    viewDetails(transaction) {
      this.transactionHash = transaction.hash;
      this.transactionDetailsVisible = true;
    },
    openWallets() {
      this.connectWalletVisible = true;
    },
    openNFT($url) {
      window.open($url);
    },
    toBridge() {
      this.$router.push({
        name: 'home',
      });
    },
    handleCommand(command) {
      this.currentAddress = this.wallets[command].address;
      this.currentChainId = this.wallets[command].walletChainId
        ? this.wallets[command].walletChainId
        : this.wallets[command].chainId;
      this.currentId = command;
    },
    async getAirdropData($wallets) {
      const sdata = [];
      if ($wallets.length > 0) {
        for (let i = 0; i < $wallets.length; i += 1) {
          const user = {
            ChainId: $wallets[i].walletChainId ? $wallets[i].walletChainId : $wallets[i].chainId,
            Address: $wallets[i].addressHex,
          };
          sdata.push(user);
        }
        const res = await httpApi.getAirDropData({ sdata });
        if (res.Users === null) {
          this.joinFlag = false;
        } else {
          this.joinFlag = true;
        }
        this.userData = res.Users;
        console.log('userData', res);
        this.getAirDropClaimData();
      }
    },
    async getAirDropClaimData() {
      console.log(this.userData);
      const data = [];
      if (this.userData.length > 0) {
        for (let i = 0; i < this.userData.length; i += 1) {
          if (this.userData[i].AirDropAddr !== '') {
            data.push(this.userData[i].AirDropAddr);
          }
        }
        if (data.length > 0) {
          const res = await httpApi.getAirDropClaimData({ data });
          this.airDropClaimNft = res.AirDropClaimNft;
        }
      }
    },
    async claimNft() {
      if (this.claiming) {
        return;
      }
      const chainId = TARGET_MAINNET ? 2 : 402;
      await this.$store.dispatch('ensureChainWalletReady', chainId);
      this.claiming = true;
      const walletApi = await getWalletApi(this.fromWallet.name);
      const claimData = this.airDropClaimNft[this.currentId];
      let status = SingleTransactionStatus.Pending;
      // this.interval1 = setInterval(() => {
      //   this.getAirDropClaimData();
      // }, 6000);
      try {
        if (claimData.NftTbContract !== '' && !claimData.IsClaimTb) {
          try {
            const data1 = {
              contract: claimData.NftTbContract,
              account: this.wallets[this.currentId].addressHex,
              tokenId: claimData.NftTbId,
              uri: claimData.NftTbIpfsUri,
              signature: claimData.NftTbSig,
            };
            const transactionHash = await walletApi.nftClaim(data1);
            status = SingleTransactionStatus.Pending;
            while (true) {
              try {
                // eslint-disable-next-line no-await-in-loop
                status = await walletApi.getTransactionStatus({ transactionHash });
                if (status !== SingleTransactionStatus.Pending) {
                  break;
                }
                // eslint-disable-next-line no-await-in-loop
                await delay(5000);
              } catch (error) {
                // ignore error
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
        if (claimData.NftDfContract !== '' && !claimData.IsClaimDf) {
          try {
            const data = {
              contract: claimData.NftDfContract,
              account: this.wallets[this.currentId].addressHex,
              tokenId: claimData.NftDfId,
              uri: claimData.NftDfIpfsUri,
              signature: claimData.NftDfSig,
            };
            const transactionHash = await walletApi.nftClaim(data);
            console.log(transactionHash);
            status = SingleTransactionStatus.Pending;
            while (true) {
              try {
                // eslint-disable-next-line no-await-in-loop
                status = await walletApi.getTransactionStatus({ transactionHash });
                if (status !== SingleTransactionStatus.Pending) {
                  break;
                }
                // eslint-disable-next-line no-await-in-loop
                await delay(5000);
              } catch (error) {
                // ignore error
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
      } finally {
        this.claiming = false;
        // clearInterval(this.interval1);
        this.getAirDropClaimData();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 700px) {
  .airdrop-container {
    min-width: 1440px;
    flex: 1;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 220px;
    }
    .info-title {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      line-height: 68px;
      color: #3ec7eb;
    }
    p {
      max-width: 990px;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 42px;
      text-align: center;
      color: rgba(255, 255, 255, 0.8);
      .weight {
        font-weight: 700;
      }
    }
  }
  .data {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
    .content {
      width: 1000px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .line {
        height: 90px;
        width: 0px;
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .no {
          width: 120px;
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
          justify-content: flex-end;
          .rank {
            font-family: 'DIN Pro', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 64px;
            /* identical to box height, or 160% */
            text-align: center;
            color: #fff;
            position: absolute;
            right: 37px;
            transform: translateX(50%);
          }
          .small {
            width: 10px;
            height: 10px;
            background: #fff;
            border-radius: 5px;
            margin-right: 30px;
          }
          .big {
            width: 54px;
            height: 54px;
            background: #3581e6;
            border-radius: 27px;
            margin-right: 10px;
          }
        }
        .num {
          font-family: 'DIN Pro', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 64px;
          /* identical to box height, or 160% */
          text-align: center;
          color: #3ec7eb;
        }
        .title {
          font-family: 'Poppins', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 22px;
          line-height: 32px;
          /* identical to box height, or 145% */
          text-align: center;
          color: rgba(255, 255, 255, 0.8);
          padding-top: 4px;
        }
        .address-data {
          cursor: pointer;
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 21px;
          /* identical to box height */
          letter-spacing: -0.02em;
          color: #ffffff;
          padding-top: 4px;
        }
      }
    }
  }
  .btn {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 40px;
    .content-one {
      display: flex;
      justify-content: center !important;
    }
    .content {
      width: 660px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .btn-out {
        height: 60px;
        width: 200px;
        border: 1px dashed rgba(255, 255, 255, 0.4);
        border-radius: 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 5px;
      }
      .btn-in:hover {
        opacity: 0.6;
        transition: all ease 0.3s;
      }
      .btn-in {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Futura-Heavy';
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 11px;
        /* identical to box height */
        color: #ffffff;
        border-radius: 16px;
        transition: all ease 0.3s;
      }
      .active {
        background: linear-gradient(270deg, #282bdb 1.43%, #3ec7eb 100%);
      }
    }
  }

  .top-decoration {
    position: absolute;
    top: 0;
    z-index: -1;
  }

  .bottom-decoration-wrapper {
    position: absolute;
    right: 0px;
    bottom: 0px;
    overflow: hidden;
    z-index: -1;
  }

  .bottom-decoration {
    transform: translate3d(60px, 60px, 0) scale(1.2);
  }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 700px) {
  .airdrop-container {
    max-width: 100vw;
    flex: 1;
    padding-top: 100px;
    padding: 100px 20px 100px;
  }
  .top-decoration {
    display: none;
  }
  .bottom-decoration-wrapper {
    display: none;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 220px;
    }
    .info-title {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 36px;
      color: #3ec7eb;
    }
    p {
      max-width: 990px;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      color: rgba(255, 255, 255, 0.8);
      .weight {
        font-weight: 700;
      }
    }
  }
  .data {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
    .content {
      width: 100vw;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
      .line {
        height: 90px;
        width: 0px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        display: none;
      }
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;
        .no {
          width: 120px;
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
          justify-content: center;
          .rank {
            font-family: 'DIN Pro', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 64px;
            /* identical to box height, or 160% */
            text-align: center;
            color: #fff;
            position: absolute;
            right: 50%;
            transform: translateX(50%);
          }
          .small {
            width: 10px;
            height: 10px;
            background: #fff;
            border-radius: 5px;
            margin-right: 30px;
            display: none;
          }
          .big {
            width: 54px;
            height: 54px;
            background: #3581e6;
            border-radius: 27px;
            margin-right: 0px;
          }
        }
        .num {
          font-family: 'DIN Pro', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 44px;
          /* identical to box height, or 160% */
          text-align: center;
          color: #3ec7eb;
        }
        .title {
          font-family: 'Poppins', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          /* identical to box height, or 145% */
          text-align: center;
          color: rgba(255, 255, 255, 0.8);
          padding-top: 4px;
        }
        .address-data {
          cursor: pointer;
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 21px;
          /* identical to box height */
          letter-spacing: -0.02em;
          color: #ffffff;
          padding-top: 4px;
        }
      }
    }
  }
  .btn {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 40px;
    .content {
      width: 100vw;
      display: flex;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;
      padding: 0 20px;
      .btn-out {
        height: 60px;
        width: 200px;
        border: 1px dashed rgba(255, 255, 255, 0.4);
        border-radius: 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 5px;
      }
      .btn-in:hover {
        opacity: 0.6;
        transition: all ease 0.3s;
      }
      .btn-in {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Futura-Heavy';
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 11px;
        /* identical to box height */
        color: #ffffff;
        border-radius: 16px;
        transition: all ease 0.3s;
      }
      .active {
        background: linear-gradient(270deg, #282bdb 1.43%, #3ec7eb 100%);
      }
    }
  }
}
</style>
<style lang="scss">
.popper__arrow::after {
  display: none !important;
}
.popper__arrow {
  display: none !important;
}
.el-dropdown-menu {
  background: #091225;
}
.el-dropdown-menu > li:hover {
  background: #091225;
  color: #fff;
}
.el-dropdown-menu__item:not(.is-disabled):hover,
.el-dropdown-menu__item:focus {
  background: #091225;
  color: #fff;
}
.el-popper {
  margin-bottom: 12px !important;
}
.el-dropdown-menu__item {
  width: 380px;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.6);
  transition: all ease 0.3s;
}
.el-dropdown-menu__item_active {
  color: #fff;
}
.el-dropdown-menu__item_active_img {
}
.el-dropdown-menu__item_noactive_img {
  display: none;
}
.el-dropdown-menu__item:not(.is-disabled):hover > .el-dropdown-menu__item_noactive_img,
.el-dropdown-menu__item:focus > .el-dropdown-menu__item_noactive_img {
  transition: all ease 0.3s;
  display: initial;
}
</style>
