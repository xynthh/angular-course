export interface CourseModel {
  id: number;
  description: string;
  iconUrl: string;
  longDescription: string;
  category?: string;
  lessonsCount?: number;
}
