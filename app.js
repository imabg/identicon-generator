new Vue({
    el: '#root',
    data: {
      input: ''
    },
    computed: {
      identicon: function () {
          return jdenticon.toSvg(this.input, 200);
      }
    },
    methods: {
        onInput: function (event) {
            this.input = event.target.value;
        }
    }
});