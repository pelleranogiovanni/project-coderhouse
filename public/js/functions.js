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

    console.log(totalPedido)
    
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