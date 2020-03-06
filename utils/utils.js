let loading_spinner;
/**
 * CSS3 animation spinner
 *
 */
export function createLoadingSpinner(container) {
  loading_spinner = document.createElement("div");
  loading_spinner.id = "egv-loading-spinner";
  loading_spinner.classList.add("lds-ring");
  let child1 = document.createElement("div");
  loading_spinner.appendChild(child1);
  let child2 = document.createElement("div");
  loading_spinner.appendChild(child2);
  let child3 = document.createElement("div");
  loading_spinner.appendChild(child3);
  let child4 = document.createElement("div");
  loading_spinner.appendChild(child4);
  container.appendChild(loading_spinner);
}

/**
 *
 *
 */
export function showLoading() {
  loading_spinner.style.display = "block";
}

/**
 *
 *
 */
export function hideLoading() {
  loading_spinner.style.display = "none";
}