// Pagination is a great feature, and was one of the first parts of javascript that I came across.
// I still struggle a lot with javascript, but I find reading code like the one below helps to get
// used to it a bit more.

<nav
  aria-label="pagination navigation"
  class="MuiPagination-root Paginationstyled-sc-1w81pxb-0 kQaMPR"
  data-testid="pagination"
>
  <ul class="MuiPagination-ul">
    <li>
      <button
        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page Mui-disabled MuiPaginationItem-sizeLarge Mui-disabled"
        tabindex="-1"
        type="button"
        disabled=""
        aria-label="Go to previous page"
      >
        <svg
          class="MuiSvgIcon-root MuiPaginationItem-icon"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
        </svg>
      </button>
    </li>
    <li>
      <button
        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page Mui-selected MuiPaginationItem-sizeLarge"
        tabindex="0"
        type="button"
        aria-current="true"
        aria-label="page 1"
      >
        1<span class="MuiTouchRipple-root"></span>
      </button>
    </li>
    <li>
      <button
        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-sizeLarge"
        tabindex="0"
        type="button"
        aria-label="Go to page 2"
      >
        2<span class="MuiTouchRipple-root"></span>
      </button>
    </li>
    <li>
      <button
        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-sizeLarge"
        tabindex="0"
        type="button"
        aria-label="Go to page 3"
      >
        3<span class="MuiTouchRipple-root"></span>
      </button>
    </li>
    <li>
      <button
        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-sizeLarge"
        tabindex="0"
        type="button"
        aria-label="Go to page 4"
      >
        4<span class="MuiTouchRipple-root"></span>
      </button>
    </li>
    <li>
      <button
        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-sizeLarge"
        tabindex="0"
        type="button"
        aria-label="Go to next page"
      >
        <svg
          class="MuiSvgIcon-root MuiPaginationItem-icon"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg>
        <span class="MuiTouchRipple-root"></span>
      </button>
    </li>
  </ul>
</nav>;
