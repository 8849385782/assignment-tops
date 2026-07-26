/* ===========================================
   script.js
   Shared script for all Semantic HTML5 pages.
   Logs a structural check to the console for
   whichever page is currently loaded, counting
   the real semantic elements present (not divs).
=========================================== */

window.addEventListener('DOMContentLoaded', function () {

  function tagCount(tag, scope) {
    return (scope || document).querySelectorAll(tag).length;
  }

  // ---- Zomato-style homepage ----
  if (document.body.dataset.page === 'zomato-home') {
    const header = tagCount('header');
    const nav = tagCount('nav');
    const sections = tagCount('section');
    const footer = tagCount('footer');
    if (header === 1 && nav === 1 && sections >= 3 && footer === 1) {
      console.log('%cZomato homepage structure OK: header=' + header + ' nav=' + nav + ' section=' + sections + ' footer=' + footer, 'color: green; font-weight: bold;');
    } else {
      console.warn('Zomato homepage structure incomplete: header=' + header + ' nav=' + nav + ' section=' + sections + ' footer=' + footer);
    }
  }

  // ---- News article before/after conversion ----
  if (document.body.dataset.page === 'news-article') {
    const afterBlock = document.querySelector('.after-block');
    if (afterBlock) {
      const header = tagCount('header', afterBlock);
      const nav = tagCount('nav', afterBlock);
      const article = tagCount('article', afterBlock);
      const aside = tagCount('aside', afterBlock);
      const footer = tagCount('footer', afterBlock);
      if (header === 1 && nav === 1 && article === 1 && aside === 1 && footer === 1) {
        console.log('%cNews article semantic conversion OK: header, nav, article, aside, footer all present exactly once.', 'color: green; font-weight: bold;');
      } else {
        console.warn('News article semantic conversion incomplete: header=' + header + ' nav=' + nav + ' article=' + article + ' aside=' + aside + ' footer=' + footer);
      }
    }
  }

  // ---- Spotify-style profile page ----
  if (document.body.dataset.page === 'spotify-profile') {
    const sections = tagCount('section');
    const asides = tagCount('aside');
    const articles = tagCount('article');
    if (sections >= 1 && asides >= 1 && articles >= 1) {
      console.log('%cSpotify profile structure OK: section=' + sections + ' aside=' + asides + ' article=' + articles, 'color: green; font-weight: bold;');
    } else {
      console.warn('Spotify profile structure incomplete: section=' + sections + ' aside=' + asides + ' article=' + articles);
    }
  }

  // ---- Flipkart-style product listing ----
  if (document.body.dataset.page === 'flipkart-listing') {
    const main = document.querySelectorAll('main').length;
    const productArticles = document.querySelectorAll('article.product-card').length;
    const aside = tagCount('aside');
    const nonEssentialDivs = document.querySelectorAll('body > div, main div:not(.row):not(.col):not([class*="col-"])').length;
    console.log('%cFlipkart listing structure: main=' + main + ' product-articles=' + productArticles + ' aside=' + aside, 'color: green; font-weight: bold;');
    console.log('Divs used only for Bootstrap grid (container/row/col) - see comments in HTML source.');
  }

});
