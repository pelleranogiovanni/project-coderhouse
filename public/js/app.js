const domBuilder = new DOMBuilder(); //instancio el objeto como global


//Variables globales
let totalPedido = 0;
let pTotalCart = document.getElementById('cantidadPedido');
let selectedProducts = []; //productos que voy a ir cargando
let products;


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

    $.ajax({
        method: 'GET',
        url: './js/data.json',        
        dataType: 'json',
        success: function(response) {
            products = response;
           
            domBuilder.createCard(products);            
        }
        
    });

    //al hacer click en agregar producto
    $('body').on('click', '.btnProduct', function(){
        onSelectClick(this);  
    });
        
});


//Script Modal
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






    
