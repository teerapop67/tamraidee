import { useAppDispatch } from "../Redux/store";
import { isUserInfo, IUser } from "../Redux/userReducer";

export const getAllUser = () => {
  const users = fetch("http://localhost/tamraidee-php/Auth/db_getAllUser.php")
    .then((res) => {
      return res.json();
    })
    .then(async (data) => {
      if (data.success) {
        return await data.user;
      }
    })
    .catch((err) => {
      console.log("haha:", err);
    });

  return users;
};

export const dispatchUser = (item: IUser, dispatch: any) => {
  const payload = {
    member_id: item.member_id,
    member_firstname: item.member_firstname,
    member_lastname: item.member_lastname,
    member_username: item.member_username,
    member_password: item.member_password,
    member_email: item.member_email,
    member_date: item.member_date,
    member_status: item.member_status,
    member_profile: item.member_profile,
  };
  dispatch(isUserInfo(payload));
};
