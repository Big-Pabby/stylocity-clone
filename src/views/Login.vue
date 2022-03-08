<template>
<div class="login">
    <h1><i class="far fa-user"></i> My Account</h1>
    <div class="login-details">
        <h2>Login</h2>
        <hr>
        <form>
            <div class="form">
                <label for="email">Email address</label>
                <input class="inp" type="email" id="email" placeholder="Your email" v-model="email">
            </div>
            <div class="form">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Your password" v-model="password">
            </div>
        </form>
        <button class="btn btn-green">Login</button>
        <h3>Don't have an account? <router-link  :to="{ name: 'Register'}">Register</router-link> </h3>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
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
    height: 85vh;
    background: #f4f4f4;

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
                background: #f3f3f3;
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