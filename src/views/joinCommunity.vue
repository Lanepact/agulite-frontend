<template>
  <div>
    <navbar :goToCommunity="goToCommunity" />
  </div>
  <div class="confirmation d-flex justify-content-center align-items-center flex-column">
    <div class="message">
      <p class="h4 fw-bold text-agulite mb-4">
        Congratulations, {{ data.firstname + " " + data.lastname }}!
      </p>
      <span class="lh-lg">
        Join the
        <a href="https://t.me/agulite_community" target="_blank"
          >community <i class="fab fa-telegram ic"></i
        ></a>
        to stay up to speed on the Blockchain Week events.
      </span>
      <span class="d-block mt-2">
        Contact <a href="mailto:support@agulite.com">support</a> for any
        issue.<br />
        Follow our handles below for more information.
      </span>
    </div>
  </div>
  <div class="community-section" ref="community">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
        <h1 class="header">Keep In Touch</h1>
      </div>
      <div class="row mb-4 text-center community-social">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div>
            <a href="https://t.me/agulite_community" target="_blank"
              ><i class="fab fa-telegram ic"></i
            ></a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div>
            <a href="https://twitter.com/officialagulite"
              ><i class="fab fa-twitter ic"></i
            ></a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div>
            <a href="https://www.linkedin.com/company/agulite"
              ><i class="fab fa-linkedin ic"></i
            ></a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div>
            <a href="https://www.reddit.com/r/AGUITE/"
              ><i class="fab fa-reddit ic"></i
            ></a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div>
            <a href="https://www.instagram.com/official_agulite/"
              ><i class="fab fa-instagram ic"></i
            ></a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div>
            <a href="https://m.facebook.com/officialAgulite">
            <i class="fab fa-facebook ic"></i>
            </a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="fter">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
        <h4 class="p-5 h6">Copyright &copy;2022</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import Navbar from "../components/navbar.vue";

export default {
  components: {
    Navbar,
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const data = ref({
      firstName: "",
      lastName: "",
      email: "",
    });

    onMounted(() => {
        const _data = route.params;
        if (_data.hasOwnProperty("email")) {
          data.value = _data;
        } else {
          router.push("/blockchain-week");
        }
    });

    return { data };
  },
};
</script>

<style scoped>
.confirmation {
    margin: 45px 0px 100px 0px!important;
}
.message {
  width: 40%;
  margin-top: 100px !important;
  padding: 25px !important;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.text-agulite {
  color: #f5800c !important;
}
@media screen and (max-width: 1024px) {
  .message {
    width: 85%;
  }
}
</style>