<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogs: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
      // this.blogs = response.data.slice(0, 10);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped></style>
