const apiKey = "2vcJ-pHbG8XCqDR_QIuKMn6EwjZlEM1ReTdwViZi3EI6i7H6zKO4yyGhO00idkWV8GHYRLgKMaaYj3vs8x23e6j6Cxk7zEoZD30vNCDHHH_PbHt9N-XRbhcfJfl5X3Yx";

const Yelp = {
    
    search(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then((response) =>{
            return response.json();
        })
        .then((jsonResponse) =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business =>{
                    return {
                        id:business.id,
                        imageSrc: business.image_url,
                        name:business.name,
                        address:business.location.address1,
                        city:business.location.city,
                        state:business.location.state,
                        zipCode:business.location.zip_Code,
                        category:business.categories[0].title,
                        rating:business.rating,
                        reviewCount:business.review_count
                    }
                })
            }
        })
    }
};

module.exports = Yelp;