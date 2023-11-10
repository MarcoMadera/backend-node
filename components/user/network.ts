import { Request, Response, Router } from "express";

import { addUser, deleteUser, getUsers, updateUser } from "./controller";
import { error, success } from "../../network/response";
import { IUser } from "../../types/user";

const router = Router();

router.get(
  "/",
  function (req: Request<unknown, { user: string }, unknown>, res: Response) {
    const filterUsers = req.query.user?.toString();
    if (!filterUsers) {
      error(res, "Invalid info", 400, "Controller error");
      return;
    }

    getUsers(filterUsers)
      .then((userList) => success(res, userList, 200))
      .catch((e) => error(res, "Unexpected Error", 500, e));
  }
);

router.post(
  "/",
  function (req: Request<unknown, unknown, IUser>, res: Response) {
    addUser(req.body.user)
      .then(() => success(res, "Submitted", 201))
      .catch(() => error(res, "Invalid info", 400, "Controller error"));
  }
);

router.patch(
  "/:id",
  function (req: Request<{ id: string }, unknown, IUser>, res) {
    if (!req.body.user) {
      error(res, "Invalid user", 400, "Controller error");
      return;
    }

    updateUser(req.params.id, req.body.user)
      .then((data) => {
        success(res, data, 200);
      })
      .catch((e) => {
        error(res, "Internal error", 500, e);
      });
  }
);

router.delete("/:id", function (req, res) {
  deleteUser(req.params.id)
    .then(() => {
      success(res, `User ${req.params.id} deleted`, 200);
    })
    .catch((e) => {
      error(res, "Internal error", 500, e);
    });
});

export default router;
