<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <!-- render blog posts via single file components -->
      <blog-post v-for="post in posts" :key="post.id" :post="post"></blog-post>
    </div>
  </section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import BlogPost from '../../components/blog-post.vue'

const client = createClient()

export default {
  components: {
    BlogPost
  },
  // `env` is available in the context object
  asyncData({ env, params }) {
    return Promise.all([
      // fetch individual entry
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug': params.id
      })
    ])
      .then(([posts]) => {
        // return data that should be available
        // in the template
        return {
          posts: posts.items
        }
      })
      .catch()
  }
}
</script>
