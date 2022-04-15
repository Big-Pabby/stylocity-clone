<template>
    <div class="user-profile container">
        <h3 class="text-heading">Welcome Victor Adekunle, Thank you for being a part of epiphany community. We love you!!!</h3>
        <div class="edit-profile">
            <img src="../assets/images/profile.svg" alt="">
            <h2>Your Profile</h2>
            <form >
                <div class="form">
                    <label for="firstName">First Name</label>
                    <input type="text" placeholder="Edit First Name">
                </div>
                <div class="form">
                    <label for="lastName">Last Name</label>
                    <input type="text" placeholder="Edit Last Name">
                </div>
                <div class="form">
                    <label for="email">Email</label>
                    <input type="email" placeholder="Edit Email">
                </div>
                <input type="submit" value="Change setting" class="btn btn-black">
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.user-profile {
    .text-heading {
        text-align: center;
        background: #000000;
        color: #fff;
        padding: 10px 20px;
        border-radius: 50px;
        margin-top: 30px;
    }
    .edit-profile {
        width: 70%;
        margin: 10px auto;
        padding: 30px 0;
        border-radius: 10px;

        h2{
            text-align: center;
            font-size: 30px;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .form {
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;

                label {
                    font-size: 18px;
                }

                input {
                    width: 400px;
                    border: 0;
                    border-bottom: 1px solid #000;
                    border-radius: 5px;
                    outline: none;
                    padding: 10px 5px;
                    background: #f3f3f3;
                }

                input:focus {
                    outline: none;
                }
            }
        }
    }
}

@media(max-width: 500px) {
    .edit-profile {
        img {
            width: 300px;
        }
    }
}
</style>