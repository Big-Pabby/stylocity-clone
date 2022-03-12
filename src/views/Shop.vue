<template>
  <div class="container shop">
      <div v-for="Products in LTEProducts" :key="Products.id" class="card">
          <img :src="require(`../assets/images/${Products.image}`)" alt="loading" />
          <p>{{ Products.type }}</p>
          <h2>{{ Products.name }}</h2>
          <p>{{ Products.price }}</p>
          <router-link class="btn btn-black link" to="#"><i class="fas fa-shopping-cart"></i> ADD TO CART</router-link>
      </div>
  </div>
</template>

<script>
import { LteProducts } from '../ShoppingProducts'

export default {
    name: 'Shop',
    data() {
        return {
            LTEProducts: LteProducts,
        }
    },

    methods: {
         
    }

    
}
</script>

<style lang="scss" scoped>
.shop {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 50px;

    .card {
        width: 300px;
        text-align: center;
        margin: 20px 0;

        img {
            width: 100%;
            height: 350px;

            &:hover {
                opacity: 0.7;
            }
        }

        p {
            color: #919090;
            font-weight: bold;
            font-size: 18px;
        }
        
        h2 {
            margin: 10px 0;
        }

        .btn {
            border-radius: 0;
            padding: 15px 50px;
            font-weight: 100;
        }
    }
}

@media(max-width: 960px) {
    .shop {
        grid-template-columns: 1fr 1fr;

        .card {
            width: 150px;

            img {
                height: 200px;
            }

            p {
                font-size: 14px;
            }

            h2 {
                font-size: 18px;
            }

            .btn {
                padding: 15px 10px;
                font-size: 14px;
            }
        }
    }
}
</style>