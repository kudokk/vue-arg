<template>
  <div>
    リアクティブシステム（Object.observe）とdeepCopyに関する検証
  </div>
</template>

<script>
export default {
  data() {
    return {
      object: {
        nestObj: {
          name: 'nestObj', label: 'NestObj'
        },
        nestArray: [
          { id: 1, name: 'nestObj', label: 'NestObj' },
          { id: 2, name: 'nestObj', label: 'NestObj' },
          { id: 3, name: 'nestObj', label: 'NestObj' }
        ]
      }
    }
  },
  created() {
    console.log(this.object)
  }
}
</script>
