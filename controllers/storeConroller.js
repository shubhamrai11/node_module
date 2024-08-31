const getStoreObjById = require("../functions/getStoreObjById");

const getStoreById = async (req, res) => {
  console.log("req=====>>", req);
  // get id from parameter/url
  const { id } = req.params; // destructuring
  // const id = req.params.id; // old way

  // provide id to getStoreObjById function to get store object
  const store = getStoreObjById(id);

  // send the response to the frontend
  res.status(200).json({ data: store });
}

module.exports = {
  getStoreById
};