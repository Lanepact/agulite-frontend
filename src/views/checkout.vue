<template>
  <nav class="navbar d-flex justify-content-between p-2">
    <a href="#">
      <!-- <img class="logo rounded-circle" src="img/logo02.png" alt="DPV Logo"/> -->
    </a>

    <div class="">
      <button
        v-if="connected"
        class="btn btn-outline-success p-2"
        @click="opened = true"
      >
        {{ account.formattedAddress }}
      </button>
      <button
        v-else-if="!connected"
        class="btn btn-outline-success p-2 ml-2"
        @click="connect"
        :disabled="connecting"
      >
        Connect
      </button>
    </div>
  </nav>
  <main class="row">
    <div class="col-sm-12 col-md-5">
      <div class="d-flex justify-content-center align-items-center">
        <section class="guide">
          <h1 class="h3">Guide on making payment</h1>
          <ul class="nav nav-tabs mt-3">
            <li class="nav-item">
              <button
                class="nav-link active p-2"
                id="mobile-tab"
                data-bs-toggle="tab"
                data-bs-target="#mobile"
                type="button"
                role="tab"
                aria-controls="mobile"
                aria-selected="true"
              >
                Mobile
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link p-2"
                id="desktop-tab"
                data-bs-toggle="tab"
                data-bs-target="#desktop"
                type="button"
                role="tab"
                aria-controls="desktop"
                aria-selected="true"
              >
                Desktop
              </button>
            </li>
          </ul>

          <div class="tab-content">
            <div
              class="tab-pane active pt-3"
              id="mobile"
              role="tabpanel"
              aria-labelledby="mobile-tab"
            >
              <ul class="list-group list-group-numbered">
                <li>Download metamask or Trust Wallet from app store</li>
                <li>Create an account and store your phrase securely</li>
                <li>Open this link in your dApp browser</li>
                <li>Connect your wallet and click on pay</li>
                <li>Confirm transaction</li>
              </ul>
            </div>
            <div
              class="tab-pane pt-3"
              id="desktop"
              role="tabpanel"
              aria-labelledby="desktop-tab"
            >
              <ul class="list-group list-group-numbered">
                <li>Install the metamask chrome extension</li>
                <li>Create an account and store your phrase securely</li>
                <li>Connect your wallet and click on pay</li>
                <li>Confirm transaction</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="col-sm-12 col-md-7">
      <div class="d-flex justify-content-center align-items-center flex-column">
        <section class="countdown">
          <h1 class="h3 text-center" id="time-info">Next cohort starts in</h1>
          <ul class="d-flex justify-content-center mt-2">
            <li>
              <span>{{ days }}</span
              >Days
            </li>
            <li>
              <span>{{ hours }}</span
              >Hours
            </li>
            <li>
              <span>{{ minutes }}</span
              >Minutes
            </li>
            <li>
              <span>{{ seconds }}</span
              >Seconds
            </li>
          </ul>
        </section>
        <section class="action mt-3">
          <form class="mt-4" id="form">
            <label class="d-block text-center h2"> {{ amount }} BUSD </label>
            <div class="d-flex justify-content-center mt-4">
              <button
                type="submit"
                class="btn btn-lg w-100 p-2"
                id="buy-btn"
                :disabled="!busdContractLoaded"
              >
                Pay
              </button>
            </div>
            <p class="text-end fst-italic mt-2">
              Balance: {{ account.balance }} BUSD
            </p>
            <p class="text-center mt-2" id="message"></p>
          </form>
        </section>
      </div>
    </div>
  </main>

  <Modal :open="opened" @close="opened = false" class="modal1">
    <div class="text-center m-tit">
      <h3>Account</h3>
      <hr />
    </div>
    <div>
      <p>
        {{ account.address }}
      </p>
      <div class="m-but">
        <button type="submit" class="btn btn-primary" @click="disconnect">
          Disconnect
        </button>
      </div>
    </div>
  </Modal>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import Web3 from "web3";
import { busdAddress, busdAbi } from "../config";
import Modal from "../components/modal.vue";

export default {
  components: {
    Modal,
  },

  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const amount = ref(140);
    const account = ref({
      address: "0x000000000000000000000000000000000000000",
      formattedAddress: "0x000...0000",
      balance: 0,
    });

    const processing = ref(false);
    const connecting = ref(false);

    const connected = ref(false);
    const busdContractLoaded = ref(false);
    const opened = ref(false);

    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    const connect = async () => {
      connecting.value = true;

      if (window.ethereum) {
        window.web3 = await new Web3(window.ethereum);
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await handleUnsupportedChain();
        await setup(accounts[0]);
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }

      connecting.value = false;
    };

    const disconnect = () => {};

    const setup = async (account) => {
      connected.value = true;
      subscribeToEvents();
      await loadAccount(account);
      await loadBusdContract();
      await loadBusdBalance(account);
    };

    const handleUnsupportedChain = async () => {
      let chainId = await window.web3.eth.net.getId();

      if (chainId !== 0x61) {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x61" }],
        });
      }
    };

    const subscribeToEvents = () => {
      window.ethereum.on("accountsChanged", async (accounts) => {
        await loadAccount(accounts[0]);
        await loadBusdBalance(accounts[0]);
      });

      window.ethereum.on("chainChanged", async (networkId) => {
        console.log(networkId);
      });
    };

    const loadAccount = async (address) => {
      account.value.address = address;
      account.value.formattedAddress = getFormattedAccount(address);
    };

    const loadBusdContract = async () => {
      try {
        window.busdContract = await new window.web3.eth.Contract(
          busdAbi,
          busdAddress
        );
        busdContractLoaded.value = true;
      } catch (error) {
        console.log("loadBusdContract: " + error.message);
      }
    };

    const loadBusdBalance = async (address) => {
      try {
        let tokenBalance = await window.busdContract.methods
          .balanceOf(address)
          .call();
        const tokenDecimals = await window.busdContract.methods
          .decimals()
          .call();
        tokenBalance = +tokenBalance / 10 ** +tokenDecimals;
        account.value.balance = tokenBalance.toFixed(2);
      } catch (error) {
        console.log("loadBusdBalance: " + error);
      }
    };

    const pay = async (amount, sender, receiver) => {
      processing.value = true;

      try {
        const txData = {
          from: sender,
          gasLimit: 1000000,
          gasPrice: web3.utils.toWei("10", "Gwei"),
        };

        let receipt = await window.presale.methods
          .transfer(receiver, amount)
          .send(txData);
        // messageElem.innerHTML = `<a href="https://testnet.bscscan.com/tx/${receipt.transactionHash}">View transaction</a>`;

        await loadBnbBalance(account);
        await loadTokenBalance(account);
        await loadContribution(account);
      } catch (error) {
        window.alert(error.message);
      }

      processing.value = true;
    };

    const initCountDown = (timeAmount) => {
      const component = (x, v) => {
        return Math.floor(x / v);
      };

      setInterval(() => {
        timeAmount--;

        let _days = component(timeAmount, 24 * 60 * 60),
          _hours = component(timeAmount, 60 * 60) % 24,
          _minutes = component(timeAmount, 60) % 60,
          _seconds = component(timeAmount, 1) % 60;

        days.value = _days;
        hours.value = _hours;
        minutes.value = _minutes;
        seconds.value = _seconds;

        if (timeAmount <= 0) {
          window.location.reload();
        }
      }, 1000);
    };

    const getFormattedAccount = (account) => {
      return account
        .slice(0, 5)
        .concat("...")
        .concat(account.slice(account.length - 4));
    };

    onMounted(() => {
      // amount.value = route.params.amount

      // if(!amount.value){
      //     router.push('/blockchain-development')
      // }

      initCountDown(30 * 24 * 60 * 60);
    });

    return {
      account,
      amount,
      connecting,
      connected,
      busdContractLoaded,
      opened,
      days,
      hours,
      minutes,
      seconds,
      connect,
      disconnect,
      pay,
    };
  },
};
</script>

<style>
html, body {
  color: #000000;
  padding-bottom: 25px !important;
}

.logo {
  width: 40px;
  height: auto;
}

.navbar {
  box-shadow: 0 4px 8px 0 rgba(97, 97, 97, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.guide {
  margin-top: 60px !important;
  padding: 25px !important;
}

.countdown {
  width: 60%;
  margin-top: 60px !important;
}

.countdown li {
  display: inline-block;
  list-style-type: none;
  padding: 0.25em !important;
  text-align: center !important;
}

.countdown li span {
  display: block;
  font-size: 1.5rem;
}

.action {
  width: 60%;
  background-color: #202231;
  color: #ffffff;
  padding: 25px !important;
  border-radius: 10px;
}

#buy-btn,
#disconnect-btn {
  color: #ffffff;
  background-image: linear-gradient(to right, #fcad5f, #f5800c);
}

@media screen and (max-width: 768px) {
  .guide,
  .action,
  .countdown {
    margin-top: 10px !important;
  }

  .action,
  .countdown {
    width: 85%;
  }

  .countdown li span {
    font-size: 1.2rem;
  }
}
</style>