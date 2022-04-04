<template>
  <table>
    <thead>
      <tr>
        <!-- <th scope="col">Rayon <br>en cm</th> -->
        <th scope="col" >Périmètre du cercle (cm) </th>
        <th scope="col">Aire du cercle (cm) <sup>2</sup></th>
        <th scope="col">Volume de la sphère (cm <sup>3</sup>)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <!-- Données du store en "store. ""-->
        <!-- <td>{{ store.rayon }}</td> -->
        <td> {{ store.perimetre }}</td>
        <td>{{ store.surface }}</td>
        <td>{{ store.volume }}</td>
      </tr>
      <tr></tr>
    </tbody>
  </table><br>
</template>

<script setup lang="ts">

  //pour pouvoir utiliser les données du store,
  //il faut déjà un import
  import { usePiStore } from "@/stores/Sphere";

  //et ne pas oublier le const pour utiliser le store
  const store = usePiStore();

</script>


<style>

table {
  margin: 10px;
}

table, th, td {
  border: 1px solid;
}

td {
  width: 600px;
  padding: 20px;
}

</style>