<template>
  <v-card class="main-container">
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-toolbar-title class="cartografia-title">
            CARTOGRAFIA
          </v-toolbar-title>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-row>
        <div class="filter message-card">
          <div class="item" @click="updateSelectedValue('social')">
            CARTOGRAFIA
          </div>
          <div class="item" @click="updateSelectedValue('rios')">
            RIOS DE CALI
          </div>
          <div class="item" @click="updateSelectedValue('humedales')">
            HUMEDALES DE CALI
          </div>
          <div class="item" @click="updateSelectedValue('podcast')">
            PODCAST
          </div>
          <div class="item" @click="updateSelectedValue('infimgAcademicas')">
            INFORMACION ACADEMICA
          </div>
          <div class="item" @click="updateSelectedValue('info')">
            INFORMACION
          </div>
        </div>
      </v-row>
      <v-divider class="mx-2" />
      <v-row justify="center" class="message-row">
        <v-col class="message-title">
          <v-card class="message-card">
            <v-card-text>
              <component :is="currentComponent" :key="selectedValue" />
            </v-card-text>
          </v-card>
        </v-col>
        <h1 class="message-title"></h1>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue';
import RiosCali from '@/views/RiosPage.vue';
import CartografiaPa from '@/views/CartografiaPa.vue';
import HumedalesPage from '@/views/HumedalesPage.vue';
import PodcastPage from '@/views/PodcastPage.vue';
import info from '@/views/InformacionImg.vue';
import infimgAcademicas from '@/views/ImgAcademicas.vue';


const selectedValue = ref('social');

const updateSelectedValue = (value) => {
  selectedValue.value = value;
};

const currentComponent = computed(() => {
  switch (selectedValue.value) {
    case 'rios': return RiosCali;
    case 'humedales': return HumedalesPage;
    case 'social': return CartografiaPa;
    case 'podcast': return PodcastPage;
    case 'info': return info;
    case 'infimgAcademicas': return infimgAcademicas;
    default: return RiosCali;
  }
});
</script>

<style lang="scss" scoped>
.message-card {
  background-color: rgba(0, 0, 0, 0.05); // Fondo ligeramente oscurecido
  margin-bottom: 12px;
}


.filter {
  width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-radius: 10px;
  overflow: hidden;

  .item {
    padding: 1rem 0.5rem;
    background-color: var(--background-card);
    text-align: center;
    cursor: pointer;

    &:hover {
      color: var(--text-orange);
    }
  }
}

//mensaje imagenes
.message-row {
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
}

.message-title {
  width: 100%;
  text-align: center;
  display: block;
  margin: 0 auto;
  font-size: 1.5rem;
  color: #010912;
  /* Mantiene la misma paleta de colores */
  padding: 16px 0;
  /* Efecto hover similar al de .filter .item */
  transition: color 0.3s ease;
  cursor: default;
  /* O pointer si quieres que sea clickeable */

  &:hover {
    color: var(--text-orange);
    /* Mantiene la consistencia con tu diseño */
  }
}

//moviles 
.cartografia-title {
  width: 100%;
  text-align: center;
  display: block;
  margin: 0 auto;
  color: #010912;
  padding: 16px 0;

  /* Tamaño para desktop */
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 1px;

  /* Media query para móviles */
  @media (max-width: 768px) {
    font-size: 2.2rem;
    /* Tamaño más adecuado para móviles */
    padding: 12px 0;
    /* Reducir padding */
    letter-spacing: 0.5px;

    /* Opcional: sombra de texto para mejor legibilidad */
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  /* Ajuste específico para iPhone 12 (375px) */
  @media (max-width: 375px) {
    font-size: 2rem;
    padding: 10px 0;
  }
}

/* Ajustes para el filtro en móviles */
.filter {

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    /* 2 columnas en móviles */

    .item {
      padding: 0.8rem 0.3rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
    /* 1 columna en pantallas muy pequeñas */
  }
}

/* Ajustes generales para móviles */
.message-card {
  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
}

.message-row {
  @media (max-width: 768px) {
    padding: 8px 0;
  }
}

/////////////////@at-root
/// 
// Variables SCSS con la paleta de colores
$primary-background: #F1F9F2;
$navbar-color: #2E7D32;
$button-color: #A5D6A7;
$text-color: #212121;
$hover-nav: #388E3C;
$hover-button: #81D4FA;
$dark-green: #1B5E20;

// Estilos generales
body {
  background-color: $primary-background;
  color: $text-color;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}

// Barra de navegación
nav {
  background-color: $navbar-color;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: $hover-nav;
    }
  }
}

// Botones
button {
  background-color: $button-color;
  border: none;
  color: $text-color;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: $hover-button;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
}

// Clases utilitarias
.primary-bg {
  background-color: $primary-background;
}

.navbar-bg {
  background-color: $navbar-color;
}

.button-bg {
  background-color: $button-color;
}

.text-dark {
  color: $text-color;
}

.hover-nav {
  &:hover {
    background-color: $hover-nav;
  }
}

.hover-button {
  &:hover {
    background-color: $hover-button;
  }
}

// Media queries para responsividad
@media (max-width: 768px) {
  nav {
    padding: 0.5rem;

    a {
      padding: 0.5rem;
      display: block;
      margin-bottom: 0.25rem;
    }
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}

// Estilos específicos para tu componente de menú
.filter {
  .item {
    background-color: $button-color;
    color: $text-color;

    &:hover {
      background-color: $hover-button;
    }
  }
}

.cartografia-title {
  color: $dark-green;
}

.message-card {
  background-color: lighten($primary-background, 2%);
  border: 1px solid darken($primary-background, 5%);
}

// Variables SCSS con la paleta de colores ecológicos
$primary-background: #F1F9F2; // Verde muy claro
$secondary-background: #E8F5E9; // Verde claro alternativo
$navbar-color: #2E7D32; // Verde bosque
$button-color: #A5D6A7; // Verde lima
$text-color: #212121; // Gris oscuro
$hover-nav: #388E3C; // Verde oscuro
$hover-button: #81D4FA; // Azul suave
$dark-green: #1B5E20; // Verde oscuro para títulos
$border-color: #C8E6C9; // Verde claro para bordes

.main-container {
  background-color: $primary-background;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.message-card {
  background-color: $secondary-background;
  margin-bottom: 12px;
  border: 1px solid $border-color;
  border-radius: 8px;
}


.message-row {
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
}

.message-title {
  width: 100%;
  text-align: center;
  display: block;
  margin: 0 auto;
  font-size: 1.5rem;
  color: $text-color;
  padding: 16px 0;
  transition: color 0.3s ease;
  cursor: default;
}

.cartografia-title {
  width: 100%;
  text-align: center;
  display: block;
  margin: 0 auto;
  color: $dark-green;
  padding: 16px 0;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.2rem;
    padding: 12px 0;
    letter-spacing: 0.5px;
  }

  @media (max-width: 375px) {
    font-size: 2rem;
    padding: 10px 0;
  }
}

/* Ajustes para móviles */
@media (max-width: 768px) {
  .filter {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);

    .item {
      padding: 0.8rem 0.3rem;
      font-size: 0.9rem;
    }
  }

  .message-card {
    margin-bottom: 8px;
  }

  .message-row {
    padding: 8px 0;
  }
}

@media (max-width: 375px) {
  .filter {
    grid-template-columns: 1fr;
  }
}

.v-divider {
  border-color: $border-color !important;
  margin: 16px 0;
}
</style>