<template>
<div class="display">
  <h1>JUST IN</h1>
  <p>Walk in for the fashion, Stay in for the style</p>
  <v-carousel hide-delimiters height="600px" show-arrows-on-hover class="carousel">
    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
      <div class="display-item">
        <img src="@/assets/images/jacket.jpg" alt="">
        <h2>Crop Jackets</h2>
        <p>#9,100</p>
      </div>
    </v-carousel-item>

    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
      <div class="display-item">
        <img src="@/assets/images/crop.jpg" alt="">
        <h2>Short Sleeved Crop Hoodie</h2>
        <p>#8,100</p>
      </div>
    </v-carousel-item>

    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
      <div class="display-item">
        <img src="@/assets/images/crop2.jpg" alt="">
        <h2>Long Sleeved Crop Hoodie</h2>
        <p>#7,100</p>
      </div>
    </v-carousel-item>

    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
      <div class="display-item">
        <img src="@/assets/images/lte.jpg" alt="">
        <h2>LTE Top</h2>
        <p>#5,100</p>
      </div>
    </v-carousel-item>

    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
      <div class="display-item">
        <img src="@/assets/images/DAV_0275.jpg" alt="">
        <h2>SweatShirt</h2>
        <p>#9,100</p>
      </div>
    </v-carousel-item>

    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
      <div class="display-item">
        <img src="@/assets/images/DAV_0473.jpg" alt="">
        <h2>Flare Shirts</h2>
        <p>#5,000</p>
      </div>
    </v-carousel-item>

    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
      <div class="display-item">
        <img src="@/assets/images/short.jpg" alt="">
        <h2>LTE Short</h2>
        <p>#5,000</p>
      </div>
    </v-carousel-item>
  </v-carousel>
  <router-link :to="{ name: 'Shop'}" class="btn btn-black" >View Store <v-icon class="icon">mdi-arrow-right</v-icon></router-link>
</div>
</template>

<script>
import mobileNav from './mobileNav.vue'
export default {
  components: { mobileNav },
  
}
</script>

<style lang="scss" scoped>
.display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  img {
    width: 450px;
    height: 500px;
    border-radius: 15px;
  }

  h1 {
    border: 2px solid #000;
    border-radius: 50%;
    padding: 10px;
    margin: 15px 0;
  }

  p {
    margin-bottom: 50px;
  }

  .carousel {
    max-width: 600px;

    .display-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        margin: 15px 0;
      }

      p {
        font-size: 18px;
      }
    }
  }

  .icon {
    color: #fff;
  }

}

@media(max-width: 960px) {
  .display {
    img {
      width: 300px;
      height: 400px;
    }
    .carousel {
      height: 500px;
    }
  }
}

</style>