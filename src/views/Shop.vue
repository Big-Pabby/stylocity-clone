<template>
<div>
    <div v-if="allProducts.length === 0" class="msg">
          <h2>The product does not exists...</h2>
    </div>
    <div v-else class="container shop">
      <div v-for="Product in allProducts" :key="Product.id" class="card">
          <img :src="require(`../assets/images/${Product.image}`)" alt="loading" />
          <p>{{ Product.type }}</p>
          <h2>{{ Product.name }}</h2>
          <p>#{{ Product.price }}</p>
          <button v-on:click="addToCart(Product)" class="btn btn-black"><i class="fas fa-shopping-cart"></i> ADD TO CART</button>
      </div>
  </div>
</div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Shop',
    computed: mapGetters(['allProducts', 'search', 'filterProducts']),

    methods: {
        ...mapActions(["addToCart"]),
    } 

    
}
</script>

<style lang="scss" scoped>
.msg {
    height: 50vh;
    text-align: center;
    margin: auto;
}
.shop {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 50px;
    align-items: center;
    justify-content: center;

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