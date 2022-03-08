<template>
    <div class="text-center">
      <div>
        <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :value="value"
            color="teal"
        >
            {{ value }}%
        </v-progress-circular>
        <h3>ORDERS</h3>
      </div>

      <div>
        <v-progress-circular
            :rotate="-90"
            :size="100"
            :width="15"
            :value="value"
            color="primary"
        >
            {{ value }}%
        </v-progress-circular>
        <h3>SATISFACTION</h3>
      </div>

      <div>
        <v-progress-circular
            :rotate="90"
            :size="100"
            :width="15"
            :value="value"
            color="red"
        >
            {{ value }}%
        </v-progress-circular>
        <h3>PRODUCTS</h3>
      </div>

      <div>
         <v-progress-circular
            :rotate="180"
            :size="100"
            :width="15"
            :value="value"
            color="pink"
        >
            {{ value }}%
        </v-progress-circular>
        <h3>DELIVERY</h3>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        interval: {},
        value: 0,
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    },
  }
</script>

<style lang="scss" scoped>
.v-progress-circular {
  margin: 1rem;
}

.text-center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@media(max-width: 760px) {
  .text-center {
    flex-direction: column;
  }
}
</style>