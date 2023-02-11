<template>
  <section v-if="destination">
    <h1>{{destination.name}}</h1>
    <div class="destination-details">

      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{destination.description}}</p>
    </div>
  </section>
</template>

<script>
import sourceData from '../data.json'

export default {
  name: "DestinationShow",
  // data(){
  //   return {
  //     destination: null
  //   }
  // },
  // props: ['id'],
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id)
    },
    destination(){
      return sourceData.destinations.find(destination => destination.id === this.destinationId);
    }
  },
  // methods:{
  //   async initData(){
  //     const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`)
  //     this.destination = await response.json();
  //     console.log('run')
  //   }
  // },
  // async created() {
  //   console.log('beforeinitData')
  //
  //   await this.initData();
  //   await this.$watch(()=> this.$route.params.id ,this.initData)
  //   console.log('created')
  // }
}
</script>

<style scoped>

</style>