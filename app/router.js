import { Router } from "express";
import mathsController from "./controllers/maths.js";
import cardController from "./controllers/card.js";

const router = new Router();

router.get('/randomBoolean', mathsController.randomBoolean);
router.get('/randomCard', cardController.randomCard);
router.get('/allCards', cardController.allCards);

export default router;