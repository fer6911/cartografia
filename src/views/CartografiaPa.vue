<template>
  <div>
    <v-card class="message-card">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <div class="message-container">
              <div class="message-content">
                Esta cartografía tratará del cuidado de los humedales de Cali y promoverá la importancia de árboles
                frutales para el mejoramiento de las zonas públicas o parques.
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <img :src="imageSrc" alt="Cartografia" class="content-image" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="message-container">
              <div class="message-content">
                La cartografía de Cali es el conjunto de mapas y planos que representan el territorio de la ciudad de
                manera precisa. Es elaborada y actualizada por el Departamento Administrativo de Planeación Municipal
                (DAPM) a través del sistema IDESC (Infraestructura de Datos Espaciales de Cali).

                <div class="rios-container">
                  <!-- Título principal -->
                  <v-toolbar-title class="cartografia-title-rios">
                    Cartografía oficial de Cali
                  </v-toolbar-title>

                  <!-- Lista de ríos con diseño mejorado -->
                  <div class="rios-list">
                    <!-- Río destacado -->
                    <div class="rio-item featured">
                      <h2 class="rio-name">Institutos y organismos responsables</h2>
                      <p class="rio-description">
                        El Departamento Administrativo de Planeación Municipal (DAPM), mediante su equipo de la
                        Infraestructura de Datos Espaciales (IDESC), es el encargado de producir, actualizar y difundir
                        la cartografía oficial de Santiago de Cali

                        Aunque el IGAC (Instituto Geográfico Agustín Codazzi) regula estándares, no gestiona
                        directamente el catastro urbano; esa función corresponde a la Subdirección de Catastro de Cali
                      </p>
                    </div>

                    <!-- Río estándar -->
                    <div class="rio-item">
                      <h2 class="rio-name"> Mapas disponibles y formatos</h2>
                      <p class="rio-description">
                        Desde junio de 2024, están disponibles los nuevos mapas político‑administrativos de Cali
                        (comunas, corregimientos, zonas geográficas y suelos) en formato PDF descargable desde la
                        Alcaldía.

                        Los mapas fueron actualizados regularmente desde 2016 y reflejan cambios en barrios,
                        nomenclatura vial, manzanas y datos estadísticos sin alterar los límites administrativos.

                        La Planoteca del DAPM alberga unos 35000 documentos cartográficos (planos históricos, mapas,
                        planchas digitales, etc.), accesibles tanto presencialmente como en línea
                      </p>
                    </div>

                    <!-- Río estándar -->
                    <div class="rio-item">
                      <h2 class="rio-name">Río Lili</h2>
                      <p class="rio-description">
                        La cartografía básica a escala 1:5000 del municipio fue elaborada en 2023 basada en imágenes
                        aéreas de alta resolución (sensor Phase One), cubriendo unos 39092 ha con planimetría y
                        altimetría precisas.

                        Cali migró del sistema de referencia local “origen San Antonio” al sistema nacional
                        MAGNA‑SIRGAS, compatible con GNSS (GPS/GNSS) y estándares nacionales, mejorando precisión y
                        homogeneidad en proyectos urbanos.

                        La IDESC aplica el estándar de exactitud posicional NSSDA para validar la calidad de los mapas
                        digitales
                      </p>
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
import cartografia from '@/assets/images/cartografiaCali.png';

const imageSrc = ref(cartografia);
</script>

<style scoped>
/* Estilos compartidos */
@import '@/assets/scss/shared-styles.scss';
</style>