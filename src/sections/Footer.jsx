import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <img src={social.icon} className="w-7 h-7 transition-transform duration-200 hover:scale-110 hover:rotate-12" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 haribabu.dev All rights reserved.</p>
    </section>
  );
};

export default Footer;
