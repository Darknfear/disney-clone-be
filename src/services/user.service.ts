import { BaseService } from "@base/base.service";
import { UserRepository } from "@repositories/user.repository";
import { UserDocument } from "@models/user.model";

export class UserService extends BaseService {
  constructor(private readonly userRepository: UserRepository<UserDocument>) {
    super();
  }
  create(): string {
      this.userRepository.create();
    throw new Error("Method not implemented.");
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