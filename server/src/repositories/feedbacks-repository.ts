
export interface FeedbackCreatedata{
  type: string;
  comment: string;
  screenshot?: string;
}
export interface FeedbacksRepository {
  create: (data: FeedbackCreatedata) => Promise<void>;
}