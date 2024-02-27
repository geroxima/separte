const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    fundraiserName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    donorsCount: {
      type: Number,
      default: 0,
    },
    location: {
      type: String,
      required: true,
    },
    goalAmount: {
      type: Number,
      required: true,
    },
    currentAmount: {
      type: Number,
      required: true,
    },
    videoUrl: {
      type: String,
    },
    donations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donation",
      },
    ],
  },
  { timestamps: true }
);

campaignSchema.virtual("currentProgress").get(function () {
  return (this.currentAmount / this.goalAmount) * 100;
});

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
