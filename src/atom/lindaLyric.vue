<template>
  <p class="linda__lyric">
    ドブネズミみたいに美しくなりたい<br>
    写真には写らない美しさがあるから<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }}<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }}<br>
    もしも僕がいつか君と出会い話し合うなら<br>
    そんな時はどうか愛の意味を知って下さい<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }}<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }} Oh<br>
    ドブネズミみたいに誰よりもやさしい<br>
    ドブネズミみたいに何よりもあたたかく<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }}<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }}<br>
    もしも僕がいつか君と出会い話し合うなら<br>
    そんな時はどうか愛の意味を知って下さい<br>
    愛じゃなくても恋じゃなくても君を離しはしない<br>
    決して負けない強い力を僕は一つだけ持つ<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }}<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }} Oh<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }}<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }} Oh<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }}<br>
    {{ name }}{{ name }} {{ name }}{{ name }}{{ name }} Oh<br>
  </p>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>