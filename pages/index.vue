<template>
  <v-row justify="center" align="center">
    <!-- <v-data-iterator></v-data-iterator> -->
    <v-col cols="12" class="text-center">
      <h1>Rick and Morty APP</h1>
    </v-col>
    <v-col v-for="(item, i) in data" :key="i" cols="6" md="4">
      <v-card :loading="loading" class="mx-auto my-12" max-width="300">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-img height="250" :src="item.image"></v-img>
        <v-card-title>{{ item.name }}</v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <v-list-item>Status: {{ item.status }}</v-list-item>
          <v-list-item>Specie: {{ item.species }}</v-list-item>
          <v-list-item>Origin: {{ item.origin.name }}</v-list-item>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapState(['data']),
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapActions(['getData']),
  },
}
</script>
<style scoped></style>
