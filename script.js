var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  document.getElementsByTagName("html")[0].style.overflow = "unset";
  document.getElementsByTagName("body")[0].style.overflow = "unset";
}
