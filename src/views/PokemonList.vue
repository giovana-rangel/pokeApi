<template>
  <div class="p-5">
    <toast-msg/>

    <tab-view>
      <tab-panel header="Todos">
        <h2>Pokemones</h2>
        <div class="grid mb-3">
          <div v-for="p in pokemons" :key="p" class="col-12 md:col-6 lg:col-3 flex justify-content-around gap-2 border-solid surface-border">
            <span class="text-lg col-6">{{p.name}}</span>
            <btn-app label="Detalles" icon="pi pi-external-link" class="p-button-outlined" @click="openBasic(p.url)"/>
            <btn-app @click="fav(p.url)" icon="pi pi-bookmark-fill" class="p-button-rounded p-button-text"/>
          </div>
        </div>
      </tab-panel>

      <tab-panel header="Favoritos">
        <h2>Favoritos</h2>
        <div class="grid mb-3">
          <card-panel v-for="p in favs" :key="p" class="col-12 md:col-6 lg:col-3">
            <template #header>
              <a href="#" @click="openBasic(p.url)"><img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.id + '.png'"></a>
            </template>
            <template #title>
              <div class="flex justify-content-between">
                <span>{{p.name}}</span>
                <btn-app @click="remove(p)" icon="pi pi-times" class="p-button-rounded p-button-danger p-button-sm"/>
              </div> 
            </template>
          </card-panel>
        </div>
      </tab-panel>
    </tab-view>

    <pop-modal header="Detalles" v-model:visible="displayBasic" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}">
      <data-table :value="details" responsiveLayout="scroll">
        <column-table field="id" header="ID"></column-table>
        <column-table field="name" header="Pokemon"></column-table>
        <column-table field="height" header="Altura"></column-table>
        <column-table field="weight" header="Peso"></column-table>
      </data-table>
    </pop-modal>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted } from 'vue';
import usePokemons from '../../services/pokemons.js';
export default {
  setup(){
    const {pokemons, getPokemons} = usePokemons();
    onMounted(getPokemons);
    return {
      pokemons
    }
  },
  data(){
    return {
      displayBasic: false,
      details: [],
      favs: []
    }
  },
  methods:{
    openBasic(url) {
      this.displayBasic = true;
      this.addPokemon(url)
    },
    closeBasic() {
      this.displayBasic = false;
    },
    addPokemon(url){
      axios.get(url)
      .then((res)=>{
        this.details = [{
          id: res.data.id,
          name: res.data.name,
          height: res.data.height,
          weight: res.data.weight,
          url: url,
        }]
      }).catch(err=>{console.error(err);})
    },
    fav(url){
      axios.get(url)
      .then((res)=>{
        this.favs.push({
          id: res.data.id,
          name: res.data.name,
          url:url
        });
        this.$toast.add({severity:'success', summary: res.data.name, detail:'Agregado a favoritos'})
      }).catch(err => console.error(err))
      
    },
    remove(p){
      this.favs = this.favs.filter((item) => item.name !== p.name);
      this.$toast.add({severity:'error', summary: p.name, detail:'Eliminado de favoritos'})
    }
  }
}
</script>
