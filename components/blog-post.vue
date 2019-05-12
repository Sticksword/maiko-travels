<template>
  <section>
    <div class="container has-text-centered">
      <p>{{ post.fields.title }}</p>
      <p>{{ post.fields.description }}</p>
      <img
        :src="post.fields.heroImage.fields.file.url"
        width="300"
        height="200"
      />
    </div>
    <div class="container">
      {{ post.fields.body }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  mounted: function() {
    // debugger
  }
}
</script>
