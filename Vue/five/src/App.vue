<template>
  <div class="container">
    <div class="card">
      <h2>{{ $translate('app.title') }}</h2>

      <button @click="changeLang">Переключить язык</button>

      <button @click="$alert('Работает')">Alert</button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['language'],
  methods: {
    changeLang(){
      this.language('en')
      this.$forceUpdate()
    }
  }
}
</script>

<!-- <template>
  <div class="container">
    <div class="card" v-if="show">
      <h2 v-color:[type].blink.hover="myColor">Директивы</h2>

      <div>
        <label for="inp">Активный по умолчанию</label> <br>
        <input v-focus type="text" id="inp">
      </div>

      <button @click="myColor='darkGreen'">Сделать зеленым</button>
      <button @click="type = type === 'color' ? 'background' : 'color'">Переключить тип</button>
    </div>
  </div>
</template>


<script>
import focusDirective from './focusDirective';
import colorDirective from './colorDirective';

export default{
  data(){
    return{
      myColor: 'orange',
      type: 'color',
      show: true
    }
  },
  // mounted(){
  //   setTimeout(()=> {
  //     this.show = false
  //   }, 5000)
  // },
  directives: {
    focus: focusDirective,
    color: colorDirective
    // {
    //   mounted(el){
    //     el.focus()
    //   }
    // }
  }
}

</script> -->

<!-- <template>
  <div class="container">
    <div class="card">
      <app-alert
        v-if="alert"
        title="Внимание!"
        text="Это важная информация"
        type="orange"
        :closable="true"
        @close="alert=false"
      ></app-alert>

      <div class="card">
        <button @click="toggleAlert">{{ alert ? "Скрыть" : "Показать" }} сообщение</button>
      </div>

      <app-block></app-block>
    </div>
  </div>
</template>

<script>
import AppAlert from './components/AppAlert.vue';
import AppBlock from './components/AppBlock.vue';
import alertMixin from './alertMixin';

export default {
  mixins: [alertMixin],
  components: {AppAlert, AppBlock}
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
</style> -->
