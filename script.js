// === PRODUCT CATALOG ===
var products = [
  { id: 1, name: "Aura Wireless Headphones", img: "https://images.pexels.com/photos/2741119/pexels-photo-2741119.jpeg?auto=compress&cs=tinysrgb&w=500", price: 89, was: 129, rating: 4.8, reviews: 212, badge: "-30%", badgeClass: "", tags: ["headphones","over-ear","wireless","noise cancelling","bluetooth","tech","audio"] },
  { id: 2, name: "Aura Buds Pro", img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500", price: 74, was: null, rating: 4.7, reviews: 188, badge: "New", badgeClass: "new", tags: ["earbuds","wireless","bluetooth","in-ear","tech","audio"] },
  { id: 3, name: "Studio One Over-Ear", img: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=500", price: 112, was: null, rating: 4.5, reviews: 64, badge: null, badgeClass: "", tags: ["headphones","over-ear","wired","studio","tech","audio"] },
  { id: 4, name: "Lumen Lite Headphones", img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500", price: 45, was: 53, rating: 4.3, reviews: 41, badge: "-15%", badgeClass: "", tags: ["headphones","wireless","compact","lightweight","tech","audio"] },
  { id: 5, name: "Pulse Sport Buds", img: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500", price: 58, was: null, rating: 4.4, reviews: 97, badge: null, badgeClass: "", tags: ["earbuds","wireless","sport","running","fitness","tech","audio"] },
  { id: 6, name: "Voyager Travel Headphones", img: "https://images.pexels.com/photos/4071888/pexels-photo-4071888.jpeg?auto=compress&cs=tinysrgb&w=500", price: 96, was: null, rating: 4.6, reviews: 53, badge: "New", badgeClass: "new", tags: ["headphones","wireless","travel","foldable","noise cancelling","tech","audio"] },
  { id: 7, name: "Apex Gaming Headset", img: "https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&w=500", price: 67, was: null, rating: 4.5, reviews: 130, badge: null, badgeClass: "", tags: ["headset","gaming","wired","microphone","tech","audio"] },
  { id: 8, name: "Essential Wireless Headphones", img: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=500", price: 28, was: 35, rating: 4.2, reviews: 29, badge: "-20%", badgeClass: "", tags: ["headphones","wireless","budget","cheap","affordable","tech","audio"] },
  { id: 9, name: "Echo Mini Smart Speaker", img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500", price: 59, was: null, rating: 4.6, reviews: 98, badge: "New", badgeClass: "new", tags: ["speaker","smart","voice assistant","bluetooth","home","tech"] },
  { id: 10, name: "Pulse Band SE", img: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500", price: 129, was: null, rating: 4.9, reviews: 340, badge: null, badgeClass: "", tags: ["smartwatch","wearable","fitness","tracker","tech"] },
  { id: 11, name: "Lumen Pro Monitor Light", img: "https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&w=500", price: 49, was: 59, rating: 4.5, reviews: 76, badge: "-15%", badgeClass: "", tags: ["desk lamp","monitor light","led","workspace","home","tech"] },
  { id: 12, name: "Snap Wireless Charger", img: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=500", price: 28, was: null, rating: 4.3, reviews: 54, badge: null, badgeClass: "", tags: ["charger","wireless","charging pad","qi","tech"] },
  { id: 13, name: "Keystroke Mini Keyboard", img: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=500", price: 95, was: null, rating: 4.6, reviews: 122, badge: null, badgeClass: "", tags: ["keyboard","mechanical","mini","compact","desk","tech"] },
  { id: 14, name: "Voltbrick 10K Power Bank", img: "https://images.pexels.com/photos/4071888/pexels-photo-4071888.jpeg?auto=compress&cs=tinysrgb&w=500", price: 32, was: 40, rating: 4.4, reviews: 67, badge: "-20%", badgeClass: "", tags: ["power bank","charger","battery","portable","travel","tech"] },
  { id: 15, name: "Nexus Smart Hub", img: "https://images.pexels.com/photos/4790268/pexels-photo-4790268.jpeg?auto=compress&cs=tinysrgb&w=500", price: 64, was: null, rating: 4.5, reviews: 91, badge: null, badgeClass: "", tags: ["smart home","hub","automation","iot","tech"] },
  { id: 16, name: "Oversized Graphic Tee", img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500", price: 32, was: null, rating: 4.6, reviews: 45, badge: "New", badgeClass: "new", tags: ["t-shirt","shirt","fashion","clothing","graphic","streetwear"] },
  { id: 17, name: "Cloudstep Running Shoes", img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500", price: 74, was: null, rating: 4.5, reviews: 120, badge: "New", badgeClass: "new", tags: ["shoes","sneakers","running","footwear","sports","fitness"] },
  { id: 18, name: "Hearth Ceramic Mug Set", img: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=500", price: 24, was: 30, rating: 4.4, reviews: 38, badge: "-20%", badgeClass: "", tags: ["mug","ceramic","kitchen","home","drinkware"] }
];

// === CATEGORY TAG MAPPING ===
var categoryTagMap = {
  'headphones': ['headphones', 'earbuds', 'headset'],
  'smart-home': ['speaker', 'smart home', 'hub'],
  'wearables': ['smartwatch', 'wearable'],
  'desk-setup': ['keyboard', 'desk lamp', 'monitor light'],
  'chargers-cables': ['charger', 'power bank', 'charging pad']
};

// === FUZZY SEARCH ===
function fuzzyMatch(query, text) {
  query = query.toLowerCase();
  text = text.toLowerCase();
  if (text.indexOf(query) !== -1) return true;
  var words = query.split(/\s+/);
  for (var i = 0; i < words.length; i++) {
    if (words[i] && text.indexOf(words[i]) !== -1) return true;
  }
  return false;
}

function levenshtein(a, b) {
  var m = a.length, n = b.length;
  var dp = [];
  for (var i = 0; i <= m; i++) { dp[i] = [i]; }
  for (var j = 0; j <= n; j++) { dp[0][j] = j; }
  for (var i = 1; i <= m; i++) {
    for (var j = 1; j <= n; j++) {
      var cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}

function searchScore(query, product) {
  var q = query.toLowerCase();
  var name = product.name.toLowerCase();
  var tags = product.tags.join(" ").toLowerCase();
  var score = 0;
  if (name === q) return 100;
  if (name.indexOf(q) !== -1) score += 50;
  if (tags.indexOf(q) !== -1) score += 30;
  var words = q.split(/\s+/);
  for (var i = 0; i < words.length; i++) {
    if (words[i] && name.indexOf(words[i]) !== -1) score += 20;
    if (words[i] && tags.indexOf(words[i]) !== -1) score += 10;
  }
  if (score === 0) {
    var nameWords = name.split(/\s+/);
    for (var i = 0; i < nameWords.length; i++) {
      for (var j = 0; j < words.length; j++) {
        if (words[j] && nameWords[i]) {
          var dist = levenshtein(words[j], nameWords[i]);
          if (dist <= 2) score += 15 - dist * 5;
        }
      }
    }
  }
  if (score === 0) {
    for (var i = 0; i < words.length; i++) {
      var tagArr = tags.split(/\s+/);
      for (var j = 0; j < tagArr.length; j++) {
        if (words[i] && tagArr[j]) {
          var dist = levenshtein(words[i], tagArr[j]);
          if (dist <= 2) score += 10 - dist * 4;
        }
      }
    }
  }
  return score;
}

function searchProducts(query) {
  if (!query || !query.trim()) return [];
  var scored = [];
  for (var i = 0; i < products.length; i++) {
    var s = searchScore(query, products[i]);
    if (s > 0) {
      scored.push({ product: products[i], score: s });
    }
  }
  scored.sort(function(a, b) { return b.score - a.score; });
  var results = [];
  for (var i = 0; i < scored.length; i++) {
    results.push(scored[i].product);
  }
  if (results.length === 0) {
    var q = query.toLowerCase();
    for (var i = 0; i < products.length; i++) {
      if (fuzzyMatch(q, products[i].name) || fuzzyMatch(q, products[i].tags.join(" "))) {
        results.push(products[i]);
      }
    }
  }
  return results;
}

function renderProductCard(p) {
  var badgeHtml = p.badge ? '<span class="prod-badge' + (p.badgeClass ? ' ' + p.badgeClass : '') + '">' + p.badge + '</span>' : '';
  var wasHtml = p.was ? '<span class="was">$' + p.was + '</span>' : '';
  var stars = '';
  var full = Math.floor(p.rating);
  var half = p.rating % 1 >= 0.5 ? 1 : 0;
  for (var i = 0; i < full; i++) stars += '\u2605';
  for (var i = 0; i < half; i++) stars += '\u2605';
  for (var i = full + half; i < 5; i++) stars += '\u2606';
  return '<a href="product" class="prod-card">' +
    '<div class="prod-img">' + badgeHtml +
    '<span class="wishlist-btn">&#9825;</span>' +
    '<img src="' + p.img + '" alt="' + p.name + '">' +
    '</div>' +
    '<div class="prod-rating">' + stars + ' <strong>' + p.rating + '</strong> (' + p.reviews + ')</div>' +
    '<h3>' + p.name + '</h3>' +
    '<div class="prod-price"><span class="now">$' + p.price + '</span>' + wasHtml + '</div>' +
    '</a>';
}

// === SEARCH PAGE INIT ===
function initSearchPage() {
  var searchHead = document.querySelector('.search-head');
  if (!searchHead) return;
  var params = new URLSearchParams(window.location.search);
  var query = params.get("q") || "";
  var searchInput = document.querySelector(".nav-search input");
  if (searchInput) searchInput.value = query;
  var titleEl = document.querySelector(".search-head h1");
  var countEl = document.querySelector(".result-count");
  var gridEl = document.querySelector(".prod-grid");
  if (!gridEl) return;
  if (!query.trim()) {
    if (titleEl) titleEl.innerHTML = 'Search Findskart <span>&mdash; enter a term above</span>';
    if (countEl) countEl.textContent = '';
    gridEl.innerHTML = "";
    return;
  }
  var results = searchProducts(query);
  if (titleEl) titleEl.innerHTML = '"' + query.replace(/</g, "&lt;") + '" <span>&mdash; ' + results.length + ' result' + (results.length !== 1 ? 's' : '') + '</span>';
  if (countEl) countEl.textContent = 'Showing ' + results.length + ' result' + (results.length !== 1 ? 's' : '');
  document.title = 'Search: "' + query + '" — Findskart';
  if (results.length === 0) {
    gridEl.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;"><h2 style="font-family:var(--font-display);font-size:24px;text-transform:uppercase;margin-bottom:12px;">No results found</h2><p style="color:var(--gray);font-size:15px;margin-bottom:24px;">Try a different search term, or browse by category.</p><a href="category" style="font-family:var(--font-head);font-weight:600;font-size:14px;border-bottom:2px solid var(--black);padding-bottom:2px;">Browse all products &rarr;</a></div>';
  } else {
    var html = "";
    for (var i = 0; i < results.length; i++) {
      html += renderProductCard(results[i]);
    }
    gridEl.innerHTML = html;
    var newBtns = gridEl.querySelectorAll(".wishlist-btn");
    newBtns.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.textContent.trim() === "\u2661") {
          this.textContent = "\u2665";
          this.style.color = "#C23B22";
        } else {
          this.textContent = "\u2661";
          this.style.color = "";
        }
      });
    });
  }
}

// === NAV SEARCH BAR ===
function initNavSearch() {
  var forms = document.querySelectorAll(".nav-search");
  forms.forEach(function(form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      var input = this.querySelector("input");
      if (input && input.value.trim()) {
        window.location.href = "/search?q=" + encodeURIComponent(input.value.trim());
      }
    });
    var input = form.querySelector("input");
    if (input) {
      input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
          e.preventDefault();
          form.dispatchEvent(new Event("submit"));
        }
      });
    }
  });
}

// === CATEGORY PAGE INFINITE SCROLL ===
var categoryState = {
  allProducts: [],
  filteredProducts: [],
  displayedIds: {},
  page: 0,
  perPage: 9,
  isLoading: false,
  allLoaded: false,
  totalProducts: 0
};

function getCategoriesFromURL() {
  var params = new URLSearchParams(window.location.search);
  var cat = params.get('category');
  if (!cat) return [];
  return cat.split(',').filter(function(c) { return c && categoryTagMap[c]; });
}

function syncCategoriesToURL(categories) {
  var url = new URL(window.location);
  if (categories.length === 0) {
    url.searchParams.delete('category');
  } else {
    url.searchParams.set('category', categories.join(','));
  }
  window.history.replaceState({}, '', url);
}

function setCheckboxStates(categories) {
  var checkboxes = document.querySelectorAll('.filter-group[data-filter="category"] input[type="checkbox"]');
  checkboxes.forEach(function(cb) {
    cb.checked = categories.indexOf(cb.dataset.category) !== -1;
  });
}

function filterProductsByCategory(allProducts, categories) {
  if (categories.length === 0) return allProducts.slice();
  var matchTags = [];
  categories.forEach(function(cat) {
    var tags = categoryTagMap[cat];
    if (tags) matchTags = matchTags.concat(tags);
  });
  return allProducts.filter(function(p) {
    var productTags = p.tags.join(' ').toLowerCase();
    for (var i = 0; i < matchTags.length; i++) {
      if (productTags.indexOf(matchTags[i]) !== -1) return true;
    }
    return false;
  });
}

function updateCategoryCounts() {
  var pageHeadCount = document.querySelector('.page-head .result-count');
  if (pageHeadCount) pageHeadCount.textContent = categoryState.totalProducts + ' products';
  var toolbarCount = document.querySelector('.toolbar .result-count');
  if (toolbarCount) {
    var displayed = Object.keys(categoryState.displayedIds).length;
    toolbarCount.textContent = 'Showing 1\u2013' + displayed + ' of ' + categoryState.totalProducts;
  }
}

function initCategoryPage() {
  var grid = document.querySelector('.prod-grid');
  var sentinel = document.getElementById('scroll-sentinel');
  if (!grid || !sentinel) return;

  var categories = getCategoriesFromURL();
  setCheckboxStates(categories);

  categoryState.allProducts = products.slice();
  categoryState.filteredProducts = filterProductsByCategory(products, categories);
  categoryState.displayedIds = {};
  categoryState.page = 0;
  categoryState.allLoaded = false;
  categoryState.isLoading = false;
  categoryState.totalProducts = categoryState.filteredProducts.length;

  grid.innerHTML = '';
  updateCategoryCounts();
  loadMoreProducts();

  var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting && !categoryState.isLoading && !categoryState.allLoaded) {
      loadMoreProducts();
    }
  }, { rootMargin: '400px' });
  observer.observe(sentinel);
}

function loadMoreProducts() {
  if (categoryState.isLoading || categoryState.allLoaded) return;

  categoryState.isLoading = true;
  var loader = document.getElementById('scroll-loader');
  if (loader) loader.style.display = 'flex';

  var sentinel = document.getElementById('scroll-sentinel');
  if (sentinel) sentinel.style.display = 'none';

  setTimeout(function() {
    var start = categoryState.page * categoryState.perPage;
    var end = start + categoryState.perPage;
    var newProducts = categoryState.filteredProducts.slice(start, end);

    var grid = document.querySelector('.prod-grid');

    newProducts.forEach(function(p) {
      if (!categoryState.displayedIds[p.id]) {
        categoryState.displayedIds[p.id] = true;
        var temp = document.createElement('div');
        temp.innerHTML = renderProductCard(p);
        var card = temp.firstElementChild;
        grid.appendChild(card);

        var wishBtn = card.querySelector('.wishlist-btn');
        if (wishBtn) {
          wishBtn.addEventListener('click', function(e) {
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
        }
      }
    });

    categoryState.page++;
    categoryState.isLoading = false;
    if (loader) loader.style.display = 'none';

    var toolbarCount = document.querySelector('.toolbar .result-count');
    var displayed = Object.keys(categoryState.displayedIds).length;
    if (toolbarCount) {
      toolbarCount.textContent = 'Showing 1\u2013' + displayed + ' of ' + categoryState.totalProducts;
    }

    if (displayed >= categoryState.totalProducts) {
      categoryState.allLoaded = true;
      var endMsg = document.getElementById('scroll-end');
      if (endMsg) endMsg.style.display = 'block';
    } else {
      if (sentinel) sentinel.style.display = 'block';
    }
  }, 400);
}

// === FILTER SIDEBAR INTERACTIVITY ===
function getSelectedCategories() {
  var selected = [];
  var checkboxes = document.querySelectorAll('.filter-group[data-filter="category"] input[type="checkbox"]');
  checkboxes.forEach(function(cb) {
    if (cb.checked && cb.dataset.category) selected.push(cb.dataset.category);
  });
  return selected;
}

function applyCategoryFilter() {
  var categories = getSelectedCategories();
  categoryState.filteredProducts = filterProductsByCategory(categoryState.allProducts, categories);
  categoryState.displayedIds = {};
  categoryState.page = 0;
  categoryState.allLoaded = false;
  categoryState.isLoading = false;
  categoryState.totalProducts = categoryState.filteredProducts.length;

  var grid = document.querySelector('.prod-grid');
  if (grid) grid.innerHTML = '';

  var endMsg = document.getElementById('scroll-end');
  if (endMsg) endMsg.style.display = 'none';

  var sentinel = document.getElementById('scroll-sentinel');
  if (sentinel) sentinel.style.display = 'block';

  syncCategoriesToURL(categories);
  updateCategoryCounts();
  loadMoreProducts();
}

function initFilters() {
  var categoryGroup = document.querySelector('.filter-group[data-filter="category"]');
  if (categoryGroup) {
    var checkboxes = categoryGroup.querySelectorAll('input[type="checkbox"]');
    var clearLink = categoryGroup.querySelector('.clear-filters');

    function updateCategoryClearState() {
      if (!clearLink) return;
      var anyChecked = false;
      checkboxes.forEach(function(cb) { if (cb.checked) anyChecked = true; });
      clearLink.style.opacity = anyChecked ? '1' : '0.4';
      clearLink.style.pointerEvents = anyChecked ? 'auto' : 'none';
    }

    checkboxes.forEach(function(cb) {
      cb.addEventListener('change', function() {
        var label = this.closest('.filter-option');
        if (label) {
          if (this.checked) {
            label.classList.add('active');
          } else {
            label.classList.remove('active');
          }
        }
        updateCategoryClearState();
        applyCategoryFilter();
      });
      var label = cb.closest('.filter-option');
      if (label && cb.checked) label.classList.add('active');
    });

    if (clearLink) {
      clearLink.addEventListener('click', function(e) {
        e.preventDefault();
        checkboxes.forEach(function(cb) {
          cb.checked = false;
          var label = cb.closest('.filter-option');
          if (label) label.classList.remove('active');
        });
        updateCategoryClearState();
        applyCategoryFilter();
      });
    }

    updateCategoryClearState();
  }

  // Other filter groups (Brand, Rating) - active state only for now
  var otherGroups = document.querySelectorAll('.filter-group:not([data-filter])');
  otherGroups.forEach(function(group) {
    var checkboxes = group.querySelectorAll('input[type="checkbox"]');
    var clearLink = group.querySelector('.clear-filters');

    if (!checkboxes.length) return;

    function updateClearState() {
      if (!clearLink) return;
      var anyChecked = false;
      checkboxes.forEach(function(cb) { if (cb.checked) anyChecked = true; });
      clearLink.style.opacity = anyChecked ? '1' : '0.4';
      clearLink.style.pointerEvents = anyChecked ? 'auto' : 'none';
    }

    checkboxes.forEach(function(cb) {
      cb.addEventListener('change', function() {
        var label = this.closest('.filter-option');
        if (label) {
          if (this.checked) {
            label.classList.add('active');
          } else {
            label.classList.remove('active');
          }
        }
        updateClearState();
      });
      var label = cb.closest('.filter-option');
      if (label && cb.checked) label.classList.add('active');
    });

    if (clearLink) {
      clearLink.addEventListener('click', function(e) {
        e.preventDefault();
        checkboxes.forEach(function(cb) {
          cb.checked = false;
          var label = cb.closest('.filter-option');
          if (label) label.classList.remove('active');
        });
        updateClearState();
      });
    }

    updateClearState();
  });
}

// === HEADER ICON BUTTONS ===
function initHeaderIcons() {
  var cartBtn = document.getElementById('cart-btn');
  var accountBtn = document.getElementById('account-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', function() {
      alert('Cart coming soon!');
    });
  }
  if (accountBtn) {
    accountBtn.addEventListener('click', function() {
      alert('Account menu coming soon!');
    });
  }
}

// === MAIN ===
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

  // === INIT SEARCH ===
  initSearchPage();
  initNavSearch();
  initCategoryPage();
  initFilters();
  initHeaderIcons();

});
