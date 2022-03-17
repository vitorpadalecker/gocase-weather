<template>
    <div class="text-center">
        <h1 class="mb-1 text-xl text-center">Digite sua cidade</h1>
        <h1 class="mb-2 text-lg text-center">Para mais informações:</h1>
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

    <div class="flex flex-wrap justify-center">
      <div id='caixinhas'>
         <h2>Vento:</h2>
         {{wind_kph}} Km/h
      </div>

    <div id='caixinhas'>
        <h2>Amanhecer:</h2>
        {{sunrise}} ºC
    </div>

    <div id='caixinhas'>
        <h2>Pôr do sol:</h2>
        {{sunset}}
    </div>

    <div id='caixinhas'>
        <h2>Mínima:</h2>
        {{mintemp_c}} ºC
    </div>

    <div id='caixinhas'>
        <h2>Máxima Vento:</h2>
        {{maxwind_kph}} Km/h
    </div>

    <div id='caixinhas'>
      <h2>Mínima Vento:</h2>
      {{minwind_kph}} Km/h
    </div>

    <div id='caixinhas'>
      <h2>País:</h2>
      {{country}}
    </div>

    <div id='caixinhas'>
       <h2>Fuso Horário:</h2>
      {{tz_id}}

    </div>
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
      wind_kph: [],
      sunset: [],
      sunrise: [],
      mintemp_c: [],
      avghumidity: [],
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
  font-family: verdana;
  font-size: 90%;
  width: auto;
  text-align: center;
}

h3 {
  color: dark;
  font-style: italic;
  font-family: verdana;
}


#caixinhas {
  background-image: linear-gradient(to bottom right, #C3C3C3, #6A9FDE);
  border-radius: 15px;
  padding-top: 30px;
  padding-right: 0px;
  padding-bottom: 30px;
  padding-left: 0px;
  height: auto;
  width: 40%;
  text-align: center;
  color: dark;
  font-size: large;
}
</style>