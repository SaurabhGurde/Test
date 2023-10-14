import mongoose from "mongoose";

const DrrDataSchema= new mongoose.Schema(
  {
    startDate:String,
    endDate:String,
    datesExcludedStart: String,
    datesExcludedEnd: String,
    leadCount: String,
    expectedDRR: String,
    lastUpdated:String
  }
);

const DrrData = mongoose.model("DrrData", DrrDataSchema);
export default DrrData;