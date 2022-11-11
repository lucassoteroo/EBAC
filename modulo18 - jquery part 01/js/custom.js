// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function() {

    $('.owl-carousel').owlCarousel();

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')

})

$('.modal-footer a').on('click', function(event) {
    event.preventDefault();
    alert('Produto adicionado ao carrinho');
});