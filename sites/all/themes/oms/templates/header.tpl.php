
<header >
  <div id="header-top">
    <div class="container">
      <div class="row">
        <?php print render($page['header_top']); ?>
      </div>
    </div>
  </div>
  <div id="header">
    <div class="container">

      <div class="pull-left mobile-header">

          <div class="mobile-menu hidden-lg hidden-md ">
              <div class="hotline-mobile">
                  <span><?php echo t('Hotline 123 456 789')?></span>
              </div>
              <div class="">
                  <div class="menu-btn">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </div>
                  <div class="search-icon">
                      <span class="glyphicon glyphicon-search"></span>
                  </div>
              </div>

          </div>
      </div>
      <div class="pull-right hidden-sm hidden-xs">
        <nav id="navigation" class="clearfix" role="navigation">
          <div id="main-menu">
            <?php
            if (module_exists('i18n_menu')) {
              $main_menu_tree = i18n_menu_translated_tree(variable_get('menu_main_links_source', 'main-menu'));
            } else {
              $main_menu_tree = menu_tree(variable_get('menu_main_links_source', 'main-menu'));
            }
            print drupal_render($main_menu_tree);
            ?>
          </div>
        </nav><!-- end main-menu -->
      </div>
    </div>
  </div>
</header>

<?php print render($page['header']); ?>

<?php print $messages; ?>
<div class="clearfix"></div>