<template>
  <main class="app-background">
    <Cartografia />
  </main>
</template>

<script setup>
import Cartografia from './views/CartografiaPage.vue';
</script>

<style scoped>
.app-background {
  background-color: #ffffbfcd;
  /* Verde claro ecológico */
  min-height: 100vh;
  /* Cubre toda la altura de la pantalla */
  padding: 20px;
  /* Espaciado alrededor del contenido */
}

/* Opcional: ajustes para móviles */
@media (max-width: 768px) {
  .app-background {
    padding: 10px;
  }
}
</style>