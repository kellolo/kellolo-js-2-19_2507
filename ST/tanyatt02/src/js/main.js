class ProductList {


    constructor(container = '.products') {
        this.container = container;
        this.products = [];
        this.allProducts = [];
        this.fetchProducts();
        console.log(this.products);
        this.render();
        this.TotalSum();
        console.log(this.TotalSum());
    }




    fetchProducts() {
        this.products = [
            {
                id: 1,
                title: 'BLAZE LEGGINGS',
                price: 250,
                img: '../src/assets/img/feat_item_11.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque rem ad eum aperiam illo iure vitae veritatis magnam velit aut ducimus rerum, deserunt voluptate officiis, eligendi pariatur consequuntur eius fugit autem sed vero magni consequatur? Consequuntur non, dicta aliquid eum corporis provident distinctio ratione praesentium nihil, optio iusto veritatis a ut unde voluptatum ipsum debitis? Aspernatur dolore pariatur iure!'
            },
            {
                id: 2,
                title: 'ALEXA SWEATER',
                price: 350,
                img: '../src/assets/img/feat_item_12.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque rem ad eum aperiam illo iure vitae veritatis magnam velit aut ducimus rerum, deserunt voluptate officiis, eligendi pariatur consequuntur eius fugit autem sed vero magni consequatur? Consequuntur non, dicta aliquid eum corporis provident distinctio ratione praesentium nihil, optio iusto veritatis a ut unde voluptatum ipsum debitis? Aspernatur dolore pariatur iure!'
            },
            {
                id: 7,
                title: 'AGNES TOP',
                price: 300,
                img: '../src/assets/img/feat_item_13.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque rem ad eum aperiam illo iure vitae veritatis magnam velit aut ducimus rerum, deserunt voluptate officiis, eligendi pariatur consequuntur eius fugit autem sed vero magni consequatur? Consequuntur non, dicta aliquid eum corporis provident distinctio ratione praesentium nihil, optio iusto veritatis a ut unde voluptatum ipsum debitis? Aspernatur dolore pariatur iure!'
            },
            {
                id: 5,
                title: 'SYLVA SWEATER',
                price: 400,
                img: '../src/assets/img/feat_item_14.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque rem ad eum aperiam illo iure vitae veritatis magnam velit aut ducimus rerum, deserunt voluptate officiis, eligendi pariatur consequuntur eius fugit autem sed vero magni consequatur? Consequuntur non, dicta aliquid eum corporis provident distinctio ratione praesentium nihil, optio iusto veritatis a ut unde voluptatum ipsum debitis? Aspernatur dolore pariatur iure!'
            },
    ];
    }

    render() {
        const block = document.querySelector(this.container);

        for (let product of this.products) {
            const productObject = new ProductItem(product);

            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
    
    TotalSum(){
        let sum=0;
        for (let product of this.products){
            sum+=product.price;
        }
        let pTotalSum=document.querySelector('.totalSum');
        pTotalSum.textContent=`Общая стоимость магазина ${sum}\u0024`;
        
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
        this.description = product.description;
        console.log(this.description);
        console.log(product.descrition);
    }

    render() {
        return `<div class="products__item">
                <h3 class="products__h3">${this.title}</h3>
                <img class='products__photo' src="${this.img}" alt="photo">
                <p class='products__desc'>${this.description}</p>
                <div class="products__caption">
                <p>Price &#36; ${this.price}</p>
                 <button class='products__button'>Details</button>
                <button class="products__buy" data-id=${this.id} data-name=${this.title} data-price=${this.price} data-img=${this.img}>Buy</button>
                </div>
              </div>`;
    }
}

const list = new ProductList();



//const products = [
//    {id: 1, title: 'BLAZE LEGGINGS', price: 250,img:'img/feat_item_11.jpg',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque rem ad eum aperiam illo iure vitae veritatis magnam velit aut ducimus rerum, deserunt voluptate officiis, eligendi pariatur consequuntur eius fugit autem sed vero magni consequatur? Consequuntur non, dicta aliquid eum corporis provident distinctio ratione praesentium nihil, optio iusto veritatis a ut unde voluptatum ipsum debitis? Aspernatur dolore pariatur iure!'},
//    {id: 2, title: 'ALEXA SWEATER', price: 350,img:'img/feat_item_12.jpg',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque rem ad eum aperiam illo iure vitae veritatis magnam velit aut ducimus rerum, deserunt voluptate officiis, eligendi pariatur consequuntur eius fugit autem sed vero magni consequatur? Consequuntur non, dicta aliquid eum corporis provident distinctio ratione praesentium nihil, optio iusto veritatis a ut unde voluptatum ipsum debitis? Aspernatur dolore pariatur iure!'},
//    {id: 7, title: 'AGNES TOP', price: 300,img:'img/feat_item_13.jpg',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque rem ad eum aperiam illo iure vitae veritatis magnam velit aut ducimus rerum, deserunt voluptate officiis, eligendi pariatur consequuntur eius fugit autem sed vero magni consequatur? Consequuntur non, dicta aliquid eum corporis provident distinctio ratione praesentium nihil, optio iusto veritatis a ut unde voluptatum ipsum debitis? Aspernatur dolore pariatur iure!'},
//    {id: 5, title: 'SYLVA SWEATER', price: 400,img:'img/feat_item_14.jpg',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque rem ad eum aperiam illo iure vitae veritatis magnam velit aut ducimus rerum, deserunt voluptate officiis, eligendi pariatur consequuntur eius fugit autem sed vero magni consequatur? Consequuntur non, dicta aliquid eum corporis provident distinctio ratione praesentium nihil, optio iusto veritatis a ut unde voluptatum ipsum debitis? Aspernatur dolore pariatur iure!'},
//];
//
//const renderProduct = (id,title, price, img='',description) => {
//    return `<div class="products__item">
//                <h3 class="products__h3">${title}</h3>
//                <img class='products__photo' src="${img}" alt="photo">
//                <p class='products__desc'>${description}</p>
//                <div class="products__caption">
//                <p>Price &#36; ${price}</p>
//                 <button class='products__button'>Details</button>
//                <button class="products__buy" data-id=${id} data-name=${title} data-price=${price} data-img=${img}>Buy</button>
//                </div>
//              </div>`;
//};
//
//const renderProducts = list => {
//    const productList = list.map(item => renderProduct(item.id,item.title, item.price,item.img,item.description));
//    console.log(productList.join(''));
//    
//    document.querySelector('.products').innerHTML = productList.join('');
//    console.log(document.querySelector('.products').innerHTML)
//};
//
//renderProducts(products);
