<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">Blog posts</h1>
      <ul class="">
        <li v-for="post in posts" :key="post.id">
          <NuxtLink :to="'/posts/' + post.fields.slug">
            {{ post.fields.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
      // fetch all blog post ids(slugs) sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        select: 'sys.id,fields.slug,fields.title',
        order: '-sys.createdAt'
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
