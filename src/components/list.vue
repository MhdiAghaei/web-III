<template>
  <div>
    <ul>
      <li :v-for="follower in followers" :key="follower.id">
        <p>{{ follower.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "followerList",
  props: ["followers"],
};
</script>
<style scoped>
div {
  text-align: center;
}
</style>