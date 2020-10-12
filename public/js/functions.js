//funcion sumar elementos del pedido
function sumTotalOrder(products){
    pTotalCart.textContent = products.length;
}

//funcion calcular total pedido
function calcularTotalPedido(){
    totalPedido = 0;
    
    selectedProducts.forEach(element => {
        totalPedido = totalPedido + element.price;
    });
    
    //Funcion para verificar el estado del pedido
    statusPedido();
    
    return totalPedido;
}

//funcion verificar si el pedido está vacío
function statusPedido(){
    const bodyModal = $('#body-modal');
    const bodyModalInfo = $('#body-modal-info');
    const buttonPedir = $('#button-pedir');

    if(selectedProducts.length > 0){
        bodyModal.removeClass('hidden');
        bodyModalInfo.addClass('hidden');
        buttonPedir.removeClass('hidden');

    } else {       
        bodyModal.addClass('hidden');
        bodyModalInfo.removeClass('hidden');
        buttonPedir.addClass('hidden');
    }
}

// Funcion para vaciar el carrito
function limpiarCarro(){
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

}

//Funcion generar html del resumen de compra
function resumenCompra(fomrFullData){
    const cardResumen = document.getElementById('card-resumen');
    cardResumen.innerHTML += `
        <div class="flex justify-between md:w-1/2">
            <p>Comprador</p>
            <p>${fomrFullData.nombre + ' ' + fomrFullData.apellido}</p>
        </div>
        <div class="flex justify-between md:w-1/2">
            <p>DNI</p>
            <p>${fomrFullData.dni}</p>
        </div>
        <div class="flex justify-between md:w-1/2">
            <p>Domicilio</p>
            <p>${fomrFullData.domicilio}</p>
        </div>
        <div class="flex justify-between md:w-1/2">
            <p>Teléfono</p>
            <p>${fomrFullData.telefono}</p>
        </div>
        <div class="flex justify-between md:w-1/2">
            <p>Total compra</p>
            <p>${'$ ' + fomrFullData.totalPedido}</p>
        </div>        
        `;
}


// funcion reiniciar compra
function resetCompra(){
    limpiarCarro();  
    location.reload(true);
}