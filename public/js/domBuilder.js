const DOMBuilder = function(){

    //funcion crear card de prodcutos
    this.createCard = function(products){
        
        let card = document.querySelector('#productContainer');
        
        products.forEach(element => {

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

        return card;
    }
    

    //button delet
    this.buttonDelete = function(id){
        const button = document.createElement('button');
        button.textContent = "x";
        button.classList.add('btnProductDelete', 'h-5', 'w-5', 'focus:outline-none', 'bg-gray-500', 'rounded-full', 'text-white', 'font-bold', 'hover:bg-indigo-700');
        button.setAttribute('data-id', id); //asigno un id al boton, el id que recibo por parametro
        return button;
    }

}
