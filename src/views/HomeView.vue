<template>
    <div class="text-center">
       <h1 class="mb-2 text-xl text-center">Digite sua cidade:</h1>
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
      <h2>Temperatura:</h2>
         {{temp_c}} ºC
    </div>

    <div id='caixinhas'>
     <h2>Data:</h2>
        {{localtime}}
    </div>

    <div id='caixinhas'>
      <h2>Sensação térmica</h2>
        {{feelslike_c}} ºC
    </div>

    <div id='caixinhas'>
     <h2>Máxima</h2>
       {{maxtemp_c}} ºC
    </div>

    <div id='caixinhas'>
     <h2>Umidade</h2>
      {{avghumidity}} kg/m³
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
      feelslike_c: [],
      region: [],
      temp_c: [],
      localtime: [],
      maxtemp_c: [],
      avghumidity: [],
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
        this.temp_c = response.data.current.temp_c;
        this.localtime = response.data.location.localtime;
        this.feelslike_c = response.data.current.feelslike_c;
        this.avghumidity = response.data.forecast.forecastday[0].day.avghumidity;
        this.maxtemp_c = response.data.forecast.forecastday[0].day.maxtemp_c;
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
      
  }
});
</script>

<style>

h1 {
  color: dark;
  font-family: verdana;

}

h2 {
  color: white;
  font-family: verdana;
  font-size: 90%;
  width: auto;
  text-align: center;
}

h3 {
  color: white;
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
  color: white;
  font-size: large;
}
</style>