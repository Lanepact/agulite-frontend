<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <div class="message">
      <p class="h4 fw-bold text-agulite mb-4">
        Congratulations, {{ data.firstname + " " + data.lastname }}!
      </p>
      <span class="lh-lg">
        Join the <a href="https://t.me/agulite_community" target="_blank">community <i class="fab fa-telegram ic"></i></a> to stay up to speed on the Blockchain Week events.
      </span>
      <span class="d-block mt-2">
        Contact <a href="mailto:support@agulite.com">support</a> for any issue.<br>
        Follow our handles below for more information.
      </span>

    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

export default {
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
        data.value = _data
      } else {
        router.push("/blockchain-week");
      }
    });

    return { data };
  },
};
</script>

<style scoped>
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