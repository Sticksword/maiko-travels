<template>
  <section>
    <img class="image" :src="post.fields.heroImage.fields.file.url" />
    <section class="section">
      <div class="content">
        <p class="title">{{ post.fields.title }}</p>
        <p class="subtitle">{{ post.fields.description }}</p>
      </div>
      <div class="content">
        <!-- https://vuejs.org/v2/guide/syntax.html#Raw-HTML -->
        <span v-html="blogHtmlBody"></span>
      </div>
    </section>
    <div class="section fancy">
      <button class="large diagonal">
        <nuxt-link to="/posts">Back to Blog Entries</nuxt-link>
        <!-- <a href="/posts">Posts</a> -->
      </button>
    </div>
  </section>
</template>

<script>
import { BLOCKS } from '@contentful/rich-text-types'
// https://www.npmjs.com/package/@contentful/rich-text-html-renderer
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const OPTIONS = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node =>
      `<img class="image" src="${node.data.target.fields.file.url}"/>`
  }
}

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    blogHtmlBody() {
      // debugger
      return documentToHtmlString(this.post.fields.body, OPTIONS)
    }
  },
  mounted: function() {
    // debugger
  }
}
</script>

<style>
img {
  object-fit: cover; /* worse alternatives - contain, fill, scale-down */
  height: 300px;
  width: 100%;
}

.large {
  width: 400px;
}

.fancy a {
  font-family: Arial;
  display: block;
  color: white;
}

.fancy a:hover {
  color: white; /* need to override generic.css that comes with Bulma */
}

.fancy .diagonal {
  position: relative;
  line-height: 50px;
  background: #67809f;
  color: white;
  border: none;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
  z-index: 1;
  padding: 0px;
}

.fancy .diagonal:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 500%;
  height: 1000%;
  background: #34495e;
  z-index: -1;
  transform-origin: 0% 0%;
  transform: translateX(calc(20% - 25px)) translateY(10%) rotate(-45deg);
  /* transform: translateY(10%) translateX(16%) rotate(-45deg); */
  transition: transform 0.3s;
}
.fancy .diagonal:hover::after {
  transform: translateY(10%) translateX(-25px) rotate(-45deg);
}
</style>
