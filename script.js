$(function() {
    // Verificar si el sobre no tiene la clase 'open'
    if (!$('.envelope').hasClass('open')) {
        // Añadir funcionalidad de clic
        $('.envelope').click(function() {
            $(this).removeClass('new').addClass('open');
        });
    }
});