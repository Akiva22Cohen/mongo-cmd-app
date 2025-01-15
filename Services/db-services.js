const mongoose = require("mongoose");
const TicketModel = require("../models/Ticket");
require("dotenv").config(); // כדי לטעון משתנים מ-.env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

const createInitialTickets = async () => {
  const tickets = [
    {
      name: "Ticket 1",
      subject: "Issue A",
      description: "Details A",
      isOpen: true,
      waitingHours: 3,
    },
    {
      name: "Ticket 2",
      subject: "Issue B",
      description: "Details B",
      isOpen: false,
      waitingHours: 5,
    },
    {
      name: "Ticket 3",
      subject: "Issue C",
      description: "Details C",
      isOpen: true,
      waitingHours: 1,
    },
  ];

  for (const ticket of tickets) {
    const exists = await TicketModel.exists({ name: ticket.name });
    if (!exists) {
      await new TicketModel(ticket).save();
    }
  }
};

const getAllTickets = async () => {
  try {
    return await TicketModel.find();
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return [];
  }
};

const addTicket = async (ticket) => {
  try {
    return await new TicketModel(ticket).save();
  } catch (error) {
    console.error("Error adding ticket:", error);
  }
};

const updateTicket = async (id, updates) => {
  try {
    return await TicketModel.findByIdAndUpdate(id, updates, { new: true });
  } catch (error) {
    console.error("Error updating ticket:", error);
  }
};

const deleteTicket = async (id) => {
  try {
    return await TicketModel.findByIdAndDelete(id);
  } catch (error) {
    console.error("Error deleting ticket:", error);
  }
};

module.exports = {
  connectDB,
  createInitialTickets,
  getAllTickets,
  addTicket,
  updateTicket,
  deleteTicket,
};
