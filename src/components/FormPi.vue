<template>
  <div>
    <br>

    <form @submit.prevent="calcul">

      <label for="rayon"> Entrer le rayon : </label>

      <input type="number" name="taille" id="taille" 
      placeholder="en cm"  min="1" max="1000" v-model="sphere.rayon" />
        
        <br>

      <input type="submit" value="Calculer" /><br><br>

    </form>
  </div>
</template>

<script setup lang="ts">

    //pour rendre "reactif"
    import { reactive } from "vue";

    //pour importer le store
    import { usePiStore } from "@/stores/Sphere";
    //store que l'on veut utiliser(?)
    const store = usePiStore();

    //pour utiliser les données du store : initialisation
    const sphere = reactive({
    rayon: "",
    perimetre: "",
    surface: "",
    volume: "",
    });

    //fonction permettant le calcul 
    //du submit
    function calcul() {

        let R = sphere.rayon ;
        
        let calculatePerim = (
          2*3.1416*Number(R)
          ).toPrecision(3);

        let calculateSurf = (
          Number(3.1416 * Math.pow(Number(R), 3))
          ).toPrecision(3);

        let calculateVol = (
          Number(1.333 * 3.1416 * Math.pow(Number(R), 3))
          ).toPrecision(3);

        //les données qui font references aux champs inputs qui
        //sont envoyées dans le store pour réutilisation 
        // dans tableau recap
        store.rayon = sphere.rayon ;
        store.perimetre = calculatePerim ;
        store.surface = calculateSurf ;
        store.volume = calculateVol ;
    }

</script>

<style>
label
{
	display: block;
	width: 150px;
	float: left;
}
</style>