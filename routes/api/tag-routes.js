const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");
const { tableName } = require("../../models/Product");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
      },
    ],
  })
    //send all tag along with associated product_id to user
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      //if error, send error to user
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
      },
    ],
  })
    .then((dbTagData) => {
      //if no tag with id, alert user and return
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      }
      //send chosen tag information and associated product_id to user
      res.json(dbTagData);
    })
    //if error, send error to user
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    //may only need req.body since only one parameter
    tag_name: req.body.tag_name,
  })
    //send new tag to db
    .then((dbTagData) => res.json(dbTagData))
    //if error, send error to user
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      //if no tag with id, alert user and return
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      }
      //send updated tag_name to db
      res.json(dbTagData);
    })
    //if error, send error to user
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      //if no tag with id, alert user and return
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      }
      //delete selected tag from db
      res.json(dbTagData);
    })
    //if error, send error to user
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
