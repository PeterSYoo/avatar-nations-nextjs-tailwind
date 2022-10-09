/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import WaterTribe from "../../../models/WaterTribe";
import dbConnect from "../../../utils/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect(); //Connect to database

  // Create Water Tribe
  if (method === "POST") {
    try {
      const newWaterTribe = await new WaterTribe(req.body).save(); /* Create new
      document and send it through request body object. save() returns a promise,
      the promise resolves to the document that was saved. */
      res.status(201).json({
        data: newWaterTribe,
        message: "New Water Tribe added succesfully",
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
      const waterTribe =
        await WaterTribe.find(); /* returns the first element, if
      no values satisfies the provided testing function then undefined is 
      returned. */
      res.status(200).json({ data: waterTribe }); /* If we get a 200 http 
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
