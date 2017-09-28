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
<div class="mobile-menu-container pushy pushy-right">
</div>
<div class="site-overlay"></div>
<!--!pushy menu-->