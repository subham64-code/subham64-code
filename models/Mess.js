const mongoose = require('mongoose');

const MessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  address: String,
  phone: String,
  totalMembers: {
    type: Number,
    default: 0
  },
  costPerMeal: {
    type: Number,
    default: 50
  },
  monthlyMess: {
    type: Number,
    default: 3000
  },
  mealsPerDay: {
    type: Number,
    default: 3
  },
  bankDetails: {
    accountNumber: String,
    bankName: String,
    ifscCode: String
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Mess', MessSchema);