const Items = require('../models/Items')
const JsonSearch = require('search-array').default

const getItems = async (req, res) => {

    const { keySearch } = req.body;

    if (keySearch) {

        const searcher = new JsonSearch(Items.LtsItem)
        let foundObjects = searcher.query(keySearch)

        if (foundObjects) {
            return res.status(200).json({ foundObjects })
        }
        else
            return res.status(400).json({ mess: "Khong tim thay" })
    }
    else {
        return res.status(400).json({ mess: "Khong hop le" });
    }

}

module.exports = { getItems }