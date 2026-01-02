<script lang="ts" setup>
const {getAllRequests} = useProxyApi();
const result = await getAllRequests();
console.log(result);
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>endpoint</th>
          <th>payload</th>
          <th>response</th>
          <th>Status</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="req in result" :key="req.id">
          <td>{{ req.id }}</td>
          <td>{{ req.endpoint }}</td>
          <td>{{ req.payload }}</td>
          <td>{{ req.response }}</td>
          <td>{{ req.status }}</td>
          <td>{{ req.timestamp }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>

</style>