export default {
  methods: {
    getRandomElement: function(list) {
      return list[Math.floor(Math.random() * list.length)]
    }
  }
}
