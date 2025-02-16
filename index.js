const myrow= document.querySelector("ol");



myrow.addEventListener("dblclick", ()=>{
                           event.target.style.color=     ( function getRandomHSLColor() {
                               let r = Math.floor(Math.random() * 256);
                               let g = Math.floor(Math.random() * 256);
                               let b = Math.floor(Math.random() * 256);
                               return `rgb(${r}, ${g}, ${b})`;
    }) ();



} );
