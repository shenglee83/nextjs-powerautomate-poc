import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  console.log(req.body)
// POST to backend
  try {
    // TODO: POST data to Power Automate endpoint
    // const {name, amount} = req.body;
    console.log('Date received from form: ', req.body);
    res.status(200).json({ message: "Post successful to backend API" });
  } catch (error: any) {
    res.status(error.statusCode).json({ message: "Post successful to backend API" });
  }
}
