
const formMisDatos = $('#step1');
const bodyModal = $('#body-modal');
const formDomicilio = $('#form-domicilio');
const formPago = $('#form-pago')

$('body').on('click', '#button-pedir', function(){
    formMisDatos.fadeIn('hidden');
    bodyModal.addClass('hidden');
    
    const step2 =$('.step-2');
    const linteStep2 = $('.line-step-2');
    linteStep2.addClass('bg-green-500');
    step2.addClass('bg-green-500');
    step2.children('span').removeClass('text-gray-600');
    step2.children('span').addClass('text-white');
    
});

$('body').on('click', '#fin-compra', function(){
    resetCompra();
    
});

function stepPago(){
    const step3 =$('.step-3');
    const linteStep3 = $('.line-step-3');
    linteStep3.addClass('bg-green-500');
    step3.addClass('bg-green-500');
    step3.children('span').removeClass('text-gray-600');
    step3.children('span').addClass('text-white');

    formDomicilio.addClass('hidden');
    formPago.removeClass('hidden');
}

function stepFinish(){
    const step4 = $('.step-4');
    const linteStep4 = $('.line-step-4');
    linteStep4.addClass('bg-green-500');
    step4.addClass('bg-green-500');
    step4.children('span').removeClass('text-gray-600');
    step4.children('span').addClass('text-white');

    formPago.addClass('hidden');
}





$('document').ready(()=> {    
    $('#step2').hide();

    form1 = null; //variable global para almacenar el fomr validado
    form2 = null;
    form3 = null;

    $("form[name='step1']").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            apellido: {
                required: true,
                minlength: 3
            },
            dniCliente: {
                required: true,
                minlength: 7,
                number: true
            },
            telefono: {
                required: true,
                minlength: 6
            },
            email: {
                required: true,
                email: true
            }
        }, 
        messages: {
            nombre: {
                required: 'El campo es obligatorio',
                minlength: 'Ingrese al menos 3 caracteres'
            },
            apellido: {
                required: 'El campo es obligatorio',
                minlength: 'Ingrese al menos 3 caracteres'
            },
            dniCliente: {
                required: 'El campo es obligatorio',
                minlength: 'Ingrese al menos 7 caracteres',
                number: 'Debe ser un número'
            },
            telefono: {
                required: 'El campo es obligatorio',
                minlength: 'Ingrese al menos 6 caracteres'
            },
            email: {
                required: 'El campo email es obligatorio',
                email: 'Ingrese un email valido'
            },
        },
        submitHandler: (form) => {
            form1 = form; //almaceno el fomr en la variale global
            $('#step1').slideUp("slow", ()=>{
                $("#step2").slideDown("slow", () => {

                });
            });            
        }
    })

    //form 2
    $("form[name='step2']").validate({
        rules: {
            domicilio: {
                required: true,
                minlength: 5
            },
            barrio: {                
                minlength: 5
            },
            numeroDomicilio: {
                required: true,
                number: true            
            },
            piso: {                
                minlength: 1,
                number: true
            }
        }, 
        messages: {
            domicilio: {
                required: 'El campo es obligatorio',
                minlength: 'Ingrese al menos 5 caracteres'
            },
            numeroDomicilio: {
                required: 'El campo es obligatorio',
                number: 'Debe ser un número'
            },
            piso: {
                number: 'Debe ser un número'
            }          
        },
        submitHandler: (form) => {
            form2 = form;
            $('#step2').slideUp("slow", ()=>{
                $("#step3").slideDown("slow", () => {

                });
            });
            stepPago();
        }
    })

     //form pago (3)
     $("form[name='step3']").validate({
        rules: {
            dni: {
                required: true,
                minlength: 8,
                number: true
            },
            numeroTarjeta: {
                required: true,
                minlength: 16,
                maxlength: 16,
                number: true
            },
            titular: {
                required: true,
                minlength: 5
            },
            fechaExpiracion: {
                required: true,
                minlength: 4,
                number: true
            },
            codigo: {
                required: true,
                minlength: 3,
                number: true
            },
        }, 
        messages: {
            dni: {
                required: 'El campo es obligatorio',
                minlength: 'Ingrese al menos 8 caracteres',
                number: 'Debe ser un número'
            },
            numeroTarjeta: {
                required: 'El campo es obligatorio',
                minlength: 'Debe tener 16 caracteres',
                maxlength: 'Debe tener 16 caracteres',
                number: 'Debe ser un número'
            },
            titular: {
                required: 'El campo es obligatorio',
                minlength: 'Ingrese al menos 5 caracteres'
            },  
            fechaExpiracion: {
                required: 'El campo es obligatorio',
                minlength: 'Ingrese mes y año (0320)',
                number: 'Debe ser un número'
            },
            codigo: {
                required: 'El campo es obligatorio',
                minlength: 'Ingrese 3 caracteres (012)',
                number: 'Debe ser un número'
            },           
        },
        submitHandler: (form) => {
            form3 = form;
            $('#step3').slideUp("slow", ()=>{
                $("#step4").slideDown("slow", () => {                   
                    
                    const fomrFullData = {
                        nombre: form1.elements.nombre.value,
                        apellido: form1.elements.apellido.value,
                        dni: form1.elements.dniCliente.value,
                        domicilio: form2.elements.domicilio.value,
                        telefono: form1.elements.telefono.value,
                        totalPedido: totalPedido
                        
                    }                   
                    
                    resumenCompra(fomrFullData);    
                                  
                });
            });
            stepFinish();  
            
        }
    })
})

