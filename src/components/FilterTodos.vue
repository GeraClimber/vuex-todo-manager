<template>
<div>
  Filter Todos
  <select @change="filterTodos($event)">
    <option value="200">200</option>
    <option value="100">100</option>
    <option value="50">50</option>
    <option value="20">20</option>
    <option value="10">10</option>
    <option value="5">5</option>
  </select>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "FilterTodos",
  methods:mapActions(['filterTodos'])
}
</script>

<style scoped>
/*Better not to use Scoped styles. Scoped style will apply data-v-123 attr to every html element and overload the final bundle*/
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
} 
</style>