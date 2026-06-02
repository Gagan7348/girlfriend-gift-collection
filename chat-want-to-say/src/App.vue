<template>
  <main v-if="view === 'home'" class="collection-home">
    <section class="home-hero">
      <p class="home-kicker">A birthday website for</p>
      <h1>Avani</h1>
      <p class="home-copy">
        I made this little place so your birthday wish feels special, warm, and memorable.
      </p>
    </section>

    <section class="option-grid">
      <a class="option-card" href="/birthday-cake/index.html">
        <img src="/collection-assets/birth-want-to-say.jpg" alt="Birthday cake preview" />
        <div class="option-content">
          <p>Birthday Cake</p>
          <h2>Start With The Cake Surprise</h2>
          <span>Open the lights, music, balloons, cake, and birthday message.</span>
        </div>
      </a>

      <button class="option-card" type="button" @click="view = 'chat'">
        <img src="/collection-assets/chat-want-to-say.jpg" alt="Birthday chat preview" />
        <div class="option-content">
          <p>Birthday Chat</p>
          <h2>Open The Message Chat</h2>
          <span>Read the heartfelt birthday wishes and the special letter.</span>
        </div>
      </button>
    </section>
  </main>

  <div v-else class="chat-view">
    <button class="back-home" type="button" @click="view = 'home'">Back</button>
    <MobileDialog :src="src" :title="title" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MobileDialog from './pages/mobile-dialog/index.vue'

document.title = import.meta.env.VITE_APP_TITLE
const src = import.meta.env.VITE_CHAT_OPTIONS_PATH
const title = import.meta.env.VITE_APP_TITLE
const view = ref('home')
</script>

<style>
body {
  margin: 0;
}

.collection-home {
  min-height: 100vh;
  padding: 42px 20px;
  color: #2f2635;
  background:
    radial-gradient(circle at 15% 12%, rgba(255, 255, 255, 0.92), transparent 21%),
    linear-gradient(145deg, #ffd3e1 0%, #b7f3e9 46%, #ffe9a6 100%);
  box-sizing: border-box;
}

.home-hero {
  max-width: 760px;
  margin: 0 auto 34px;
  text-align: center;
}

.home-kicker {
  margin: 0 0 10px;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7d4b63;
}

.home-hero h1 {
  margin: 0;
  font-size: clamp(48px, 9vw, 86px);
  line-height: 0.95;
  color: #e6427a;
}

.home-copy {
  max-width: 560px;
  margin: 18px auto 0;
  font-size: 18px;
  line-height: 1.6;
}

.option-grid {
  width: min(980px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.option-card {
  position: relative;
  min-height: 440px;
  overflow: hidden;
  border: 0;
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  display: block;
  text-align: left;
  color: white;
  background: #2f2635;
  box-shadow: 0 26px 60px rgba(89, 48, 85, 0.28);
  text-decoration: none;
}

.option-card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.64) saturate(1.1);
  transform: scale(1.01);
  transition: transform 220ms ease, filter 220ms ease;
}

.option-card:hover img {
  transform: scale(1.06);
  filter: brightness(0.48) saturate(1.18);
}

.option-content {
  position: absolute;
  inset: auto 0 0;
  padding: 24px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.72));
}

.option-content p {
  margin: 0 0 9px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.78;
}

.option-content h2 {
  margin: 0;
  font-size: 27px;
  line-height: 1.12;
}

.option-content span {
  display: block;
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.45;
  opacity: 0.9;
}

.chat-view {
  min-height: 100vh;
  position: relative;
}

.back-home {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 3000;
  border: 0;
  border-radius: 999px;
  padding: 8px 14px;
  color: #55364a;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
  cursor: pointer;
}

@media (max-width: 720px) {
  .collection-home {
    padding: 32px 16px;
  }

  .option-grid {
    grid-template-columns: 1fr;
  }

  .option-card {
    min-height: 300px;
  }
}
</style>
