import React from "react";
const NavBar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <a class="navbar-brand" href="#">My Website!</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home </a>
      <a class="nav-item nav-link active" href="#">Projects</a>
      <a class="nav-item nav-link active" href="#">About Me</a>
      <a class="nav-item nav-link active" href="#">Contact! </a>
    </div>
  </div>
</nav>
  );
};
export default NavBar;