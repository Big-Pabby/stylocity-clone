<template>
    <div class="contact">
        <div class="showcase">
            <div class="image">
                <img src="@/assets/images/dav.jpg" alt="">
            </div>
            <div class="showcase-content">
                <h2>Established In 2021</h2>
                <p>An outfit brand that is centered on meeting and serving customers needs in terms of style</p>
                <h4>TRUSTED BY</h4>
            </div>
        </div>

        <div class="contact-info">
            <h2>Contact Information</h2>

            <div class="information">
                <div class="futa center">
                    <h3>FUTA</h3>
                    <p>South Gate, FUTA</p>
                    <p>Tel: +234 810 802 8583</p>
                    <p>E-mail: hello@stylocity.net</p>
                </div>

                <div class="oau center">
                    <h3>O.A.U</h3>
                    <p>Obafemi Awolowo University</p>
                    <p>Tel: +234 805 400 8858</p>
                    <p>E-mail: hello@stylocity.net</p>
                </div>
            </div>
        </div>

        <div class="img">
            <img src="@/assets/images/lte.jpg" width="400px" alt="">
        </div>

        <div class="contact-form">
            <h2>Fill Our Contact Form</h2>
            <form >
                <div class="col">
                    <label for="name">Your Name</label>
                    <input type="text" id="name">
                </div>

                <div class="col">
                    <label for="email">Your Email</label>
                    <input type="email" id="name">
                </div>

                <div class="col">
                    <label for="message"> Your message</label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                </div>
            </form>
            <button class="btn btn-black"> Submit</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact {
    width: 80%;
    margin: 20px auto;

    .showcase {
        display: flex;
        gap: 20px;
        align-items: center;

        .image {
            
            img {
                width: 550px;
                height: 450px;
            }
        }

        .showcase-content {
            h2 {
                font-size: 40px;
                margin-bottom: 30px;
            }

            p {
                font-size: 18px;
                margin-bottom: 30px;
            }
        }
    }

    .contact-info {
        margin-top: 70px;

        h2 {
            font-size: 40px;
            text-align: center;
        }

        .information {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: #fff;
            margin-top: 20px;

            .center {
                text-align: center;

                h3 {
                    margin-bottom: 10px;
                }
            }
        }
    }

    .img {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }

    .contact-form {

        margin: 30px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            text-align: center;
            font-size: 40px;
            border-bottom: 2px solid #000;
        }

        form {
            width: 70%;

            .col {
                display: flex;
                flex-direction: column;
                margin: 20px 0;

                input {
                    padding: 10px 10px;
                    background: #f3f3f3;
                }

                textarea {
                    background-color: #f3f3f3;
                    padding: 10px;
                }
            }

            
        }

        .btn-black {
            border-radius: 50px;
        }
    }
}

@media(max-width:960px) {
    .contact {

        .showcase {
            flex-direction: column;

            .image {
            
            img {
                width: 350px;
                height: 250px;
            }
        }
        }

        .contact-info {

            .information{
                flex-direction: column;
            }
        }

        .img {
            
            img {
                width: 300px;
            }
        }
    }
}
</style>