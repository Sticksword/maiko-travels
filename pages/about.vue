<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">About Me</h1>
      <p>My name is {{ person.fields.name }} and I currently work at Square.</p>
      <p>
        I hope to pursue computational biology and ML. Shit excites me to no
        end.
      </p>
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
      // fetch the owner of the blog
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      })
    ])
      .then(([entries]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0]
        }
      })
      .catch()
  }
}
</script>
