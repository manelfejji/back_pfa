const express = require("express");
const router = express.Router();
const auth = require("../middleware/authorization");
const { check, validationResult } = require("express-validator");
const gravatar= require("gravatar")
const Cours = require("../models/coursModel");
const req = require("express/lib/request");

router.post(
  "/",
  [
    auth,
    [
      check("title", "title is Required").not().isEmpty(),
      check("description", "Description is Required").not().isEmpty(),
      check("category", "Category is Required").not().isEmpty(),
      check("price", "Price is Required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { title, description, category, price, nbrvid, nbrarticle } =
        req.body;
      const newCours = new Cours({
        userId: req.user.id,
        title,
        description,
        category,
        price,
        nbrvid,
        nbrarticle,
      });
      const cours = await newCours.save();
      res.json({ cours });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error")
    }
  }
);
//get all cours
router.get("/", async(req, res) => {
  try {
      const listCours= await Cours.find();
      res.json(listCours);
      
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error") 
  }
});

router.get("/:id", async(req, res) => {
    console.log(req.params)
    try {
        const cours= await Cours.findById(req.params.id);
        if(!cours){
            return res.status(400).json({msg:'cours is not found '});
        }
        res.json(cours);
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error") 
    }
  });
module.exports = router;
