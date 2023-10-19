import { useEffect } from "react";
import withUserInfo from "../../firebase/withUserInfo";
import { UserInfo } from "./UserInfo";

export default withUserInfo(UserInfo);
