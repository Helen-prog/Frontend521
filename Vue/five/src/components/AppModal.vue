<template>
  <div class="model-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Заголовок модального окна</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde vitae
      sint voluptatem cum cupiditate ex est nisi explicabo inventore! Nesciunt
      adipisci minus consequatur atque nisi! Totam asperiores quod vero!
    </p>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

<style>
.modal {
  position: absolute;
  left: 30px;
  top: 50px;
  width: 300px;
  background: #fff;
  border: 1px solid;
  padding: 20px;
  z-index: 2;
}
.model-backdrop {
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  right: 100%;
  border: 100%;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>