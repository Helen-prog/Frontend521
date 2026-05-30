<template>
  <div v-if="email">
    <h2>{{ email.theme }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, velit error
      doloremque reprehenderit quia enim deserunt. Eveniet id esse omnis labore.
      Autem odio quasi officia perferendis et debitis voluptates ab?
    </p>
    <button class="btn base" @click="$router.push('/mail')">Закрыть</button>
  </div>
  <div v-else>
    <h4>Выберите письмо</h4>
  </div>
</template>

<script>
export default {
  inject: ["emails"],
  props: ["mailId"],
  computed: {
    email() {
      return this.emails.find((e) => e.id == this.mailId);
    },
  },
};
</script>