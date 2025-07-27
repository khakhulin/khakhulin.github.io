import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFEF8] via-[#FFFCF8] to-[#FFF9F0] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-gradient-to-br from-pink-100/20 to-orange-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-br from-green-100/15 to-blue-100/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <div className="backdrop-blur-sm bg-white/30 rounded-2xl p-6 border border-white/20 shadow-lg">
                <ProfileSection aboutMe={aboutMe} />
              </div>
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20 shadow-lg">
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 whitespace-pre-line [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600 [&_a]:transition-colors [&_a]:duration-300"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName} className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20 shadow-lg">
                        <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-zinc-800 relative">
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            News
                          </span>
                          <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        </h2>
                        <div className="space-y-12">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName} className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20 shadow-lg">
                        <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName} className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20 shadow-lg">
                        <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-zinc-800 relative">
                          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                            Research
                          </span>
                          <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full"></div>
                        </h2>
                        <div className="space-y-12">
                          {publicationData.map((publication, index) => (
                            <div key={index} className="group">
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-8 group-hover:via-zinc-300 transition-colors duration-300" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName} className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20 shadow-lg">
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName} className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20 shadow-lg">
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Portfolio
                        </h2>
                        <div className="space-y-12">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
