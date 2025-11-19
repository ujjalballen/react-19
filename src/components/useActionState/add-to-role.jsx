import { useActionState } from "react";
import { addUserToRole } from "./action";

export function AddToRole() {
    const [formState, formAction, isPending] = useActionState(
        addUserToRole,
        null
    );

    return (
        <div className="flex flex-col justify-center items-center p-2">
            <form action={formAction} className="flex flex-col p-2">
                <h2 className="text-2xl my-2">Add User to the Role</h2>
                <input
                    type="text"
                    name="userName"
                    placeholder="Enter a user name"
                    className="border rounded p-1 my-1"
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Enter a role(user, admin)"
                    className="border rounded p-1"
                />
                <button
                    type="submit"
                    className="m-2 bg-black text-white rounded-lg"
                >
                    Add +
                </button>
            </form>
            {isPending ? (
                <p className="bg-gray-300 my-3 w-64 p-2 rounded-sm">
                    Loading...
                </p>
            ) : formState?.success ? (
                <p className="bg-green-700 text-white my-3 w-64 p-2 rounded-sm">
                    {formState?.message}
                </p>
            ) : (
                formState?.success === false && (
                    <p className="bg-red-700 text-white my-3 w-64 p-2 rounded-sm">
                        Failed to add user: {formState?.message}
                    </p>
                )
            )}
        </div>
    );
}