import app from "./index";

/*============================================================ 
                        USER API
  ============================================================*/

export const UserAPI = {

  // To return user profile page
  getAllUsers() {
    app.get("/api/users").then(res => console.log(res.data));
  },


  // To create user account in our database
  addUser() {
    app.post("/api/users", { msg: "Hello Buddy" }).then(res => console.log(res.data));
  },

   // To return user profile page
  getUser(id) {
    app.get("/api/users/:id").then(res => console.log(res.data));
  },

  // Updates user profile pic using AWS
  editUser(id) {
    app.put(`/api/users/${id}`, { msg: "update profile" }).then(res => {
      console.log(res.data);
    })
  },

  // Updates user profile pic using AWS
  updateListingPhoto(id) {
    app.put(`/api/users/profilephoto/${id}`, { msg: "update profile pic" }).then(res => {
      console.log(res.data);
    })
  },

  // Strech Goal to delete user account from our database
  deleteQuery(id) {
    app.delete(`/api/users/${id}`, { msg: "I no longer want it" }).then(res => {
      console.log(res.data);
    })
  }
}


/*============================================================ 
                        LISTING API
  ============================================================*/

export const Listing = {

  // Marketplace get all listings of cars (create join table)
  getAllListing() {
    app.get("/api/listings").then(res => console.log(res.data));
  },


  // Create new listing
  postListing() {
    app.post("/api/listings", { msg: "New listing has been created" }).then(res => console.log(res.data));
  },

  // To update listing
  editListing(id) {
    app.put(`/api/listings/${id}`, { msg: "update this listing" }).then(res => {
      console.log(res.data);
    })
  },

  updatePhoto(id) {
    app.put(`/api/listings/listingphoto/${id}`, { msg: "update this listing photo" }).then(res => {
      console.log(res.data);
    })
  },

  // Delete Listing
  deleteListing(id) {
    app.delete(`/api/listings/${id}`, { msg: "delete this listing" }).then(res => {
      console.log(res.data);
    })
  },

  // Get User Listings
  getListingByUser(userId) {
    app.get(`/api/listings/user/${userId}`).then(res => console.log(res.data));
  },

  // Get Vehicle Listings
  getListingByVehicle(make, model, year) {
    app.get(`/api/listings/vehicle/${make}/${model}/${year}`).then(res => console.log(res.data));
  }

}




/*============================================================ 
                        VEHICLE API
  ============================================================*/

export const Vehicle = {

  // Reviews get all reviews of cars
  getVehicles() {
    app.get("/api/review").then(res => console.log(res.data));
  },

  postQuery() {
    app.post("/api/vehicle/new", { msg: "Vehicle has been added" }).then(res => console.log(res.data));
  },
}



/*============================================================ 
                        REVIEW API
  ============================================================*/

export const Review = {

  // Reviews of specific car
  getCarReview(vehicleId) {
    app.get(`/api/review/${vehicleId}`).then(res => console.log(res.data));
  },

  // Reviews all reviews of cars
  getAllReviews() {
    app.get("/api/review").then(res => console.log(res.data));
  },

  //Create new review
  postReview() {
    app.post(`/api/review/new`, { msg: "Review has been added" }).then(res => console.log(res.data));
  },

  //Stretch Goal
  deleteQuery(reviewId) {
    app.delete(`/api/review/delete/${reviewId}`, { msg: "delete this review" }).then(res => {
      console.log(res.data);
    })
  },
}

/*============================================================ 
                        AUTH API
  ============================================================*/

export const Auth = {

  //
  login() {
    console.log("LOGIN ONCLICK");
    
    app.get("/auth/google/login").then(res => console.log("AUTH GET: ", res.data, res));

  },
}



/*============================================================ 
                        TEST API
  ============================================================*/

export const Test = {

  //Testing CRUD
  getResponse() {
    app.get("/api/vehicle/all").then(res => console.log(res.data));
  },

  postQuery() {
    app.post("/api/vehicle/new", { msg: "Vehicle has been added" }).then(res => console.log(res.data));
  },

  putQuery(id) {
    app.put(`/api/vehicle/update/${id}`, { msg: "update this listing" }).then(res => {
      console.log(res.data);
    })
  },

  deleteQuery(id) {
    app.delete(`/api/vehicle/delete/${id}`, { msg: "delete this listing" }).then(res => {
      console.log(res.data);
    })
  }
}

export default ".";