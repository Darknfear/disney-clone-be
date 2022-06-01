export abstract class BaseRepository<T> {
  abstract create(): string;
  abstract update(): string;
  abstract find(): string;
  abstract delete(): string;
}
