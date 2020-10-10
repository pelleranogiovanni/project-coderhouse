const domBuilder = new DOMBuilder(); //instancio el objeto como global


//Variables globales
let totalPedido = 0;
let pTotalCart = document.getElementById('cantidadPedido');
let selectedProducts = []; //productos que voy a ir cargando
let products;


//funcion ejecutada al hacer click en alguno de los botones
function onSelectClick(event){
    
    const selectedId = event;
    
    const selectedProduct = products.find((product) => parseInt(product.id) === parseInt(selectedId.id)); //con el find recorro y pregunto si el id del boton es igual al del productid

    selectedProducts.push(selectedProduct); //pusheo en el array selectedProducts los productos que voy seleccionando
    

    domBuilder.buildProductOrder(selectedProduct);
    buildTotalPedido(); //llamo a la funcion para calcular y construir el total del pedido

    
    totalPedidoCart = selectedProducts.length;
    
    pTotalCart.textContent = totalPedidoCart;

    removeItemOrder();
    
}


//funcion eliminar un item del pedido con jQuery
function removeItemOrder(){
    $('.btnProductDelete').on('click',function () {        
        $(this).parent().parent().remove();

        let id = this.getAttribute('id');
        
        selectedProducts.forEach(element => {
            if(id == element.id){
            //    console.log(element.name)
               var index = selectedProducts.map(product => product.name).indexOf(element.name)
               selectedProducts.splice(index, 1);
            }
            
        });

        
        sumTotalOrder(selectedProducts);
        buildTotalPedido();

    });   
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

    //Funcion para verificar el estado del pedido
    statusPedido();
});




//funcion calcular y crear el html del total del pedido
function buildTotalPedido(){

    pTotal = document.getElementById('totalPedido');

    totalPedido = calcularTotalPedido(); //llamo a la función que calcula el valor total

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

    //Funcion para verificar el estado del pedido
    statusPedido();
        
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






    
