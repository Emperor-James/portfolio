/* var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    //to remove the active class name (skills)
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    // to remove the content of the active class name (skills  content)
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    //display the active color of skill link to other links
    event.currentTarget.classList.add("active-link");
  
    //display the content of experience and education
    document.getElementById(tabname).classList.add("active-tab")
}   
 
//To hide and ope side menu in smaller or mobile screen
var sidemeu = document.getElementById("sidemenu");

///*it was at 0 and the side menu was showing in css file, then i changed it to -200 so it won't show, now this function makes sure that when the hambuger icon is clicked, the ul with id name "sidemenu shows cause it is right = 0"
function openmenu(){
    sidemeu.style.right = "0";
}
//vice versa of the comment above
function closemenu(){
    sidemeu.style.right = "-200px";
}*/