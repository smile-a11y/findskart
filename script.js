document.addEventListener('DOMContentLoaded', function() {

  // === MOBILE MENU TOGGLE ===
  var mobileToggle = document.querySelector('.mobile-toggle');
  var navLinks = document.querySelector('.nav-links');
  var navSearch = document.querySelector('.nav-search');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      var isOpen = navLinks && navLinks.style.display === 'flex';
      if (navLinks) {
        navLinks.style.display = isOpen ? 'none' : 'flex';
        if (!isOpen) {
          navLinks.style.flexDirection = 'column';
          navLinks.style.position = 'absolute';
          navLinks.style.top = '100%';
          navLinks.style.left = '0';
          navLinks.style.right = '0';
          navLinks.style.background = 'white';
          navLinks.style.padding = '20px';
          navLinks.style.borderBottom = '1px solid var(--line)';
          navLinks.style.zIndex = '99';
        }
      }
      if (navSearch) {
        navSearch.style.display = isOpen ? 'none' : 'flex';
        if (!isOpen) {
          navSearch.style.maxWidth = '100%';
          navSearch.style.margin = '0 20px 20px';
        }
      }
      this.textContent = isOpen ? '\u2630' : '\u2715';
    });
  }

  // === PRODUCT IMAGE GALLERY ===
  var thumbs = document.querySelectorAll('.thumb');
  var mainImg = document.querySelector('.main-img img');

  if (thumbs.length && mainImg) {
    thumbs.forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        thumbs.forEach(function(t) { t.classList.remove('active'); });
        this.classList.add('active');
        var img = this.querySelector('img');
        if (img) {
          mainImg.src = img.src.replace('w=200', 'w=900');
          mainImg.alt = img.alt;
        }
      });
    });
  }

  // === COLOR VARIANT SELECTION ===
  var colorGroups = document.querySelectorAll('.variant-swatches');
  colorGroups.forEach(function(group) {
    var swatches = group.querySelectorAll('.v-color');
    swatches.forEach(function(swatch) {
      swatch.addEventListener('click', function() {
        swatches.forEach(function(s) { s.classList.remove('selected'); });
        this.classList.add('selected');
      });
    });
  });

  // === FILTER SIDEBAR COLOR SWATCHES ===
  var filterSwatches = document.querySelectorAll('.color-swatches .swatch');
  filterSwatches.forEach(function(swatch) {
    swatch.addEventListener('click', function() {
      filterSwatches.forEach(function(s) { s.classList.remove('selected'); });
      this.classList.add('selected');
    });
  });

  // === TAB SWITCHING (PRODUCT PAGE) ===
  var tabHeaders = document.querySelectorAll('.tab-header');
  if (tabHeaders.length) {
    tabHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
        tabHeaders.forEach(function(h) { h.classList.remove('active'); });
        this.classList.add('active');
      });
    });
  }

  // === WISHLIST TOGGLE ===
  var wishlistBtns = document.querySelectorAll('.wishlist-btn, .btn-wishlist');
  wishlistBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.textContent.trim() === '\u2661') {
        this.textContent = '\u2665';
        this.style.color = '#C23B22';
      } else {
        this.textContent = '\u2661';
        this.style.color = '';
      }
    });
  });

  // === FILTER CHIPS (SEARCH PAGE) ===
  var chips = document.querySelectorAll('.chip');
  chips.forEach(function(chip) {
    chip.addEventListener('click', function() {
      if (this.textContent.trim() === 'All') {
        chips.forEach(function(c) { c.classList.remove('active'); });
        this.classList.add('active');
      } else {
        var allChip = document.querySelector('.chip.active');
        if (allChip && allChip.textContent.trim() === 'All') {
          allChip.classList.remove('active');
        }
        this.classList.toggle('active');
        var anyActive = document.querySelector('.chip.active');
        if (!anyActive) {
          chips[0].classList.add('active');
        }
      }
    });
  });

  // === NEWSLETTER FORM ===
  var newsForms = document.querySelectorAll('.news-form');
  newsForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var input = this.querySelector('input[type="email"]');
      var btn = this.querySelector('button');
      if (input && input.value && input.value.includes('@')) {
        btn.textContent = 'Subscribed!';
        btn.style.background = '#3E6B4F';
        input.value = '';
        var success = this.parentElement.querySelector('.news-success');
        if (success) {
          success.classList.add('show');
          success.textContent = 'Thanks for subscribing! Check your email for 20% off.';
        }
        setTimeout(function() {
          btn.textContent = 'Subscribe';
          btn.style.background = '';
        }, 3000);
      }
    });
  });

  // === CONTACT FORM ===
  var contactForms = document.querySelectorAll('.contact-form form');
  contactForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = this.querySelector('.btn-submit');
      if (btn) {
        btn.textContent = 'Message sent!';
        btn.style.background = '#3E6B4F';
        this.reset();
        setTimeout(function() {
          btn.textContent = 'Send message \u2192';
          btn.style.background = '';
        }, 3000);
      }
    });
  });

});
