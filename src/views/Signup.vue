<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <section v-if="!authenticated" class="signup-container">
      <p class="h5 d-block text-agulite">
        <i class="fas fa-sign-in-alt"></i> Signup with wallet
      </p>
      <form class="form mt-2" @submit.prevent="signup()">
        <div class="form-group mt-2">
          <input
            type="text"
            class="form-control p-2"
            v-model="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div class="form-group mt-2">
          <input
            type="text"
            class="form-control p-2"
            v-model="lastName"
            placeholder="Last Name"
            required
          />
        </div>
        <div class="form-group mt-2">
          <input
            type="email"
            class="form-control p-2"
            v-model="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="d-flex justify-content-center mt-2">
          <button
            :disabled="signupProcessing"
            type="submit"
            class="btn btn-agulite btn-block w-100 login p-2"
          >
            {{ signupButtonText }}
          </button>
        </div>
        <span
          class="d-block text-center text-danger fst-italic py-3"
          v-if="errorMessage"
        >
          {{ errorMessage }}
        </span>
      </form>
      <div class="guide mt-4">
        <p class="h5 text-agulite">
          <i class="fas fa-book"></i> Guide on payment
        </p>
        <ul class="nav nav-tabs mt-2">
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
              <li>Download Metamask or Trust Wallet from mobile app store</li>
              <li>Create an account and store your phrase securely</li>
              <li>Open this <a href="/signup">link</a> in your dApp browser</li>
              <li>Complete signup to connect your wallet and make payment</li>
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
              <li>Install the Metamask chrome extension</li>
              <li>Create an account and store your phrase securely</li>
              <li>Complete signup to connect your wallet and make payment</li>
              <li>Confirm transaction</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section v-else-if="authenticated" class="payment-container mt-4">
      <form @submit.prevent="payWithBusd" class="mt-4" id="form">
        <label class="d-block text-center h2"> {{ amount }} BUSD </label>
        <div class="d-flex justify-content-center mt-4">
          <button
            :disabled="paymentProcessing"
            type="submit"
            class="btn btn-lg btn-agulite w-100 p-2"
          >
            {{ payButtonText }}
          </button>
        </div>
        <p class="text-end fst-italic mt-2">
          Balance: {{ wallet.balance }} BUSD
        </p>
      </form>
    </section>
    <section class="error-container mt-1">
        <p class="text-center text-danger">{{ errorMessage02 }}</p>
    </section>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { getErrorMessage } from "../utils";
import { useAgulite } from '../composables'
import { computed, onMounted } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
import { busdAddress, busdAbi } from "../config";
const Moralis = require("moralis");

export default {
  setup() {
    const serverUrl = "https://dhgbokfaapju.usemoralis.com:2053/server";
    const appId = "LSFKaadx4Fi4OeS9nmG1wTtiGmNfhIVMgk65snFd";
    Moralis.start({ serverUrl, appId });

    const router = useRouter();
    const route = useRoute();

    const { inviteToSlack } = useAgulite()

    const authenticated = ref(false)

    const amount = ref(0);
    const wallet = ref({
      address: "0x000000000000000000000000000000000000000",
      formattedAddress: "0x000...0000",
      balance: 0,
    });

    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const signupProcessing = ref(false);
    const paymentProcessing = ref(false);
    const errorMessage = ref("");
    const errorMessage02 = ref("");

    const signupButtonText = computed(() =>
      signupProcessing.value ? "Please, wait." : "Sign up"
    );

    const payButtonText = computed(() =>
      paymentProcessing.value ? "Please, wait." : "Pay"
    );

    onMounted(async () => {
      amount.value = route.params.amount;
      if (!amount.value) {
        router.push("/blockchain-development");
      }
    });

    const signup = async () => {
      signupProcessing.value = true;

      const _firstName = firstName.value.trim();
      const _lastName = lastName.value.trim();
      const _email = email.value.trim();

      try {
        if (window.ethereum) {
          const user = await Moralis.Web3.authenticate();

          if (user) {
            user.set("firstName", _firstName);
            user.set("lastName", _lastName);
            user.setEmail(_email);
            user.save();

            authenticated.value = true;
            wallet.value.address = user.get("ethAddress");
            wallet.value.balance = await getBusdBalance();
          }
        } else {
          errorMessage.value =
            "Non-Ethereum browser detected. Try installing MetaMask!";
        }
      } catch (error) {
        console.log(`signup: ${error.message}`);
      }

      signupProcessing.value = true;
    };

    const getBusdBalance = async () => {
      try {
        const options = {
          chain: "0x61",
          address: wallet.value.address,
        };
        const balances = await Moralis.Web3API.account.getTokenBalances(
          options
        );
        const weiBalance = balances.filter(
          (balance) =>
            balance.token_address.toLowerCase() === busdAddress.toLowerCase()
        )[0].balance;
        return +Moralis.Units.FromWei(weiBalance, 18);
      } catch (error) {
        console.log(`getBusdBalance: ${error.message}`);
        return 0;
      }
    };

    const payWithBusd = async () => {
      paymentProcessing.value = true;
      errorMessage02.value = ''

      try {
        const options = {
          type: "erc20",
          amount: Moralis.Units.Token(`${amount.value}`, "18"),
          receiver: "0xF202f2bdC989AdC9266B105795c451f13fE3B9eA",
          contractAddress: busdAddress
        };

        await Moralis.transfer(options);

        const data = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: email.value.trim()
        }

        await inviteToSlack(data)

        router.push({
          name: "Confirmation",
          params: { ...data }
        });
      } catch (error) {
        errorMessage02.value = 'Something went wrong. Make sure you are connected to BSC mainnet and have enough BUSD for payment.'
        console.log(`payWithBusd: ${error.message}`)
      }

      paymentProcessing.value = false;
    };

    return {
      authenticated,
      wallet,
      amount,
      firstName,
      lastName,
      email,
      signupProcessing,
      errorMessage,
      errorMessage02,
      signupButtonText,
      payButtonText,
      paymentProcessing,
      signup,
      payWithBusd,
    };
  },
};
</script>

<style scoped>
.signup-container {
  width: 40%;
  margin-top: 20px !important;
  padding: 25px !important;
}

.signup-container form {
  padding: 20px !important;
  border: 1px solid #c1c1c1;
  border-radius: 10px;
}

.signup-container .btn {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn-agulite {
  background-color: #f5800c !important;
  color: #ffffff !important;
}

.text-agulite {
  color: #f5800c !important;
}

.signup-container h1 {
  font-size: 24px !important;
}

.signup-container h2 {
  font-size: 16px !important;
}

.payment-container {
  width: 40%;
  margin-top: 100px !important;
  background-color: #202231;
  color: #ffffff;
  padding: 25px !important;
  border-radius: 10px;
}

.error-container {
  width: 40%;
  padding: 25px !important;
}

@media screen and (max-width: 1024px) {
  .signup-container,
  .payment-container {
    width: 85%;
  }

  .signup-container h1 {
    font-size: 20px !important;
  }

  .signup-container h2 {
    font-size: 13px !important;
  }

  .signup-container span {
    font-size: 12px !important;
  }
}
</style>
