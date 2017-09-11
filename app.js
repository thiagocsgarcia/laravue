var app = new Vue({
  el: "#app",
  data: {
    title: "Contas à Pagar",
    menus: [
      {id:0, name: "Listar Contas"},
      {id:1, name: "Criar Conta"}
    ],
    activedView: 0,
    bills: [
      {date_due: '03/08/2017', name: 'Conta de Luz', value: '30.00', done:1},
      {date_due: '05/08/2017', name: 'Gasolina', value: '130.00', done:0},
      {date_due: '24/08/2017', name: 'Supermercado', value: '500.00', done:1},
      {date_due: '30/08/2017', name: 'Conta de Telefone', value: '56.00', done:1},
      {date_due: '22/08/2017', name: 'Cartão de crédito', value: '412.00', done:0},
      {date_due: '20/08/2017', name: 'Conta de Agua', value: '44.00', done:0}

    ]
  },
  computed: {
    status: function(){
      var count = 0;
      for (var i in this.bills) {
        if(!this.bills[i].done){
          count++;
        }
      }

      return !count? "nenhuma conta à pagar":"Existem "+count+" a serem pagas";
    }
  },
  methods: {
    showView: function($event,id){
      this.activedView = id;
    }
  }
})
