<template>
    <div id="app">
        <buttonCounter/>
    </div>
</template>

<script>
import buttonCounter from './components/buttonCounter.vue'
export default {
  name: 'app',
  components: {
      buttonCounter
  }
};
</script>