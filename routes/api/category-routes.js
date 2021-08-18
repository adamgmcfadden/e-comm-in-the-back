const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
      },
    ],
  })
    // if no issues, respond with all category data
    .then((dbCategoryData) => res.json(dbCategoryData))
    //if errors, show error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((dbCategoryData) => {
      //if id does not exist, alert user
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      //send db response to user if exists
      res.json(dbCategoryData);
    })
    //if error, send error to user
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    //may not need this (req.body may only be required since only one attribute)
    category_name: req.body.category_name,
  })
    //send new category name to db
    .then((dbCategoryData) => res.json(dbCategoryData))
    //if error, send error to user
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      //if id does not exist, alert user
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      //update category in db if id exists
      res.json(dbCategoryData);
    })
    //if error, send error to user
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      //if id does not exist, alert user
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      //delete category from db if id exists
      res.json(dbCategoryData);
    })
    //if error, send error to user
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
