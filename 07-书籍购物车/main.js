const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  methods: {
    // getFinalPrice: function (){
    //   let all_price = 0;
    //   for (let i=0;i<this.books.length;i++) {
    //     all_price += this.books[i].count * this.books[i].price
    //   }
    //   return all_price
    // },
    increment(index){
      this.books[index].count++;
    },
    decrement(index){
      this.books[index].count--;
    },
    removeHandler(index){
      this.books.splice(index,1)
    }
  },
  filters: {
    showPrice(price){
      return  '¥'+price.toFixed(2)
    }
  },
  computed: {
    //  1.普通for循环
    // getFinalPrice: function (){
    //   let all_price = 0;
    //   for (let i=0;i<this.books.length;i++) {
    //     all_price += this.books[i].count * this.books[i].price
    //   }
    //   return all_price
    // },

    //  2. for in 的方式
    // getFinalPrice(){
    //   let all_price = 0;
    //   for (let i in this.books){
    //     all_price += this.books[i].count * this.books[i].price
    //   }
    //   return all_price
    // }

    //  3. for of 的方式
    // getFinalPrice(){
    //   let all_price = 0
    //   for (let book of this.books){
    //     all_price += book.price * book.count
    //   }
    //   return all_price
    // }

    // 箭头函数错误的做法：箭头函数绑定了父级作用域的上下文，this 将不会按照期望指向 Vue 实例
    // getFinalPrice(){
    //   return this.books.reduce((previousValue,book) =>  previousValue + book.count * book.price)
    // }
    getFinalPrice(){
      console.log(this.books.filter(book => book.price  < 100 ))
      console.log(this.books.reduce((previousValue,book) => previousValue + book.count * book.price,0))
      return this.books.reduce(function (previousValue,book){
        return previousValue + book.count * book.price
      },0)
    }
  }
})