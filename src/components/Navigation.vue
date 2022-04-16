<template>
    <div class="header">
        <div class="navBar">
            <Logo />
            <nav>
                <ul>
                    <router-link class="link active" :to="{ name: 'Home'}">Home</router-link>
                    <router-link v-show="loggedOut" class="link" :to="{ name: 'Shop'}" >Store</router-link>
                    <router-link class="link"  :to="{ name: 'About'}" >About Us</router-link>
                    <router-link class="link" :to="{ name: 'Contact'}" >Contact us</router-link>
                    <router-link v-show="!loggedOut" class="link" :to="{ name: 'Login'}">My account</router-link>
                </ul>
            </nav>
            <div class="icons" v-show="loggedOut">
                <i @click="onClickSearch = !onClickSearch" class="fas fa-search"></i>
                <i class="far fa-heart"></i>    
                <i @click="showProfile = !showProfile" class="far fa-user"></i>
                <router-link class="link active" :to="{ name: 'Cart'}"><i class="fas fa-shopping-cart">
                    <span v-if="allCart.length != 0" v-show="cartItem">{{ allCart.length }}</span>
                    </i></router-link>
            </div>
            <div class="mobile">
                <mobileNav />
            </div>
        </div>
        
        <profileMenu v-show="showProfile" :logOutUser="logOutUser" />
        
        <div v-show="onClickSearch" class="searchBar">
            <input @change="searchChange"  placeholder="Search Our Items">
        </div>
    </div>
</template>

<script>
import mobileNav from '../components/mobileNav.vue'
import Logo from './logo.vue'
import profileMenu from './profileMenu.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Navigation',
    components: { mobileNav, Logo, profileMenu },
    computed: {
        ...mapGetters(['loggedOut', 'searchField', 'allCart']),   
    },

    data() {
        return {
            onClickSearch: false,
            search: '',
            cartItem: true,
            showProfile: false,
        }
    },
    methods: {
        ...mapActions(['searchChange', 'logOut']),

        logOutUser () {
            this.$store.dispatch('logOut').then(
                this.showProfile = false,
                this.$router.push({ path: '/login'})
            )
        },
        
    }
}
</script>

<style lang="scss" scoped>
.header {
    background: #fff;
    width: 100%;

    .navBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 10px auto;

        nav {
            ul {
                
                .link {
                    margin-left: 15px;
                    transition: all .5s ease-in;

                    &:hover {
                        border-bottom: 2px solid #44ba9f;
                        padding-bottom: 5px;
                        color: #44ba9f;
                    }
                }
            }
        }

        .icons {
            margin-right: 20px;


            i {
                width: 40px;
                transition: .5s ease-in;
                position: relative;

                &:hover {
                    color: #44ba9f;
                }
            }
            .setting {
                display: flex;
                flex-direction: column;
            }

            span {
                font-size: 10px;
                background: #44ba9f;
                color: #fff;
                padding: 4px;
                border-radius: 50%;
            }
        }
        
        .mobile {
            display: none;
        }
    }

    

    .searchBar {
        width: 500px;
        height: 50px;
        background: #f4f4f4;
        margin: 20px auto;

        input {
            width: 100%;
            height: 100%;
            padding: 10px;
            border: 0;
            text-align: center;

            &:focus {
                outline: none;
                border: 0;
                box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            }
        }
    }

}

@media(max-width: 960px) {
    .header {

        .navBar {
            flex-direction: row;

            nav {
                margin: 15px 0;
                display: none;
            }

            .icons {
                margin: 15px 0;
            }

            .mobile {
                display: block;
                margin-right: 15px;
            }
        }

        .searchBar {
            width: 100%;
        }
    }
}
</style>