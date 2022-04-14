<template>
<div class="login">
    <h1><i class="far fa-user"></i> My Account</h1>
    <div class="login-details">
        <h2>Login</h2>
        <hr>
        <form @submit.prevent="onLogin()">
            <div class="form">
                <label for="email">Email address</label>
                <input class="inp" type="email" id="email" placeholder="Your email" v-model="email" required>
            </div>

            <div class="form">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Your password" v-model="password" required>
            </div>

            <input type="submit" value="Login" class="btn btn-black">
        </form>
        <p v-show="errorMsg">Invalid email or password!!!</p>
        <h3>Don't have an account? <router-link  :to="{ name: 'Register'}">Register</router-link> </h3>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import swal from 'sweetalert'

export default {
    data() {
        return {
            email: "",
            password: "",
            errorMsg: false,
        }
    },

    methods: {
        ...mapActions(['SucessfulLogin',]),

        onLogin() {
            fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            })
            .then( res => res.json())
            .then(userData => {
                if(userData !== 'error loggin in') {
                    this.SucessfulLogin(userData)
                    swal("Login Sucessful!!!", `Welcome ${userData.firstname} ${userData.lastname}`, "successs")
                    .then(value => {
                    this.$router.push({ path: '/home'}) 
                    });
                } else {
                    this.errorMsg = true;
                    setTimeout(() => {
                        this.errorMsg = false
                    }, 5000)
                }

            })
        }
    }

}
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f4f4f4;
    padding: 30px 0;

    h1 {
        color: #000;
    }

    .login-details {
        width: 500px;
        margin-top: 20px;
        border-radius: 5px;
        padding: 40px 30px;
        color: #000;
        background: #fff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        hr {
            margin: 15px 0;
        }

        .form {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;

            input {
                border: 0;
                border-bottom: 1px solid #000;
                outline: none;
                padding: 10px 5px;
                background: #f3f3f3;
            }

            input:focus {
                outline: none;
            }
        }
        p {
            color: red;
        }
    }
}

@media (max-width: 960px) {
    .login {
        .login-details {
            width: 80%;
        }
    }
}
</style>