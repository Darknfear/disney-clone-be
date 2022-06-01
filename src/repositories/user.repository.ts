import { BaseRepository } from "@base/base.repository";

export class UserRepository<T> extends BaseRepository<T> {
  model: T;
  constructor(_model: T) {
    super();
    this.model = _model;
  }
  create(): string {
    //this.model.save({});
    return '';
  }
  update(): string {
    throw new Error("Method not implemented.");
  }
  find(): string {
    throw new Error("Method not implemented.");
  }
  delete(): string {
    throw new Error("Method not implemented.");
  }
}
