<template>
  <CDialog
    v-bind="$attrs"
    :closeOnClickModal="!confirmingData || failed || finished"
    :closeOnPressEscape="!confirmingData || failed || finished"
    v-on="$listeners"
  >
    <div class="content">
      <div class="title">
        {{ $t('transactions.details.title') }}
        <img
          class="close-btn"
          src="@/assets/svg/close.svg"
          @click="$emit('update:visible', false)"
        />
      </div>
      <div v-if="steps" class="scroll">
        <div v-for="(step, index) in steps" :key="step.chainId" class="step">
          <template v-if="step.chainId != null">
            <img
              class="step-icon"
              :class="{ [getStepStatus(index)]: true }"
              :src="statusIcons[getStepStatus(index)]"
            />
            <div v-if="index !== steps.length - 1" class="step-line" />
            <div class="step-title">{{ $formatEnum(step.chainId, { type: 'chainName' }) }}</div>
            <div class="description">
              {{
                $t(`transactions.details.${getStepStatus(index)}`, {
                  chainName: $formatEnum(step.chainId, { type: 'chainName' }),
                })
              }}
            </div>
            <div class="progress">
              <ElProgress
                class="progress-bar"
                :percentage="(step.blocks / step.needBlocks || 0) * 100"
                :showText="false"
              />
              <span class="progress-text">
                {{
                  $t('transactions.details.confirmation', {
                    blocks: step.blocks != null ? step.blocks : '-',
                    needBlocks: step.needBlocks != null ? step.needBlocks : '-',
                  })
                }}
              </span>
            </div>
            <CLink
              class="link"
              :href="$format(getChain(step.chainId).nftexplorerUrl, { txHash: step.hash })"
              target="_blank"
              :disabled="!step.hash"
            >
              {{
                $t('transactions.details.hash', {
                  hash: $formatLongText(step.hash || 'N/A', { headTailLength: 8 }),
                })
              }}
            </CLink>
            <CButton v-if="step.hash" @click="copy(step.hash)">
              <img class="copy-icon" src="@/assets/svg/copy.svg" />
            </CButton>
            <div
              class="speedup"
              v-if="
                index == 2 &&
                  getStepStatus(2) === 'pending' &&
                  $route.name === 'nft' &&
                  step.chainId !== 3 &&
                  step.chainId !== 4 &&
                  step.chainId !== 5 &&
                  step.chainId !== 14 &&
                  step.chainId !== 88 &&
                  step.chainId !== 318
              "
            >
              {{ $t('home.form.speedup') }}
              <a
                target="_blank"
                href="https://medium.com/poly-network/poly-bridge-new-acceleration-function-pc-user-manual-cd0b6cacceea"
                style="color: #fff"
                >Link</a
              >
            </div>

            <div
              class="speedup"
              v-if="
                index == 2 &&
                  getStepStatus(2) === 'pending' &&
                  $route.name === 'nfttransactions' &&
                  speedUpMSGFlag &&
                  step.chainId !== 3 &&
                  step.chainId !== 4 &&
                  step.chainId !== 5 &&
                  step.chainId !== 14 &&
                  step.chainId !== 888 &&
                  step.chainId !== 318
              "
            >
              {{ $t('home.form.speedUpMSG') }}
            </div>
            <CSubmitButton
              :loading="selfPayLoading"
              v-if="
                index == 2 &&
                  getStepStatus(2) === 'pending' &&
                  $route.name === 'nfttransactions' &&
                  step.chainId !== 3 &&
                  step.chainId !== 4 &&
                  step.chainId !== 5 &&
                  step.chainId !== 14 &&
                  step.chainId !== 888 &&
                  step.chainId !== 318 &&
                  step.chainId !== 998 &&
                  transaction.status !== 11
              "
              @click="payTochainFee"
              class="button-submit"
            >
              {{ selfPay ? $t('buttons.pay') : $t('buttons.speedup') }}
            </CSubmitButton>
          </template>
          <template v-else-if="step.failed">
            <img class="step-icon failed" src="@/assets/svg/status-failed.svg" />
            <div v-if="index !== steps.length - 1" class="step-line" />
            <div class="failed-title">{{ $t('transactions.details.failedTitle') }}</div>
            <CLink v-if="confirmingData" class="link" :to="{ name: 'nfttransactions' }">
              {{ $t('transactions.details.gotoHistory') }}
            </CLink>
          </template>

          <template v-else-if="step.finished">
            <img class="step-icon succeeded" src="@/assets/svg/status-succeeded.svg" />
            <div v-if="index !== steps.length - 1" class="step-line" />
            <div class="finished-title">{{ $t('transactions.details.finishedTitle') }}</div>
            <CLink v-if="confirmingData" class="link" :to="{ name: 'nfttransactions' }">
              {{ $t('transactions.details.gotoHistory') }}
            </CLink>
          </template>
        </div>
      </div>
    </div>
  </CDialog>
</template>

<script>
import { ChainId, SingleTransactionStatus, TransactionStatus } from '@/utils/enums';
import { HttpError } from '@/utils/errors';
import copy from 'clipboard-copy';
import { getWalletApi } from '@/utils/walletApi';
import { toStandardHex } from '@/utils/convertors';
import httpApi from '@/utils/httpApi';
import ConnectWallet from '../home/ConnectWallet';

export default {
  name: 'Details',
  inheritAttrs: false,
  props: {
    hash: String,
    confirmingData: Object,
  },
  data() {
    return {
      selfPayLoading: false,
      connectWalletVisible: false,
      speedUpMSGFlag: false,
      xrpFeeLoading: false,
    };
  },
  computed: {
    mergedHash() {
      return this.hash || (this.confirmingData && this.confirmingData.transactionHash);
    },
    transaction() {
      return this.$store.getters.getNftTransaction(this.mergedHash);
    },
    fromWallet() {
      return (
        this.transaction &&
        this.$store.getters.getChainConnectedWallet(this.transaction.fromChainId)
      );
    },
    toWallet() {
      return (
        this.transaction && this.$store.getters.getChainConnectedWallet(this.transaction.toChainId)
      );
    },
    toChain() {
      return this.transaction && this.$store.getters.getChain(this.transaction.toChainId);
    },
    fromChain() {
      return this.transaction && this.$store.getters.getChain(this.transaction.fromChainId);
    },
    getFeeParams() {
      if (this.transaction) {
        return {
          fromChainId: this.transaction.fromChainId,
          fromTokenHash: this.transaction.token.hash,
          toChainId: this.transaction.toChainId,
          toTokenHash: this.transaction.token.hash,
        };
      }
      return null;
    },
    fee() {
      return this.getFeeParams && this.$store.getters.getFee(this.getFeeParams);
    },
    mergedTransaction() {
      return (
        this.transaction ||
        (this.confirmingData && {
          steps: [
            {
              hash: this.confirmingData.transactionHash,
              chainId: this.confirmingData.fromChainId,
            },
            {
              chainId: ChainId.Poly,
            },
            {
              chainId: this.confirmingData.toChainId,
            },
          ],
        })
      );
    },
    steps() {
      if (!this.mergedTransaction) {
        return null;
      }
      let { steps } = this.mergedTransaction;
      if (this.failed) {
        steps = [...steps, { failed: this.failed }];
      }
      if (this.finished) {
        steps = [...steps, { finished: this.finished }];
      }
      return steps;
    },
    selfPay() {
      return Number(this.transaction.fee) === 0;
    },
    failed() {
      return (
        !!this.confirmingData &&
        this.confirmingData.transactionStatus === SingleTransactionStatus.Failed
      );
    },
    finished() {
      return !!this.transaction && this.transaction.status === TransactionStatus.Finished;
    },
    closeable() {
      return !this.confirmingData || this.failed || this.finished;
    },
    statusIcons() {
      return {
        waiting: require('@/assets/svg/status-waiting.svg'),
        pending: require('@/assets/svg/status-pending.svg'),
        succeeded: require('@/assets/svg/status-succeeded.svg'),
        failed: require('@/assets/svg/status-failed.svg'),
      };
    },
  },
  watch: {
    mergedHash() {
      this.getNftTransaction();
    },
  },
  created() {
    this.interval = setInterval(() => {
      this.getNftTransaction();
    }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    copy(text) {
      copy(text);
      this.$message.success(this.$t('messages.copied', { text }));
    },
    getChain(chainId) {
      return this.$store.getters.getChain(chainId);
    },
    getStepStatus(index) {
      if (!this.steps) {
        return null;
      }
      if (this.failed && index === 0) {
        return 'failed';
      }
      const step = this.steps[index];
      if (step.blocks >= step.needBlocks) {
        return 'succeeded';
      }
      const lastStep = this.steps[index - 1];
      if (!lastStep || lastStep.blocks >= lastStep.needBlocks) {
        return 'pending';
      }
      return 'waiting';
    },
    async getNftTransaction() {
      if (this.mergedHash && this.$attrs.visible) {
        try {
          await this.$store.dispatch('getNftTransaction', this.mergedHash);
        } catch (error) {
          if (error instanceof HttpError) {
            if (error.code === HttpError.CODES.BAD_REQUEST) {
              return;
            }
          }
          throw error;
        }
      }
    },
    async payTochainFee() {
      if (!this.toWallet) {
        this.connectWalletVisible = true;
      }
      await this.$store.dispatch('ensureChainWalletReady', this.transaction.toChainId);
      if (this.transaction.steps[1].hash) {
        try {
          this.selfPayLoading = true;
          // this.$store.dispatch('getManualTxData', this.transaction.steps[1].hash);
          const polyHash = this.transaction.steps[1].hash;
          const result = await httpApi.getManualTxData({ polyHash });
          this.sendTx(result);
        } catch (error) {
          this.selfPayLoading = false;
          if (error instanceof HttpError) {
            if (error.code === HttpError.CODES.BAD_REQUEST) {
              return;
            }
          }
          throw error;
        }
      }
    },
    async sendTx($payload) {
      const self = this;
      console.log(self.toWallet);
      console.log(self.toChain);
      const selfccm = toStandardHex(self.toChain.dst_ccm);
      const apiccm = toStandardHex($payload.dst_ccm);
      if (selfccm !== apiccm) {
        this.$message.error('ccm error');
        this.selfPayLoading = false;
        return;
      }
      const walletApi = await getWalletApi(self.toWallet.name);
      const params = {
        data: $payload.data,
        toAddress: $payload.dst_ccm,
        toChainId: self.steps[2].chainId,
      };
      try {
        await walletApi.sendSelfPayTx(params);
        this.selfPayLoading = false;
        this.speedUpMSGFlag = true;
      } catch (error) {
        console.log(error);
        if (error && error.toString().indexOf('promise') < 0) {
          this.selfPayLoading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.speedup {
  opacity: 0.6;
  padding-top: 20px;
}
.button-submit {
  margin-top: 30px;
}
.content {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100vh;
  background: #171f31;
  box-shadow: 0px 2px 18px 7px rgba(#000000, 0.1);
}

.title {
  padding: 40px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .close-btn {
    width: 30px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      opacity: 0.6;
    }
  }
}
.scroll {
  flex: 1;
  padding: 40px 50px 40px 80px;
  overflow-y: auto;
  @include scroll-bar(rgba(#fff, 0.2), transparent);
  @include child-margin-v(56px);
}

.step {
  position: relative;
}

.step-icon {
  position: absolute;
  left: -31px;
  top: 1px;

  &.pending {
    animation: rotation 2s infinite linear;
  }
}

.step-line {
  position: absolute;
  left: -24.5px;
  top: 18px;
  width: 1px;
  height: calc(100% + 36px);
  background: #ffffff;
  opacity: 0.3;
}

.step-title {
  font-weight: 500;
  @include next-margin-v(10px);
}

.description {
  opacity: 0.6;
  font-size: 14px;
  @include next-margin-v(20px);
}

.progress {
  display: flex;
  align-items: center;
  @include child-margin-h(20px);
  @include next-margin-v(26px);
}

.progress-bar {
  flex: 1;
  ::v-deep .el-progress-bar__outer {
    background: rgba(#ffffff, 0.3);
  }

  ::v-deep .el-progress-bar__inner {
    background: rgba(62, 199, 235, 1);
  }
}

.progress-text {
  opacity: 0.6;
  font-size: 12px;
}

.link {
  display: inline-block;
  opacity: 0.6;
  color: #3ec7eb;
  font-size: 14px;
  text-decoration: underline;
}

.copy-icon {
  margin-left: 5px;
}

.failed-title {
  color: #ff4141;
  font-weight: 500;
  font-size: 24px;
  @include next-margin-v(10px);
}

.finished-title {
  color: #2fd8ca;
  font-weight: 500;
  font-size: 24px;
  @include next-margin-v(10px);
}
</style>
