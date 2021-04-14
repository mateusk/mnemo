<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      backendError: null,
    }
  },
  methods: {
    ...mapActions(['login']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.login({
          email: this.email,
          password: this.password,
        })

        this.$router.push('/profile')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
.login
    form(@submit="submitLogin")
      h1 Log in
      p
        label(for="email") Email:&nbsp;
          input(v-model="email" id="email" type="email" placeholder="Your email" required)
      p
        label(for="password") Password:&nbsp;
          input(v-model="password" id="password" type="password" placeholder="Your password" required)
      p
        input(type="submit" text="Log in")
    #errorMessage(v-if="backendError") {{ backendError }}
    #registerText Don't have an account yet? <router-link to="/register">Register</router-link>
</template>

<style lang="scss">
#registerText {
  margin-top: 10px;
}
</style>
