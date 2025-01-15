const mongoose = require("mongoose");

const TicketSchema = {
  name: String,
  subject: String,
  description: String,
  isOpen: Boolean,
  waitingHours: Number,
};

const TicketModel = mongoose.model(
  "tickets",
  new mongoose.Schema(TicketSchema, { timestamps: true })
);

module.exports = TicketModel;
