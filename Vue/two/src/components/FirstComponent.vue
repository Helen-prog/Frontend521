<template>
  <div class="card">
    {{ title }}
    <!-- <button class="btn" v-if="wasRead" @click="$emit('unmark', id)">Отметить непрочитанной</button> -->
    <app-button
        :color="'green'"
        v-if="wasRead"
        @action="$emit('unmark', id)"        
    >Отметить непрочитанной</app-button>
    <!-- <button class="btn" @click="open">
      {{ isNewsOpen ? "Закрыть" : "Открыть" }}
    </button> -->
    <app-button
        @action="open"        
    >{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>
  </div>
  <div :class="isNewsOpen ? 'card' : 'display'">
    <div v-if="isNewsOpen">
      <p>
        {{ description }}
      </p>
      <!-- <button v-if="!wasRead" class="btn" @click="mark">Прочесть новость</button> -->
       <app-button
        v-if="!wasRead"
        :color="'blue'"
        @action="mark"        
       >Прочесть новость</app-button>

       <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppNewsList from './AppNewsList.vue';

export default {
  name: "FirstComponent",
  // props: ['title', 'description'],
  props: {
    wasRead: Boolean,
    title: String,
    description: String,
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      // item: "Item string",
      // isOpen: false
      localIsOpen: this.isOpen,
      isNewsOpen: this.isOpen,
    };
  },
  methods: {
    toggleOpen() {
      this.localIsOpen = !this.localIsOpen;
    },
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) {
        this.$emit("open-news");
      }
    },
    mark(){
        this.isNewsOpen = false
        this.$emit("read-news", this.id);
    },
    // unmark(){
    //      this.$emit("unmark", this.id);
    // }
  },
  emits: ["open-news", "read-news", "unmark"],
  components: {
    AppButton,
    AppNewsList
  }
};
</script>