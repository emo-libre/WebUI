<script lang="ts" setup>
const {getAllOverrides} = useProxyApi();
const result = await getAllOverrides();
console.log(result);
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>endpoint lookup</th>
          <th>payload lookup</th>
          <th>response override</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="override in result" :key="override.id">
          <td>{{ override.id }}</td>
          <td>{{ override.endpointLookup }}</td>
          <td>{{ override.payloadLookup }}</td>
          <td>{{ override.responseOverride }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>

</style>