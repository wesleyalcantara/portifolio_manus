import React from 'react';

interface ContactProps {
  email: string;
  phone: string;
}

const Contact: React.FC<ContactProps> = ({ email, phone }) => {
  return (
    <section id="contact" className="py-12 bg-gray-900 bg-opacity-30">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">Contatos</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">Email:</span>
            <a href={`mailto:${email}`} className="text-[var(--primary-color)] hover:underline">
              {email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Cel:</span>
            <a href={`tel:${phone}`} className="text-[var(--primary-color)] hover:underline">
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
