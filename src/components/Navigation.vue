<template>
    <div class="header">
        <div class="navBar">
            <Logo />
            <nav>
                <ul>
                    <router-link class="link active" :to="{ name: 'Home'}">Home</router-link>
                    <router-link class="link" :to="{ name: 'Shop'}" >Shop</router-link>
                    <router-link class="link"  :to="{ name: 'About'}" >About Us</router-link>
                    <router-link class="link" :to="{ name: 'Contact'}" >Contact us</router-link>
                    <router-link class="link" :to="{ name: 'Login'}">My account</router-link>
                </ul>
            </nav>
            <div class="icons">
                <i @click="onClickSearch = !onClickSearch" class="fas fa-search"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
                <i class="fas fa-shopping-cart"></i>
            </div>

            <div class="mobile">
                <mobileNav />
            </div>
        </div>
        <div v-show="onClickSearch" class="searchBar">
            <input type="search" v-model="search" placeholder="Search Our Items">
        </div>
    </div>
</template>

<script>
import mobileNav from '../components/mobileNav.vue'
import Logo from './logo.vue'

export default {
    name: 'Navigation',
    components: { mobileNav, Logo },

    data() {
        return {
            onClickSearch: false,
            search: this.onSearchChange
        }
    },
    methods: {
        onSearchChange(event) {
            console.log(event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    .navBar {
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