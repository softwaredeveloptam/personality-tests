<template>
  <div class="chocolatetest">

	<div v-if="introStage">
    <h1>Chocolate Test Section</h1>
		<button @click="startQuiz">START!</button>
	</div>

		<div v-if="questionsStage">
			<question 
        :question="questions[currentQuestion]"
        v-on:answer="handleAnswer"
        :questionNum="currentQuestion+1"
      ></question>
			<!-- Need to add a progress bar here as well -->
		</div>

		<div v-if="resultsStage">
			<p>You got {{correct}} right out of {{questions.length}} questions. Your percentage is {{perc}}%.</p>
		</div>
  </div>
</template>

<script>
import ChocolateData from '../../../data/chocolate.json'
import question from '../questionStructure/question.vue';

export default {
	name: 'ChocolateTest',
	components: {
		question
	},
  data() {
    return {
			introStage: true,
			questionsStage: false,
			resultsStage: false,	
			questions: [],
			currentQuestion: 0,
			answers: [],
			correct: 0,
			perc: null,
			ChocolateData
    }
	},
	created() {
		this.questions = ChocolateData.questions.map(question => {
			let newQuestion = {};
			newQuestion.text = question.text;
			newQuestion.type = question.type;
			newQuestion.answer = question.answer;
			if(question.answers) {
				newQuestion.answers = question.answers;
			}

			return newQuestion;
		})
	},
  methods: {
    startQuiz() {
			this.introStage = false;
			this.questionsStage = true;
			console.log(JSON.stringify(this.questions[this.currentQuestion]));
		},
		handleAnswer(e) {
      console.log('answer event ftw',e);
      this.answers[this.currentQuestion]=e.answer;
      if((this.currentQuestion+1) === this.questions.length) {
        this.handleResults();
        this.questionsStage = false;
        this.resultsStage = true;
      } else {
        this.currentQuestion++;
      }
    },
    handleResults() {
      console.log('handle results');
      this.questions.forEach((a, index) => {
        if(this.answers[index] === a.answer) this.correct++;        
      });
      this.perc = ((this.correct / this.questions.length)*100).toFixed(2);
      console.log(this.correct+' '+this.perc);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
