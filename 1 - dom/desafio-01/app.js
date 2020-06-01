new Vue({
    el: '#desafio',
    data:{
      nome: 'Ana',
      idade: '18'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})