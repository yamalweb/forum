<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfileCard v-if="!edit" :user="user"/>
        <UserProfileCardEditor v-else :user="user"/>
      </div>
      <div class="col-7 push-top">

        <div class="profile-header">
                  <span class="text-lead">
                      {{user.username}} recent activity
                  </span>
          <a href="#">See only started threads?</a>
        </div>

        <hr>

        <PostList :posts="user.posts"/>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import UserProfileCard from "@/components/UserProfileCard";
import {mapGetters} from "vuex";
import UserProfileCardEditor from "@/components/UserProfileCardEditor";

export default {
  name: "TheProfile",
  props:{
    edit:{
      type: Boolean,
      default: false
    }
  },
  components: {UserProfileCardEditor, PostList, UserProfileCard},
  computed: {
    ...mapGetters({
      user: 'authUser'
    }),

  }
}
</script>

<style scoped>

</style>
