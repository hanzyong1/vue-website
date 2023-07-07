<template>
  <div id="add-blog">
    <h1>Add a New Blog</h1>
    <form v-if="!submitted">
      <label for="title">Blog Title: </label>
      <input type="text" id="title" v-model="blog.title" />
      <label for="content">Blog Content: </label>
      <textarea id="content" v-model.trim="blog.content"></textarea>
      <div id="checkboxes">
        <p>Blog Categories:</p>
        <label for="ninjas">Ninjas</label>
        <input
          type="checkbox"
          id="ninjas"
          value="Ninjas"
          v-model="blog.categories"
        />
        <label for="wizards">Wizards</label>
        <input
          type="checkbox"
          id="wizards"
          value="Wizards"
          v-model="blog.categories"
        />
        <label for="mario">Mario</label>
        <input
          type="checkbox"
          id="mario"
          value="Mario"
          v-model="blog.categories"
        />
        <label for="cheese">Cheese</label>
        <input
          type="checkbox"
          id="cheese"
          value="Cheese"
          v-model="blog.categories"
        />
      </div>
      <label for="authors">Authors</label>
      <select id="authors" v-model="blog.author">
        <option v-for="author in authors" :key="author">
          {{ author }}
        </option>
      </select>
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content: {{ blog.content }}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
import authors from "../assets/data.js";

export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: authors,
      submitted: false,
    };
  },
  methods: {
    post: function () {
      this.submitted = !this.submitted;
    },
  },
};
</script>

<style scoped>
#add-blog * {
  text-align: left;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
  margin-top: 0;
}
button {
  display: block;
  margin: 20px 0;
}
</style>
