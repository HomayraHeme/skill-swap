import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import toast from "react-hot-toast";

const auth = getAuth(app);

const MyProfile = () => {
    const { user, loading } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [updating, setUpdating] = useState(false);

    // 🔹 Sync form state with Auth user
    useEffect(() => {
        if (user) {
            setName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
        }
    }, [user]);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!user) return <p className="text-center mt-10">Please login to view your profile</p>;

    const handleUpdate = async (e) => {
        e.preventDefault();
        setUpdating(true);

        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL || null,
            });
            toast.success("Profile updated successfully!");
            setUpdating(false);
        } catch (error) {
            toast.error(error.message);
            setUpdating(false);
        }
    };

    return (
        <div className="flex justify-center m-20 px-4">
            <div className="bg-slate-300 rounded-xl shadow-lg p-8 max-w-md w-full">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <img
                        className="w-32 h-32 rounded-full object-cover border-4 border-amber-500"
                        src={photoURL || "https://via.placeholder.com/150"}
                        alt={name}
                    />
                </div>

                {/* User Info */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">{name || "No Name"}</h2>
                    <p className="text-gray-500">{user.email}</p>
                </div>

                {/* Update Form */}
                <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                    />
                    <input
                        type="url"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        placeholder="Enter image URL"
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <button
                        type="submit"
                        disabled={updating}
                        className={`py-2 rounded-lg text-white font-semibold transition-colors ${updating ? "bg-amber-200 cursor-not-allowed" : "bg-amber-400 hover:bg-amber-600"
                            }`}
                    >
                        {updating ? "Updating..." : "Update Profile"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
