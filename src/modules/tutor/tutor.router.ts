// src/modules/tutor/tutor.router.ts
import { Router } from "express";
import { TutorController } from "./tutor.controller.js";
import auth from "../../middleware/auth.middleware.js";
import { userRole } from "../../types/user.type.js";

const router = Router();

// Apply TUTOR role check to all routes
router.use(auth(userRole.TUTOR));

// Profile routes
router.post("/profile", (req, res, next) => {
  console.log("[TUTOR] POST /profile - Creating tutor profile");
  console.log("[TUTOR] Tutor ID:", req.user?.id);
  console.log("[TUTOR] Request body:", req.body);
  console.log("[TUTOR] Timestamp:", new Date().toISOString());
  next();
}, TutorController.createProfile);

router.get("/profile", (req, res, next) => {
  console.log("[TUTOR] GET /profile - Getting tutor profile");
  console.log("[TUTOR] Tutor ID:", req.user?.id);
  console.log("[TUTOR] Timestamp:", new Date().toISOString());
  next();
}, TutorController.getProfile);

router.put("/profile", (req, res, next) => {
  console.log("[TUTOR] PUT /profile - Updating tutor profile");
  console.log("[TUTOR] Tutor ID:", req.user?.id);
  console.log("[TUTOR] Request body:", req.body);
  console.log("[TUTOR] Timestamp:", new Date().toISOString());
  next();
}, TutorController.updateProfile);

// Availability routes
router.get("/availability", (req, res, next) => {
  console.log("[TUTOR] GET /availability - Getting availability");
  console.log("[TUTOR] Tutor ID:", req.user?.id);
  console.log("[TUTOR] Query params:", req.query);
  console.log("[TUTOR] Timestamp:", new Date().toISOString());
  next();
}, TutorController.getAvailability);

router.post("/availability", (req, res, next) => {
  console.log("[TUTOR] POST /availability - Adding single availability slot");
  console.log("[TUTOR] Tutor ID:", req.user?.id);
  console.log("[TUTOR] Request body:", req.body);
  console.log("[TUTOR] Timestamp:", new Date().toISOString());
  next();
}, TutorController.addAvailability);

router.put("/availability", (req, res, next) => {
  console.log("[TUTOR] PUT /availability - Bulk updating all availability slots");
  console.log("[TUTOR] Tutor ID:", req.user?.id);
  console.log("[TUTOR] Request body:", req.body);
  console.log("[TUTOR] Timestamp:", new Date().toISOString());
  next();
}, TutorController.setAvailability);

router.delete("/availability/:id", (req, res, next) => {
  console.log("[TUTOR] DELETE /availability/:id - Deleting availability slot");
  console.log("[TUTOR] Availability ID:", req.params.id);
  console.log("[TUTOR] Tutor ID:", req.user?.id);
  console.log("[TUTOR] Timestamp:", new Date().toISOString());
  next();
}, TutorController.deleteAvailability);

export const TutorRoutes = router;