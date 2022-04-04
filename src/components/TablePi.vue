<template>
  <table>
    <thead>
      <tr>
        <th scope="col">rayon</th>
        <th scope="col" >perimètre </th>
        <th scope="col">surface</th>
        <th scope="col">Volume</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <!-- Données du store en "store. ""-->
        <td>{{ store.rayon }}</td>
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

  //et ne pas oublierle const pour utiliser le store
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