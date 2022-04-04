<template>
  <div>
    <h1> Calculateur </h1><br>

    <form @submit.prevent="calcul">

      <label for="rayon"> Entrer le rayon : </label>

      <input type="number" name="taille" id="taille" 
      placeholder="en cm"  min="0" max="250" v-model="sphere.rayon" />
        
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
    rayon: 0,
    perimetre: 0,
    surface: 0,
    volume: 0,
    });

    //fonction permettant le calcul 
    //du submit
    function calcul() {

        //calculs
        let calculateSurf = 3.14 * sphere.rayon * sphere.rayon ;

        let calculatePerim = 2 * 3.14 * sphere.rayon;

        let calculateVol = 1.33 * 3.14 * sphere.rayon * sphere.rayon * sphere.rayon;

        //les données qui font references Aux chAmps inputs qui
        //sont envoyées dans le store pour réutilisation dont
        //la donnée de l'imc que l'on retrouvera dans le
        //tableau recap
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