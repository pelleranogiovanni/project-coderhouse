const domBuilder = new DOMBuilder(); //instancio el objeto como global


//Variables globales
let totalPedido = 0;
let pTotalCart = document.getElementById('cantidadPedido');



//funcion agregar html producto a Mi Pedido
function buildProductPedido(product){
    const tr = document.createElement('tr');
    const tdProduct = document.createElement('td');
    const tdPrice = document.createElement('td');
    const buttonDelete = domBuilder.buttonDelete(product.id);

    tdProduct.textContent = product.name;
    tdPrice.textContent = '$ ' + product.price;

    tr.appendChild(tdProduct);
    tr.appendChild(tdPrice);
    tr.appendChild(buttonDelete);

    return tr;
    
}


//funcion ejecutada al hacer click en alguno de los botones
function onSelectClick(event){
    
    const selectedId = event;
    
    const selectedProduct = products.find((product) => parseInt(product.id) === parseInt(selectedId.id)); //con el find recorro y pregunto si el id del boton es igual al del productid

    selectedProducts.push(selectedProduct); //pusheo en el array selectedProducts los productos que voy seleccionando
    
    buildSelectedProducts();
    calcularTotalPedido(selectedProduct); //llamo a la funcion y le envío el producto seleccionado para sumar  

    
    totalPedidoCart = selectedProducts.length;
    console.log(totalPedidoCart)
    pTotalCart.textContent = totalPedidoCart;

    removeItemOrder();
}


//funcion eliminar un item del pedido con jQuery
function removeItemOrder(){
    $('.btnProductDelete').on('click',function () {
        $(this).parent().remove(); 
    });   
}


//funcion agregar product seleccionado en el html del pedido
function buildSelectedProducts(){
    const selectedProductsContainer = document.getElementById('selectedProductsContainer');
    const lastProduct = selectedProducts[selectedProducts.length-1];

    const card = buildProductPedido(lastProduct);
    selectedProductsContainer.appendChild(card);
}


//funcion limpiar pedido completo con jQuery
$('#clearOrder').click( () => {
    selectedProducts = [];
    totalPedidoCart = selectedProducts.length;
    pTotalCart.textContent = totalPedidoCart;

    let new_tbody = document.createElement('tbody');
    new_tbody.setAttribute('id', 'selectedProductsContainer');
    let old_tbody = document.getElementById('selectedProductsContainer');
    let tableNode = document.getElementById('table-container');

    //vacío la variable totalPedido y imppio el contenido total
    pTotal = document.getElementById('totalPedido');
    pTotal.textContent = '';
    totalPedido = 0;
    
    tableNode.replaceChild(new_tbody, old_tbody);


    //llamo al toast notification para informar vaciar carrito
    $('#toast-notification').fadeIn();     
        setTimeout(function() {
            $("#toast-notification").fadeOut();           
    },2000);
});




//funcion calcular total del pedido
function calcularTotalPedido(productSelected){

    pTotal = document.getElementById('totalPedido');

    totalPedido = totalPedido + productSelected.price;

    pTotal.textContent = '$ ' + totalPedido;
}


//funcion ejecutada al cargar el DOM, para cargar los prodcutos
$(document).ready(() => {

    let card = document.querySelector('#productContainer');

    $.ajax({
        method: 'GET',
        url: './js/data2.json',        
        dataType: 'json',
        success: function(response) {
            response.forEach(element => {

                card.innerHTML += `
                <div class="md:w-1/3 p-4 w-full my-6">
                    <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" src="${element.image}">
                    </a>
                    <div class="mt-4 text-left px-2">                      
                    <h2 class="text-gray-800 title-font text-lg font-medium">${element.name}</h2>
                    <div class="flex items-center justify-between">
                        <p class="mt-1 text-gray-600">${element.price}</p>
                        <button class="focus:outline-none btnProduct transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" id="${element.id}">
                            <svg aria-hidden="true" data-prefix="fas" data-icon="plus" class="hover:bg-indigo-700 svg-inline--fa fa-plus fa-w-14 w-8 h-8 text-white p-2 bg-indigo-500 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
                        </button>                          
                    </div>                      
                    <p class="text-gray-500 text-xs tracking-widest title-font font-light">${element.description}</p>
                    </div>
                </div>                
                `;
            });
            
        }
        
    });

    //al hacer click en agregar producto
    $('body').on('click', '.btnProduct', function(){
        onSelectClick(this);  
    });
        
});



//Script Modal
const modal = document.querySelector('.modal');

const showModal = document.querySelector('.show-modal');
const closeModal = document.querySelectorAll('.close-modal');

showModal.addEventListener('click', function (){
    $('.modal').fadeIn();
  
});

closeModal.forEach(close => {
  close.addEventListener('click', function (){
    $('.modal').fadeOut();
  });
});
//End Modal






    
