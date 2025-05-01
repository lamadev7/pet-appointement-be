const appointmentService = require('../services/appointment.service');

// Create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const appointmentData = {
      ...req.body,
      userId: req.user.userId
    };
    const appointment = await appointmentService.createAppointment(appointmentData);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const userId = req.params.userId;
    const appointments = await appointmentService.getAllAppointments(userId);
    res.json(appointments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get appointment by ID
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await appointmentService.getAppointmentById(req.params.id, req.user.userId);
    res.json(appointment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update appointment
exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await appointmentService.updateAppointment(
      req.params.id,
      req.user.userId,
      req.body
    );
    res.json(appointment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete appointment
exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await appointmentService.deleteAppointment(req.params.id);
    res.json(appointment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}; 