import {Article} from "./Article";

export interface NewsApiResponse {
    status: string;
    totalResult: string;
    articles: Article[];
}