const Appointment = require('../models/appointment.model');

// Create a new appointment
exports.createAppointment = async (appointmentData) => {
  try {
    const appointment = new Appointment(appointmentData);
    await appointment.save();
    return appointment;
  } catch (error) {
    throw error;
  }
};

// Get all appointments
exports.getAllAppointments = async (userId) => {
  try {
    const appointments = await Appointment.find({ userId });
    return appointments;
  } catch (error) {
    throw error;
  }
};

// Get appointment by ID
exports.getAppointmentById = async (appointmentId, userId) => {
  try {
    const appointment = await Appointment.findOne({ _id: appointmentId, userId });
    if (!appointment) {
      throw new Error('Appointment not found');
    }
    return appointment;
  } catch (error) {
    throw error;
  }
};

// Update appointment
exports.updateAppointment = async (appointmentId, userId, updatedData) => {
  try {
    const appointment = await Appointment.findOneAndUpdate(
      { _id: appointmentId, userId },
      updatedData,
      { new: true }
    );
    if (!appointment) {
      throw new Error('Appointment not found');
    }
    return appointment;
  } catch (error) {
    throw error;
  }
};

// Delete appointment
exports.deleteAppointment = async (appointmentId) => {
  try {
    const appointment = await Appointment.findOneAndDelete({ _id: appointmentId });
    if (!appointment) {
      throw new Error('Appointment not found');
    }
    return appointment;
  } catch (error) {
    throw error;
  }
}; 