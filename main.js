new Vue({
  el: "#app",
  data: {
    memolist: [{id: 0, title: "제목입니다", memo: "메모를 작성해주세요"},
  {id: 1, title: "메모의 제목을 작성하고", memo: "메모의 내용을 적습니다"}],
    memoclass: {id: 2, title: "", memo: ""}
  },
  methods: {
    addMemo: function() {
      this.memolist.push({id: this.memoclass.id, title: this.memoclass.title, memo: this.memoclass.memo});
      this.memoclass.id++;
      this.memoclass.title="";
      this.memoclass.memo="";
    },
    deleteMemo: function(id) {
      let index=0;
      this.memolist.forEach((element, i) => {
        if(element.id==id)
        {
          index=i;
        }
      });
      this.memolist.splice(index, 1);
    }
  }
})