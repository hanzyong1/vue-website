<template>
  <div id="show-blogs">
    <h1>Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <h2>{{ blog.title | capitalize }}</h2>
      <article>{{ blog.body | truncate }}</article>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.blogs = response.data.slice(0, 10);
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
  text-align: left;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  background: #eee;
}

input {
  width: 100%;
  padding: 10px;
}
</style>
