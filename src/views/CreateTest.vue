<template>
  <div class="create-test">
    <!-- Insert an image -->
    <SampleTest msg="Create a Test"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SampleTest from '@/components/SampleTest.vue'

export default {
  name: 'CreateTest',
  components: {
    SampleTest
  }
}
</script>
