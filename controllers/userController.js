const user=[
  {id:1 , name:"shubham" },
  {id:2 , name:"virat" }
]

const getUsers = async (req,res) => {
  res.status(200).json({data:user});
}

module.exports = {
  getUsers
};