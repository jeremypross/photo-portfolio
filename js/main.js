document.addEventListener('DOMContentLoaded', function(){
  console.log('js is linked!');

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
  const openNav = () => {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      // document.body.style.backgroundColor = "rgba(0,0,0,0.25)";
      document.getElementById("footer").style.display = "none";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  const closeNav = () => {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.body.style.backgroundColor = "white";
      document.getElementById("footer").style.display = "show";
  }

  document.getElementById('nav-button').addEventListener('click', function(event){
    openNav();
  });

  document.getElementById('close-btn').addEventListener('click', function(event){
    closeNav();
  });


});
