<template>
  <footer>
      <div class="col">
        <h2>~Ephiphany</h2>
        <div class="social">
          <i class="fab fa-youtube fa-2x"></i>
          <i class="fab fa-twitter fa-2x"></i>
          <i class="fab fa-instagram fa-2x"></i>
          <i class="fab fa-facebook fa-2x"></i>
        </div>
      </div>

      <div class="col row">
        <router-link class="link active" :to="{ name: 'Home'}">Home</router-link>
        <router-link class="link" :to="{ name: 'About'}" >About Us</router-link>
        <router-link class="link" :to="{ name: 'Contact'}" >Contact us</router-link>
        <router-link class="link" :to="{ name: 'Login'}">My account</router-link>
      </div>

      <div class="col row">
        <p> &copy; 2022 All Rights Reserved </p>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
    background: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 70px 10px;
    color: #fff;

    .link {
      color: #fff;
      text-transform: uppercase;
      
      &:hover {
        color: #44ba9f;
      }
    }

    i {
      margin-right: 15px;

      &:hover {
        color: #44ba9f;
      }
    }

    .col {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
}

@media(max-width: 960px) {
  footer {
    flex-direction: column;

    .row {
      flex-direction: row;
      margin-top: 20px;
    }
  }
}
</style>