<template>
    <div class="home" @mousemove="move">
        <section class="layers">
            <div class="layers__container">
                <div class="layer__item layer-1"></div>
                <div class="layer__item layer-2"></div>
                <div class="layer__item layer-3"></div>
                <div class="layer__item layer-4">
                    <div class="hero-content">
                        <div class="title">
                            ANGEL
                        </div>
                        <div class="description">I am a Messanger</div>
                        <button class="button-start" @click="login">Start</button>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "HomeView",
    methods: {
        move(event: MouseEvent) {
            Object.assign(document.documentElement, {
                style: `
        --move-x: ${(event.clientX - window.innerWidth / 2) * -0.005}deg;
        --move-y:  ${(event.clientY - window.innerHeight / 2) * -0.01}deg;
        `
            })
        },
        login() {
            router.replace({ path: '/login' })
        }
    }
})
</script>
<style>
.home {
    width: 100%;
    height: 100vh;
    --index: calc(1vw + 1vh);
    --transition: 1.5s cubic-bezier(0.05, 0.5, 0, 1);
    background-color: purple;
    color: #770666;
}

.layers {
    perspective: 1000px;
    overflow: hidden;
}

.layers__container {
    height: 100vh;
    transform-style: preserve-3d;
    transform: rotateX(var(--move-y)) rotateY(var(--move-x));
    will-change: transform;
    transition: transform var(--transition);
}

.layer__item {
    position: absolute;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.layer-1 {
    inset: -5vw;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/img/sky.jpg');
    transform: translateZ(-60px) scale(1.06);
}

.layer-2 {
    bottom: 0;
    right: 10vw;
    height: 450px;
    width: 450px;
    background-size: contain;
    background-image: url('../assets/img/fonar.png');
    transform: translateZ(80px);
}

.layer-4 {
    inset: -5vw;
    transform: translateZ(180px) scale(0.8);
}

.layer-3 {
    background-size: contain;
    top: 5vh;
    left: 15vw;
    height: 500px;
    width: 400px;
    background-image: url('../assets/img/angel.png');
    transform: translateZ(300px);
    pointer-events: none;
}

.hero-content {
    text-align: center;
}

.title {
    font-size: calc(var(--index)*2.8);
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 3px;
}

.description {
    font-size: calc(var(--index)*1.5);
}

.hero-content .button-start {
    font-size: calc(var(--index)*0.7);
    font-weight: 500;
    padding: calc(var(--index)*0.5) calc(var(--index)*1.3);
    border-radius: 10em;
    text-transform: uppercase;
    margin-top: calc(var(--index)*2.5);
    background-color: rgba(106, 28, 108, 0.614);
    outline: none;
    color: #fff;
    border: rgba(255, 255, 255, 0.521) 3px solid;
    cursor: pointer;
}</style>