Vue.component('memo-component', {
  template: `<div>
    <slot name="title"></slot>
    <button @click="deleteThis">X</button>
    <slot name="memo"></slot>
    <hr>
    <p>{{ date }}</p>
    </div>`,
  data: function() {
    return {
      today: new Date()
    }
  },
  computed: {
    date: function() {
      return `${this.today.getFullYear()}년 ${this.today.getMonth()+1}월 ${this.today.getDate()}일`
    }
  },
  methods: {
    deleteThis: function() {
      this.$emit('delete', this.id);
    }
  },
  props: ['id']
})