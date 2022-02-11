$(document).ready(function() {

    $('.owl-carousel').owlCarousel();

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')

    $('.modal-footer a').on('click', function(event) {
        event.preventDefault();
        alert('Produto adicionado ao carrinho');
    });

    $('#form-submit').on('click', function(event) {
        event.preventDefault();
        if ($('#email').val() != '') {
            $('#email').animate({
                opacity: "toggle",
            })
        }
    });

    function validate(elem) {
        if (elem.val() == "") {
            console.log("campo " + elem.attr('name') + " vazio");
            elem.parent().find('.text-muted').show();
            elem.addClass('invalid');
            return false
        } else {
            elem.parent().find('.text-muted').hide();
            elem.removeClass('invalid');
        }
    }

    $('.nav-modal-open').on('click', function(event) {
        event.preventDefault();
        let elemento = $(this).attr('rel');
        $('.modal-body').html($('#' + elemento).html());
        let myModal = new bootstrap.Modal($('#modelId'));
        myModal.show();
        $('.modal-header h5.modal-title').html($(this).text());
    })

    $('body').on('submit', '.modal-body .form', function(e) {
        e.preventDefault();
        const inputName = $('#nome');
        const inputEmail = $('#email');

        validate(inputName);
        validate(inputEmail);

        if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {
            console.log('verificar campos');
            return false;
        } else {
            return true;
        }
        $(this).submit();
    })

    $('body').on('blur', '#nome', function() {
        validate($(this));
    })
    $('body').on('blur', '#email', function() {
        validate($(this));
    })
    $('body').on('blur', '#date', function() {
        validate($(this));
        $(this).mask('00/00/0000');
    })
    $('body').on('focus', '#date', function() {
        $(this).datepicker();
    })
    $('body').on('blur', '#time', function() {
        validate($(this));
        $(this).mask('00:00');
    })
    $('body').on('blur', '#cep', function() {
        validate($(this));
        $(this).mask('00000-000');
    })
    $('body').on('blur', '#phone', function() {
        validate($(this));
        $(this).mask('00000-0000');
    })
    $('body').on('blur', '#cpf', function() {
        validate($(this));
        $(this).mask('000.000.000-00');
    })



})