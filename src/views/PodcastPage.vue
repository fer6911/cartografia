<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <div class="message-container">
              <div class="message-content">
                Escucha nuestros podcasts para aprender más sobre la conservación ambiental en Cali.
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <img :src="imageSrc" alt="Ríos de Cali" class="content-image" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://mx.radiodisney.com/podcasts/lo-que-haces-cuenta_4d2a60da-73a1-4dd7-b71e-6a375476b7d4/episode/e2d1c1bd-cdff-4dba-a2da-aae4e6ee1ca5&ved=2ahUKEwjq0LCkhMSOAxVESTABHZGtD00QFnoECDoQAQ&usg=AOvVaw33UXvSRMeZgNdquz4A3V4z"
              target="_blank" rel="noopener noreferrer" class="podcast-button">
              <span class="play-icon">▶</span>
              ESCUCHAR PODCAST
            </a>
            <a href="https://es.wikipedia.org/wiki/R%C3%ADo_Cali "></a>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="message-container">
              <div class="message-content">

                <div class="rios-container">
                  <!-- Título principal -->
                  <v-toolbar-title class="cartografia-title-rios">
                    Informacio territorial y contexto urbano – útiles para entender la cartografía de Cali
                  </v-toolbar-title>

                  <!-- Lista de ríos con diseño mejorado -->
                  <div class="rios-list">
                    <!-- Río destacado -->
                    <div class="rio-item featured">
                      <h2 class="rio-name">Podcast “Mapeando el Ordenamiento Territorial alrededor del Agua” (YouTube)
                      </h2>
                      <p class="rio-description">
                        Un episodio que vincula cartografía, catastro multipropósito y planificación del territorio, con
                        énfasis en el recurso hídrico y su ordenamiento. Aunque aplica en contexto nacional, es útil
                        para entender métodos cartográficos relacionados con gestión del agua urbana
                      </p>
                      <br />
                      <a href="https://youtu.be/h2UHTVsu8Mc" target="_blank" rel="noopener noreferrer"
                        class="podcast-button">
                        Mas informacion sobre Ordenamiento Territorial
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import podcastImage from '@/assets/images/podcts.png';
const imageSrc = ref(podcastImage);
</script>

<style scoped>
@import '@/assets/scss/shared-styles.scss';

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
</style>