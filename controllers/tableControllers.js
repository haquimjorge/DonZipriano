const Table = require("../models/Table");

const tableControllers = {
  uploadTable: async (req, res) => {
    const { amountPeople, availability, email } = req.body;
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
    const { tableId } = req.params;
    try {
      let updatedTable = await Table.findOneAndUpdate(
        { _id: tableId },
        { ...req.body },
        {new:true}
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
  oneTable: async (req, res) => {
    try {
      let oneTable = await Table.findOne({ _id: req.params.tableId });
      res.json({ success: true, error: null, response: oneTable });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
};

module.exports = tableControllers;
