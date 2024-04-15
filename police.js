// Fetch and insert the content inside the 'navbar-container'
        fetch('/home.html')
            .then(response => response.text())
            .then(data => {
                // Create a temporary element to parse the HTML
                const tempElement = document.createElement('div');
                tempElement.innerHTML = data;
                // Select the content inside the 'navbar-container'
                const navbarContainer = tempElement.querySelector('#header');
                // Insert the selected content into the start of the body
                document.body.insertAdjacentHTML('afterbegin', navbarContainer.outerHTML);
            });

        fetch('/home.html')
            .then(response => response.text())
            .then(data => {
                // Create a temporary element to parse the HTML
                const tempElement = document.createElement('div');
                tempElement.innerHTML = data;
                // Select the content inside the 'navbar-container'
                const navbarContainer = tempElement.querySelector('.footer');
                // Insert the selected content into end of the body
                document.body.insertAdjacentHTML('beforeend', navbarContainer.outerHTML);
            });







            // Add this script at the end of the body or in the head section
      
            // Function to show the dropdownContent
            function showDropdown() {
              document.getElementById("dropdownContent").style.display = "block";
            }
      
            // Function to hide the dropdownContent after 3 seconds
            function hideDropdown() {
              setTimeout(function () {
                document.getElementById("dropdownContent").style.display = "none";
              }, 5000); // 3000 milliseconds = 3 seconds
            }
      
            // Attach the functions to the mouseover and mouseout events
            document.getElementById("service").addEventListener("mouseover", showDropdown);
            document.getElementById("service").addEventListener("mouseout", hideDropdown);
  