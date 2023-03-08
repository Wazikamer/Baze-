<template>
  <div class="container">
    <h2 class="text-center mt-5">Куди ще поїде М.Тищенко?</h2>
    <QuestionCard
      v-if="arrAnswersCopmleted"
      :index="currentQuestionIndex"
      :question="questions[currentQuestionIndex]"
      @onAnswer="setAnswer"
    />
  </div>
</template>

<script>
import questions from "./Questions.json";
import QuestionCard from "./components/QuestionCard.vue";
import correctAnswers from "./Answers.json";
export default {
  name: "app",
  data() {
    return {
      questions,
      correctAnswers,
      answers: [],
    };
  },
  components: {
    QuestionCard,
  },
  methods: {
    setAnswer(id) {
      this.answers.push(id);
    },
  },
  computed: {
    currentQuestionIndex() {
      this.answers.length;
    },
    arrAnswersCopmleted() {
      return this.answers.length === this.questions.length;
    },
  },
};
</script>
