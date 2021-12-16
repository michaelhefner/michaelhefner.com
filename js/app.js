/********************************************************************
 * Import Statements
 *******************************************************************/

 import toggleHamburgerAnimation from "./hamburger.js";
 /********************************************************************
  * Initialize variables
  *******************************************************************/
 
 let navToggle = false;
 
 /******************************************************************
  * Show / Hide Header and Footer
  *****************************************************************/
 let timer;
 const hideTimer = () =>
     (timer = setTimeout(() => {
         document.getElementsByTagName("header")[0].style.opacity = "0";
     }, 6000));
 
 const showElements = (timeout) => {
     clearTimeout(timer);
     document.getElementsByTagName("header")[0].style.opacity = "1";
     hideTimer(timeout);
 };
 
 /******************************************************************
  * Wait for DOM to be loaded
  *****************************************************************/
 
 document.addEventListener("DOMContentLoaded", () => {
     let isMobileView = window.innerWidth < 1024;
     /******************************************************************
      * Toggle Navbar Visibility
      *****************************************************************/
 
     const toggleNav = () => {
         if (isMobileView) {
             const navbar = document.getElementById("navbar");
             navToggle = !navToggle;
             navToggle
                 ? (navbar.style.display = "flex")
                 : (navbar.style.display = "none");
             toggleHamburgerAnimation(navToggle);
         }
     };
 
     /******************************************************************
      * Start scroll listeners
      *****************************************************************/
 
     function updateSection(e) {
         startShowTimer();
         const sections = document.getElementsByTagName("section");
         const currentY =
             e.target && e.target.scrollingElement
                 ? e.target.scrollingElement.scrollTop
                 : 0;
         for (let i = 0; i < sections.length; ++i) {
             const start =
                 (sections[i].scrollHeight * (i + 1) -
                     sections[i].scrollHeight) + -200;
             const end = sections[i].scrollHeight * (i + 1) + 100;
             if (currentY > start && currentY < end) {
                 const li = document.getElementsByTagName("li")[i];
                 setSectionActive(
                     li.childNodes[0]
                 );
             }
         }
     }
 
     function startShowTimer() {
         showElements(6000);
     }
 
     function startHideTimer() {
         hideTimer();
     }
 
     /******************************************************************
      * Event Listeners
      *****************************************************************/
     
     document.addEventListener("scroll", updateSection);
     document.querySelector("ul").addEventListener("click", (e) => {
         if (e.target.localName === "a") {
             aTagClickHandler(e);
         }
     });
 
     window.addEventListener("resize", (event) => {
         isMobileView = event.target.innerWidth < 1024;
 
         if (isMobileView) {
             document.addEventListener("scrollEnd", startHideTimer);
             document.addEventListener("click", startShowTimer);
             document.addEventListener("mousemove", (event) =>
                 event.clientY < 200 ? startShowTimer() : null
             );
             document.getElementById("navbar").style.display = "none";
         } else {
             document.getElementById("navbar").style.display = "flex";
         }
     });
 
     /******************************************************************
      * Set active section
      *****************************************************************/
 
     const setSectionActive = (element) => {
         const elements = document.getElementsByTagName("a");
         for (let a of elements) {
             a.classList ? a.classList.remove("active") : null;
         }
         element.classList.add("active");
     };
 
     const aTagClickHandler = (event) => {
         event.preventDefault();
         toggleNav();
         console.log(
             document
                 .getElementById(event.target.href.substr(event.target.href.indexOf("#") + 1)));
 
         setSectionActive(event.target);
         document
             .getElementById(event.target.href.substr(event.target.href.indexOf("#") + 1))
             .scrollIntoView({behavior: "smooth"});
     };
 
     /******************************************************************
      * Hamburger for nav visibility toggle
      *****************************************************************/
 
     document
         .getElementById("hamburger")
         .addEventListener("click", toggleHamburgerAnimation);
 
     document.getElementById("hamburger").addEventListener("click", toggleNav);
 });
 