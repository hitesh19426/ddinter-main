import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req, res, next) {
  if (req.method === "GET") {
    console.log("In GET API ROUTE");
    const { db } = await connectToDatabase();
    
    // Define the aggregation pipeline
    // Define the aggregation pipeline with type checks
    // Define the optimized aggregation pipeline for string values
    const pipeline = [
        {
          $group: {
            _id: null,
            distinctDrugs: { 
              $addToSet: "$Drug_A" 
            }
          }
        },
        {
          $addFields: {
            distinctDrugs: {
              $setUnion: ["$distinctDrugs", { $cond: [{ $gt: ["$Drug_B", null] }, ["$Drug_B"], []] }]
            }
          }
        },
        { 
          $project: { _id: 0, distinctDrugs: 1 } 
        }
      ];
  
      // Run the aggregation query
      const result = await db.collection('interactions').aggregate(pipeline).toArray();
      console.log("result = ", result);

      // Send the response with distinct drug names
      return res.status(200).json({names: result[0]?.distinctDrugs || []});
  }

  return res.status(400).json({ message: "This route is not defined" });
}
