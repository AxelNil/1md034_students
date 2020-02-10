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
        copiedMenu: food,
        checked: []
    },
    methods: {
        hasGluten : function (index) {
            return this.copiedMenu[index].gluten;
        },

        hasLactose : function (index) {
            return this.copiedMenu[index].lactose;
        }
    }
});

const button = new Vue({
    el: '#contact',
    data: {
        name: "",
        email: "",
        street: "",
        house: "",
        pay: "Credit card",
        gender: "Prefer Not To Say",
        output: "",
        burgerNames: ""
    },
    methods: {
        checkedBurgers: function () {
            this.burgerNames = "";
            for (var i = 0; i < vm.copiedMenu.length; i++) {
                if (vm.checked[i]) {
                    this.burgerNames += '\n' + vm.copiedMenu[i].name;
                }
            }
        },

        markDone: function(name, email, street, house, pay, gender) {
            this.name = name;
            this.email = email;
            this.street = street;
            this.house = house;
            this.pay = pay;
            this.gender = gender;
            /*let Name = document.getElementById("name").value;
            let Email = document.getElementById("email").value;
            let Street = document.getElementById("street").value;
            let House = document.getElementById("house").value;
            let payTemp = document.getElementById("payment");
            let Payment = payTemp.options[payTemp.selectedIndex].text;
            let Gender;
            let temp = document.getElementsByName("gender");

            for (var i = 0; i < temp.length; i++) {
                if (temp[i].checked) {
                    Gender = temp[i].value;
                    break;
                }
                }*/
            this.checkedBurgers();

            this.output = this.name + '\n' + this.email + '\n'  + this.street + this.house + '\n' + this.pay + '\n' + this.gender + this.burgerNames;

            console.log(this.output);
        }
    }
});
