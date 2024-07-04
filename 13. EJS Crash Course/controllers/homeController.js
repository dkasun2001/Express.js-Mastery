const homeController = (req, res) => {
  const data = {
    name: "Kasun",
  };
  res.render("index", data);
};

export { homeController };
