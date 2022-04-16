<template>
    <div class="profileMenu container">
        <div class="detail">
            <p>{{getUser.firstname}} {{getUser.lastname}}</p>
            <p>{{getUser.email}}</p>
        </div>
        <hr>
        <div class="profileicons">
            <router-link :to="{ name: 'UserProfile'}">
                <p><i class="far fa-user"></i> Profile</p>
            </router-link>
            <p @click="logOutUser()"><i class="fas fa-sign-out"></i>Logout</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
    name: 'profileMenu',
    props: ['logOutUser'],
    computed: {
        ...mapGetters(['getUser']),   
    },
    

}
</script>

<style lang="scss" scoped>
.profileMenu {
    position: absolute;
    background: #000000;
    z-index: 100;
    color: #fff;
    width: 300px;
    right: 50px;

    .detail {
        margin: 20px;
        p {
            margin-bottom: 3px;
        }
    }
    .profileicons {
        margin: 20px;

        p {
            margin-left: 10px;
            cursor: pointer;
            color: deepskyblue;

            i {
                margin-right: 10px;
            }
        }
    }
}
</style>