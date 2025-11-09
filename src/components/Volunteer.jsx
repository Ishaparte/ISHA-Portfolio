import React from 'react';
import gdgImg from '../assets/logos/gdg-vol.jpg';
import googleImg from '../assets/logos/google-cont1.png';
import pragati from '../assets/logos/pragati.jpg';
import googleAmb from '../assets/logos/google-amb.jpg';

const volunteering = [
  {
    title: 'Volunteer – GDG Cloud Mumbai',
    date: 'Jun 2025',
    tags: ['Community', 'Cloud', 'Hackathon'],
    image: gdgImg,  
    description: `As a GDG volunteer, I had the opportunity to work closely with an inspiring team where I developed strong teamwork and communication.

One of the highlights was co-organizing a hackathon for developers and tech enthusiasts.

I also volunteered at Cloud Community Day '25 — one of the biggest cloud tech events — where I helped manage logistics, assist attendees, and coordinate with speakers and partners.

These experiences helped me grow as a communicator, organizer, and team player.`,
  },
  {
    title: 'Winner – Pragati Business Plan Competition',
    date: 'April 2025',
    tags: ['Business', 'Entrepreneurship', 'Innovation'],
    image: pragati, 
    description: `Secured 1st place in the Pragati Business Plan Competition organized by SFIT.

      Developed a comprehensive business plan focusing on innovative solutions and market strategies.

      Presented the plan to a panel of judges, showcasing entrepreneurial skills and strategic thinking.

      Project description: "Medibot" - A healthcare Robot designed to assist in medical diagnosis and patient care.`,
  },
  {
    title: 'Google Student Ambassador',
    date: 'Sep 2025',
    tags: ['Google', 'Gemini', 'Community'],
    image: googleAmb, 
    description: `Promoted Google Gemini on my campus.

      Organized workshops and info sessions to educate students about Gemini's features and benefits.`,
  },
  {
    title: 'Creator Contributor – Google',
    date: 'Dec 2023',
    tags: ['Google', 'Creator', 'Community'],
    image: googleImg, 
    description: `Contributed to Google's creator initiatives through content, collaboration, and active engagement in their developer ecosystem.

      Participated in outreach efforts and I created content using Google's Notes product as part of their creator initiatives.`,
  }
];

const Volunteering = () => {
  return (
    <section id="achievements" className="py-16 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Volunteering and Achivements</h2>

      <div className="max-w-5xl mx-auto grid gap-16 md:grid-cols-2">
        {volunteering.map((item, index) => (
          <div key={index} className="relative bg-slate-800 border border-purple-400/20 rounded-xl shadow-xl overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover object-center"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{item.date}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-600/20 text-purple-200 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-100 whitespace-pre-line">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteering;
