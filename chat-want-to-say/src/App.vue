<template>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />

  <!-- ════════════════  HOME VIEW  ════════════════ -->
  <main v-if="view === 'home'" class="collection-home">

    <!-- ── Starfield ── -->
    <div class="starfield" aria-hidden="true">
      <span v-for="n in 60" :key="'s'+n" class="star"></span>
    </div>

    <!-- ── Aurora blobs ── -->
    <div class="aurora aurora--1" aria-hidden="true"></div>
    <div class="aurora aurora--2" aria-hidden="true"></div>
    <div class="aurora aurora--3" aria-hidden="true"></div>

    <!-- ── Floating hearts ── -->
    <div class="floating-particles" aria-hidden="true">
      <span v-for="n in 18" :key="'h'+n" class="heart-particle">💖</span>
    </div>

    <!-- ── Hero ── -->
    <section class="home-hero">
      <p class="home-kicker">✨ A birthday website crafted with love for ✨</p>
      <h1 class="hero-title">
        <span class="gradient-text">Avani</span>
      </h1>
      <div class="hero-heart-deco" aria-hidden="true">💕</div>
      <p class="home-copy">
        I made this little place so your birthday wish feels special, warm,
        and truly unforgettable — just like you. 🌹
      </p>
      <div class="hero-sparkle-row" aria-hidden="true">
        <span>⋆</span><span>｡°</span><span>✩</span><span>⋆</span><span>｡˚</span><span>✧</span>
      </div>
    </section>

    <!-- ── Option cards ── -->
    <section class="option-grid">
      <a class="option-card" href="birthday-cake/index.html">
        <div class="card-glow" aria-hidden="true"></div>
        <img src="/collection-assets/birth-want-to-say.jpg" alt="Birthday cake preview" />
        <div class="option-content">
          <p>🎂 Birthday Cake</p>
          <h2>Start With The Cake Surprise</h2>
          <span>Open the lights, music, balloons, cake, and birthday message.</span>
        </div>
        <div class="card-shine" aria-hidden="true"></div>
      </a>

      <button class="option-card" type="button" @click="view = 'chat'">
        <div class="card-glow" aria-hidden="true"></div>
        <img src="/collection-assets/chat-want-to-say.jpg" alt="Birthday chat preview" />
        <div class="option-content">
          <p>💌 Birthday Chat</p>
          <h2>Open The Message Chat</h2>
          <span>Read the heartfelt birthday wishes and the special letter.</span>
        </div>
        <div class="card-shine" aria-hidden="true"></div>
      </button>
    </section>

    <footer class="home-footer" aria-hidden="true">
      <span>Made with 💗 just for you</span>
    </footer>
  </main>

  <!-- ════════════════  CHAT VIEW  ════════════════ -->
  <div v-else class="chat-view">
    <button class="back-home" type="button" @click="view = 'home'">← Back</button>
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
/* ═══════════════════════════════════════════════════
   ROOT & RESET
   ═══════════════════════════════════════════════════ */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #060412;
  color: #f0e6f6;
  overflow-x: hidden;
}

/* ═══════════════════════════════════════════════════
   HOME – LAYOUT
   ═══════════════════════════════════════════════════ */
.collection-home {
  position: relative;
  min-height: 100vh;
  padding: 60px 24px 40px;
  background: linear-gradient(160deg, #060412 0%, #0d0a24 35%, #150d2e 60%, #0a0618 100%);
  overflow: hidden;
}

/* ═══════════════════════════════════════════════════
   AURORA BLOBS
   ═══════════════════════════════════════════════════ */
.aurora {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.35;
  pointer-events: none;
  animation: auroraFloat 12s ease-in-out infinite alternate;
}

.aurora--1 {
  width: 500px;
  height: 500px;
  top: -10%;
  left: -8%;
  background: radial-gradient(circle, #c084fc 0%, transparent 70%);
  animation-duration: 14s;
}

.aurora--2 {
  width: 450px;
  height: 450px;
  top: 30%;
  right: -12%;
  background: radial-gradient(circle, #ff6b8a 0%, transparent 70%);
  animation-duration: 10s;
  animation-delay: -3s;
}

.aurora--3 {
  width: 380px;
  height: 380px;
  bottom: -5%;
  left: 30%;
  background: radial-gradient(circle, #ffd700 0%, transparent 70%);
  opacity: 0.18;
  animation-duration: 16s;
  animation-delay: -7s;
}

@keyframes auroraFloat {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(40px, -30px) scale(1.15);
  }
}

/* ═══════════════════════════════════════════════════
   STARFIELD
   ═══════════════════════════════════════════════════ */
.starfield {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  animation: twinkle var(--dur, 4s) ease-in-out var(--delay, 0s) infinite;
}

/* Randomised star positions via nth-child (no JS needed) */
.star:nth-child(1)  { top:  5%; left: 12%; --dur: 3.2s; --delay: 0.0s; }
.star:nth-child(2)  { top: 11%; left: 45%; --dur: 4.5s; --delay: 0.5s; }
.star:nth-child(3)  { top:  8%; left: 78%; --dur: 3.8s; --delay: 1.1s; }
.star:nth-child(4)  { top: 18%; left: 23%; --dur: 5.0s; --delay: 0.3s; }
.star:nth-child(5)  { top: 22%; left: 56%; --dur: 3.5s; --delay: 1.8s; }
.star:nth-child(6)  { top: 15%; left: 90%; --dur: 4.2s; --delay: 0.7s; }
.star:nth-child(7)  { top: 30%; left:  5%; --dur: 3.9s; --delay: 2.1s; }
.star:nth-child(8)  { top: 28%; left: 34%; --dur: 4.8s; --delay: 0.2s; }
.star:nth-child(9)  { top: 35%; left: 67%; --dur: 3.3s; --delay: 1.4s; }
.star:nth-child(10) { top: 32%; left: 82%; --dur: 5.2s; --delay: 0.9s; }
.star:nth-child(11) { top: 42%; left: 15%; --dur: 4.1s; --delay: 1.6s; }
.star:nth-child(12) { top: 40%; left: 50%; --dur: 3.7s; --delay: 0.4s; }
.star:nth-child(13) { top: 45%; left: 72%; --dur: 4.6s; --delay: 2.3s; }
.star:nth-child(14) { top: 48%; left: 93%; --dur: 3.4s; --delay: 0.8s; }
.star:nth-child(15) { top: 55%; left:  8%; --dur: 5.1s; --delay: 1.2s; }
.star:nth-child(16) { top: 53%; left: 38%; --dur: 3.6s; --delay: 0.6s; }
.star:nth-child(17) { top: 58%; left: 60%; --dur: 4.3s; --delay: 1.9s; }
.star:nth-child(18) { top: 52%; left: 85%; --dur: 4.9s; --delay: 0.1s; }
.star:nth-child(19) { top: 65%; left: 20%; --dur: 3.1s; --delay: 2.5s; }
.star:nth-child(20) { top: 62%; left: 47%; --dur: 4.4s; --delay: 0.3s; }
.star:nth-child(21) { top: 68%; left: 75%; --dur: 3.8s; --delay: 1.0s; }
.star:nth-child(22) { top: 70%; left: 95%; --dur: 5.3s; --delay: 1.7s; }
.star:nth-child(23) { top: 75%; left: 10%; --dur: 4.0s; --delay: 0.5s; }
.star:nth-child(24) { top: 78%; left: 42%; --dur: 3.5s; --delay: 2.0s; }
.star:nth-child(25) { top: 72%; left: 58%; --dur: 4.7s; --delay: 0.8s; }
.star:nth-child(26) { top: 82%; left: 30%; --dur: 3.3s; --delay: 1.3s; }
.star:nth-child(27) { top: 85%; left: 65%; --dur: 5.0s; --delay: 0.2s; }
.star:nth-child(28) { top: 80%; left: 88%; --dur: 4.2s; --delay: 1.5s; }
.star:nth-child(29) { top: 88%; left: 18%; --dur: 3.9s; --delay: 0.7s; }
.star:nth-child(30) { top: 90%; left: 52%; --dur: 4.5s; --delay: 2.2s; }
.star:nth-child(31) { top: 93%; left: 78%; --dur: 3.6s; --delay: 0.4s; }
.star:nth-child(32) { top:  3%; left: 33%; --dur: 4.8s; --delay: 1.8s; }
.star:nth-child(33) { top: 14%; left: 62%; --dur: 3.2s; --delay: 0.9s; }
.star:nth-child(34) { top: 25%; left: 88%; --dur: 5.1s; --delay: 1.1s; }
.star:nth-child(35) { top: 37%; left:  3%; --dur: 4.3s; --delay: 0.6s; }
.star:nth-child(36) { top: 44%; left: 28%; --dur: 3.7s; --delay: 2.4s; }
.star:nth-child(37) { top: 50%; left: 55%; --dur: 4.6s; --delay: 0.1s; }
.star:nth-child(38) { top: 57%; left: 80%; --dur: 3.4s; --delay: 1.6s; }
.star:nth-child(39) { top: 63%; left:  2%; --dur: 5.2s; --delay: 0.3s; }
.star:nth-child(40) { top: 73%; left: 40%; --dur: 3.9s; --delay: 1.9s; }
.star:nth-child(41) { top: 77%; left: 92%; --dur: 4.1s; --delay: 0.5s; }
.star:nth-child(42) { top: 83%; left: 13%; --dur: 3.5s; --delay: 2.1s; }
.star:nth-child(43) { top: 92%; left: 35%; --dur: 4.4s; --delay: 0.8s; }
.star:nth-child(44) { top: 95%; left: 70%; --dur: 3.1s; --delay: 1.4s; }
.star:nth-child(45) { top:  7%; left: 97%; --dur: 4.9s; --delay: 0.2s; }
.star:nth-child(46) { top: 20%; left: 10%; --dur: 3.8s; --delay: 1.7s; }
.star:nth-child(47) { top: 34%; left: 48%; --dur: 4.0s; --delay: 0.4s; }
.star:nth-child(48) { top: 47%; left: 17%; --dur: 5.3s; --delay: 2.0s; }
.star:nth-child(49) { top: 60%; left: 43%; --dur: 3.3s; --delay: 0.9s; }
.star:nth-child(50) { top: 87%; left: 57%; --dur: 4.7s; --delay: 1.2s; }
.star:nth-child(51) { top:  2%; left: 55%; --dur: 3.6s; --delay: 0.6s; }
.star:nth-child(52) { top: 16%; left: 75%; --dur: 4.2s; --delay: 1.3s; }
.star:nth-child(53) { top: 38%; left: 92%; --dur: 3.4s; --delay: 0.7s; }
.star:nth-child(54) { top: 54%; left: 25%; --dur: 4.8s; --delay: 2.3s; }
.star:nth-child(55) { top: 66%; left: 62%; --dur: 3.9s; --delay: 0.1s; }
.star:nth-child(56) { top: 74%; left:  7%; --dur: 5.0s; --delay: 1.5s; }
.star:nth-child(57) { top: 84%; left: 48%; --dur: 3.2s; --delay: 0.3s; }
.star:nth-child(58) { top: 91%; left: 85%; --dur: 4.5s; --delay: 1.8s; }
.star:nth-child(59) { top: 96%; left: 22%; --dur: 3.7s; --delay: 0.5s; }
.star:nth-child(60) { top: 10%; left:  1%; --dur: 4.1s; --delay: 2.2s; }

/* Some stars bigger */
.star:nth-child(3n) {
  width: 3px;
  height: 3px;
  box-shadow: 0 0 6px 1px rgba(192, 132, 252, 0.6);
}

.star:nth-child(7n) {
  width: 2.5px;
  height: 2.5px;
  box-shadow: 0 0 5px 1px rgba(255, 107, 138, 0.5);
}

@keyframes twinkle {
  0%, 100% { opacity: 0; }
  50%      { opacity: 0.9; }
}

/* ═══════════════════════════════════════════════════
   FLOATING HEART PARTICLES
   ═══════════════════════════════════════════════════ */
.floating-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.heart-particle {
  position: absolute;
  bottom: -40px;
  font-size: 16px;
  opacity: 0;
  animation: floatUp var(--float-dur, 12s) ease-in var(--float-delay, 0s) infinite;
}

.heart-particle:nth-child(1)  { left:  5%; --float-dur: 11s; --float-delay: 0.0s; font-size: 14px; }
.heart-particle:nth-child(2)  { left: 12%; --float-dur: 14s; --float-delay: 2.0s; font-size: 18px; }
.heart-particle:nth-child(3)  { left: 20%; --float-dur: 10s; --float-delay: 4.5s; font-size: 12px; }
.heart-particle:nth-child(4)  { left: 28%; --float-dur: 13s; --float-delay: 1.0s; font-size: 16px; }
.heart-particle:nth-child(5)  { left: 35%; --float-dur: 15s; --float-delay: 5.5s; font-size: 20px; }
.heart-particle:nth-child(6)  { left: 42%; --float-dur: 11s; --float-delay: 3.0s; font-size: 13px; }
.heart-particle:nth-child(7)  { left: 50%; --float-dur: 12s; --float-delay: 6.0s; font-size: 17px; }
.heart-particle:nth-child(8)  { left: 58%; --float-dur: 14s; --float-delay: 0.5s; font-size: 15px; }
.heart-particle:nth-child(9)  { left: 65%; --float-dur: 10s; --float-delay: 3.5s; font-size: 19px; }
.heart-particle:nth-child(10) { left: 72%; --float-dur: 13s; --float-delay: 7.0s; font-size: 14px; }
.heart-particle:nth-child(11) { left: 78%; --float-dur: 15s; --float-delay: 1.5s; font-size: 16px; }
.heart-particle:nth-child(12) { left: 84%; --float-dur: 11s; --float-delay: 4.0s; font-size: 12px; }
.heart-particle:nth-child(13) { left: 90%; --float-dur: 12s; --float-delay: 6.5s; font-size: 18px; }
.heart-particle:nth-child(14) { left: 95%; --float-dur: 14s; --float-delay: 2.5s; font-size: 13px; }
.heart-particle:nth-child(15) { left:  8%; --float-dur: 13s; --float-delay: 8.0s; font-size: 15px; }
.heart-particle:nth-child(16) { left: 33%; --float-dur: 10s; --float-delay: 5.0s; font-size: 11px; }
.heart-particle:nth-child(17) { left: 55%; --float-dur: 15s; --float-delay: 3.2s; font-size: 17px; }
.heart-particle:nth-child(18) { left: 80%; --float-dur: 11s; --float-delay: 7.5s; font-size: 14px; }

@keyframes floatUp {
  0% {
    transform: translateY(0) rotate(0deg) scale(0.6);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-110vh) rotate(360deg) scale(1);
    opacity: 0;
  }
}

/* ═══════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════ */
.home-hero {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto 50px;
  text-align: center;
  animation: fadeUp 1.2s ease-out both;
}

.home-kicker {
  margin: 0 0 14px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #c084fc;
  animation: fadeUp 1s ease-out 0.2s both;
}

/* ── Animated gradient title ── */
.hero-title {
  margin: 0;
  font-family: 'Dancing Script', cursive;
  font-size: clamp(60px, 12vw, 120px);
  font-weight: 700;
  line-height: 1;
  animation: fadeUp 1s ease-out 0.4s both;
}

.gradient-text {
  background: linear-gradient(
    135deg,
    #ff6b8a 0%,
    #ffd700 25%,
    #c084fc 50%,
    #ff6b8a 75%,
    #ffd700 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4s ease-in-out infinite;
}

@keyframes shimmer {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-heart-deco {
  font-size: 32px;
  margin: 12px 0;
  animation: pulse 2.5s ease-in-out infinite, fadeUp 1s ease-out 0.6s both;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50%      { transform: scale(1.25); opacity: 1; }
}

.home-copy {
  max-width: 580px;
  margin: 16px auto 0;
  font-size: 17px;
  font-weight: 300;
  line-height: 1.7;
  color: rgba(240, 230, 246, 0.85);
  animation: fadeUp 1s ease-out 0.8s both;
}

.hero-sparkle-row {
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 12px;
  font-size: 18px;
  color: #ffd700;
  opacity: 0.6;
  animation: fadeUp 1s ease-out 1s both;
}

.hero-sparkle-row span {
  animation: twinkle 3s ease-in-out infinite;
}

.hero-sparkle-row span:nth-child(2) { animation-delay: 0.5s; }
.hero-sparkle-row span:nth-child(3) { animation-delay: 1.0s; }
.hero-sparkle-row span:nth-child(4) { animation-delay: 1.5s; }
.hero-sparkle-row span:nth-child(5) { animation-delay: 2.0s; }
.hero-sparkle-row span:nth-child(6) { animation-delay: 2.5s; }

/* ═══════════════════════════════════════════════════
   OPTION GRID & CARDS  (Glass-morphism)
   ═══════════════════════════════════════════════════ */
.option-grid {
  position: relative;
  z-index: 2;
  width: min(980px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.option-card {
  position: relative;
  min-height: 460px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 0;
  cursor: pointer;
  display: block;
  text-align: left;
  color: white;
  font-family: 'Poppins', sans-serif;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  text-decoration: none;
  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
              box-shadow 0.45s cubic-bezier(0.23, 1, 0.32, 1),
              border-color 0.45s ease;
  animation: fadeUp 1s ease-out 1.2s both;
}

.option-card:nth-child(2) {
  animation-delay: 1.4s;
}

/* Card glow ring */
.card-glow {
  position: absolute;
  inset: -2px;
  border-radius: 22px;
  background: linear-gradient(135deg, #ff6b8a, #c084fc, #ffd700, #ff6b8a);
  background-size: 300% 300%;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.5s ease;
  animation: shimmer 4s ease-in-out infinite;
}

/* Card shine sweep */
.card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.06) 45%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.06) 55%,
    transparent 100%
  );
  transition: left 0.7s ease;
  pointer-events: none;
  z-index: 5;
}

.option-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(255, 107, 138, 0.3);
  box-shadow:
    0 40px 90px rgba(0, 0, 0, 0.6),
    0 0 40px rgba(255, 107, 138, 0.15),
    0 0 80px rgba(192, 132, 252, 0.1);
}

.option-card:hover .card-glow {
  opacity: 0.5;
}

.option-card:hover .card-shine {
  left: 150%;
}

.option-card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5) saturate(1.2);
  transform: scale(1.01);
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
              filter 0.6s ease;
}

.option-card:hover img {
  transform: scale(1.08);
  filter: brightness(0.38) saturate(1.3);
}

.option-content {
  position: absolute;
  inset: auto 0 0;
  padding: 28px;
  background: linear-gradient(transparent, rgba(6, 4, 18, 0.85));
  z-index: 3;
}

.option-content p {
  margin: 0 0 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ffd700;
}

.option-content h2 {
  margin: 0;
  font-family: 'Dancing Script', cursive;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.15;
  color: #fff;
}

.option-content span {
  display: block;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
}

/* ═══════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════ */
.home-footer {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 50px;
  font-size: 13px;
  font-weight: 300;
  color: rgba(192, 132, 252, 0.5);
  letter-spacing: 0.08em;
  animation: fadeUp 1s ease-out 1.8s both;
}

/* ═══════════════════════════════════════════════════
   CHAT VIEW
   ═══════════════════════════════════════════════════ */
.chat-view {
  min-height: 100vh;
  position: relative;
  background: #060412;
}

.back-home {
  position: fixed;
  top: 14px;
  left: 14px;
  z-index: 3000;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 10px 22px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #f0e6f6;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.35s ease;
  letter-spacing: 0.04em;
}

.back-home:hover {
  background: rgba(255, 107, 138, 0.18);
  border-color: rgba(255, 107, 138, 0.35);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(255, 107, 138, 0.15);
  transform: translateX(-2px);
}

/* ═══════════════════════════════════════════════════
   ANIMATIONS
   ═══════════════════════════════════════════════════ */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ═══════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .collection-home {
    padding: 40px 16px 30px;
  }

  .hero-title {
    font-size: clamp(50px, 14vw, 80px);
  }

  .home-copy {
    font-size: 15px;
  }

  .option-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .option-card {
    min-height: 320px;
  }

  .option-content h2 {
    font-size: 24px;
  }

  .aurora--1 {
    width: 300px;
    height: 300px;
  }

  .aurora--2 {
    width: 250px;
    height: 250px;
  }

  .aurora--3 {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 420px) {
  .collection-home {
    padding: 30px 12px 24px;
  }

  .hero-title {
    font-size: clamp(42px, 16vw, 65px);
  }

  .home-kicker {
    font-size: 11px;
  }

  .home-copy {
    font-size: 14px;
  }

  .option-card {
    min-height: 280px;
    border-radius: 16px;
  }

  .option-content {
    padding: 20px;
  }

  .option-content h2 {
    font-size: 22px;
  }

  .back-home {
    padding: 8px 16px;
    font-size: 12px;
  }
}
</style>
