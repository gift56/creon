import { socialIcons } from "@/constant";

const Footer = () => {
  return (
    <footer className="bg-black pb-6">
      <div className="contain">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="w-full flex items-start justify-start gap-3">
            <p className="text-base font-normal text-white">
              © Creon 2023. All rights reserved.
            </p>
            <div className="flex items-center justify-start gap-4">
              {socialIcons.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center"
                >
                  <item.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
