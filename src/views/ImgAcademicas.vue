<template>
  <div class="images-container">
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <div class="message-container">
              <div class="message-content">
                Imagenes e Informacion Academicas
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="images-row">
          <v-col cols="3" class="image-col">
            <img :src="img11" class="content-image" />
            <img :src="img22" class="content-image" />
          </v-col>
          <v-col cols="3" class="image-col">
            <img :src="img33" class="content-image" />
            <img :src="img44" class="content-image" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="message-container">
              <div class="message-content">
                VIDEOS
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="images-row">
          <v-col cols="3" class="image-col">
            <video controls class="content-video" :poster="img11">
              <source :src="video11" type="video/mp4">
            </video>
          </v-col>
          <v-col cols="3" class="image-col">
            <video controls class="content-video" :poster="img22">
              <source :src="video22" type="video/mp4">
            </video>
          </v-col>
        </v-row>
        <v-row class="images-row">
          <v-col cols="3" class="image-col">
            <video controls class="content-video" :poster="img33">
              <source :src="video33" type="video/mp4">
            </video>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import img1 from '@/assets/images/img1.jpeg';
import img2 from '@/assets/images/img2.jpeg';
import img3 from '@/assets/images/img3.jpeg';
import img4 from '@/assets/images/img4.jpeg';
import video1 from '@/assets/videos/video1.mp4';
import video2 from '@/assets/videos/video2.mp4';
import video3 from '@/assets/videos/video3.mp4';

const img11 = ref(img1);
const img22 = ref(img2);
const img33 = ref(img3);
const img44 = ref(img4);
const video11 = ref(video1);
const video22 = ref(video2);
const video33 = ref(video3);
</script>

<style scoped>
@import '@/assets/scss/shared-styles.scss';

.images-container {
  width: 100%;
  padding: 16px;
}

.images-row {
  display: flex;
  justify-content: center;
  /* Centra horizontalmente las columnas */
  flex-wrap: wrap;
  margin: 0 auto;
  /* Centra el contenedor principal */
  max-width: 1200px;
  /* Ancho máximo opcional para mejor presentación */
}

.image-col {
  display: flex;
  flex-direction: column;
  /* Apila las imágenes verticalmente */
  align-items: center;
  /* Centra horizontalmente dentro de la columna */
  justify-content: center;
  /* Centra verticalmente */
  padding: 8px;
}

.content-image {
  width: 300px;
  /* Tamaño fijo para el ancho */
  height: 300px;
  /* Tamaño fijo para el alto */
  object-fit: cover;
  /* Mantiene la proporción de la imagen */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin: 5px;
  /* Espacio entre imágenes */
}


.content-image:hover {
  transform: scale(1.03);
}

.message-container {
  text-align: center;
  margin-bottom: 24px;
}

.message-content {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2E7D32;
  /* Verde oscuro para el título */
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .image-col {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

.content-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin: 5px;
  display: block;
  /* Asegura buen comportamiento del margen */
}

/* Ajustes responsive para mantener el centrado en móviles */
@media (max-width: 700px) {

  .content-image {
    width: 280px;
    /* Ligera reducción en móviles */
    height: 280px;
  }
}

@media (max-width: 600px) {
  .image-col {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .message-content {
    font-size: 1.2rem;
  }
}

.podcast-button {
  background-color: #c62828;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease;
  box-shadow: none;
  min-width: 250px;
  justify-content: center;
}

.play-icon {
  font-size: 1rem;
}

/*  video */
.content-video {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 auto;
}

.video-col {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}

/* Ajustes responsive */
@media (max-width: 960px) {

  .video-col,
  .image-col {
    width: 100%;
    max-width: 67%;
  }

  .content-video {
    max-width: 100%;
  }
}
</style>