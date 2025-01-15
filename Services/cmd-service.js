const readline = require("readline");
const {
  connectDB,
  createInitialTickets,
  getAllTickets,
  addTicket,
  updateTicket,
  deleteTicket,
} = require("./db-services");
const Table = require("cli-table");

const table = new Table({
  head: ["#", "Name", "Subject", "Is Open", "Waiting Hours"],
  colWidths: [5, 20, 20, 10, 15], // הגדרת רוחב העמודות
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

const mainMenu = async () => {
  console.log("\n=== Ticket Management ===");
  const tickets = await getAllTickets();
  tickets.forEach((t, i) => {
    table.push([i + 1, t.name, t.subject, t.isOpen, t.waitingHours]);
  });

  console.log(table.toString());

  console.log("1. Add Ticket");
  console.log("2. Update Ticket");
  console.log("3. Delete Ticket");
  console.log("4. Exit");

  const choice = await prompt("Choose an option: ");
  switch (choice) {
    case "1":
      await addNewTicket();
      break;
    case "2":
      await updateExistingTicket();
      break;
    case "3":
      await deleteExistingTicket();
      break;
    case "4":
      rl.close();
      process.exit(0);
    default:
      console.log("Invalid option.");
  }
  mainMenu();
};

const addNewTicket = async () => {
  const name = await prompt("Enter ticket name: ");
  const subject = await prompt("Enter subject: ");
  const description = await prompt("Enter description: ");
  const isOpen = (await prompt("Is open? (yes/no): ")) === "yes";
  const waitingHours = parseInt(await prompt("Enter waiting hours: "), 10);

  await addTicket({ name, subject, description, isOpen, waitingHours });
  console.log("Ticket added successfully!");
};

const updateExistingTicket = async () => {
  const tickets = await getAllTickets();
  const index = parseInt(await prompt("Enter ticket index to update: "), 10) - 1;

  if (index < 0 || index >= tickets.length) {
    console.log("Invalid index.");
    return;
  }

  const ticket = tickets[index];
  console.log("Current ticket details:", ticket.toObject());

  const updates = {};
  updates.name = (await prompt(`New name (${ticket.name}): `)) || ticket.name;
  updates.subject =
    (await prompt(`New subject (${ticket.subject}): `)) || ticket.subject;
  updates.description =
    (await prompt(`New description (${ticket.description}): `)) ||
    ticket.description;
  updates.isOpen =
    (await prompt(`Is open? (yes/no, current: ${ticket.isOpen}): `)) === "yes";
  updates.waitingHours =
    parseInt(
      await prompt(`New waiting hours (${ticket.waitingHours}): `),
      10
    ) || ticket.waitingHours;

  await updateTicket(ticket._id, updates);
  console.log("Ticket updated successfully!");
};

const deleteExistingTicket = async () => {
  try {
    const tickets = await getAllTickets();
    const index = parseInt(await prompt("Enter ticket index to delete: "), 10) - 1;

    if (index < 0 || index >= tickets.length) {
      console.log("Invalid index.");
      return;
    }

    const ticket = tickets[index];
    await deleteTicket(ticket._id);
    console.log("Ticket deleted successfully!");
  } catch (error) {
    console.error("Error deleting ticket:", error);
  }
};

const runMe = async () => {
  try {
    await connectDB();
    await createInitialTickets();
    console.log("Database initialized. Ready for commands!");
    mainMenu();
  } catch (error) {
    console.error("Error during initialization:", error);
  }
};

module.exports = { runMe };
