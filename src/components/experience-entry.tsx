import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-3">
      <span className="text-xs text-zinc-500 mt-1 mb-2 sm:mb-0 sm:whitespace-nowrap">
        {experience.year}
      </span>
      <div className="sm:col-span-3 flex flex-col">
        <h3 className="text-base font-serif">
          {experience.position} — {" "}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-zinc-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
          {experience.location && (
            <span className="text-xs text-zinc-500"> • {experience.location}</span>
          )}
        </h3>
        {experience.description && (
          <p
            className="text-sm text-zinc-600 leading-relaxed mt-2 whitespace-pre-line [&_a]:underline [&_a]:text-zinc-700 [&_a:hover]:text-zinc-500"
            dangerouslySetInnerHTML={{ __html: experience.description }}
          />
        )}
      </div>
    </div>
  );
}
