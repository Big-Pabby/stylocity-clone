<template>
  <div class="cart-page">
    <div v-if="allCart.length === 0" class="empty">
      <h3>Your Cart Is Empty...</h3>
      <p>Go to shop to add to cart</p><router-link class=" btn btn-black link" :to="{ name: 'Shop'}" >Shop</router-link>
    </div>
    <div v-else class="flex-container" >
      <div class="grid container">
        <div v-for="cart in allCart" :key="cart.id" class="cartItem">
          <div class="flex">
            <img :src="require(`../assets/images/${cart.image}`)" width="100px" alt="loading" />
            <div class="topic">
              <h2>{{ cart.name }}</h2>
              <p>#{{ cart.price }}</p>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="footer">
            <div class="icons">
              <i class="far fa-heart"></i>
              <span @click="removeCart(cart)"><i class="fas fa-trash"></i>REMOVE</span>
            </div>
            <div class="quantity">
              <i v-on:click="increaseQuantity(cart)" class="fas fa-plus"></i>
              <p>{{ cart.quantity }}</p>
              <i v-on:click="decreaseQuantity(cart)" class="fas fa-minus"></i>
            </div>
          </div>
        </div>
      </div>
      <button class=" btn btn-black">Total Price: #{{ cartTotalPrice }}</button>
      <button @click="checkout" class="btn btn-green">PR0CEED TO CHECKOUT</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import swal from 'sweetalert'
export default {
  name: 'Cart',
  computed: mapGetters(['allCart', 'cartTotalPrice',]),
  methods: {
    ...mapActions(['removeCart',]),

    increaseQuantity (cart) {
      if( cart.quantity >= 1) {
        return cart.quantity++
      }
    },

    decreaseQuantity (cart) {
      if( cart.quantity > 1) {
        return cart.quantity--
      }
    },
    checkout() {
      swal("Good Job!", "Your order is placed sucessfully!", "sucesss")
        .then(value => {
          window.location.href = "/shop-items"
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-page {
  background: #f4f4f4;
  min-height: 85vh;


  .empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85vh;
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;

      .cartItem {
        background: #fff;
        margin: 10px 0;
        width: 500px;

        .flex {
          display: flex;
          gap: 20px;
          padding: 20px 30px;

          img {
            border-radius: 5px;
          }

          .topic {
            p {
              color: #44ba9f;
              margin-top: 10px;
              font-weight: bold;
            }
          }
        }

        .footer {
          display: flex;
          justify-content: space-between;

          .icons {
            padding: 20px 30px;
            color: #44ba9f;

            i {
              padding: 0 5px;
              cursor: pointer;
              font-weight: bold;
            }

            span {
              cursor: pointer;
            }
          }

          .quantity {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 30px;
            color: #44ba9f;

            i {
              background: #fff;
              padding: 10px;
              border-radius: 5px;
              box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.19);
              cursor: pointer;
              transition: .5s ease-out;

              &:hover {
                background: #f4f4f4;
              }
            }

            p {
              margin: 0 15px;
              border-bottom: 2px solid #44ba9f;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 760px) {
  .cart-page {

    .flex-container {
      .container {
        width: 90%;
      }

      .grid {
        grid-template-columns: 1fr;

        .cartItem {
          width: 100%;
        }
      }
    }
  }
}
</style>