<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>

<script>
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import localizedDate from "dayjs/plugin/localizedFormat"
import "dayjs/locale/ru"
dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

export default {
  name: "AppDate",
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  methods:{
    diffForHumans(){
      return dayjs.unix(this.timestamp).fromNow()
    },
    humanFriendlyDate(){
      return dayjs.unix(this.timestamp).format('llll')
    }
  }
}
</script>

<style scoped>

</style>
