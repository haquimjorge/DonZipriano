const Table = require("../models/Table");

const tableControllers = {
  uploadTable: async (req, res) => {
    const { amountPeople, availability } = req.body;
    try {
      let newTable = new Table({ amountPeople, availability }).save();
      res.json({ success: true, error: null, response: newTable });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  getAllTables: async (req, res) => {
    try {
      let allTables = await Table.find();
      res.json({ success: true, error: null, response: allTables });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  modifyTable: async (req, res) => {
    const { id } = req.body;
    try {
      let updatedTable = await Table.findOneAndUpdate(
        { _id: id },
        { ...req.body }
      );
      res.json({ success: true, error: null, response: updatedTable });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  deleteTable: async (req, res) => {
    try {
      let deletedTable = await Table.findOneAndDelete({
        _id: req.params.tableId,
      });
      res.json({ success: true, error: null, response: deletedTable });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
};

module.exports = tableControllers;
