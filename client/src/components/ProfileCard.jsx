import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProfileCard({ profile, onEdit, onDelete }) {
	return (
		<div className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between">
			<div>
				<h2 className="text-xl font-semibold text-gray-800">
					{profile.name}
				</h2>

				{/* 🔗 Social Links */}
				<div className="flex gap-3 mt-2">
					{profile.links?.github && (
						<a
							href={profile.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-black hover:opacity-80"
						>
							<FaGithub size={20} />
						</a>
					)}

					{profile.links?.linkedin && (
						<a
							href={profile.links.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:opacity-80"
						>
							<FaLinkedin size={20} />
						</a>
					)}

					{profile.links?.portfolio && (
						<a
							href={profile.links.portfolio}
							target="_blank"
							rel="noopener noreferrer"
							className="text-green-600 hover:opacity-80"
						>
							<FaGlobe size={20} />
						</a>
					)}
				</div>

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
				<div className="mt-4">
					<p className="text-sm font-medium text-gray-700">
						Projects:
					</p>

					<ul className="mt-2 space-y-3">
						{profile.projects.map((project, idx) => {
							const liveLink = project.links?.find(
								(link) => !link.includes("github.com"),
							);
							const githubLink = project.links?.find((link) =>
								link.includes("github.com"),
							);

							return (
								<li
									key={idx}
									className="rounded-md p-2 transition-all duration-200 hover:bg-gray-200 hover:scale-[1.01]"
								>
									{/* Project title (simple text) */}
									<a
										href={liveLink || githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 text-sm font-medium hover:underline block transition-colors duration-200 hover:text-blue-700"

									>
										• {project.title}
									</a>

									{/* ✅ Project Description */}
									{project.description && (
										<p className="text-xs text-gray-600 ml-4 mt-1">
											{project.description}
										</p>
									)}

									{/* Project links */}
									<div className="flex gap-4 ml-4 mt-1 text-sm">
										{liveLink && (
											<a
												href={liveLink}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-1 text-green-600 hover:underline transition-colors duration-200 hover:text-green-700"

											>
												<FaExternalLinkAlt size={12} />
												Live
											</a>
										)}

										{githubLink && (
											<a
												href={githubLink}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-1 text-black hover:underline"
											>
												<FaGithub size={14} />
												GitHub
											</a>
										)}
									</div>
								</li>
							);
						})}
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
