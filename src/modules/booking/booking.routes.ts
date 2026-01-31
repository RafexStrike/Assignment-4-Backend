import { Router } from "express";
import { BookingController } from "./booking.controller.js";
import auth from "../../middleware/auth.middleware.js";
import { userRole } from "../../types/user.type.js";

const router = Router();

// All routes require authentication
router.use(auth());

// Student routes
router.post("/", auth(userRole.STUDENT), (req, res, next) => {
  console.log("[BOOKING] POST / - Creating new booking");
  console.log("[BOOKING] Student ID:", req.user?.id);
  console.log("[BOOKING] Request body:", req.body);
  console.log("[BOOKING] Timestamp:", new Date().toISOString());
  next();
}, BookingController.create);

// Both Student and Tutor can view their bookings
router.get("/", (req, res, next) => {
  console.log("[BOOKING] GET / - Listing bookings");
  console.log("[BOOKING] User ID:", req.user?.id);
  console.log("[BOOKING] User Role:", req.user?.role);
  console.log("[BOOKING] Query params:", req.query);
  console.log("[BOOKING] Timestamp:", new Date().toISOString());
  next();
}, BookingController.list);

router.get("/:id", (req, res, next) => {
  console.log("[BOOKING] GET /:id - Getting booking details");
  console.log("[BOOKING] Booking ID:", req.params.id);
  console.log("[BOOKING] User ID:", req.user?.id);
  console.log("[BOOKING] User Role:", req.user?.role);
  console.log("[BOOKING] Timestamp:", new Date().toISOString());
  next();
}, BookingController.getOne);

// Student cancel
router.patch("/:id/cancel", auth(userRole.STUDENT), (req, res, next) => {
  console.log("[BOOKING] PATCH /:id/cancel - Cancelling booking");
  console.log("[BOOKING] Booking ID:", req.params.id);
  console.log("[BOOKING] Student ID:", req.user?.id);
  console.log("[BOOKING] Request body:", req.body);
  console.log("[BOOKING] Timestamp:", new Date().toISOString());
  next();
}, BookingController.cancel);

// Tutor complete (mark as done)
router.patch("/:id/complete", auth(userRole.TUTOR), (req, res, next) => {
  console.log("[BOOKING] PATCH /:id/complete - Completing booking");
  console.log("[BOOKING] Booking ID:", req.params.id);
  console.log("[BOOKING] Tutor ID:", req.user?.id);
  console.log("[BOOKING] Request body:", req.body);
  console.log("[BOOKING] Timestamp:", new Date().toISOString());
  next();
}, BookingController.complete);

export const BookingRoutes = router;