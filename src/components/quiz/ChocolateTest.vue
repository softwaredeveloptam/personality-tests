<template>
  <div class="chocolatetest" >

	<div v-if="introStage">
    <h1>Chocolate Test</h1>
		<button @click="startQuiz">START!</button>
	</div>
	
			<div v-if="questionsStage">
				<question v-anime="{ translateY: 150, backgroundColor: '#FFF', duration: 3000, loop: false }"
					:question="questions[currentQuestion]"
					v-on:answer="handleAnswer"
					:questionNum="currentQuestion+1"
				>
				</question>

				<br>

					<div class="container" v-anime="{ translateY: 150, backgroundColor: '#FFF', duration: 3000, loop: false }">
						<div>Test Progress {{ percent }}%</div>
						<div class="status-bar">
							<div class="percentage" :style="{'width' : percentage + '%'}"></div>
						</div>
					</div>
			</div>
		
		<div v-if="resultsStage" v-anime="{ translateY: 150, backgroundColor: '#FFF', duration: 3000, loop: false }">
			<p><strong>You got {{correct}} right out of {{questions.length}} questions.<br><br>Your love for chocolate is {{perc}}% more than other flavors!</strong></p>
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
	computed: {
		percent() {
			return this.percentage.toFixed();
		}
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
			ChocolateData,
			percentage: 0,
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

		// var intval = setInterval(() => {
		// 	if(this.percentage < 100)
		// 		this.percentage += .1;
		// 	else
		// 		clearInterval(intval);
		// }, 10);

		// this.percentage = this.currentQuestion;
	},
  methods: {
    startQuiz() {
			this.introStage = false;
			this.questionsStage = true;
			// console.log(JSON.stringify(this.questions[this.currentQuestion]));
		},
		handleAnswer(e) {
      // console.log('answer event ftw',e);
			this.answers[this.currentQuestion]=e.answer;
			this.percentage = (((this.currentQuestion+1) / this.questions.length)*100);
      if((this.currentQuestion+1) === this.questions.length) {
        this.handleResults();
        this.questionsStage = false;
        this.resultsStage = true;
      } else {
        this.currentQuestion++;
      }
    },
    handleResults() {
      // console.log('handle results');
      this.questions.forEach((a, index) => {
        if(this.answers[index] === a.answer) this.correct++;        
      });
			this.perc = ((this.correct / this.questions.length)*100).toFixed(2);
      // console.log(this.correct+' '+this.perc);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.container {
		text-align: center;
		font-size: 2rem;
		color: #555;
	}

	.status-bar {
		margin: 0 auto;
		position: relative;
		width: 400px;
		height: 30px;
		border-radius: 15px;
		overflow: hidden;
		border-bottom: 1px solid #ddd;
		box-shadow: inset 0 1px 2px rgba($color: #000, $alpha: .4),
											0 -1px 1 px #fff, 0 1px 0 #fff;

		.percentage {
			position: relative;
			top: 1px; left: 1px; right: 1px;
			display: block;
			height: 100%;
			border-radius: 15px;
			background-color: #a5df41;
			background-size: 30px 30px;
			background-image: linear-gradient(135deg, rgba($color: #fff, $alpha: .15) 25%, transparent 25%
												transparent 50%, rgba($color: #fff, $alpha: .15) 50%,
												rgba($color: #fff, $alpha: .15) 75%, transparent 75%,
												transparent);
			animation: animate-stripes 3s linear infinite;
		}
	}

	@keyframes animate-stripes {
		0% { background-position: 0 0; }
		100% { background-position: 60px 0; }
	}

</style>
