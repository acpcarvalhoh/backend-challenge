export class CreateMovieDto {
  readonly title: string;
  readonly genre?: string;
  readonly director?: string;
  readonly releaseYear?: number;
  readonly rating?: number;
  readonly userId: number;
}
