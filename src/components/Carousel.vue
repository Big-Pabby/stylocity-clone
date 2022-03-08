<template>
  <div class="carousel">
    <v-carousel prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right" height="100%" cycle hide-delimiter-background>
      <v-carousel-item>
            <img src="@/assets/images/DAV_0370.jpg" width="100%" height="" alt="">
      </v-carousel-item>

      <v-carousel-item>
            <img src="@/assets/images/DAV_0371.jpg" width="100%" height="" alt="">
      </v-carousel-item>

      <v-carousel-item>
            <img src="@/assets/images/DAV_0208.jpg" width="100%" height="" alt="">
      </v-carousel-item>

      <v-carousel-item>
            <img src="@/assets/images/DAV_0248.jpg" width="100%" height="" alt="">
      </v-carousel-item>

      <v-carousel-item>
            <img src="@/assets/images/DAV_0515.jpg" width="100%" height="" alt="">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: 0,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>