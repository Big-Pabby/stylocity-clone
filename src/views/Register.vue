<template>
<div class="register">
    <h1><i class="far fa-user"></i> Register For Your Account</h1>
    <div class="register-details">
        <h2>Register</h2>
        <hr>
        <form @submit.prevent="onRegister()">
            <div class="form">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Your First Name" v-model="firstName" required>
            </div>
            <div class="form">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Your Last Name" v-model="lastName" required>
            </div>
            <div class="form">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" v-model="email" required>
            </div>
            <div class="form">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Your Password" v-model="password" required>
            </div>
            <div class="form">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm Your Password" v-model="confirmPassword" required>
                <p v-show="errorMsg">Password is Incorrect!!!</p>
            </div>

            <input type="submit" value="Register" class="btn btn-black">
        </form>
        <h3>Login to your account? <router-link :to="{ name: 'Login'}">Login</router-link> </h3>
    </div>
</div>
</template>

<script>
import swal from 'sweetalert'

export default {
    data() {
        return {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            errorMsg: false
        }
    },

    methods: {
        async onRegister() {
            if(this.password === this.confirmPassword) {
                const res = await fetch('http://localhost:3001/register', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        password: this.password
                    })
                })
                const user = res.json();
                if(user) {
                    swal("Your registration was a sucesss!!", "Login to your account", "successs")
                    .then(value => {
                    window.location.href = "/login"
                    });
                }

            } else {
                this.errorMsg = true
               setTimeout(() => {
                   this.errorMsg = false
               }, 5000)
               
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.register {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f4f4f4;
    padding: 30px;

    h1 {
        margin-top: 30px;
        color: #000;
        text-align: center;
    }

    .register-details {
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
                border: 1px solid #000;
                outline: none;
                padding: 10px 5px;
                background: #f4f4f4;
            }

            p {
                color: red;
                margin-bottom: 0;
            }
        }
    }
}

@media (max-width: 960px) {
    .register {
        .register-details {
            width: 80%;
        }
    }
}
</style>