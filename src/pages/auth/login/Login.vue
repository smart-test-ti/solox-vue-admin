<template>
  <form @submit.prevent="onsubmit">
    <va-input
      class="mb-3"
      v-model="account"
      type="account"
      :label="$t('account')"
      :error="!!accountlErrors.length"
      :error-messages="accountlErrors"
    />

    <va-input
      class="mb-3"
      v-model="password"
      type="password"
      :label="$t('auth.password')"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors"
    />

    <div class="auth-layout__options d-flex align--center justify--space-between">
      <va-checkbox v-model="keepLoggedIn" class="mb-0" :label="$t('auth.keep_logged_in')"/>
      <router-link class="ml-1 link" :to="{name: 'recover-password'}">{{$t('auth.recover_password')}}</router-link>
    </div>

    <div class="d-flex justify--center mt-3">
      <va-button @click="onsubmit" class="my-0">{{ $t('auth.login') }}</va-button>
    </div>
  </form>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      account: 'SoloX',
      password: 'SoloX',
      keepLoggedIn: false,
      accountlErrors: [],
      passwordErrors: [],
    }
  },
  computed: {
    formReady () {
      return !this.accountlErrors.length && !this.passwordErrors.length
    },
  },
  methods: {
    onsubmit () {
      this.accountlErrors = this.account ? [] : ['Accout is required'];
      this.passwordErrors = this.password ? [] : ['Password is required'];
      if (!this.formReady) {
        return
      }
      window.localStorage.setItem('authenticated', true);
      window.localStorage.setItem('username', this.account);
      this.$router.push({ name: 'tables' })
    },
  },
}
</script>
