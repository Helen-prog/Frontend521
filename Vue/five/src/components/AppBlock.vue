<template>
  <div class="container">
    <div class="card">
      <app-alert
        v-if="alert"
        title="Внимание!"
        text="Это важная информация"
        type="green"
        @close="alert=false"
      ></app-alert>

      <div class="card">
        <button @click="toggleAlert">{{ alert ? "Скрыть" : "Показать" }} сообщение</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppAlert from './AppAlert.vue';
import alertMixin from '@/alertMixin';

export default {
  mixins: [alertMixin],
  components: {AppAlert}
}
</script>

<style>
.alert{
  padding: 20px;
  margin-bottom: 10px;
  background: #CCC;
}
.alert p{
  margin: 0;
}
.alert-title{
  text-transform: uppercase;
  font-weight: bold;
}
.red{
  border-left: 5px solid red;
}
.green{
  border-left: 5px solid green;
}
.orange{
  border-left: 5px solid orange;
}
</style>
