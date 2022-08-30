import { ref } from 'vue';
import axios from 'axios';

export default function usePokemons() {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  const pokemons = ref([])
  const getPokemons = async () => {
    await axios.get(baseUrl)
    .then((res)=>{
      pokemons.value = res.data.results;
    }) 
  }
 
  return {
    pokemons,
    getPokemons
  }
}