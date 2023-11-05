import { createRouter } from "next-connect";
import { upload } from "@/controllers/registrasi";
import onError from "@/common/errormiddleware";

const router = createRouter()
router.post(upload)
export const config = {
  api: {
    bodyParser: false,
  },
};
export default router.handler(onError);
// export default router.handler({
// onError: (err, req, res) => {
//   console.error(err.stack);
//   res.status(err.statusCode || 500).end(err.message);
// },
// });