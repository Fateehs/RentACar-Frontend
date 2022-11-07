export interface UpdatePasswordDTO {
  userId: number;
  password: string;
  newPassword: string;
  newPasswordAgain: string;
}
