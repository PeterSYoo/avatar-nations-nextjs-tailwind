/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import EarthKingdom from "../../../models/EarthKingdom";
import dbConnect from "../../../utils/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect(); //Connect to database

  // Create Earth Kingdom
  if (method === "POST") {
    try {
      const newEarthKingdom = await new EarthKingdom(
        req.body
      ).save(); /* Create new
      document and send it through request body object. save() returns a promise,
      the promise resolves to the document that was saved. */
      res.status(201).json({
        data: newEarthKingdom,
        message: "New Earth Kingdom added succesfully",
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
      const earthKingdom =
        await EarthKingdom.find(); /* returns the first element, if
      no values satisfies the provided testing function then undefined is 
      returned. */
      res.status(200).json({ data: earthKingdom }); /* If we get a 200 http 
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
