<template>
    <div class="container">
        <h1 class="section-heading">About</h1>
        <div class="row">
            <div class="col-6">
                <p class="section-content"> {{ copy.about.intro }}</p>
                <br>
                <p class="section-content"> {{ copy.about.interests }}</p>
                <br>
                <p class="section-content"> {{ copy.about.techInterests }}</p>
            </div>
            <div class="col-6 section-image-container">
                <img src="../../public/img/chewychris.jpg" alt="">
            </div>
        </div> 
        <!-- <div class="about-img">
            <img src="https://lh3.googleusercontent.com/nEkc-AduTPA9VwhLObvUv02BAp0ln0WdiJMIrIL9EASifs2uSyVkpszFr8Xoy4JjdM4t2NVtNQQzBpk78F1pFS98QNc9qpCsb7hPQWlj8CpyUu-UpgG9sifz0MnxAHkQ63GeiefIQMz37UFYapRE_mNJtlP-3sILVU1LITbmUCL2rkIQvT68ff2x28lIqmqjmjPbIZCvz6BNYuJjtjIwZ6llYO6hlfcqN-sIsDqsCLPgCvA29nlCZ5rD8kPr66dQRx41OAKXwWWu6rvvjbzaDRIsynbSjyGW1AyjRhfQvyIfF-R02h4294DpUogKRDV9uOZtBPPWj82TXD6_FHuebDGUD2QbyaP_BSwK6lnmAd8n38jvPaynNCFXzMoN6PuvZe72_I4JPosd6Y7IXh4OWEI5wBob2dEXKGUj3qRfvLHR1hpIOK8XmPj_fQRmtzXnxG4TaWfPZ61-YCO2MwU3G-wAcln2858mIE4Ns7XAa8IW79eft8_cdMzvkW8xXxKQJne1VV94qbaIl85Ckgewcd-rOpEHiXml8tqzOSvDQofa-DY_mTD5WThg27YVm5vljWL_q8D7TW9wItYQhlMik63UadNQ3SqVTuniAKE5jt-1-sUIYr83QxcUM74h3-6MTU1DAUmhfJQ8Wm6z0WOI-UTJKSdjn8Nrhzcz6B9pvD-5JBQB0_ddAZo-MQeZl-yBs40LK2Z8aHnCvO2n83WHeoHElqFr1_4NcI7WKKUam0HQ1hFh=w332-h321-no" alt="">
        </div> -->
    </div>
</template>

<script>
import copy from '../copy.js'

export default {
    name: 'About',
    data() {
        return {
            copy
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: $section-container-padding;
    font-family: $main-font;
}
.section-heading {
    font-size: $section-heading-size;
    margin: $section-heading-margin;
}
.section-content {
    font-size: $section-content-size;
}
.section-heading, .section-content {
    color: $light;
}
.section-image-container {
    text-align: center;
    padding: 20px;
}
.section-image-container img {
    width: 60%;
    border-radius: 5px;
}
.about-img {
    text-align: center;
    margin-top: 150px;
}
.about-img img {
    width: 150px;
    border-radius: 5px;
}
</style>