<template>
  <div class="home">
    <Carousel />
    <div class="offers">
      <div class="offer">
        <i class="fas fa-tshirt fa-2x"></i>
        <div class="content">
          <h3>Styling As Personal</h3>
          <p>We make sure you walk in for the fashion and stay in for the style</p>
        </div>
      </div>
      <div class="offer">
        <i class="fas fa-wallet fa-2x"></i>
        <div class="content">
          <h3>Customer Centricity</h3>
          <p>Customer focused leadership</p>
        </div>
      </div>
      <div class="offer">
        <i class="fas fa-rocket fa-2x"></i>
        <div class="content">
          <h3>Long Term Evolution</h3>
          <p>Feedback drives continous improvement</p>
        </div>
      </div>
    </div>

    <v-divider />

    <div class="showcase">
      <div class="container">
        <div class="showcase-content">
          <img src="@/assets/images/stylocity1.jpg" alt="">
          <h2>THE JACKET YOU NEED</h2>
          <p>This must-have jacket features two large pockets, tailored cuffs at the wrists, and has two variants each, for the male and female</p>
          <a href="#" class="btn">Explore More</a>
        </div>

        <div class="showcase-content">
          <img src="@/assets/images/stylocity2.jpg" alt="">
          <h2>THAT FLARE DISPLAY</h2>
          <p>The flare T-shirt lineup sports the brand name boldly and brightly across the front.</p>
          <a href="#" class="btn"> See More Detail</a>
        </div>
      </div>
    </div>

    <StoreSlide/>

    <Progress class="progress" />

  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Progress from '../components/Progress.vue'
import StoreSlide from '../components/storeSlide.vue'

  export default {
    name: 'Home',

    components: {
        Carousel,
        StoreSlide,
        Progress,
    },
}
        
</script>

<style lang="scss" scoped>
.home {

  .offers {
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .offer {
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        margin: 0 25px;
      }

    }
  }

  hr {
      margin-bottom: 15px;
    }

  .showcase {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .container {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #e0e0e0;
      padding: 50px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      img {
        width: 400px;
      }

      .showcase-content {
        text-align: center;

        h2 {
          margin: 15px 0;
        }
        
        p {
          line-height: 1.7;
          margin-bottom: 30px;
        }
      }
    }
  }

  .progress {
    margin-bottom: 25px;
  }
}

@media(max-width: 960px) {
  .home {

    .offers {
      flex-direction: column;

      .offer {
        flex-direction: column;
        margin-bottom: 30px;

        i {
          margin: 10px 0;
        }

        .content {
          text-align: center;
        }
      }

    }
    .showcase {

      .container {
        flex-direction: column;

        img {
          width: 300px;
        }

        .showcase-content {
          margin-bottom: 50px;
          text-align: center;

          img {
            width: 250px;
          }
        }
      }
    }
  }
}
</style>
