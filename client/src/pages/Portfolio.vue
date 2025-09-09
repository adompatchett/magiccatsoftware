<template>
  <section class="portfolio-wrap">
    <div class="portfolio container">
      <h1 class="portfolio__title">Portfolio</h1>
      <p class="portfolio__subtitle">
        Some of the projects we’ve built and delivered.
      </p>

      <div class="portfolio__grid">
        <!-- Portfolio Item -->
        <a
          href="https://set-dec.com"
          target="_blank"
          rel="noopener"
          class="card portfolio-item"
        >
          <!-- Put your image in client/public/SetDecRunner.png -->
          <img
            src="/SetDecRunner.png"
            alt="Set Dec Runner"
            class="portfolio-item__img"
          />
          <div class="portfolio-item__content">
            <h2>Set Dec Runner</h2>
            <p>
              A production logistics tool for the film industry. Built with Vue 3,
              Node/Express, and MongoDB.
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Full-width white band behind the portfolio area */
.portfolio-wrap {
  width: 100%;
  background: #ffffff;        /* white background */
  color: #000000;             /* black text */
  padding: 40px 0;            /* top/bottom spacing */
}

/* Inner content stays centered */
.portfolio {
  text-align: center;
}

/* Headings/subtitle in black */
.portfolio__title {
  font-size: 36px;
  margin-bottom: 8px;
  color: #000;
}
.portfolio__subtitle {
  margin-bottom: 28px;
  font-size: 16px;
  color: #000;
  opacity: 0.8;
}

/* Responsive grid */
.portfolio__grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

/* Card */
.portfolio-item {
  text-align: left;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  background: #ffffff;              /* ensure white inside card too */
  border: 1px solid var(--border);
  border-radius: 12px;
}
.portfolio-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.1);
}

/* Smaller image */
.portfolio-item__img {
  display: block;
  width: 25%;
  height: 140px;                   /* smaller visual footprint */
  object-fit: cover;               /* crop nicely */
  border-bottom: 1px solid var(--border);
}

/* Content */
.portfolio-item__content {
  padding: 16px;
}
.portfolio-item__content h2 {
  font-size: 20px;
  margin-bottom: 6px;
  color: #000;
}
.portfolio-item__content p {
  font-size: 15px;
  line-height: 1.6;
  color: #000;
  opacity: 0.85;
}
</style>

