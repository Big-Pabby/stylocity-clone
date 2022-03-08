<template>
  <div class="header">
    <Logo />
    <nav>
        <ul>
            <router-link class="link active" :to="{ name: 'Home'}">Home</router-link>
            <router-link class="link" to="#" >Shop</router-link>
            <router-link class="link"  :to="{ name: 'About'}" >About Us</router-link>
            <router-link class="link" :to="{ name: 'Contact'}" >Contact us</router-link>
            <router-link class="link" :to="{ name: 'Login'}">My account</router-link>
        </ul>
    </nav>
    <div class="icons">
        <i class="fas fa-search"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
        <i class="fas fa-shopping-cart"></i>
    </div>

    <div class="mobile">
        <mobileNav />
    </div>
  </div>
</template>

<script>
import mobileNav from '../components/mobileNav.vue'
import Logo from './logo.vue'

export default {
    name: 'Navigation',
    components: { mobileNav, Logo },
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

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

            &:hover {
                color: #44ba9f;
            }
        }
    }

    .mobile {
        display: none;
    }
}

@media(max-width: 960px) {
    .header {
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
        }
    }
}
</style>