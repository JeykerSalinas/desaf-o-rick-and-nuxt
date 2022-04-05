<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <button @click="increment">Clickme</button>
    </v-col>
  </v-row>
</template>

<script>
import mapMutations from 'vuex'
export default {
  name: 'IndexPage',
  methods: {
    ...mapMutations(['increment']),
  },
}
</script>
<style scoped></style>
