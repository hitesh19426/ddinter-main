import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req, res, next) {
  if (req.method === "POST") {
    console.log("In POST API ROUTE");
    const { db } = await connectToDatabase();
    const drugList = req.body.drugList;
    // console.log("drugList = ", drugList);

    const interactionsList = [];
    for (var i = 0; i < drugList.length; i++) {
      for (var j = 0; j < drugList.length; j++) {
        const interaction = await db
          .collection("interactions")
          .find({ Drug_A: drugList[i]["name"], Drug_B: drugList[j]["name"] })
          .toArray();
        if (interaction.length !== 0) {
          interactionsList.push(interaction[0]);
        }
      }
    }

    const level_to_int = {
      Major: 0,
      Moderate: 1,
      Minor: 2,
      Unknown: 3,
    };
    
    interactionsList.sort(
      (a, b) => level_to_int[a["Level"]] - level_to_int[b["Level"]]
    );

    // console.log(interactionsList);

    return res.status(200).json({ interactions: interactionsList });
  }

  return res.status(400).json({ message: "This route is not defined" });
}
