         window.onload = function() {
           var menu = document.querySelector('#menu');
           var slideMenu = document.querySelector('.slide_menu');
           var close = document.querySelector('.slide_menu .close');
           var container = document.querySelector('.container_bg_float');

           menu.onclick = function() {
             changeMenu(slideMenu, 0);
             changeBg(container,1);
             container.style.opacity = 0.4;
           }
           container.onclick = function() {
             changeBg(container,-5);
             changeMenu(slideMenu, 250);
             container.style.opacity = 0;
           }
           close.onclick = function() {
             changeBg(container,-5);
             changeMenu(slideMenu, 250);
            container.style.opacity = 0;
           }
         }