<template>
  <form class="card auth-card" @submit.prevent="submitHandler()">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && $v.email.required) ||
              ($v.email.$dirty && $v.email.email),
          }"
        />
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input id="password" type="password" v-model.trim="password" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <a href="/">Зарегистрироваться</a>
      </p>
    </div>
  </form>
</template>

<script>
import useValidate from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";

export default {
  name: "app-login",
  data() {
    return {
      v$: useValidate(),
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(6) },
    };
  },
  methods: {
    submitHandler() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Success!");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>