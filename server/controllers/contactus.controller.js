// controllers/contactController.js
const contact = require('../models/contactus.models');
exports.createContact = async (req, res) => {
 try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
 } catch (error) {
    res.status(500).json({ message: 'Failed to send message.' });
 }
};
