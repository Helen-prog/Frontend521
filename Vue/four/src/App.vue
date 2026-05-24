<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-4 mx-auto">
        <form @submit.prevent="registerUser">
          <Transition :duration="550">
            <div v-show="step === 1" class="step">
              <div class="mb-3">
                <label for="name" class="form-label">Ваше имя</label>
                <input @blur="v$.name.$touch()" type="text" class="form-control" id="name" :class="{'is-invalid': v$.name.$error}" v-model="name" />
                <div v-if="v$.name.$error"><small>Имя не заполнено</small></div>
              </div>

              <div class="mb-3">
                <label for="surname" class="form-label">Ваше фамилия</label>
                <input @blur="v$.surname.$touch()" type="text" class="form-control" id="surname" :class="{'is-invalid': v$.surname.$error}" v-model="surname" />
                <div v-if="v$.surname.$error"><small>Фамилия не заполнена</small></div>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input @blur="v$.email.$touch()" type="email" class="form-control" id="email" :class="{'is-invalid': v$.email.$error}" v-model="email" />
                 <div v-if="v$.email.$error"><small>Email не заполнен или указан некорректно</small></div>
              </div>

              <button @click="nextStep" type="button" class="btn btn-primary" :disabled="disabledBtn1">
                Следующий шаг
              </button>
            </div>
          </Transition>

          <Transition :duration="550">
            <div v-show="step === 2" class="step">
              <div class="mb-3">
                <label for="psw" class="form-label">Пароль</label>
                <input @blur="v$.psw.$touch()" type="password" class="form-control" id="psw" :class="{'is-invalid': v$.psw.$error}" v-model="psw" v-show="!showPass" />
                <input @blur="v$.psw.$touch()" type="text" class="form-control" id="psw" :class="{'is-invalid': v$.psw.$error}" v-model="psw" v-show="showPass" />

                <button @click="showPass = !showPass" class="form-control">
                  <span v-show="!showPass">Показать пароль</span>
                  <span  v-show="showPass">Скрыть пароль</span>
                </button>

                <div v-if="v$.psw.$error"><small>Пароль не заполнен или меньше 6 символов</small></div>
              </div>

              <div class="mb-3">
                <label for="psw2" class="form-label"
                  >Подтверждение пароля</label
                >
                <input @blur="v$.psw2.$touch()" type="password" class="form-control" id="psw2" :class="{'is-invalid': v$.psw2.$error}" v-model="psw2" v-show="!showPass2" />
                 <input @blur="v$.psw2.$touch()" type="text" class="form-control" id="psw2" :class="{'is-invalid': v$.psw2.$error}" v-model="psw2" v-show="showPass2" />

              <button @click="showPass2 = !showPass2" class="form-control">
                  <span v-show="!showPass2">Показать пароль</span>
                  <span  v-show="showPass2">Скрыть пароль</span>
                </button>

                <div v-if="v$.psw2.$error"><small>Пароли не совпадают</small></div>
              </div>

              <button @click="backStep" type="button" class="btn btn-light">
                Назад
              </button>

              <button @click="nextStep" type="button" 
              :disabled="disabledBtn2"
              class="btn btn-primary">
                Следующий шаг
              </button>
            </div>
          </Transition>
          <Transition :duration="550">
            <div v-show="step === 3" class="step">
              <div class="mb-3">
                <label for="country" class="form-label">Страна</label>
                <input @blur="v$.country.$touch()" type="text" class="form-control" id="country" :class="{'is-invalid': v$.country.$error}" v-model="country" />
                <div v-if="v$.country.$error"><small>В поле не должны содержаться цифры и спецсимволы</small></div>
              </div>

              <div class="mb-3">
                <label for="city" class="form-label">Город</label>
                <input @blur="v$.city.$touch()" type="text" class="form-control" id="city" :class="{'is-invalid': v$.city.$error}" v-model="city" />
                <div v-if="v$.city.$error"><small>В поле не должны содержаться цифры и спецсимволы</small></div>
              </div>

              <button @click="backStep" type="button" class="btn btn-light">
                Назад
              </button>

              <button @click="nextStep" type="submit" class="btn btn-primary" :disabled="disabledRegister">
                Зарегистрироваться
              </button>
            </div>
          </Transition>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs, helpers } from "@vuelidate/validators";

const alpha = helpers.regex(/^[А-яЁёA-Za-z]*$/)

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      step: 1,
      showPass: false,
      showPass2: false,

      name: "",
      surname: "",
      email: "",
      psw: "",
      psw2: "",
      country: "",
      city: "",
    };
  },
  methods: {
    nextStep() {
      if (this.step < 3) {
        this.step++;
      }
    },
    backStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    async registerUser() {
      const result = await this.v$.$validate()
      if(!result){
        return
      }

      console.log("Регистрация прошла успешно");
      console.log(this.name);

      this.step = 1

      this.name = "",
      this.surname = "",
      this.email = "",
      this.psw = "",
      this.psw2 = "",
      this.country = "",
      this.city = ""

      this.v$.$reset()
    },
  },
  computed: {
    disabledBtn1(){
      return this.v$.name.$invalid || this.v$.surname.$invalid || this.v$.email.$invalid
    },
    disabledBtn2(){
      return this.v$.psw.$invalid || this.v$.psw2.$invalid 
    },
    disabledRegister(){
      return this.v$.country.$invalid || this.v$.city.$invalid
    }
  },
  validations() {
    return {
      name: {required},
      surname:  {required},
      email:  {required, email},
      psw:  {required, minLength: minLength(6)},
      psw2:  {required, sameAs: sameAs(this.psw)},
      country:  {alpha},
      city:  {alpha},
    };
  },
};
</script>

<style>
small{
  color: red;
}
</style>
