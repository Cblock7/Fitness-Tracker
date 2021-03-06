const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      name : {
        type : String,
        trim : true,
        required : "Enter the name of the excercise"
      },
      type : {
        type: String,
        trim : true,
        required : "Enter the type of excercise"
      },
      distance : {
        type : Number
      },
      duration : {
        type : Number,
        required : "Enter the duration of the excercise"
      },
      weight: {
        type : Number
      },
      sets: {
        type : Number
      },
      reps: {
        type : Number
      }
    }
  ]
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;