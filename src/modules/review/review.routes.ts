// src/modules/review/review.routes.ts

import { Router } from "express";
import { ReviewController } from "./review.controller.js";
import auth from "../../middleware/auth.middleware.js";
import { userRole } from "../../types/user.type.js";

const router = Router();

// Public route - anyone can see reviews for a tutor
router.get("/", ReviewController.listForTutor);

// Protected routes
router.use(auth());

// Student only
router.post("/", auth(userRole.STUDENT), (req, res, next) => {
  console.log("[REVIEW] POST / - Creating new review");
  console.log("[REVIEW] Student ID:", req.user?.id);
  console.log("[REVIEW] Request body:", req.body);
  console.log("[REVIEW] Timestamp:", new Date().toISOString());
  next();
}, ReviewController.create);

router.get("/my-reviews", auth(userRole.STUDENT), (req, res, next) => {
  console.log("[REVIEW] GET /my-reviews - Getting my reviews");
  console.log("[REVIEW] Student ID:", req.user?.id);
  console.log("[REVIEW] Query params:", req.query);
  console.log("[REVIEW] Timestamp:", new Date().toISOString());
  next();
}, ReviewController.listMyReviews);

export const ReviewRoutes = router;