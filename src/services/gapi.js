function loadClient(isLoadingRef) {
  window.gapi.client.setApiKey("AIzaSyA-ab8icnEfgGXU30sQehh3y4pMrdp8vWA");
  return window.gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function() {
        console.log("GAPI client loaded for API");
        isLoadingRef.value = false;
      },
      function(err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
export const LoadGapiService = isLoadingRef =>
  window.gapi.load("client", () => loadClient(isLoadingRef));
