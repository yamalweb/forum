<template>
  <div class="col-full">
    <div class="forum-list">

      <h2 class="list-title">
        <RouterLink v-if="categoryId" :to="{name: 'Category', params: {id: categoryId}}">{{ title }}</RouterLink>
        <span v-else>{{ title }}</span>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <RouterLink class="text-xlarge" :to="{
          name:'Forum',
          params:{
            id: forum.id
          }
        }">{{ forum.name }}
          </RouterLink>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p><span class="count">{{ forum.threads?.length }}</span>
            {{ forumThreadsWord(forum) }}</p>
        </div>

        <div class="last-thread">

        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "ForumList",
  props: {
    forums: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: 'Forums'
    },
    categoryId: {
      required: false,
      type: String
    },
  },
  methods: {
    forumThreadsWord(forum) {
      if (forum.threads) {
        return forum.threads?.length > 1 ? 'threads' : 'thread'
      } else {
        return 'no threads'
      }
    }
  }
}
</script>

<style scoped>

</style>
