<template>


    <!-- Hero Section Begin -->
    <section class="hero">
        <div class="container">
            <div class="hero__slider owl-carousel owl-loaded">
                <div class="owl-stage-outer">
                    <div class="owl-stage"
                        style="transform: translate3d(-1380px, 0px, 0px); transition: all 0s ease 0s; width: 4830px;">
                        <template :key="i" v-for="(item, i) in ChangeStyleInfo">
                            <div class="owl-item animated owl-animated-in fadeIn active"
                                style="width: 690px; object-fit: fill;">
                                <div class="hero__items set-bg" data-setbg="img/hero/hero-1.jpg" :style="item.style">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="hero__text">
                                                <div class="label">{{ item.title }}</div>
                                                <h2>{{ item.name }}</h2>
                                                <p>{{ item.content }}</p>
                                                <a :href="item.watch"><span>Watch Now</span> <i
                                                        class="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <!-- <div class="owl-item animated owl-animated-in fadeIn active" style="width: 690px;">
                            <div class="hero__items set-bg" data-setbg="img/hero/hero-1.jpg"
                                style="background-image: url(&quot;img/hero/hero-1.jpg&quot;);">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="hero__text">
                                            <div class="label">Adventure</div>
                                            <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                            <p>After 30 days of travel across the world...</p>
                                            <a href="#"><span>Watch Now</span> <i class="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="owl-item" style="width: 690px;">
                            <div class="hero__items set-bg" data-setbg="img/hero/hero-1.jpg"
                                style="background-image: url(&quot;img/hero/hero-1.jpg&quot;);">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="hero__text">
                                            <div class="label">Adventure</div>
                                            <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                            <p>After 30 days of travel across the world...</p>
                                            <a href="#"><span>Watch Now</span> <i class="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="owl-item animated owl-animated-in fadeIn" style="width: 690px;">
                            <div class="hero__items set-bg" data-setbg="img/hero/hero-1.jpg"
                                style="background-image: url(&quot;img/hero/hero-1.jpg&quot;);">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="hero__text">
                                            <div class="label">Adventure</div>
                                            <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                            <p>After 30 days of travel across the world...</p>
                                            <a href="#"><span>Watch Now</span> <i class="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         -->
                    </div>
                </div>
                <div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><span
                            class="arrow_carrot-left"></span></button><button type="button" role="presentation"
                        class="owl-next"><span class="arrow_carrot-right"></span></button></div>
                <div class="owl-dots"><button role="button"
                        class="owl-dot active"><span></span></button><button role="button"
                        class="owl-dot"><span></span></button><button role="button"
                        class="owl-dot"><span></span></button></div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->
</template>
<script>
export default {
    data() {
        return {
            ChangeStyleInfo: [
                {
                    backgroud: "/img/hero/one_picese.jpg",
                    style: "",
                    title: "Adventure",
                    name: "One picese",
                    content: "After 30 days of travel across the world...",
                    watch: "#"
                },
                {
                    backgroud: "/img/hero/ChainsawMan.jpg",
                    style: "",
                    title: "Adventure",
                    name: "Chainsaw main",
                    content: "After 30 days of travel across the world...",
                    watch: "#"
                },
                {
                    backgroud: "/img/hero/kimetsu_no_yaiba.jpg",
                    style: "",
                    title: "Adventure",
                    name: "Demon slayer",
                    content: "After 30 days of travel across the world...",
                    watch: "#"
                }
            ]
        }
    },
    created() {
        let me = this;
        me.ChangeStyleInfo.forEach(item => {
            item.style = "background-image: url('" + item.backgroud + "')";
        })

        window.addEventListener("resize", me.myEventHandler);
    },
    
    methods: {
        myEventHandler(e) {
            let ratioWidth = e.target.innerWidth;
            console.log(ratioWidth);
        }
    },
    unmounted() {
        let me = this;
        window.removeEventListener("resize", me.myEventHandler);
    },
}
</script>
<style scoped>

</style>