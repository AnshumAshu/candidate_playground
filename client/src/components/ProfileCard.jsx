export default function ProfileCard({
	profile,
	onEdit,
	onDelete,
	onProjectClick,
}) {
	return (
		<div className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between">
			<div>
				<h2 className="text-xl font-semibold text-gray-800">
					{profile.name}
				</h2>

				<p className="text-sm text-gray-500 mt-1">
					{profile.education}
				</p>

				<div className="mt-3">
					<p className="text-sm font-medium text-gray-700">Skills:</p>
					<div className="flex flex-wrap gap-2 mt-1">
						{profile.skills.map((skill, idx) => (
							<span
								key={idx}
								className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
							>
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
			{profile.projects && profile.projects.length > 0 && (
				<div className="mt-3">
					<p className="text-sm font-medium text-gray-700">
						Projects:
					</p>
					<ul className="mt-1 space-y-1">
						{profile.projects.map((project, idx) => (
							<li
								key={idx}
								onClick={() => onProjectClick(project)}
								className="text-blue-600 text-sm cursor-pointer hover:underline"
							>
								{project.title}
							</li>
						))}
					</ul>
				</div>
			)}

			<div className="flex gap-2 mt-5">
				<button
					onClick={onEdit}
					className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-1.5 rounded"
				>
					Edit
				</button>
				<button
					onClick={onDelete}
					className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm py-1.5 rounded"
				>
					Delete
				</button>
			</div>
		</div>
	);
}
