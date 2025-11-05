'use client';

import { use, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiExternalLink, FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';

// This would normally come from a database or CMS
const projectData = {
  1: {
    id: 1,
    title: 'Mahabbatussholihin Tour & Travel',
    description: 'A comprehensive Islamic travel website specializing in Umroh and Haji pilgrimage services. Built with Next.js and Sanity CMS, featuring dynamic content management, gallery showcases, blog articles, and integrated WhatsApp consultation system.',
    longDescription: `Mahabbatussholihin Tour & Travel is a trusted partner for spiritual journeys, providing comprehensive Umroh and Haji pilgrimage services. The website was developed to serve as a complete digital platform for pilgrims seeking to perform their religious obligations with professional guidance and premium facilities.

The platform showcases the company's commitment to providing blessed and meaningful journeys that exceed pilgrims' expectations while maintaining trust and responsibility in every step. Every rupiah from MS Travel becomes a source of blessings — all revenue is channeled for the development and activities of Pondok Pesantren Mahabbatussholihin in Purwakarta.`,
    technologies: ['Next.js', 'Sanity CMS', 'TailwindCSS', 'TypeScript', 'Bunny CDN', 'Vercel'],
    link: 'https://travel.mahabbatussholihin.com',
    image: 'https://res.cloudinary.com/deatsthy4/image/upload/v1762021158/FireShot_Capture_023_-_Mahabbatussholihin_Tour_Travel_-_Mitra_Perjalanan_Terpercaya_Anda__-_travel.mahabbatussholihin.com_fbzgag.png',
    screenshots: [
      'https://cdn.example.com/projects/mahabbatussholihin-1.jpg',
      'https://cdn.example.com/projects/mahabbatussholihin-2.jpg',
      'https://cdn.example.com/projects/mahabbatussholihin-3.jpg',
    ],
    duration: '3 Weeks',
    role: 'Full Stack Developer',
    client: 'Mahabbatussholihin Tour & Travel',
    year: '2025',
    features: [
      'Dynamic Package Management',
      'Sanity CMS Integration',
      'Gallery & Blog System',
      'WhatsApp Consultation',
      'Responsive Design',
      'SEO Optimized',
      'Bunny CDN Image Optimization',
      'Testimonial System',
    ],
  },
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const projectId = parseInt(resolvedParams.id);
  const project = projectData[projectId as keyof typeof projectData];

  useEffect(() => {
    if (!project) {
      router.push('/#projects');
    }
  }, [project, router]);

  if (!project) {
    return null;
  }

  return (
    <main className="relative min-h-screen bg-background">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push('/#projects')}
          className="flex items-center gap-2 bg-mutedAccent text-background px-4 py-2 rounded-lg hover:bg-darkAccent transition-all duration-300 shadow-lg"
        >
          <FiArrowLeft className="text-lg" />
          Back to Portfolio
        </button>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-6xl">
        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkAccent mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-mutedAccent max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 md:h-96 lg:h-[800px] rounded-2xl overflow-hidden mb-16 shadow-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Overview Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-darkAccent mb-8">Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Description */}
            <div className="lg:col-span-2">
              <div className="text-darkAccent leading-relaxed space-y-4">
                {project.longDescription}
              </div>

              {/* Challenge */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-darkAccent mb-3">Challenge</h3>
                <p className="text-darkAccent leading-relaxed">
                  Mahabbatussholihin Tour & Travel needed a modern digital presence to showcase their Umroh and Haji pilgrimage services. The client required a platform that could effectively communicate their vision, mission, and comprehensive facilities while making it easy for potential pilgrims to explore packages and get in touch for consultations.
                </p>
              </div>

              {/* Solution */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-darkAccent mb-3">Solution</h3>
                <p className="text-darkAccent leading-relaxed">
                  I developed a full-featured website using Next.js for optimal performance and SEO, integrated with Sanity CMS for easy content management. The platform includes dynamic package displays, an extensive gallery system to showcase pilgrimage experiences, a blog section for travel tips and guides, testimonials from satisfied pilgrims, and direct WhatsApp integration for instant consultation. The website is fully responsive and optimized for fast loading times.
                </p>
              </div>

              {/* Impact */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-darkAccent mb-3">Impact</h3>
                <p className="text-darkAccent leading-relaxed">
                  The website successfully established a strong online presence for Mahabbatussholihin Tour & Travel, making it easier for pilgrims to discover their services and understand the comprehensive facilities offered. The integrated CMS allows the team to easily update packages, add new gallery images, and publish blog articles without technical assistance. The WhatsApp consultation feature has streamlined the inquiry process, leading to increased engagement with potential customers.
                </p>
              </div>

              {/* Contribution */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-darkAccent mb-3">My Contributions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-darkAccent">
                    <span className="w-1.5 h-1.5 bg-darkAccent rounded-full mt-2"></span>
                    <span>Designed and developed the complete website architecture using Next.js and TypeScript</span>
                  </li>
                  <li className="flex items-start gap-3 text-darkAccent">
                    <span className="w-1.5 h-1.5 bg-darkAccent rounded-full mt-2"></span>
                    <span>Integrated Sanity CMS for dynamic content management (packages, galleries, blog)</span>
                  </li>
                  <li className="flex items-start gap-3 text-darkAccent">
                    <span className="w-1.5 h-1.5 bg-darkAccent rounded-full mt-2"></span>
                    <span>Implemented responsive design with TailwindCSS for seamless mobile experience</span>
                  </li>
                  <li className="flex items-start gap-3 text-darkAccent">
                    <span className="w-1.5 h-1.5 bg-darkAccent rounded-full mt-2"></span>
                    <span>Built gallery showcase system to display pilgrimage experiences across Makkah, Madinah, and travel moments</span>
                  </li>
                  <li className="flex items-start gap-3 text-darkAccent">
                    <span className="w-1.5 h-1.5 bg-darkAccent rounded-full mt-2"></span>
                    <span>Integrated WhatsApp consultation system for direct customer communication</span>
                  </li>
                  <li className="flex items-start gap-3 text-darkAccent">
                    <span className="w-1.5 h-1.5 bg-darkAccent rounded-full mt-2"></span>
                    <span>Optimized images and implemented SEO best practices for better search visibility</span>
                  </li>
                  <li className="flex items-start gap-3 text-darkAccent">
                    <span className="w-1.5 h-1.5 bg-darkAccent rounded-full mt-2"></span>
                    <span>Deployed to Vercel with automatic deployments from Git repository</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Project Info */}
            <div className="lg:col-span-1">
              <div className="bg-white/40 backdrop-blur-md rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-darkAccent mb-6">Project Info</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FiCalendar className="text-mutedAccent text-lg" />
                      <p className="text-sm font-semibold text-darkAccent">Duration</p>
                    </div>
                    <p className="text-darkAccent ml-6">{project.duration}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FiTag className="text-mutedAccent text-lg" />
                      <p className="text-sm font-semibold text-darkAccent">Role</p>
                    </div>
                    <p className="text-darkAccent ml-6">{project.role}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FiTag className="text-mutedAccent text-lg" />
                      <p className="text-sm font-semibold text-darkAccent">Status</p>
                    </div>
                    <p className="text-darkAccent ml-6">Internal Use</p>
                  </div>

                  <div className="pt-4 border-t border-mutedAccent/30">
                    <h4 className="text-sm font-semibold text-darkAccent mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-mutedAccent/20 text-darkAccent rounded text-xs font-medium border border-mutedAccent/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-mutedAccent text-background font-semibold rounded-lg hover:bg-darkAccent transition-all duration-300"
                    >
                      <FiExternalLink className="text-lg" />
                      View Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-darkAccent text-center mb-8">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots?.map((screenshot, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
