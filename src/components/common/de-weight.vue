<template>
  <div class="de-weight">
    <h2>去重：</h2>
    <div class="left">
      <dl v-for="dl in left" :key="dl.index">
        <dt @click="addli(dl)">{{dl}}</dt>
      </dl>
    </div>
    <div class="right">
      <ul>
        <li v-for="li in right" :key="li.index">{{li}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      left: ['one', 'two', 'three', 'four', 'five'],
      right: []
    }
  },
  methods: {
    addli (key) {
      this.right.push(key)
      this.right = [...new Set(this.right)]
    }
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
      padding-top: 5px;
    }
  }
}
</style>
