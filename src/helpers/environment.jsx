let APIURL = "";

switch (window.location.hostname) {
  case "localhost":
  case "127.0.0.1":
    APIURL = "http://localhost:3000";
    break;
  case "fmp-2021client.herokuapp.com/":
    APIURL = "https://fmp-server2021.herokuapp.com";
}

export default APIURL;
