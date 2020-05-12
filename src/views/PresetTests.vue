<template>
  <div class="preset-tests">
    <!-- Insert an image -->
    <PremadeTests msg="List of Preset Tests"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PremadeTests from '@/components/PremadeTests.vue'

export default {
  name: 'PresetTests',
  components: {
    PremadeTests
  }
}
</script>
