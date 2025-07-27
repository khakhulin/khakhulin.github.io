import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:space-y-8">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0">
          <div className="relative max-h-[45vh] md:w-[65%] aspect-[3/4] group">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      )}
      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-3 bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-transparent">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-6">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 text-xs leading-relaxed tracking-wide uppercase mb-6">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 transition-colors duration-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
        <div className="flex gap-6 mb-6">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300 px-3 py-1.5 rounded-lg hover:bg-zinc-100/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Blog</span>
            </a>
          )}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300 px-3 py-1.5 rounded-lg hover:bg-zinc-100/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">CV</span>
            </a>
          )}
        </div>
        <div className="space-y-3">
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors py-2 px-3 rounded-lg hover:bg-zinc-100/50 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={14} className="group-hover:scale-110 transition-transform duration-200" />
            {aboutMe.email}
          </a>
          {aboutMe.googleScholarUrl && (
            <>
              <br />
              <a
                href={aboutMe.googleScholarUrl}
                className="inline-flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors py-2 px-3 rounded-lg hover:bg-zinc-100/50 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={14} className="group-hover:scale-110 transition-transform duration-200" />
                Google Scholar
              </a>
            </>
          )}
          {aboutMe.twitterUsername && (
            <>
              <br />
              <a
                href={`https://twitter.com/${aboutMe.twitterUsername}`}
                className="inline-flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors py-2 px-3 rounded-lg hover:bg-zinc-100/50 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={14} className="group-hover:scale-110 transition-transform duration-200" />@{aboutMe.twitterUsername}
              </a>
            </>
          )}
          {aboutMe.githubUsername && (
            <>
              <br />
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="inline-flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors py-2 px-3 rounded-lg hover:bg-zinc-100/50 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} className="group-hover:scale-110 transition-transform duration-200" />
                github.com/{aboutMe.githubUsername}
              </a>
            </>
          )}
          {aboutMe.linkedinUsername && (
            <>
              <br />
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="inline-flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors py-2 px-3 rounded-lg hover:bg-zinc-100/50 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} className="group-hover:scale-110 transition-transform duration-200" />
                linkedin.com/in/{aboutMe.linkedinUsername}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
