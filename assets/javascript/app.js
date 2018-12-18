$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAtiM8ykyB5bJ1ObRUcb21xNGYkmAQskb4",
        authDomain: "projectone-10330.firebaseapp.com",
        databaseURL: "https://projectone-10330.firebaseio.com",
        projectId: "projectone-10330",
        storageBucket: "projectone-10330.appspot.com",
        messagingSenderId: "156042357943"
      };
      firebase.initializeApp(config);

    // Create a variable to reference the database
    const database = firebase.database();





    // displayJobs function re-renders the HTML to display the appropriate content, creates API call
    function displayJobs() {
        $(`#jobs-view`).empty();

        let job = $(this).attr(`data-name`)
        let queryURL = `https://authenticjobs.com/api/?api_key=25915f6b6bd9671779f4cb0d43be8b66&method=aj.${pass in search data here}`;
                    // Job (aj.jobs.get)
                    // Job Search (aj.jobs.search)
                    // Companies (aj.jobs.getCompanies)
                    // Locations (aj.jobs.getLocations)

        // Creates AJAX call for the specific toon button being clicked
        $.ajax({
            url: queryURL,
            method: `GET`
        }).then(function(response) {
            console.log(response);
        }); 

    } // Closes displayJobs function
















}); // End of document.ready