<template>
  <div>
    <nav-bar :model="items">
      <template #start>
        <img alt="logo" src="../assets/International_Pokémon_logo.svg.webp" height="40" class="ml-5">
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
    </nav-bar>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(){
    const items = ref([
      {
        label:'Inicio',
        url:'/'
      },
      {
        label:'Pokemons',
        url:'/pokemons'
      }
    ]);
    return{items}
  }
}
</script>
