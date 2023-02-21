
export default function handler(req, res, next) {
    console.log('In API ROUTE')

    if(req.method === 'POST'){
        const drugList = req.body.drugList;
        console.log("drugList = ", drugList);
    
        const obj = { id: 1, name1: "drug1", name2: "drug2", level: "Major" };
        return res.status(200).json({interactions: [obj]});    
    }

    return res.status(400).json({message: "This route is not defined"});
}
