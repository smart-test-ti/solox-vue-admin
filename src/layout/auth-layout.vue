<template>
  <div class="auth-layout row align-content--center">
    <div class="flex xs12 pa-3 flex-center">
      <svg t="1658029282149" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5487" width="100" height="100"><path d="M512.09998 0.09998l-445.512985 239.953135 445.512985 247.251708 445.512986-247.251708z" fill="#8FB3FF" p-id="5488"></path><path d="M546.693224 546.593244l409.919937-242.752588-0.09998 482.805702-409.919937 237.353642 0.09998-477.406756z" fill="#043EB8" p-id="5489"></path><path d="M66.886936 303.840656L476.906854 542.893966l-0.499902 480.906073L66.786956 790.245655l0.09998-486.404999z" fill="#2868F0" p-id="5490"></path></svg>
    </div>

    <div class="flex xs12 pa-3">
      <div class="d-flex justify--center">
        <va-card class="auth-layout__card">
          <va-card-content>
            <va-tabs v-model="tabIndex" center>
              <template #tabs>
                <va-tab name="login">{{ $t("auth.login") }}</va-tab>
                <va-tab name="signup">{{ $t("SignUp") }}</va-tab>
              </template>
            </va-tabs>

            <va-separator />

            <div class="pa-3">
              <router-view />
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AuthLayout",
  data() {
    return {
      selectedTabIndex: 0
    };
  },
  computed: {
    tabIndex: {
      set(tabName) {
        this.$router.push({ name: tabName });
      },
      get() {
        return this.$route.name;
      }
    }
  }
};
</script>

<style lang="scss">
.auth-layout {
  min-height: 100vh;
  background-image: linear-gradient(to right, var(--va-background), var(--va-white));

  &__card {
    width: 100%;
    max-width: 600px;
  }
}
</style>
