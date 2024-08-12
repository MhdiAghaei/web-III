<template>
  <div>
    <followerList :followers="followers" />
  </div>
</template>

<script>
import followerList from "./components/list.vue";
export default {
  name: "App",
  components: {
    followerList,
  },
  data() {
    return {
      followers: [
        { id: 11, fname: "mahdi" },
        { id: 12, fname: "reza" },
        { id: 13, fname: "abbas" },
        { id: 14, fname: "ali" },
        { id: 15, fname: "mamad" },
      ],
    };
  },
};
</script>

<style scoped>
</style>
