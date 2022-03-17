<template>
<div class="p-2">
      <div class="w-auto h-auto p-2 rounded-lg bg-laranja">
    <div class="mb-3 text-lg text-center text-semibold">
  
       <h1 class="text-xl text-center">Digite sua cidade:</h1>
       <h1 class="mb-2 text-sm text-center">Depois pressione enter</h1>
       <input id="txtName" @keyup.enter="addMessage" v-model="txtInput" type="text" class="px-5 py-1 mb-2 border rounded bg-darkest hover:border-escuro border-dark">
      
         <h3>
         {{ name }}
         -
        {{region}}
        </h3>
</div>

<div id='temperatura' class="flex flex-wrap items-center justify-center mb-3 text-center">
        <h2>Temperatura:</h2>
         <h4 class="text-xxl">{{temp_c}}</h4> ºC
   
   <div id="caixinha">
     <h2>Data:</h2>
        {{localtime}}
      

    
      <h2>Sensação térmica</h2>
        {{feelslike_c}} ºC
    

    
     <h2>Máxima</h2>
       {{maxtemp_c}} ºC
    

    
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
      .then(response =>
       {
        this.name = response.data.location.name;
        this.region = response.data.location.region;
        this.temp_c = response.data.current.temp_c;
        this.localtime = response.data.location.localtime;
        this.feelslike_c = response.data.current.feelslike_c;
        this.avghumidity = response.data.forecast.forecastday[0].day.avghumidity;
        this.maxtemp_c = response.data.forecast.forecastday[0].day.maxtemp_c;
      })
      .catch(error => {
        alert(error)
      })
    }
},
  
  mounted() {
    const baseURL = "http://api.weatherapi.com/v1/forecast.json?key=bd48aaabe89a4b1d83c02411221603&"

    axios.get(baseURL+"q=brazil")
      .then(response => {
        this.name = response.data.location.name;
      })
      .catch(error => {
        alert(error)
      })
  }
});
</script>

<style>

h1 {
  color: #1F1424;
  font-family: verdana;

}

h2 {
  color: #1F1424;
  font-family: verdana;
  width: auto;
  text-align: center;
}

h4 {
  color: #1F1424;
  font-family: verdana;
  text-align: center;
}

h3 {
  color: #1F1424;
  font-style: italic;
  font-family: verdana;
}

#caixinhas {
  background-image: dark;
  height: auto;
  width: auto;
  text-align: center;
  justify-content: center;
  color: #1F1424;
}

#temperatura {
  display:flex;
  flex-direction:row;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.05em;
  color: #1F1424;
  font-size: larger;
}
</style>