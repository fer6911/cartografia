<template>
  <div>
    <v-card class="message-card">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <div class="message-container">
              <div class="message-content">
                Los ríos de Cali son fuente de vida y patrimonio natural de la ciudad.
                Su conservación es esencial para mantener el equilibrio ecológico.
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
          <v-col cols="12">
            <div class="message-container">
              <div class="message-content">
                Cali, ubicada en el Valle del Cauca, es atravesada por varios ríos que nacen en la cordillera Occidental
                y bajan hacia el río Cauca. Estos ríos son fundamentales para el ecosistema, el abastecimiento de agua y
                la biodiversidad de la región.

                <div class="rios-container">
                  <!-- Título principal -->
                  <v-toolbar-title class="cartografia-title-rios">
                    Los principales ríos que cruzan la ciudad son:
                  </v-toolbar-title>

                  <!-- Lista de ríos con diseño mejorado -->
                  <div class="rios-list">
                    <!-- Río destacado -->
                    <div class="rio-item featured">
                      <h2 class="rio-name">Río Cali</h2>
                      <p class="rio-description">
                        Es el río más representativo de la ciudad. Nace en el Parque Nacional Natural Farallones de Cali
                        y recorre zonas urbanas y turísticas. Es conocido por su belleza, pero ha sufrido contaminación
                        por actividades humanas.
                        <br />
                        <a href="https://es.wikipedia.org/wiki/R%C3%ADo_Cali" target="_blank" rel="noopener noreferrer"
                          class="podcast-button">
                          Mas informacion sobre el Rio Cali
                        </a>
                      </p>
                    </div>

                    <!-- Río estándar -->
                    <div class="rio-item">
                      <h2 class="rio-name">Río Meléndez</h2>
                      <p class="rio-description">
                        Ubicado en el sur de Cali, este río también nace en los Farallones y atraviesa sectores
                        residenciales y comerciales. Está expuesto a contaminación, pero es importante para el
                        equilibrio hídrico del sector.
                      </p>
                      <a href="https://www.cali.gov.co/aplicaciones/dagma/documentos/a_f_rio_melendez.pdf"
                        target="_blank" rel="noopener noreferrer" class="podcast-button">
                        Mas informacion sobre el Rio Melendes
                      </a>
                    </div>

                    <!-- Río estándar -->
                    <div class="rio-item">
                      <h2 class="rio-name">Río Lili</h2>
                      <p class="rio-description">
                        Este río cruza varios barrios del sur de la ciudad. Es vital para el drenaje pluvial y nace
                        también en la zona montañosa. Hoy en día presenta problemas de contaminación y reducción de
                        caudal.
                      </p>
                      <a href="https://es.wikipedia.org/wiki/Río_Cali" target="_blank" rel="noopener noreferrer"
                        class="podcast-button">
                        Mas informacion sobre el Rio Lili
                      </a>
                    </div>

                    <!-- Río destacado -->
                    <div class="rio-item featured">
                      <h2 class="rio-name">Río Pance</h2>
                      <p class="rio-description">
                        Es uno de los ríos más limpios de Cali. Se encuentra al sur y es muy visitado por familias para
                        actividades recreativas. Su agua fría y cristalina nace en los Farallones de Cali.
                      </p>
                      <a href="https://es.wikipedia.org/wiki/Río_Pance" target="_blank" rel="noopener noreferrer"
                        class="podcast-button">
                        Mas informacion sobre el Rio Pance
                      </a>
                    </div>

                    <!-- Río estándar -->
                    <div class="rio-item">
                      <h2 class="rio-name">Río Aguacatal</h2>
                      <p class="rio-description">
                        Este río nace en el occidente de Cali y fluye hacia el norte. Atraviesa zonas como Aguacatal y
                        Terrón Colorado. Es menos conocido, pero importante para la cuenca del río Cali.
                      </p>
                      <a href="https://prezi.com/p/ev3nxgdmuwqo/rio-aguacatal" target="_blank" rel="noopener noreferrer"
                        class="podcast-button">
                        Mas informacion sobre el Rio Aguacatal
                      </a>
                    </div>

                    <!-- Río estándar -->
                    <div class="rio-item">
                      <h2 class="rio-name">Río Cañaveralejo</h2>
                      <p class="rio-description">
                        Es un río urbano que cruza zonas densamente pobladas. Nace en la zona alta de los Farallones y
                        llega hasta el sector de Siloé. Está bastante contaminado por aguas residuales.
                      </p>
                      <a href="https://respetoculturahidrografiadecali.blogspot.com/2013/10/rio-canaveralejo-recuerdos-de-un-pasado.html"
                        target="_blank" rel="noopener noreferrer" class="podcast-button">
                        Mas informacion sobre el Río Cañaveralejo
                      </a>
                    </div>
                  </div>
                  <v-toolbar-title class="cartografia-title-rios">
                    En total, Cali cuenta con más de 7 ríos principales, sin contar las múltiples quebradas que
                    alimentan estos cuerpos de agua.
                  </v-toolbar-title>
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
import riosImage from '@/assets/images/rioscali.jpeg';

const imageSrc = ref(riosImage);
</script>

<style scoped>
/* Estilos compartidos */
@import '@/assets/scss/shared-styles.scss';
</style>