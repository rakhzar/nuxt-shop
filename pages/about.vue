<script setup lang="ts">
usePageMeta('О магазине', 'Информация о магазине Shoppe, его миссии и ценностях');
</script>

<template>
  <div class="about-wrapper">
    <div class="about">
      <h1 class="about__heading">О нас</h1>
      <div class="about__subtitle">Мы делаем шикарные украшения для вас</div>
      <p class="about__text">
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus,
        tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.
      </p>
    </div>

    <div class="trends">
      <h2 class="trends__heading">Тренды в украшениях</h2>
      <img class="trends__banner" src="/assets/img/banner-trends.svg" alt="Тренды в украшениях" />
      <p class="trends__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
        facilisis consequat sed eu felis.
      </p>
      <ul class="trends__list">
        <li>consectetur adipiscing elit. Aliquam placerat 1</li>
        <li>Lorem ipsum dolor sit amet consectetur 2</li>
      </ul>
    </div>

    <div class="made">
      <h2 class="made__heading">Сделано с любовью</h2>
      <img class="made__banner" src="/assets//img/banner-made.svg" alt="Сделано с любовью" />
      <p class="made__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
        facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-wrapper {
  font-family: var(--font-family);
  color: var(--color-black);
  max-width: 670px;
  width: 100%;
  margin: 0 auto 266px;
  padding: 0 16px;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about__heading {
  margin: 97px auto 0;
}

.about__subtitle {
  margin-top: 24px;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
}

.about__text {
  margin-top: 46px;
}

/* content */

.trends {
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.trends__heading {
  font-size: 26px;
  line-height: 135%;
}

.trends__banner {
  margin-top: 24px;
  border-radius: 8px;
}

.trends__text {
  margin-top: 48px;
  font-size: 16px;
  line-height: 169%;
}

.trends__list {
  margin-top: 16px;
}

/* made */

.made {
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.made__heading {
  font-size: 26px;
  line-height: 135%;
}

.made__banner {
  margin-top: 23px;
  border-radius: 8px;
}

.made__text {
  margin-top: 48px;
  line-height: 169%;
}

.about__text {
  font-size: var(--text-body-size);
  line-height: var(--text-body-line);
}
.trends__text {
  font-size: var(--text-body-size);
  line-height: var(--text-body-line);
}
.made__text {
  font-size: var(--text-body-size);
  line-height: var(--text-body-line);
}
</style>
