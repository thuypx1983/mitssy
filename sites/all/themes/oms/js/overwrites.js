Drupal.behaviors.ucCollapseBlock = {
    attach: function(context) {
        jQuery('.cart-block-title-bar:not(.ucCollapseBlock-processed)', context).addClass('ucCollapseBlock-processed').click(
            function() {
                var $items = jQuery('.block-uc-cart .content').toggleClass('collapsed');
                jQuery('.cart-block-arrow').toggleClass('arrow-down', $items.hasClass('collapsed'));
            }
        );
    }
}