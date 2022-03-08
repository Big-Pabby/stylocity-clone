<template>
    <div class="about">
        <div class="priority">
            <img src="@/assets/images/DAV_0097.jpg" alt="">
            <div class="priority-content">
                <h2>Quality Styling and Elegance as Priority Priority.</h2>
                <p>We are an outfit brand that is centered on meeting and serving consumer needs in terms of style.</p>
                <p>We believe fashion is a way to say who you are without having to speak.</p>
            </div>
        </div>

        <div class="architecture">
            <div class="heading">
                <h2>Ephipany Products - Architecture</h2>
            </div>

            <div class="journey">
                <div class="series left">
                    <div class="detail">
                        <h3>Launch</h3>
                        <p>The launch. We started with Vintage Shirts, and Plain Tees</p>
                    </div>
                    <div class="date">
                        <p>01 January 2021</p>
                    </div>
                </div>
                
                <div class="series right">
                    <div class="date">
                        <p>March 2021</p>
                    </div>

                    <div class="detail">
                        <h3>First Edition Series</h3>
                        <p>These beauties are the first merch venture of Stylocity. Plain tees were purchased in large quality, and customized by Stylocity</p>
                    </div>
                </div>

                <div class="series left">
                    <div class="detail">
                        <h3>Stockton Series</h3>
                        <p> - The era of 100% control over our products 
                            <li>T-Shirts</li> 
                            <li>Pocket Shirt</li>
                            <li>SweatShirt</li>
                            <li>Cargo Pants</li>
                        </p>
                    </div>
                    <div class="date">
                        <p>01 January 2021</p>
                    </div>
                </div>

            </div>

            <div class="heading">
                <img src="@/assets/images/stylocity3.jpg" alt="">
                <div class="form">
                    <h3>Subscribe to receive contents, and keep up to date on our latest products & offers!</h3>
                    <input type="email" placeholder="Email Address">
                    <button class="btn btn-black">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about {
    width: 80%;
    margin: auto;

    .priority {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;

        img {
            width: 350px;
            height: 500px;
        }

        .priority-content {
            width: 500px;

            h2 {
                margin-bottom: 20px;
            }
        }
    }

    .architecture {       
        margin: 50px 0;

        .heading {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;

            .form {
                display: flex;
                flex-direction: column;
                margin: 20px 0;

                input {
                    border: 2px solid #000;
                    margin: 10px 0;
                    padding: 15px;
                }
            }
        }

        img {
            margin-top: 30px;
            width: 550px;
            height: 350px;
        }

        .journey {
            display: flex;
            flex-direction: column;
            width: 70%;
            margin: auto;

            .series {
                display: flex;
                gap: 10px;
                margin: 20px 0;

                .detail {
                    border: 1px solid #000;
                    padding: 30px;
                    width: 400px;
                }
            }

            .right {
                justify-content: right;
            }
        }
    }
}

@media(max-width: 760px) {
    .about {

        .priority {
            flex-direction: column;

            .priority-content {
                width: 350px;
            }
        }

        .architecture {

            .journey {
                
                .series {
                    flex-direction: column;

                    .detail {
                        width: 100%;
                    }
                }

                .right {
                    flex-direction: column-reverse;
                }
            }

            .heading {
                img {
                    width: 300px;
                }
            }
        }
    }
}
</style>