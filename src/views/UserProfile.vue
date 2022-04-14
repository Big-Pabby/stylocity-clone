<template>
    <div class="user-profile container">
        <h1>Welcome Victor Adekunle, Thank you for being a part of epiphany community. We love you!!!</h1>
        <div class="edit-profile">
            <h2>Edit Your Profile</h2>
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
                <input type="submit" value="submit" class="btn btn-black">
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
    h1 {
        text-align: center;
    }
    .edit-profile {
        width: 70%;
        background: #44ba9f;
        margin: 10px auto;
        padding: 30px 0;
        border-radius: 10px;

        h2{
            text-align: center;
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
</style>