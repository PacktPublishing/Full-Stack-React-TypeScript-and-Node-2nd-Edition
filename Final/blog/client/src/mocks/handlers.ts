import { http, HttpResponse } from "msw";
import { NEW_WORK_URL } from "../common/api/lib/Url";

export const handlers = [
  http.post(NEW_WORK_URL, (resolver) => {
    return HttpResponse.json(1);
  }),
];
