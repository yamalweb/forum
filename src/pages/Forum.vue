<template>
  <div class="col-full push-top" v-if="forum">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <RouterLink :to="{name: 'ThreadCreate', params:{ forumId: forum.id }}" class="btn-green btn-small">Start a
        thread
      </RouterLink>
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="threads"/>
  </div>

</template>

<script>
import ThreadList from "@/components/ThreadList";
import {mapActions} from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Forum",
  components: {ThreadList},
  props: {
    id: {
      required: true,
      type: String
    }
  },
  async created() {
    const forum = await this.fetchForum({id: this.id})
    const threads = await this.fetchThreads({ids: forum.threads})
    this.fetchUsers({ids: threads.map(thread => thread.userId)})

  },
  methods: {
    ...mapActions(['fetchForum', 'fetchThreads', 'fetchUsers'])
  },
  computed: {
    forum() {
      return this.$store.state.forums.find(forum => forum.id === this.id)
    },
    threads() {
      if (!this.forum) return []
      return this.forum.threads.map(threadId => this.$store.getters.thread(threadId))
    }
  }
}
</script>

<style scoped>

</style>
