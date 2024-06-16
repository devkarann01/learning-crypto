  //for side-bar or toggle-bar open  >> Start

      let headerUl = document.querySelector('header .top-bar');

      function toggleButtons() {
         let header = document.querySelector("header");
         headerUl.classList.toggle("show-ul");
         let cancel_btn = document.querySelector(".cancel-btn");
         if (!headerUl.classList.contains("show-ul")) {
         document.querySelector('.doc-overlay').remove();
         enableScroll();
         // cancel_btn.style.display="none";
         } else {
         let docOverlayDiv = document.createElement('div');
         header.appendChild(docOverlayDiv);
         docOverlayDiv.classList.add('doc-overlay');
         disableScroll();
         cancel_btn.style.display="block";
         
         docOverlayDiv.addEventListener('click', function (event) {
         headerUl.classList.remove("show-ul");
         docOverlayDiv.remove();
         enableScroll();
         cancel_btn.style.display="none";
         });
         }
      }

  //for side-bar or toggle-bar open  >> end

  // Fixed header on scrolling -->> Start

const header = document.querySelector('header');
const headerFixed = () => {
  if (window.innerWidth <= 1536 && window.scrollY > 50) {
    header.style.position = 'fixed';
    header.style.padding = '15px';
    header.style.left = '0px';
    header.style.zIndex = 100000000000000;
    header.style.width = '100%';
    header.style.background = "var('--white-color')";

    if (window.scrollY > 50) {
      header.style.top = '0px';
    }
  } else {
    header.style.position = 'relative';
    header.style.top = 'inherit';
  }
}

window.addEventListener('scroll', headerFixed);

// Fixed header on scrolling -->> End``



  //for search-bar  >> Start

 function openSearch() {
         document.getElementById("myOverlay").style.display = "block";
      }

      function closeSearch() {
         document.getElementById("myOverlay").style.display = "none";
      }

  //for search-bar  >> end


   //for going on top, if click the btn >> start

  const t = document.getElementById("onTop");
    window.onscroll = function() {
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? t.style.display = "block" : t.style.display = "none"
    }
    ,
    t.addEventListener("click", (function() {
        document.body.scrollTop = 0,
        document.documentElement.scrollTop = 0
    }
    ));

   //for going on top, if click the btn >> end
