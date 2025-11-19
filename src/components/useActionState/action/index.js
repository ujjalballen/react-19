"use server";
import { isUserFoundInRole, addUser } from "../lib/user";

export async function addUserToRole(prevState, formData) {
    const userName = formData.get("userName");
    const role = formData.get("role");

    if (isUserFoundInRole(userName, role)) {
        await new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });
        return {
          success: false,
          message: `The user ${userName} exists for the role ${role} already. Can't add it again.`
        }
    } else {
        addUser(userName, role);
        return {
          success: true,
          message: `Added the user ${userName} to the role ${role} successfully.`
        };
    }
}