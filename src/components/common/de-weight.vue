<template>
  <div class="de-weight">
    <div class="left">
      <dl v-for="dl in left" :key="dl.index">
        <dt @click="addli(dl)">{{dl.name}}</dt>
      </dl>
    </div>
    <div class="right">
      <ul>
        <li v-for="li in right" :key="li.index">{{li.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'left',
      'right'
    ])
  },
  methods: {
    ...mapActions([
      'addli'
    ])
  }
}
</script>

<style lang="scss" scoped>
.de-weight {
  padding: 10px;
  .left {
    margin-top: 10px;
    dl {
      display: inline-block;
      margin-right: 10px;
      background-color: #f60;
      color: #fff;
      line-height: 1;
      padding: 4px;
      dt,
      dd {
        display: inline-block;
        cursor: pointer;
        user-select: none;
      }
    }
  }
  .right {
    li {
      padding: 10px;
    }
  }
}
</style>

