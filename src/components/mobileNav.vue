<template>
  <div class="mobilenav">
      <v-btn outlined icon @click.stop="drawer = !drawer"><i class="fas fa-bars fa-1x "></i></v-btn>
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
                <router-link class="link active" :to="{ name: 'Home'}">
                  <v-list-item>
                      <v-list-item-title>
                        Home
                      </v-list-item-title>
                  </v-list-item>
                </router-link>

                <router-link class="link" to="#" >
                  <v-list-item>
                      <v-list-item-title>
                          Shop
                      </v-list-item-title>
                  </v-list-item>
                </router-link>

                <router-link class="link" :to="{ name: 'About'}" >
                  <v-list-item>
                      <v-list-item-title>
                        About Us
                      </v-list-item-title>
                  </v-list-item>
                </router-link>

                <router-link class="link" :to="{ name: 'Contact'}" >
                  <v-list-item>
                    
                      <v-list-item-title>
                        Contact us
                      </v-list-item-title>
                    
                  </v-list-item>
                </router-link>

                <router-link class="link" :to="{ name: 'Login'}" >
                  <v-list-item>
                      <v-list-item-title>
                        My Account
                      </v-list-item-title>
                  </v-list-item>
                </router-link>
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