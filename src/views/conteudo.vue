<template>
<div class="text-center">
    <h1 class="mb-1 text-xl text-center">Digite sua cidade</h1>
        <h1 class="mb-3 text-lg text-center">Para lista com informações:</h1>
    <input id="txtName" @keyup.enter="addMessage" v-model="txtInput" type="text" class="px-5 py-1 border rounded bg-darkest hover:border-escuro border-dark">
</div>

<div class="p-2">
      <div class="w-auto h-auto p-5 rounded-lg shadow-md bg-dark">
        <div class="mb-4 text-lg text-center text-semibold">
            <div class="ml-4">
                <h3>
                {{ name }}
                      -
                {{region}}
                </h3>
             </div>
        </div>

    <div class="grid justify-center grid-cols-1">
 
       <h2 class="text-lg">Temperatura:
     {{temp_c}} ºC

        <h2 class="text-lg">Data:</h2>
    {{localtime}}

         <h2 class="text-lg">Sensação térmica</h2>
    {{feelslike_c}} ºC


        <h2 class="text-lg">Máxima</h2>
    {{maxtemp_c}} ºC

        <h2 class="text-lg">Umidade</h2>
    {{avghumidity}} kg/m³

        <h2 class="text-lg">Vento:</h2>
    {{wind_kph}} Km/h
  
        <h2 class="text-lg">Amanhecer:</h2>
    {{sunrise}} ºC

        <h2 class="text-lg">Pôr do sol:</h2>
    {{sunset}}

        <h2 class="text-lg">Mínima:</h2>
    {{mintemp_c}} ºC

        <h2 class="text-lg">Máxima Vento:</h2>
    {{maxwind_kph}} Km/h

        <h2 class="text-lg">Mínima Vento:</h2>
    {{minwind_kph}} Km/h

         <h2 class="text-lg">País:</h2>
    {{country}}

         <h2 class="text-lg">Fuso Horário:</h2>
    {{tz_id}}
</h2>

              </div>
        </div>
</div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import api from "@/services/api";
import axios from "axios";

export default defineComponent ({
  data() {
    return {
      name: [],
      region: [],
      feelslike_c: [],
      temp_c: [],
      localtime: [],
      maxtemp_c: [],
      avghumidity: [],
      wind_kph: [],
      sunset: [],
      sunrise: [],
      mintemp_c: [],
      maxwind_kph: [],
      minwind_kph: [],
      country: [],
      tz_id: [],
      error: [],
      txtInput: ''
    };
  },
methods: {
    addMessage(){ 
      const baseURL = "http://api.weatherapi.com/v1/forecast.json?key=bd48aaabe89a4b1d83c02411221603&"

    axios.get(baseURL+"q="+this.txtInput)
      .then(response => {
        this.name = response.data.location.name;
        this.region = response.data.location.region;
        this.wind_kph = response.data.current.wind_kph;
        this.sunset = response.data.forecast.forecastday[0].astro.sunset;
        this.sunrise = response.data.forecast.forecastday[0].astro.sunrise;
        this.avghumidity = response.data.forecast.forecastday[0].day.avghumidity;
        this.mintemp_c = response.data.forecast.forecastday[0].day.mintemp_c;
        this.maxwind_kph = response.data.forecast.forecastday[0].day.maxwind_kph;
        this.minwind_kph = response.data.forecast.forecastday[0].day.minwind_kph;
        this.country = response.data.location.country;
        this.tz_id = response.data.location.tz_id;
        this.temp_c = response.data.current.temp_c;
        this.localtime = response.data.location.localtime;
        this.feelslike_c = response.data.current.feelslike_c;
        this.avghumidity = response.data.forecast.forecastday[0].day.avghumidity;
        this.maxtemp_c = response.data.forecast.forecastday[0].day.maxtemp_c;
      })
      .catch(error => {
        alert(error)
      })
      
      console.log(this.txtInput)
    }
},
  
  mounted() {
    const baseURL = "http://api.weatherapi.com/v1/forecast.json?key=bd48aaabe89a4b1d83c02411221603&"

    axios.get(baseURL+"q=brazil")
      .then(response => {
        this.name = response.data.location.name;
        console.log(this.name)
      })
      .catch(error => {
        alert(error)
      })
  }
});
</script>

<style>

h1 {
  color: dark;
  font-family: verdana;

}

h2 {
  color: dark;
  font-size: 200%;
  font-style: italic;
  font-family: verdana;
}

</style>