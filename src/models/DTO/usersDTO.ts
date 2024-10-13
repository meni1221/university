import {IClassrom} from "../../models/classromModel"

export default interface userDTO {
  user_name: string,
  email: string,
  password: string,
  classroom:IClassrom
}
