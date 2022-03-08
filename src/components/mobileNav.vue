<template>
  <div class="mobilenav">
      <v-btn outlined icon @click.stop="drawer = !drawer"><i class="fas fa-bars fa-1x"></i></v-btn>
        <v-navigation-drawer
        v-model="drawer"
        absolute
        left
        temporary
        >
            <logo class="logo" /> 
            <v-list
                nav
                dense
            >        
                <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
                >
                <v-list-item>
                    <v-list-item-title>
                      <router-link class="link active" :to="{ name: 'Home'}">Home</router-link>
                    </v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>
                        <router-link class="link" to="#" >Shop</router-link>
                    </v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>
                        <router-link class="link" :to="{ name: 'About'}" >About Us</router-link>
                    </v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>
                        <router-link class="link" :to="{ name: 'Contact'}" >Contact us</router-link>
                    </v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>
                        <router-link class="link" :to="{ name: 'Login'}" >My Account</router-link>
                    </v-list-item-title>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
  </div>
</template>

<script>
import logo from '../components/logo.vue'

  export default {
  components: { logo },
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style lang="scss" scoped>
.logo {
  width: 130px;
  margin: 20px auto;
}
</style>