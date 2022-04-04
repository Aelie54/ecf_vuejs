<script setup lang="ts">
    //formulaire pourles données en input
    import FormPi from "../components/FormPi.vue";
    //tableau recapitulatif
    import TablePi from "../components/TablePi.vue";
</script>

<!--contenu de cette vue, présentation et illustration de l'IMC -->
<template>
    <main>
        
        <h1>Calculateur de dimensions d’un cercle et d'une sphère</h1>
        <br />
        <p>Pour calculter le périmètre d'un cercle à partir de son rayon : 
            2 * Pi * Rayon </p>
        <br />
        <p>Pour calculter l'aire ou la surface  d'un cercle à partir de son rayon :
            Pi * Rayon * Rayon</p>
        <br />
        <p>Pour calculter le volume d'une sphère : 
            4/3 * Pi * Rayon * Rayon * Rayon </p>
        
        <!-- mon formulaire-->
        <FormPi />

        <!-- mon table de recap-->
        <TablePi />

    </main>
</template>

<style>
img {
    width: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>