exports.getProducts = async (req, res) => {
    try {
        res.json({"name":"Anshika"})
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};