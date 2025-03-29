
  const pages = document.querySelectorAll('.pagination .page');
  const pageList = [...pages].filter(p => p.dataset.page); // only numbered pages

  pages.forEach(page => {
    page.addEventListener('click', function(e) {
      const navType = this.dataset.nav;
      if (navType === 'first') {
        e.preventDefault();
        // Redirect to first page
        const firstPage = pageList[0];
        if (firstPage) {
          window.location.href = firstPage.getAttribute('href');
        }
      } else if (navType === 'last') {
        e.preventDefault();
        // Redirect to last page
        const lastPage = pageList[pageList.length - 1];
        if (lastPage) {
          window.location.href = lastPage.getAttribute('href');
        }
      }
      // No need to handle the numbered links here — let them work normally
    });
  });

  // Highlight current page based on URL
  const currentPage = window.location.pathname;
  pageList.forEach(page => {
    const link = page.getAttribute('href');
    if (link && currentPage.endsWith(link)) {
      page.classList.add('active');
    }
  });
