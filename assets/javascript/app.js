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

    // Capture Button Click
    $("#add-search").on("click", function(event) {
        // Don't refresh the page!
        event.preventDefault();
        
        // Stores data for the most recent train
        let keyword = $(`#keyword-input`).val().trim();
            // QUESTION????????????????????????????????????????????????????
            // May need to do a split here to allow for multiple keywords??
        let location = $(`#location-input`).val().trim();
        let jobType = $(`#job-input`).val().trim();
        let company = $(`#company-input`).val().trim();
        
        // Provides initial data to Firebase database
        database.ref().push({
            keyword: keyword,
            location: location,
            jobType: jobType,
            company: company,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        }); // Closes database.ref.push function
        
        $(`#keyword-input`).val(``);
        $(`#location-input`).val(``);
        $(`#job-input`).val(``)
        $(`#company-input`).val(``)
    }); // Closes on-click function



    // displayJobs function re-renders the HTML to display the appropriate content, creates API call
    function displayJobs() {
        //$(`#jobs-view`).empty();

        //let job = $(this).attr(`data-name`)
        let queryURL = `https://authenticjobs.com/api/?api_key=25915f6b6bd9671779f4cb0d43be8b66&format=json&method=aj.jobs.search&category=3&perpage=30`;
        //`https://data.usajobs.gov/api/search?JobCategoryCode=2200&Keyword=Web Development`
        
        //`https://api.github.com/?access_token=2d5c338354b50de33dd037057119f477b4d6d73a`
        //let host = `data.usajobs.gov`;
        //let userAgent = `ethantatum81@gmail.com`;
        //let authKey = `h1Z1jDLKTLTCLTiejmf6tA+zXLn1r6tZq9O1nEZZdV4=`

        // Creates AJAX call for the specific toon button being clicked
        $.ajax({
            url: queryURL,
            method: `GET`
            //headers: {
                //"Host": host,
                //"User-Agent": userAgent,
                //"Authorization-Key": authKey
            //}
        }).then(function(response) {
            console.log(response);
            for(let i = 0; i < response.listings.listing.length; i++) {
            
                // $(`#company-name`).append(`${response.listings.listing[i].company.name}<br>`);
                // $(`#company-location`).append(`${response.listings.listing[i].company.location.name}<br>`);
                // $(`#job-type`).append(`${response.listings.listing[i].title}<br>`);
                // $(`#job-description`).append(`${response.listings.listing[i].type.name}<br>`);
                // $(`#tagline`).append(`${response.listings.listing[i].company.tagline}<br>`);

                let dataRow = `<tr><td>${response.listings.listing[i].company.name}</td><td>${response.listings.listing[i].company.location.name}</td><td>${response.listings.listing[i].title}</td><td>${response.listings.listing[i].type.name}</td><td>${response.listings.listing[i].company.tagline}</td></tr><br>`;

                $(`#job-info`).append(dataRow);
        }
            
        }); 

    } // Closes displayJobs function

    displayJobs();














}); // End of document.ready