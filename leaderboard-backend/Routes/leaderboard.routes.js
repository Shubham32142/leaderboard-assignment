import {
  getUser,
  addUser,
  claimPoints,
  getLeaderboard,
} from "../Controller/leaderboard.controller.js";
export function Routes(router) {
  router.get("/", getUser);
  router.post("/", addUser);
  router.post("/claim", claimPoints);
  router.get("/leaderboard", getLeaderboard);
}
