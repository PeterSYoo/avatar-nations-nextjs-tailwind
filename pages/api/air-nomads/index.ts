/* eslint-disable import/no-anonymous-default-export */
import AirNomads from "../../../models/AirNomads";
import dbConnect from "../../../utils/dbConnect";

export default async (req: any, res: any) => {
  const { method } = req;

  await dbConnect(); //Connect to database

  // Create Air Nomad
  if (method === "POST") {
    try {
      const newAirNomad = await new AirNomads(req.body).save(); /* Create new
      document and send it through request body object. save() returns a promise,
      the promise resolves to the document that was saved. */
      res.status(201).json({
        data: newAirNomad,
        message: "New Air Nomad added succesfully",
      }); /* If we get a 201 http response on response object, the parameter of
      .json() gets converted to a JSON string using the JSON.stringify() 
      method. */
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" }); /* If we get
      a 500 http response on response object, the parameter of .json() gets
      converted to a JSON string using the JSON.stringify() method. */
    }
  }

  if (method === "GET") {
    try {
      const airNomads = await AirNomads.find(); /* returns the first element, if
      no values satisfies the provided testing function then undefined is 
      returned. */
      res.status(200).json({ data: airNomads }); /* If we get a 200 http 
      response on response object, the parameter of .json() gets converted to a 
      JSON string using the JSON.stringify() method. */
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" }); /* If we get
      a 500 http response on response object, the parameter of .json() gets
      converted to a JSON string using the JSON.stringify() method. */
      console.log(error);
    }
  }
};
