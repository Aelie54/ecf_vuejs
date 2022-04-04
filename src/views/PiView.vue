<script setup lang="ts">
    //formulaire pourles données en input
    import FormPi from "../components/FormPi.vue";
    //tableau recapitulatif
    import TablePi from "../components/TablePi.vue";
</script>

<!--contenu de cette vue, présentation et illustration de l'IMC -->
<template>
    <main>
        <h1> Calculateur de dimensions d'un cercle </h1> <br>

        <p>Pour calculter le périmètre d'un cercle à partir de son rayon : <br>
            Périmètre = 2 * π  * R </p>
        <br />
        <p>Pour calculter l'aire ou la surface  d'un cercle à partir de son rayon :<br>
        Aire = π  * R <sup>2</sup></p>
        <br />
        <p>Pour calculter le volume d'une sphère à partir du rayon : <br>
        Volume = 4/3 * π  * Rayon <sup>3</sup> </p> <br>

        <i>π  = 3.1416 pour notre simulation. Les résultats ont une précision de 0.01</i>
        
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

h1{
    color: blue;
}
</style>