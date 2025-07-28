<template>
  <div>
    <v-card class="message-card">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <div class="message-container">
              <div class="message-content">
                Los humedales de Cali son ecosistemas vitales que ayudan a regular el clima, almacenar agua y proteger
                la biodiversidad. Cuidarlos es responsabilidad de todos, ya que nos brindan aire limpio, controlan las
                inundaciones y son hogar de muchas especies de flora y fauna.
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <img :src="imageSrc" alt="Humedales de Cali" class="content-image" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="message-container">
              <div class="message-content">
                Según el DAGMA y otros informes recientes, en Cali hay entre 50 y 61 humedales urbanos registrados,
                aunque solo unos 7 cuentan con Plan de Manejo Ambiental (PMA)

                <div class="rios-container">
                  <!-- Título principal -->
                  <v-toolbar-title class="cartografia-title-rios">
                    Los humedales con PMA y más reconocidos son:
                  </v-toolbar-title>

                  <!-- Lista de ríos con diseño mejorado -->
                  <div class="rios-list">
                    <!-- Río destacado -->
                    <div class="rio-item featured">
                      <h2 class="rio-name">La Babilla – Zanjón del Burro</h2>
                      <p class="rio-description">
                        La Babilla – Zanjón del Burro
                        Humedal artificial en Ciudad Jardín. Refugio para babillas, tortugas y aves.
                        Recientemente intervenido con programas de educación ambiental
                        <br />
                      </p>
                    </div>

                    <!-- Río estándar -->
                    <div class="rio-item">
                      <h2 class="rio-name">Ecoparque Lago de las Garzas</h2>
                      <p class="rio-description">
                        Humedal con bosque protegido. Alberga mariposas, aves, reptiles y orquídeas. Cuenta
                        con senderos y actividades educativas
                      </p>
                    </div>

                    <!-- Río estándar -->
                    <div class="rio-item">
                      <h2 class="rio-name">El Limonar</h2>
                      <p class="rio-description">
                        Ofrece senderos peatonales y abundante vegetación. Ha sido restaurado como pulmón verde y
                        espacio educativo en la comuna sur
                      </p>
                    </div>

                    <!-- Río destacado -->
                    <div class="rio-item featured">
                      <h2 class="rio-name">Charco Azul (El Pondaje)</h2>
                      <p class="rio-description">
                        Humedal en el oriente de la ciudad con alta biodiversidad —más de 55 especies de aves— afectado
                        por vertimientos de aguas residuales
                      </p>
                    </div>

                    <!-- Río estándar -->
                    <div class="rio-item">
                      <h2 class="rio-name">Lago Panamericano</h2>
                      <p class="rio-description">
                        Ubicado cerca de la vía Cali‑Jamundí. Intervenido por Dagma y activado con educación ambiental y
                        restauración de la vegetación
                      </p>
                    </div>

                    <!-- Río estándar -->
                    <div class="rio-item">
                      <h2 class="rio-name">El Retiro</h2>
                      <p class="rio-description">
                        Frente a la Javeriana, alberga patos, iguanas, tortugas y aves diversas. Fue objeto de proyectos
                        de declaración como zona protegida con senderos y aireadores solares
                      </p>
                    </div>
                    <div class="rio-item">
                      <h2 class="rio-name">Isaías Duarte Cancino</h2>
                      <p class="rio-description">
                        Situado en el oriente. Afectado por contaminantes y expansión urbana, es uno de los humedales
                        con PMA y sujeto de iniciativas de restauración
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
import humedalesImage from '@/assets/images/humedalescali.jpeg';

const imageSrc = ref(humedalesImage);
</script>

<style scoped>
@import '@/assets/scss/shared-styles.scss';
</style>