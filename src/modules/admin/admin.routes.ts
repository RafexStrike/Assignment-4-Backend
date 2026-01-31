// src/modules/admin/admin.routes.ts


import { Router } from "express";
import { AdminController } from "./admin.controller.js";
import auth from "../../middleware/auth.middleware.js";
import { userRole } from "../../types/user.type.js";

const router = Router();

// Apply ADMIN role check to all routes
router.use(auth(userRole.ADMIN));

// Dashboard
router.get("/dashboard", (req, res, next) => {
  console.log("[ADMIN] GET /dashboard - Admin accessing dashboard");
  console.log("[ADMIN] User ID:", req.user?.id);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.getDashboard);

// User Management
router.get("/users", (req, res, next) => {
  console.log("[ADMIN] GET /users - Listing all users");
  console.log("[ADMIN] Query params:", req.query);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.listUsers);

router.get("/users/:id", (req, res, next) => {
  console.log("[ADMIN] GET /users/:id - Getting user details");
  console.log("[ADMIN] User ID:", req.params.id);
  console.log("[ADMIN] Admin ID:", req.user?.id);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.getUser);

router.patch("/users/:id/ban", (req, res, next) => {
  console.log("[ADMIN] PATCH /users/:id/ban - Banning user");
  console.log("[ADMIN] Target User ID:", req.params.id);
  console.log("[ADMIN] Admin ID:", req.user?.id);
  console.log("[ADMIN] Request body:", req.body);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.banUser);

// Booking Oversight
router.get("/bookings", (req, res, next) => {
  console.log("[ADMIN] GET /bookings - Listing all bookings");
  console.log("[ADMIN] Query params:", req.query);
  console.log("[ADMIN] Admin ID:", req.user?.id);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.listBookings);

router.patch("/bookings/:id/cancel", (req, res, next) => {
  console.log("[ADMIN] PATCH /bookings/:id/cancel - Cancelling booking");
  console.log("[ADMIN] Booking ID:", req.params.id);
  console.log("[ADMIN] Admin ID:", req.user?.id);
  console.log("[ADMIN] Request body:", req.body);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.cancelBooking);

// Category Management
router.get("/categories", (req, res, next) => {
  console.log("[ADMIN] GET /categories - Listing all categories");
  console.log("[ADMIN] Admin ID:", req.user?.id);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.listCategories);

router.post("/categories", (req, res, next) => {
  console.log("[ADMIN] POST /categories - Creating new category");
  console.log("[ADMIN] Request body:", req.body);
  console.log("[ADMIN] Admin ID:", req.user?.id);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.createCategory);

router.put("/categories/:id", (req, res, next) => {
  console.log("[ADMIN] PUT /categories/:id - Updating category");
  console.log("[ADMIN] Category ID:", req.params.id);
  console.log("[ADMIN] Request body:", req.body);
  console.log("[ADMIN] Admin ID:", req.user?.id);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.updateCategory);

router.delete("/categories/:id", (req, res, next) => {
  console.log("[ADMIN] DELETE /categories/:id - Deleting category");
  console.log("[ADMIN] Category ID:", req.params.id);
  console.log("[ADMIN] Admin ID:", req.user?.id);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.deleteCategory);

// Featured Tutor Management
router.get("/featured-tutors", (req, res, next) => {
  console.log("[ADMIN] GET /featured-tutors - Getting featured tutors");
  console.log("[ADMIN] Admin ID:", req.user?.id);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.getFeatured);

router.patch("/tutors/:id/featured", (req, res, next) => {
  console.log("[ADMIN] PATCH /tutors/:id/featured - Toggling featured status");
  console.log("[ADMIN] Tutor ID:", req.params.id);
  console.log("[ADMIN] Admin ID:", req.user?.id);
  console.log("[ADMIN] Request body:", req.body);
  console.log("[ADMIN] Timestamp:", new Date().toISOString());
  next();
}, AdminController.toggleFeatured);

export const AdminRoutes = router;