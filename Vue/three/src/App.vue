<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandle">
      <h1>Опрос</h1>
      <app-input
        :error="errors.name"
        label="Ваше имя"
        v-model:value="name"
      ></app-input>
      <!-- <p :class="{invalid: errors.name}">
        <label for="name">Ваше имя:</label><br />
        <input type="text" id="name" v-model.trim="name" /> <br>
        <small v-if="errors.name">{{ errors.name }}</small>
      </p> -->
      <p>
        <label for="age">Ваш возраст:</label><br />
        <input type="number" id="age" max="70" v-model="age" />
      </p>
      <p>
        <label for="city">Ваш город:</label><br />
        <select id="city" v-model="city">
          <option value="nsk">Новосибирск</option>
          <option value="spb">Санкт-Петербург</option>
          <option value="kzn">Казань</option>
          <option value="msk">Москва</option>
        </select>
      </p>
      <p>
        Ваш пол: <br />
        <input type="radio" name="pol" id="m" v-model="pol" value="male" />
        <label for="m">M</label><br />
        <input type="radio" name="pol" id="j" v-model="pol" value="female" />
        <label for="j">Ж</label>
      </p>
      <p>
        Какие языки вы знаете: <br />
        <input type="checkbox" id="ru" v-model="language" value="ru" />
        <label for="ru">Русский</label><br />

        <input type="checkbox" id="en" v-model="language" value="en" />
        <label for="en">Английский</label><br />

        <input type="checkbox" id="de" v-model="language" value="de" />
        <label for="de">Немецкий</label><br />

        <input type="checkbox" id="zh" v-model="language" value="zh" />
        <label for="zh">Китайский</label><br />
      </p>
      <p>
        Лицензионное соглашение: <br />
        <input type="checkbox" id="agreement" v-model="agree" />
        <label for="agreement">Согласен</label>
      </p>
      <button>Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from './components/AppInput.vue';

export default {
  data() {
    return {
      name: "",
      age: 25,
      city: "msk",
      pol: null,
      language: [],
      agree: false,
      errors: {
        name: null
      }
    };
  },
  methods: {
    formValid() {
      let isValid = true;
      if (this.name.length === 0) {
        this.errors.name = "Имя не введено"
        isValid = false;
      } else {
        this.errors.name = null
      }
      return isValid;
    },
    submitHandle() {
      if (this.formValid()) {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("City:", this.city);
        console.log("Pol:", this.pol);
        console.log("Language:", this.language);
        console.log("Agree:", this.agree);
      }
    },
  },
  components: {AppInput}
};
</script>

<style>
.card small{
  color: red;
}
.card .invalid input{
  border-color: red;
}
</style>
