<script>
export default {
    data() {
        return {
            imageList: [
                {
                    source: '/src/assets/img/hero/hero-1.jpg',
                    content: 'Fate / Stay Night: Unlimited Blade Works',
                    link: '#'
                },
                {
                    source: '/src/assets/img/hero/hero-1.jpg',
                    content: 'Fate / Stay Night: Unlimited Blade Works',
                    link: '#'
                },
                {
                    source: '/src/assets/img/hero/hero-1.jpg',
                    content: 'Fate / Stay Night: Unlimited Blade Works',
                    link: '#'
                }
            ],
            activeIndex: 0
        }
    },
    methods: {
        prev() {
            return activeIndex > 0 ? this.imageList.length - 1 : this.imageList.length - 1;
        },
        next() {
            return aactiveIndex < this.imageList.length - 1 ? this.activeIndex + 1 : 0;
        }
    },
}
</script>

<template>
    <div class="slideshow-container">
        <button @click="next()">Next</button>
        <button @click="prev()">Prev</button>
        <div class="mySlides" v-for="(item, index) in imageList" :key="index">
            <div class="numbertext">{{ index + 1 }} / {{ imageList.length }}</div>
            <img :src="item.source" :alt="index">
            <div class="textContent">{{ item.content }}</div>
            <a :href="item.link" class="watch-link"><span>Watch Now</span></a>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box
}

.slideshow-container {
    position: relative;
    margin: auto;
}

.mySlides {
    position: absolute;
    animation-name: fade;
    animation-duration: 1.5s;
}

.numbertext {
    position: absolute;
    font-weight: 400;
    font-size: large;
    color: white;
    margin: 0.5em;
}

.textContent {
    position: absolute;
    font-weight: 400;
    font-size: xx-large;
    color: white;
    top: 10em;
    left: 0.5em;
}

.watch-link {
    position: absolute;
    color: white;
    font-size: larger;
    bottom: 8em;
    left: 1em;
}

.watch-link :hover {
    color: blue;
}
</style>