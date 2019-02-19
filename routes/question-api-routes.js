const db = require("../models");

module.exports = function(app) {
  /* 
  FORMAT FOR QUESTION POST REQUEST
  {
    "title": "Move div to left",
    "text": "Why can't I move this div to the left ARRRRGH",
    "UserId": 1,
    "topic": 1
  }
  */
  app.post("/api/questions", (req, res) => {
    db.Question.create(req.body).then(dbQuestion => {
      res.json(dbQuestion);
    });
  });

  app.get("/api/questions", (req, res) => {
    db.Question.findAll({
      include: [db.User, db.Answer],
      order: [["createdAt", "DESC"]]
    }).then(dbQuestion => {
      res.json(dbQuestion);
    });
  });

  app.get("/api/questions/:id", (req, res) => {
    db.Question.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(dbQuestion => {
      res.json(dbQuestion);
    });
  });

  app.get("/api/questions/:topic", (req, res) => {
    db.Question.findAll({
      where: {
        topic: req.params.topic
      },
      include: [db.User],
      order: [["createdAt", "DESC"]]
    }).then(dbQuestion => {
      res.json(dbQuestion);
    });
  });

  app.delete("/api/questions/:id", (req, res) => {
    db.Question.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbQuestion => {
      res.json(dbQuestion);
    });
  });
};
