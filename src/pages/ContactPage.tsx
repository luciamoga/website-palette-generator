import "../style/contact.css";

const email = "lmmweb2020@gmail.com";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="section">
    <div className="sectionTitle">{title}</div>
    <div className="sectionContent">{children}</div>
  </div>
);

const ContactPage = () => {
  return (
    <div className="contact">
      <h1>Say hi!</h1>
      <div className="sections">
        <Section title="About">
          Created by Lucia Moga as an ADHD break from freelancing.
        </Section>
        <Section title="Want a website?">
          <a href={`mailto:${email}`}> Let's talk about your idea</a>
        </Section>
        <Section title="Have questions or suggestions?">
          <a href={`mailto:${email}`}>Let me know</a>
        </Section>
      </div>
    </div>
  );
};

export default ContactPage;
