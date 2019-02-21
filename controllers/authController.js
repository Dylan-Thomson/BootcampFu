let authController = module.exports;

authController.signup = (req, res) => {
  // console.log(req.body);
  res.render("signup", { style: "signup.css" });
};

authController.signin = (req, res) => {
  // console.log(req.body);
  res.render("signin", { style: "signin.css" });
};

authController.dashboard = (req, res) => {
  res.render("dashboard", { style: "dashboard.css" });
};

authController.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
