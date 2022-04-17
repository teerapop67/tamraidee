import nc from "next-connect";
import { getAllUser } from "../../../src/hook/user";

const handler = nc();
handler.get(getAllUser);
export default handler;
