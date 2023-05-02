export const AppCard = ({ title, description, repo, tags }) => (
  <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden max-w-4xl my-4 p-4 flex">
    <div>
      <div className="flex">
        <h2 className="font-bold text-white">{title}</h2>
        <span className="text-sm mx-2">|</span>
        <a
          target="_blank"
          href={repo}
          className="hover:text-gray-500 ease-in-out duration-200"
        >
          GitHub
        </a>
      </div>

      <div className="my-2">
        <p className="text-gray-300 text-sm">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 opacity-90">
        {tags.map((tag, idx) => (
          <span
            className="text-[10px] items-center font-bold leading-sm px-1.5 text-black/70 dark:text-black rounded-lg bg-sky-100/90 dark:bg-sky-200"
            key={idx}
          >
          {tag}
        </span>
        ))}
      </div>
    </div>
  </div>
)