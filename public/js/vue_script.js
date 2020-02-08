/*const vm = new Vue({
  el: 'Burgers',
  data: {
    arbitraryVariableName: 'Välj en burgare2'
  }
})

const vm = new Vue({
  el: '#myID',
  data: {
    b1 : WTM.itemName,
    b2 : FTL.itemName,
    b3 : TJR.itemName,
    b4 : TFB.itemName,
    b5 : TEB.itemName,
  }
})

const vm = new Vue({
el: '#myID',
data: {
  menu
  }
  })*/

const vm = new Vue({
    el: '#vue',
    data: {
        copiedMenu: menu
    },
    methods: {
        hasGluten : function (index) {
            return this.copiedMenu[index].glutenBool;
        },

        hasLactose : function (index) {
            return this.copiedMenu[index].lactoseBool;
        }
    }
});
