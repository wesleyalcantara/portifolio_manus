import React from 'react';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  title: string;
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ title, links }) => {
  return (
    <section id="social" className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">{title}</h3>
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span dangerouslySetInnerHTML={{ __html: link.icon }} />
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
