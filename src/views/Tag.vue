<template>
  <div class="tag">
	  <div v-if="error">{{ error }}</div>
	  <div v-if="posts.length" class="layout">
		<PostList :posts="postWithTag" />
		<TagCloud :posts="posts" />
	  </div>
	  <div v-else>
		  <Spinner />
	  </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue'
import Spinner from '@/components/Spinner.vue'
import getPosts from '@/composables/getPosts'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
	name: 'Tag',
	components: { PostList, Spinner, TagCloud },
  setup() {
	  const route = useRoute()
    const {posts, error, load} = getPosts()

	load()

	const postWithTag = computed(() => {
		return posts.value.filter((p) => p.tags.includes(route.params.tag))
	})

    return { posts, error, postWithTag }
  }
}
</script>

<style>

</style>