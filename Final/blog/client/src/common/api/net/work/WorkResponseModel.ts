export type WorkResponse = {
  id: bigint;
  updatedAt: Date;
  work: {
    title: string;
  };
  response: string;
  responder: {
    id: bigint;
    userName: string;
    fullName: string;
    description: string;
  };
};
