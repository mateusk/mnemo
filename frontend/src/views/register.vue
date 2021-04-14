<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data() {
    return {
      username: '',
      email: '',
      password: '',

      backendError: null,
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          username: this.username,
          email: this.email,
          password: this.password,
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
.register
    form( @submit="submitLogin")
      h1 Register
      p
        label(for="username") Name:&nbsp;
          input(v-model="username" id="username" type="text" placeholder="Your username" required)
      p
        label(for="email") E-mail:&nbsp;
          input(v-model="email" id="email" type="email" placeholder="Your email" required)
      p
        label(for="password") Password:&nbsp;
          input(v-model="password" id="password" type="password" placeholder="Your password" required)
      p
        input(type="submit" text="Register")
      div(v-if="backendError")
        p {{ backendError }}
      div
        p Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss"></style>
