<template>
  <header class="header" id="header">

    <RouterLink :to="{name: 'Home'}" class="logo">
      <img src="../assets/svg/vueschool-logo.svg">
    </RouterLink>

    <div class="btn-hamburger">
      <!-- use .btn-humburger-active to open the menu -->
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <!-- use .navbar-open to open nav -->
    <nav class="navbar">
      <ul>
        <li class="navbar-user" v-if="authUser">
          <RouterLink :to="{name: 'Profile'}">
            <img class="avatar-small" :src="authUser.avatar" :alt="`${authUser.name} profile name pic`">
            <span>
                        {{ authUser.name }}
                        <img class="icon-profile" src="../assets/svg/arrow-profile.svg" alt="">
                    </span>
          </RouterLink>

          <!-- dropdown menu -->
          <!-- add class "active-drop" to show the dropdown -->
          <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item"><a href="profile.html">View profile</a></li>
              <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
          </div>
        </li>
      </ul>


      <!--      <ul>-->
      <!--        <li class="navbar-item" v-for="">-->
      <!--          <a href="index.html">Home</a>-->
      <!--        </li>-->
      <!--      </ul>-->
    </nav>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "TheNavbar",
  computed: {
    ...mapGetters(['authUser'])
  },
}
</script>

<style scoped>

</style>
