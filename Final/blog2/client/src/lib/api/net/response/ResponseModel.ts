import { friendlyDate } from "../../../utils/DateTimeUtils";
import { type WorkResponse } from "../work/WorkResponseModel";
import { type Entity } from "../EntityModel";

export class ResponseWithResponderModel implements Entity {
  public id: string;
  public updatedAt: string;
  public workId: string;
  public workTitle: string;
  public responseContent: string;
  public responderId: string;
  public responderUserName: string;
  public responderFullName: string;
  public responderDesc: string;
  public lastPage?: number;

  constructor(
    id: string,
    updatedAt: string,
    workId: string,
    workTitle: string,
    responseContent: string,
    responderId: string,
    responderUserName: string,
    responderFullName: string,
    responderDesc: string,
    lastPage?: number
  ) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.workId = workId;
    this.workTitle = workTitle;
    this.responseContent = responseContent;
    this.responderId = responderId;
    this.responderUserName = responderUserName;
    this.responderFullName = responderFullName;
    this.responderDesc = responderDesc;
    this.lastPage = lastPage;
  }
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
