import { useEffect, useState } from "react";
import ProfileForm from "./components/ProfileForm";
import ProfileCard from "./components/ProfileCard";
import ProjectView from "./components/ProjectView";

function App() {
	const [profiles, setProfiles] = useState([]);
	const [skill, setSkill] = useState("");
	const [loading, setLoading] = useState(true);
	const [selectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		fetchProfiles();
	}, []);

	const [showForm, setShowForm] = useState(false);
	const [editProfile, setEditProfile] = useState(null);

	const fetchProfiles = async (query = "") => {
		try {
			const res = await fetch(`http://localhost:4000/profile${query}`);
			const data = await res.json();
			setProfiles(data.data || data);
		} catch (err) {
			console.error("Error fetching profiles", err);
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (id) => {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this profile?",
		);

		if (!confirmDelete) return;

		try {
			await fetch(`http://localhost:4000/profile/${id}`, {
				method: "DELETE",
			});

			// refresh profiles after delete
			fetchProfiles();
		} catch (err) {
			console.error("Delete failed", err);
		}
	};

	const searchBySkill = async () => {
  if (!skill.trim()) {
    fetchProfiles(); // load all if empty
    return;
  }

  try {
    setLoading(true);
    const res = await fetch(
      `http://localhost:4000/profile/search?q=${skill}`
    );
    const data = await res.json();
    setProfiles(data);
  } catch (err) {
    console.error("Search failed", err);
  } finally {
    setLoading(false);
  }
};


	return selectedProject ? (
		<ProjectView
			project={selectedProject}
			onBack={() => setSelectedProject(null)}
		/>
	) : (
		<div className="min-h-screen bg-gray-100 p-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
				<h1 className="text-2xl font-bold text-gray-800">Profiles</h1>

				<button
					onClick={() => setShowForm(true)}
					className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
				>
					+ Add Profile
				</button>

				{/* Search */}
				<div className="flex gap-2">
					<input
						type="text"
						placeholder="Search  (e.g. Node)"
						value={skill}
						onChange={(e) => setSkill(e.target.value)}
						className="border rounded px-3 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						onClick={searchBySkill}
						className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
					>
						Search
					</button>
				</div>
			</div>

			{/* Content */}
			{loading ? (
				<div className="text-center text-gray-500">
					Loading profiles...
				</div>
			) : profiles.length === 0 ? (
				<div className="text-center text-gray-500">
					No profiles found
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{profiles.map((profile) => (
						<ProfileCard
							key={profile._id}
							profile={profile}
							onDelete={() => handleDelete(profile._id)}
							onEdit={() => {
								setEditProfile(profile);
								setShowForm(true);
							}}
						/>
					))}
				</div>
			)}
			{showForm && (
				<ProfileForm
					profile={editProfile}
					onClose={() => {
						setShowForm(false);
						setEditProfile(null);
					}}
					onSaved={fetchProfiles}
				/>
			)}
		</div>
	);
}

export default App;
