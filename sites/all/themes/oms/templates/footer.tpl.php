<footer>
  <div id="footer" class="footer">
    <div class="container">
      <div class="row">
        <?php print render($page['footer']) ?>
      </div>
    </div>
  </div>
  <?php
  if($page['footer_bottom']){
    ?>
    <div id="footer-bottom" class="footer-bottom">
      <div class="container">
        <?php print render($page['footer_bottom']) ?>
      </div>
    </div>
  <?php
  }
  ?>
</footer>

<!--pushy menu-->
<div class="mobile-menu-container pushy pushy-left">
</div>
<div class="site-overlay"></div>
<!--!pushy menu-->

<script type="text/javascript" src="/sites/all/themes/oms/js/pushy/js/pushy.js?oxoo2i"></script>