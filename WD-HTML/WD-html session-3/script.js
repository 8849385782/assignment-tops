/* ===========================================
   script.js
   Shared validation script for all pages.
   Detects which page is loaded (by checking
   for a unique element id) and runs the
   matching validation check, logging a
   success/warning message to the console.
=========================================== */

window.addEventListener('DOMContentLoaded', function () {

  // ---- Home page (index.html) ----
  const homeLinks = document.querySelectorAll('.list-group-item');
  if (homeLinks.length === 5 && document.title.includes('Home')) {
    console.log('%cHome page loaded successfully. All 5 demo links found.', 'color: green; font-weight: bold;');
  }

  // ---- Course Schedule Table (course-schedule.html) ----
  const scheduleTable = document.getElementById('scheduleTable');
  if (scheduleTable) {
    const rows = scheduleTable.querySelectorAll('tr');
    const caption = scheduleTable.querySelector('caption');
    if (rows.length === 6 && caption) {
      console.log('%cCourse Schedule Table loaded successfully with caption and ' + rows.length + ' rows.', 'color: green; font-weight: bold;');
    } else {
      console.warn('Validation warning: Course Schedule table structure incomplete.');
    }
  }

  // ---- IPL Teams Unordered List (ipl-teams.html) ----
  const iplList = document.querySelectorAll('#iplList li');
  if (iplList.length > 0) {
    if (iplList.length === 5) {
      console.log('%cIPL Teams list loaded successfully with 5 items.', 'color: green; font-weight: bold;');
    } else {
      console.warn('Validation warning: expected 5 IPL list items, found ' + iplList.length);
    }
  }

  // ---- Movies Ordered List (movies.html) ----
  const movieList = document.querySelectorAll('#movieList li');
  if (movieList.length > 0) {
    if (movieList.length === 5) {
      console.log('%cMovies list loaded successfully with 5 items in order.', 'color: green; font-weight: bold;');
    } else {
      console.warn('Validation warning: expected 5 movie list items, found ' + movieList.length);
    }
  }

  // ---- Food Delivery Apps Definition List (food-apps.html) ----
  const appTerms = document.querySelectorAll('#appList dt');
  const appDefs = document.querySelectorAll('#appList dd');
  if (appTerms.length > 0 || appDefs.length > 0) {
    if (appTerms.length === 3 && appDefs.length === 3) {
      console.log('%cFood delivery apps definition list loaded successfully.', 'color: green; font-weight: bold;');
    } else {
      console.warn('Validation warning: expected 3 dt/dd pairs, found ' + appTerms.length + ' terms and ' + appDefs.length + ' definitions.');
    }
  }

  // ---- Weekly Meal Plan Table (meal-plan.html) ----
  const mealTable = document.getElementById('mealTable');
  if (mealTable) {
    const rows = mealTable.querySelectorAll('tr');
    const caption = mealTable.querySelector('caption');
    if (rows.length === 8 && caption) {
      console.log('%cWeekly Meal Plan table loaded successfully with caption and 7 days.', 'color: green; font-weight: bold;');
    } else {
      console.warn('Validation warning: Meal Plan table structure incomplete.');
    }
  }

});
