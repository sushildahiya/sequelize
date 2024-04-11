var db = require('../config');
const Admin = db.admin;

module.exports.addUser = async (req, res) => {
    try {
        let data = await Admin.create({ name: 'tes12', email: 'abc@gmail.com' });
        console.log(data.dataValues)
        return res.status(200).json('User added successfully');
    } catch (error) {
        console.error('Error adding user:', error);
        return res.status(500).json('Internal Server Error');
    }
};
