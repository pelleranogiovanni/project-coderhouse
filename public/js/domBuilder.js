const DOMBuilder = function(){

    //button delet
    this.buttonDelete = function(id){
        const button = document.createElement('button');
        button.textContent = "x";
        button.classList.add('btnProductDelete', 'h-5', 'w-5', 'focus:outline-none', 'bg-gray-500', 'rounded-full', 'text-white', 'font-bold', 'hover:bg-indigo-700');
        button.setAttribute('data-id', id); //asigno un id al boton, el id que recibo por parametro
        return button;
    }

}