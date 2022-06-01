import { BaseController } from "@base/base.controller";
import { UserService } from "@services/user.service";

export class UserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }
  create(): string {
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
