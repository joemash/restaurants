import express from "express";
import RestaurantsCtrl from "./restaurant.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router();

router.route("/").get( RestaurantsCtrl.apiGetRestaurants)
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines)


router.route("/review-new").post(ReviewsCtrl.apiPostReview)
router.route("/review-edit").put(ReviewsCtrl.apiUpdateReview)
router.route("/review-delete/:id").delete(ReviewsCtrl.apiDeleteReview)

export default router;