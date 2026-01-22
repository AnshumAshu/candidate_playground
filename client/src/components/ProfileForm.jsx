import { useState } from "react";

export default function ProfileForm({ profile, onClose, onSaved }) {
	const [form, setForm] = useState({
		name: profile?.name || "",
		email: profile?.email || "",
		education: profile?.education || "",
		skills: profile?.skills?.join(", ") || "",

		github: profile?.links?.github || "",
		linkedin: profile?.links?.linkedin || "",
		portfolio: profile?.links?.portfolio || "",

		// 🔴 FIXED PROJECTS
		project1Title: profile?.projects?.[0]?.title || "",
		project1Desc: profile?.projects?.[0]?.description || "",
		project1Links: profile?.projects?.[0]?.links?.join(", ") || "",

		project2Title: profile?.projects?.[1]?.title || "",
		project2Desc: profile?.projects?.[1]?.description || "",
		project2Links: profile?.projects?.[1]?.links?.join(", ") || "",
	});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// 🔴 PAYLOAD GOES HERE
		const payload = {
  name: form.name,
  email: form.email,
  education: form.education,

  skills: form.skills
    .split(",")
    .map(s => s.trim())
    .filter(Boolean),

  links: {
    github: form.github,
    linkedin: form.linkedin,
    portfolio: form.portfolio
  },

  projects: [
    {
      title: form.project1Title,
      description: form.project1Desc,
      links: form.project1Links
        .split(",")
        .map(l => l.trim())
        .filter(Boolean)
    },
    {
      title: form.project2Title,
      description: form.project2Desc,
      links: form.project2Links
        .split(",")
        .map(l => l.trim())
        .filter(Boolean)
    }
  ].filter(project => project.title || project.description)
};


		const url = profile
			? `http://localhost:4000/profile/${profile._id}`
			: "http://localhost:4000/profile";

		const method = profile ? "PUT" : "POST";

		await fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		onSaved(); // refresh cards
		onClose(); // close modal
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start overflow-y-auto">
			<form
				onSubmit={handleSubmit}
				className="bg-white w-96 p-6 rounded-lg shadow-lg"
			>
				<h2 className="text-xl font-bold mb-4">Add Profile</h2>

				<input
					name="name"
					placeholder="Name"
					value={form.name}
					onChange={handleChange}
					className="border w-full p-2 mb-3 rounded"
					required
				/>

				<input
					name="email"
					placeholder="Email"
					value={form.email}
					onChange={handleChange}
					className="border w-full p-2 mb-3 rounded"
					required
				/>

				<input
					name="education"
					placeholder="Education"
					value={form.education}
					onChange={handleChange}
					className="border w-full p-2 mb-3 rounded"
				/>

				<input
					name="skills"
					placeholder="Skills (comma separated)"
					value={form.skills}
					onChange={handleChange}
					className="border w-full p-2 mb-4 rounded"
				/>

				<input
					name="github"
					placeholder="GitHub URL"
					value={form.github}
					onChange={handleChange}
					className="border w-full p-2 mb-3 rounded"
				/>

				<input
					name="linkedin"
					placeholder="LinkedIn URL"
					value={form.linkedin}
					onChange={handleChange}
					className="border w-full p-2 mb-3 rounded"
				/>

				<input
					name="portfolio"
					placeholder="Portfolio URL"
					value={form.portfolio}
					onChange={handleChange}
					className="border w-full p-2 mb-4 rounded"
				/>

				{/* ===== PROJECT 1 ===== */}
				<h3 className="font-semibold mt-4 mb-2">Project 1</h3>

				<input
					name="project1Title"
					placeholder="Project 1 Title"
					value={form.project1Title}
					onChange={handleChange}
					className="border w-full p-2 mb-2 rounded"
				/>

				<textarea
					name="project1Desc"
					placeholder="Project 1 Description"
					value={form.project1Desc}
					onChange={handleChange}
					className="border w-full p-2 mb-2 rounded"
				/>

				<input
					name="project1Links"
					placeholder="Project 1 Links (comma separated)"
					value={form.project1Links}
					onChange={handleChange}
					className="border w-full p-2 mb-4 rounded"
				/>
				{/* ===== PROJECT 2 ===== */}
				<h3 className="font-semibold mt-4 mb-2">Project 2</h3>

				<input
					name="project2Title"
					placeholder="Project 2 Title"
					value={form.project2Title}
					onChange={handleChange}
					className="border w-full p-2 mb-2 rounded"
				/>

				<textarea
					name="project2Desc"
					placeholder="Project 2 Description"
					value={form.project2Desc}
					onChange={handleChange}
					className="border w-full p-2 mb-2 rounded"
				/>

				<input
					name="project2Links"
					placeholder="Project 2 Links (comma separated)"
					value={form.project2Links}
					onChange={handleChange}
					className="border w-full p-2 mb-4 rounded"
				/>

				<div className="flex justify-end gap-2">
					<button
						type="button"
						onClick={onClose}
						className="px-4 py-2 bg-gray-400 text-white rounded"
					>
						Cancel
					</button>
					<button
						type="submit"
						className="px-4 py-2 bg-green-600 text-white rounded"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
}
