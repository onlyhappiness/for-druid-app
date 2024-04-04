import { IPagination } from "@/shared/model/pagination";

export interface IGetComment extends IPagination {
  id: string | number;
}
