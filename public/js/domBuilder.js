const DOMBuilder = function(){

    //funcion crear card de prodcutos
    this.createCard = function(products){
        
        let card = document.querySelector('#productContainer');
        
        products.forEach(element => {

            card.innerHTML += `
            <div class="md:w-1/3 p-4 w-full my-6" data-aos="flip-left">
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

        return card;
    }
    

    //funcion agregar producto al pedido
    this.buildProductOrder = function(selectedProduct){
        const selectedProductsContainer = document.getElementById('selectedProductsContainer');
        
        selectedProductsContainer.innerHTML += `
        <tr>                            
            <td class=" py-2 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 text-blue-900">${selectedProduct.name}</div>
            </td>
            <td class=" py-2 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 text-blue-900">${selectedProduct.price}</div>
            </td>
            <td class=" py-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                <button id="${selectedProduct.id}" class="btnProductDelete px-5 py-1 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">x</button>
            </td>
        </tr>
        `;
        
        //Funcion para verificar el estado del pedido
        statusPedido();
    }

}
