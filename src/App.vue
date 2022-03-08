<template>
  <v-app class="app">
    <Navigation />
    <router-view/>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Navigation, Footer },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Dongle&family=Quicksand&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: 'Quicksand', sans-serif;

  .link {
    text-decoration: none;
    color: #000;
  }

  .error {
    text-align: center;
    font-size: 12px;
    color: red;
  }

  a {
    text-decoration: none;
  }

  .btn {
    border: 2px solid #000;
    padding: 10px 50px;
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
    transition: .5s ease-in;

    &:hover {
      opacity: 0.7;
      color: #4686e6;
    }
  }
  
  .btn-black {
    background: #000;
    color: #fff;
    margin: 20px 0;

    &:hover {
      color: #fff;
    }
  }
}
</style>
