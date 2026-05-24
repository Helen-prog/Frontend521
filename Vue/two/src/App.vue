<template>
  <div class="content">
    <div class="card">
      <h2>Динамические компоненты</h2>
    </div>
    <div class="card">
      <app-button
        :color="oneColor"
        @action="active = 'one'"
        >One</app-button
      >
      <app-button
        :color="twoColor"
        @action="active = 'two'"
        >Two</app-button
      >
    </div>

    <component :is="componentName"></component>
  </div>
</template>

<script>
import AppButton from "./components/AppButton.vue";
import AppTextOne from "./components/AppTextOne.vue";
import AppTextTwo from "./components/AppTextTwo.vue";

export default {
  data() {
    return {
      active: "one",
    };
  },
  computed:{
    componentName(){
      if(this.active === 'one'){
        return 'app-text-one'
      }
      return 'app-text-two'
    },
    oneColor(){
      return this.active === 'one' ? 'green' : ''
    },
    twoColor(){
      return this.active === 'two' ? 'green' : ''
    }
  },
  components: { AppButton, AppTextOne, AppTextTwo },
};
</script>

<!-- <template>
  <div class="content">
    <div class="card">
      <h2>Slots</h2>
      <h3>Новости: {{ now }}</h3>
      <span>
        Открыто: <strong> {{ openRate }}</strong> 
        | Прочитано: <strong>{{ readRate }}</strong>
      </span>
    </div>

    <app-list>
      <template #default="{idx, iter}">
        <span style="color: green">
          <strong>{{ idx + 1 }}</strong>
          Item: {{ iter }}
        </span>
      </template>
    </app-list>

    <app-block>
      <p>Текст для нового блока</p>

      <template #left>
        <h3>Это заголовок!</h3>
      </template>
      <template #right>
        <h3>Это подвал!</h3>
      </template>
    </app-block>
    <first-component 
      v-for="item in news"
      :key="item"
      :title="item.title"
      :description="item.description"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openRate++"
      @read-news="readNews"
      @unmark="unreadNews"
    ></first-component>

  </div>
  
</template>

<script>
import AppBlock from './components/AppBlock.vue';
import AppList from './components/AppList.vue';

export default {
  components: {AppBlock, AppList}
}
</script> -->

<!-- <script>
import FirstComponent from './components/FirstComponent.vue';

export default {
  data(){
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {title: "Новость 1", description: "Описание новости 1", id: 1}, 
        {title: "Новость 2", description: "Описание новости 2", id: 2}, 
      ],
      openRate: 0,
      readRate: 0
    }
  },
  provide(){
    return{
      title: 'Список всех новостей',
      news: this.news
    }
  },
  components: {
    // "first-component": FirstComponent
    // 'FirstComponent': FirstComponent
    // FirstComponent: FirstComponent
    FirstComponent
  },
  methods: {
    readNews(id){
      const idx = this.news.findIndex(news => news.id === id);
      this.news[idx].wasRead = true;
      this.readRate++;
    },
    unreadNews(id){
      const news = this.news.find(news => news.id === id);
      news.wasRead = false;
      this.readRate--;
    }
  }
}
</script> -->

<!-- <style scoped>
h3{
  color: darkgoldenrod;
}
</style> -->
