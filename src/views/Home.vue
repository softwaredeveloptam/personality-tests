<template>
  <div class="home">
    <!-- Insert an image -->
    <HomePage msg="Make or Take a Personality Test"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    HomePage
  }
}
</script>
