window.onload = function() {
          document.getElementById("second-btn").onmouseover = function()
          {
          		this.classList.add('btn-success');
              this.classList.remove('btn-dark');
              this.textContent = 'Si';
              let buttonYes = document.getElementById("first-btn");
              buttonYes.classList.remove('btn-success');
              buttonYes.classList.add('btn-dark');
              buttonYes.textContent = 'No'
          }

          document.getElementById("second-btn").onmouseout = function()
          { 
              this.classList.remove('btn-success');
              this.classList.add('btn-dark');
              this.textContent = 'No';
                let buttonYes = document.getElementById("first-btn");
             buttonYes.classList.add('btn-success');
              buttonYes.classList.remove('btn-dark');
              buttonYes.textContent = 'Si';
          }
          }
          
function sayYes(){
	document.getElementById("gifLove").style.visibility = "visible";
} 
