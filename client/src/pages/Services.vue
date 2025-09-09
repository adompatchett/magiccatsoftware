<template>
  <section class="services container">
    <h1 class="services__title">Our Services</h1>
    <p class="services__subtitle muted">
      From modern apps to AI integrations — here’s what we can do for you.
    </p>

    <div class="services__grid">
      <div class="card service-card">
        <h2>Web Apps</h2>
        <p class="muted">
          Vue/React frontends, Node/Express/NestJS backends, Mongo/Postgres.
        </p>
      </div>

      <div class="card service-card">
        <h2>Mobile</h2>
        <p class="muted">
          Cross-platform mobile with Capacitor/Flutter/React Native.
        </p>
      </div>

      <div class="card service-card">
        <h2>Consulting</h2>
        <p class="muted">
          Architecture reviews, performance audits, AI integrations.
        </p>
      </div>

      <div class="card service-card">
        <h2>AI Web Integration</h2>
        <p class="muted">
          Looking to add AI to your website? We specialize in AI integration —
          chatbots, GPT connectors, and other tools to enrich your customer
          experience.
        </p>
      </div>

      <div class="card service-card">
        <h2>Google API</h2>
        <p class="muted">
          We harness Google APIs to enhance admin dashboards and end-user
          experiences. Everything Google has to offer, seamlessly integrated.
        </p>
      </div>

      <div class="card service-card">
        <h2>Vue 3.0</h2>
        <p class="muted">
          We love building responsive Vue 3 apps. Whether traditional web apps
          or cutting-edge JavaScript solutions, we’ve got you covered.
        </p>
      </div>
    </div>

    <div class="card service-card single">
      <h2>I Just Need a Website</h2>
      <p class="muted">
        We offer affordable services for simple requests like WordPress or Wix /
        Webflow sites. Quick, beautiful, and tailored to your needs.
      </p>
    </div>
  </section>
</template>

<style scoped>
.services {
  margin: 60px auto;
  text-align: center;
}
.services__title {
  font-size: 36px;
  margin-bottom: 8px;
}
.services__subtitle {
  margin-bottom: 32px;
  font-size: 16px;
  color: var(--muted);
}
.services__grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-bottom: 40px;
}
.service-card {
  padding: 24px;
  text-align: left;
  transition: transform 0.2s, box-shadow 0.2s;
}
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
.service-card h2 {
  font-size: 20px;
  margin-bottom: 8px;
  color: var(--text);
}
.service-card p {
  font-size: 15px;
  line-height: 1.6;
}
.service-card.single {
  max-width: 720px;
  margin: 0 auto;
}
</style>
