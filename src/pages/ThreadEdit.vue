<template>

  <div v-if="thread && text" class="col-full push-top">

      <h1>Edit <i>{{thread.title}}</i></h1>

      <ThreadEditor :title="thread.title" :text="text" @save="save" @cancel="cancel"/>
    </div>

</template>

<script>

import ThreadEditor from "@/components/ThreadEditor";
import {findById} from "@/helpers";
import {mapActions} from "vuex";

export default {
  name: "ThreadEdit",
  components: {ThreadEditor},
  props:{
    id:{
      type: String,
      required: true
    }
  },
  async created(){
    const thread = await this.fetchThread({id: this.id})
    this.fetchPost({id: thread.posts[0]})
  },
  computed:{
    thread() {
      return this.$store.state.threads.find(thread => thread.id === this.id)
    },
    text() {
      const post = findById(this.$store.state.posts, this.thread.posts[0])
      return post ? post.text : ''
    }
  },
  methods: {
    ...mapActions(['updateThread','fetchThread','fetchPost']),

    async save({title, text}){
      const thread = await this.updateThread({
        id: this.id,
        title,
        text,
      })
      this.$router.push({name: 'ThreadShow', params: {id: thread.id}})
    },
    cancel () {
      this.$router.push({ name: 'ThreadShow', params: { id: this.id } })
    }
  }
}
</script>
