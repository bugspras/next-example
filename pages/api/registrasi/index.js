import { createRouter } from "next-connect";
import { save } from "@/controllers/registrasi";
import onError from "@/common/errormiddleware";

const router = createRouter()
router.post(save);
export default router.handler(onError);
