import { friendlyDate } from "../../lib/utils/DateTimeUtils";
import { WorkResponse } from "../net/work/WorkResponseModel";
import { UiEntity } from "./UIModels";

export class ResponseWithResponderModel implements UiEntity {
  constructor(
    public id: string,
    public updatedAt: string,
    public workId: string,
    public workTitle: string,
    public responseContent: string,
    public responderId: string,
    public responderUserName: string,
    public responderFullName: string,
    public responderDesc: string,
    public cursor?: string
  ) {}
}

export function convert(
  workResponse: WorkResponse
): ResponseWithResponderModel {
  return new ResponseWithResponderModel(
    workResponse.id.toString(),
    friendlyDate(workResponse.updatedAt),
    workResponse.work.id.toString(),
    workResponse.work.title,
    workResponse.response,
    workResponse.responder.id.toString(),
    workResponse.responder.userName,
    workResponse.responder.fullName,
    workResponse.responder.description
  );
}

export function convertArray(
  workResponses: WorkResponse[] | null
): ResponseWithResponderModel[] | null {
  if (!workResponses) return null;

  return workResponses.map((wr) => convert(wr));
}
