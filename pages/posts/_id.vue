<template>
  <section class="container">
    <!-- render blog posts via single file components -->
    <blog-post :key="post.id" :post="post"></blog-post>
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
      .then(([data]) => {
        // debugger
        return {
          post: data.items[0]
        }
      })
      .catch()
  }
}
</script>
