export default function ProjectView({ project, onBack }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">
          {project.title}
        </h2>

        <p className="text-gray-700 mb-4">
          {project.description}
        </p>

        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="list-disc pl-5 space-y-1">
            {project.links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
