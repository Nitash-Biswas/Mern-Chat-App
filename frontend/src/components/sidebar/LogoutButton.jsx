import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
	const { loading, logout } = useLogout();
	const { authUser } = useAuthContext();


	return (
		<div className='mt-auto'>
			{!loading ? (
				<div className="flex items-center gap-2 justify-between bg-slate-500 bg-opacity-40 px-4 py-2 rounded">
				<BiLogOut className='w-7 h-7 text-gray-400 hover:text-white cursor-pointer' onClick={logout} />
				<div className="flex items-center gap-3 justify-between">
					{authUser?.fullName}
					<img className='w-10 h-10 rounded-full' alt='Profile Pic' src={authUser?.profilePic} />
				</div>

				</div>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
