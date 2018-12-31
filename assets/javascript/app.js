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
        $(`#job-info`).empty();
        
        // Captures the values users selected in the form
        let category = $(`#category-input`).val();
        console.log(category);
        let jobType = $(`#job-type-input`).val();
        console.log(jobType);
        
        // Create AJAX call based on user inut
        let queryURL = `https://authenticjobs.com/api/?api_key=25915f6b6bd9671779f4cb0d43be8b66&format=json&method=aj.jobs.search&category=${category}&type=${jobType}&perpage=30`;

        $.ajax({
            url: queryURL,
            method: `GET`

        }).then(function(response) {
            console.log(response);
            if(response.listings.listing.length === 0) {
                $(`#job-info`).append(`<tr><td>No Part-Time Jobs Available in this Category...Try Selecting Full-Time Jobs or a Different Category!</td></tr>`);
            } else {
            for(let i = 0; i < response.listings.listing.length; i++) {
                let taglineObj = response.listings.listing[i].company.tagline;
                let tagline;
                    if(taglineObj === undefined) {
                        tagline = `<em>None listed</em>`;
                         
                    } else {
                        tagline = taglineObj;
                    }

                let locationObj = response.listings.listing[i].company.location;
                let location;
                    if(locationObj === undefined) {
                        location = `<em>Multiple locations available</em>`;
                         
                    } else {
                        location = response.listings.listing[i].company.location.name;
                    }
                    

                let dataRow = `<tr><td>${response.listings.listing[i].company.name}</td><td id="location-input">${location}</td><td>${response.listings.listing[i].title}</td><td>${response.listings.listing[i].type.name}</td><td>${tagline}</td><td><button class="bg-info text-white specific-job" id="${response.listings.listing[i].company.location.city}">Find Out More!</button></td></tr>`;
                
                $(`#job-info`).append(dataRow);
                //$(`#job-info`);
            }
        } 
    });

    }); // Closes on-click function

    // Capture 'more info' button click
    $("#job-info").on("click", ('.specific-job'), function(event) {
        // Don't refresh the page!
        event.preventDefault();

        let city = $(this).attr('id');
        console.log(city);

        var image = $(`<img class="map" src='https://maps.googleapis.com/maps/api/staticmap?center=${city}&zoom=10&size=600x300&maptype=roadmap&key=AIzaSyCPpsNM_ZFTCJH9aNrS-mWO4D8t_FHDh4k'>`);

        $('#job-info').append(image);

     }); // Closes 'more info' on-click function


    
    // Provides initial data to Firebase database
    // database.ref().push({
    //     keyword: keyword,
    //     location: location,
    //     jobType: jobType,
    //     company: company,
    //     dateAdded: firebase.database.ServerValue.TIMESTAMP
    // }); // Closes database.ref.push function
    
    // $(`#keyword-input`).val(``);
    // $(`#location-input`).val(``);
    // $(`#job-input`).val(``)
    // $(`#company-input`).val(``)


    // displayJobs function re-renders the HTML to display the appropriate content, creates API call
    // function displayJobs() {
    //     //$(`#jobs-view`).empty();

    //     //let job = $(this).attr(`data-name`)
    //     let queryURL = `https://authenticjobs.com/api/?api_key=25915f6b6bd9671779f4cb0d43be8b66&format=json&method=aj.jobs.search&category=4&perpage=30`;
        
    //     //`https://data.usajobs.gov/api/search?JobCategoryCode=2200&Keyword=web develop&PositionSchedule=1&WhoMayApply=public&HiringPath=public;graduates&ResultsPerPage=15`
        
    //     //`https://api.github.com/?access_token=2d5c338354b50de33dd037057119f477b4d6d73a`
    //     //let host = `data.usajobs.gov`;
    //     //let userAgent = `ethantatum81@gmail.com`;
    //     //let authKey = `h1Z1jDLKTLTCLTiejmf6tA+zXLn1r6tZq9O1nEZZdV4=` 

    //     // Creates AJAX call for the specific toon button being clicked
    //     $.ajax({
    //         url: queryURL,
    //         method: `GET`,
    //         //headers: {
    //             //"Host": host,
    //             //"User-Agent": userAgent,
    //             //"Authorization-Key": authKey
    //         //}
    //     }).then(function(response) {
    //         console.log(response);
    //         for(let i = 0; i < response.listings.listing.length; i++) {
            
    //             let taglineObj = response.listings.listing[i].company.tagline;
    //             let tagline;
    //                 if(taglineObj === undefined) {
    //                     tagline = `<em>None listed</em>`;
                         
    //                 } else {
    //                     tagline = taglineObj;
    //                 }
                    
    //             let dataRow = `<tr><td>${response.listings.listing[i].company.name}</td><td>${response.listings.listing[i].company.location.name}</td><td>${response.listings.listing[i].title}</td><td>${response.listings.listing[i].type.name}</td><td>${tagline}</td><td><button class="bg-info text-white" id="specific-job">Find Out More!</button></td></tr>`;

    //             $(`#job-info`).append(dataRow);
    //     }
            
    //     }); 

    // } // Closes displayJobs function

    //displayJobs();














});