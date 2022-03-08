<template>
<div class="login">
    <h1><i class="far fa-user"></i> Register For Your Account</h1>
    <div class="login-details">
        <h2>Register</h2>
        <hr>
        <form>
            <div class="form">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Your First Name" v-model="firstName">
            </div>
            <div class="form">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Your Last Name" v-model="lastName">
            </div>
            <div class="form">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" v-model="email">
            </div>
            <div class="form">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Your Password" v-model="password">
            </div>
            <div class="form">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm Your Password" v-model="confirmPassword">
            </div>
        </form>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
        <button @click.prevent="register" class="btn btn-green">Register</button>
        <h3>Login to your account? <router-link :to="{ name: 'Login'}">Login</router-link> </h3>
    </div>
</div>
</template>

<script>
import { supabase } from '../supabase/init'

export default {
    data() {
        return {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            error: null,
            errorMsg: "",
            router: useRouter(),
        }
    },

    methods: {
        register: async function() {
            if(this.email !== "" || this.password !== "" || this.lastName !== "" || this.firstName !== "") {
                if(this.password === this.confirmPassword) {
                    try {
                        const { error } = await supabase.auth.signUp({
                            email : this.email.value,
                            password: this.password.value,
                            firstName: this.firstName.value,
                            lastName: this.lastName.value
                        })
                        if(error) throw error
                        router.push({ name: "Login" })
                    }
                    catch(error) {
                        errorMsg.value = error.message
                        setTimeout(() => {
                            errorMsg.value = null;
                        }, 5000)
                    }
                    return
                }
                this.error = true;
                this.errorMsg.value = "Error: Passwords do not match";
                setTimeout(() => {
                    errorMsg.value = null;
                }, 5000) 
            }
            this.error = true;
            this.errorMsg.value = "Please fill out all the fields!";
            setTimeout(() => {
                errorMsg.value = null;
            }, 5000)
        },
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
    margin-bottom: 30px;

    h1 {
        margin-top: 30px;
        color: #000;
        text-align: center;
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

        .btn-green {
            background: #000;
            border: none;
            border-radius: 5px;
            color: #fff;
            margin: 20px 0;
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