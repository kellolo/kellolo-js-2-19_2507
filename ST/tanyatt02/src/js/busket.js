//При нажатии на любую кнопку Buy соответствующий продукт добавляется в корзину
//let btnsBuy = document.querySelectorAll('.products__buy');
//btnsBuy.forEach(function (btn) {
//
//    btn.addEventListener('click', function (event) {
//        console.log('btnBuy');
//        console.log(this);
//        let id = event.target.dataset.id;
//        let name = event.target.dataset.name;
//        let price = event.target.dataset.price;
//        let img = event.target.dataset.img;
//        busket.addProduct({
//            id,
//            price,
//            name,
//            img,
//        })
//    })
//})

//При наведении на myAccount отрисовывается корзина по объекту busket
//let myAccount = document.getElementById('MyAccount');
//myAccount.addEventListener('mouseover', function () {
//    busket.refreshBusket();
//
//});


class Busket {
    constructor() {
        this.products = {2: {price: "350", name: "ALEXA", img: "../src/assets/img/feat_item_12.jpg", count: 2}};
    }


    //Метод добавляет продукт в корзину под идeнтификатором id
    addProduct(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                img: product.img,
                count: 1
            };
        } else {
            this.products[product.id].count++;
        }
        console.log('add product to busket')
        console.dir(this.products);

    }

    //Отрисовываем корзину
    renderBusket() {
        this.clearBusket();

        for (let key in this.products) {
            this.renderProduct(this.products[key], key);

        };

    }

    //Очистим корзину, прежде чем ее отрисовывать
    clearBusket() {
        let tbody = document.querySelector('tbody');
        tbody.innerHTML = '';
    }

    //Отрисовываем строку в корзине (продукт)
    renderProduct(product, id) {
        let strImg = `<img src=${product.img} style="height:  85px;" alt="photo" class="dropCart__img">`;
        let strInfo = `${product.name}<br><br>  
           <p class="dropCart__price"><span data-           id="${id}">${product.count}</span>&nbsp;x&nbsp;           <span>${product.price}</span></p>`;
        let productRow = `
            <tr class='dropCart__row'>

<td>${strImg}</td>
<td>${strInfo}</td>
<td >
    <button name="delFromCart" class="dropCart__del" ><i class="fas fa-times-circle" data-id="${id}"></i> </button>

                                    </td>                
            </tr>
        `;

        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    }

    //Коллекции кнопок Del назначаем обработчика
    //    btnsDelEventListener() {
    //        let btnsDel = document.querySelectorAll('.dropCart__del');
    //        //если сделать перебор forEach-не срабатывает-? this получается window
    //        for (let i = 0; i < btnsDel.length; i++) {
    //            btnsDel[i].addEventListener('click',
    //                this.removeProductListener);
    //            console.log('btnsDelEventListener');
    //            console.log(this);
    //        }
    //    }

    //Вызываем метод удаления продукта от объекта busket
    //    removeProductListener(event) {
    //        let id = event.target.dataset.id;
    //        
    //
    //                console.log(id);
    //                busket.removeProduct(id);
    //    }

    //Удаляем(или уменьшаем количество) продукт из корзины
    removeProduct(id) {
        //        let id = event.target.dataset.id;
        console.log('removeProduct id=' + id);
        console.log(this);
        if (this.products[id].count > 1) {
            this.products[id].count--;
        } else {
            delete this.products[id];
        }
        //  Перерисовываем корзину
        this.refreshBusket();
    }



    //Отрисовываем сумму
    renderTotal() {
        document.getElementById('total').textContent = '$' + this.getTotal();
    }

    //Считаем стоимость корзины
    getTotal() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        return sum;
    }

    //Освежаем корзину : отрисовываем продукты, сумму, назначаем обработчики кнопкам удаления
    refreshBusket() {
        this.renderBusket();
        //        this.btnsDelEventListener();
        this.renderTotal();
    }
}

export default function () {



    let busket = new Busket;
    //При нажатии на любую кнопку Buy соответствующий продукт добавляется в корзину
    let btnsBuy = document.querySelectorAll('.products__buy');
    btnsBuy.forEach(function (btn) {

        btn.addEventListener('click', function (event) {
            console.log('btnBuy');
            console.log(this);
            let id = event.target.dataset.id;
            let name = event.target.dataset.name;
            let price = event.target.dataset.price;
            let img = event.target.dataset.img;
            busket.addProduct({
                id,
                price,
                name,
                img,
            });

        })
    });

    //При наведении на myAccount отрисовывается корзина по объекту busket
    let myAccount = document.getElementById('MyAccount');
    myAccount.addEventListener('mouseover', function () {
        busket.refreshBusket();

    });

    //Коллекции кнопок Del назначаем обработчика

    let btnsDel = document.querySelector('.myAccountDrop');
    console.log('11111',btnsDel);
    //если сделать перебор forEach-не срабатывает-? this получается window

    btnsDel.addEventListener('click', function (event) {
        console.log(event.target);
        if (event.target.classList.contains('fas')) {
            //Вызываем метод удаления продукта от объекта busket

            let id = event.target.dataset.id;
            console.log('delete item ', id);

            console.log(id);
            busket.removeProduct(id);
        }
    })

}
