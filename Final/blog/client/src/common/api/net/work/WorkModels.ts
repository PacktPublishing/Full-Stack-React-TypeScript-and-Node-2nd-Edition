export type Work = {
  id: bigint;
  updatedAt: Date;
  title: string;
  description: string;
  content: string;
  author: {
    id: bigint;
    userName: string;
    fullName: string;
    description: string;
  };
  workTopics: {
    topic: {
      id: bigint;
      name: string;
    };
  }[];
  workLikes: {
    id: bigint;
    workId: bigint;
    liker: {
      id: true;
      workId: true;
      liker: {
        id: true;
        userName: true;
        fullName: true;
      };
    };
  }[];
};

export type WorkImageItem = {
  imagePlaceholder: string;
  image: File;
};
