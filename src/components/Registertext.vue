<template>
    <div class="register" v-show="!loggedOut">
        <img src="../assets/images/store.svg" width="300px" alt="">
        <p>View Our store by registering/logining in for your free account today!! </p>
        <router-link class="link btn btn-black" :to="{ name: 'Register'}">register now <v-icon class="icon">mdi-arrow-right</v-icon></router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters(['loggedOut',]),   
    },
}
</script>

<style lang="scss" scoped>
.register {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ccc;
    text-transform: uppercase;
    padding: 40px 0;
   

    p {
        font-size: 32px;
        text-align: center;
        width: 600px;
    }

    .btn-black {
        border-radius: 50px;

        .icon {
            color: #fff;
        }
    }
}

@media(max-width: 960px) {
    .register {
      flex-direction: column;

      img {
          width: 200px;
          margin-bottom: 20px;
      }

      p {
        width: 300px;
        font-size: 28px;
      }
    }
}
</style>