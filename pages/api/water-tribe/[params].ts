/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import WaterTribe from "../../../models/WaterTribe";
import dbConnect from "../../../utils/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;

  await dbConnect(); // Connect to database

  if (method === "PUT") {
    try {
      const result = await WaterTribe.findByIdAndUpdate(
        id,
        { $set: req.body } /* $set operator replaces the value of a field with
        the specificed value. */,
        { new: true }
      );

      res
        .status(200)
        .json({ data: result, message: "Water Tribe updated Succesfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  }

  if (method === "DELETE") {
    try {
      await WaterTribe.findByIdAndDelete(id);
      res.status(200).json({ message: "Water Tribe Deleted Succesfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  }
};
