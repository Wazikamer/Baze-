<template>
  <div class="card mb-5">
    <div class="card-body">
      {{ errors }}
      <div class="card-title">Запитання №{{ index + 1 }}</div>
      <p class="h3">{{ question?.title }}</p>
      <form method="post" @submit="handleSubmit">
        <div class="form-check" v-for="item in question?.items" :key="item.id">
          <label class="form-check-label">
            <input
              class="form-check-input"
              type="radio"
              :name="index"
              :value="item.id"
              v-model="selectedAnswerId"
            />
            {{ item.ans }}
          </label>
        </div>
        <button class="btn btn-primary mt-4" type="submit">Далі</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  props: ["question", "index"],

  data() {
    return {
      selectedAnswerId: null,
    };
  },
  created() {
    this.selectedAnswerId = this.question?.items[0].id;
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$emit("onAnswer", this.selectedAnswerId);
    },
  },
};
</script>
