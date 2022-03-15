<template>
  <div class="cart-page">
    <div v-for="cart in allCart" :key="cart.id" class="cartItem">
      <div class="flex">
        <img :src="require(`../assets/images/${cart.image}`)" width="100px" alt="loading" />
        <div class="topic">
          <h2>{{ cart.name }}</h2>
          <p>{{ cart.price }}</p>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="footer">
        <div class="icons">
          <i class="far fa-heart"></i>
          <span><i class="fas fa-trash"></i>REMOVE</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Cart',
  computed: mapGetters(['allCart']),

}
</script>

<style lang="scss" scoped>
.cart-page {
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;

  .cartItem {
    background: #fff;
    margin: 10px;
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
  }
}

@media (max-width: 760px) {
  .cart-page {
    flex-direction: column;

    .cartItem {
      width: 100%;
    }
  }
}
</style>