export function limitArrayEntries(array, maxListing = 10) {
   // First 10 posts
   const numberOfListings = 10;

   console.log(maxListing);
   //  Sending out 10 new posts
   const minListing = maxListing - numberOfListings;

   if (numberOfListings === maxListing) {
      const first10Listings = array.slice(0, numberOfListings);
      return first10Listings;
   } else {
      const next10Listings = array.slice(minListing, maxListing);
      return next10Listings;
   }
}