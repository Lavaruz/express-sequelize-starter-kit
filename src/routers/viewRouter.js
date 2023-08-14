const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("indexJobseeker");
});
router.get("/jobseeker/job-board", (req, res) => {
  res.render("jobBoard");
});
router.get("/employer", (req, res) => {
  res.render("indexEmployer");
});
router.get("/employer/hiring", (req, res) => {
  res.render("hiringEmployer");
});

module.exports = router;
