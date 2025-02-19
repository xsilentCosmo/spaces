import Link from "next/link";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube, 
  FaTwitter, 
  FaPinterestP, 
  FaRedditAlien, 
  FaThreads, 
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa6"; // Using Fa6 icons for consistency

import { SiBluesky } from "react-icons/si"; // Bluesky icon

const Footer = () => {
  return (
    <footer className="bg-[#00375e] text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">About Us</h4>
            <p className="text-sm">
              iiqspaces provides virtual office solutions in multiple cities, helping businesses establish a professional presence at a fraction of the cost of a physical office.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="text-sm hover:text-[#91e0ed]">Home</Link></li>
              <li><Link href="/virtual-office" className="text-sm hover:text-[#91e0ed]">Virtual Office</Link></li>
              <li><Link href="/coworking" className="text-sm hover:text-[#91e0ed]">Coworking</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[#91e0ed]">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="text-sm">Email: <Link href="mailto:support@iiqspaces.com" className="hover:text-[#91e0ed]">support@iiqspaces.com</Link></p>
            <p className="text-sm">Phone: <Link href="tel:+91 9656250000">+91 9656250000</Link></p>
            <p className="text-sm">Location: 7th floor, Capital City, Round North, Thrissur, Kerala 680020</p>
          </div>

          {/* Social Media Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="grid grid-cols-3 gap-4">
              <Link href="https://whatsapp.com/channel/0029Vb5uJeYAzNc1NOKnP42I" target="_blank" className="text-xl hover:text-[#91e0ed]"><FaWhatsapp /></Link>
              <Link href="https://www.instagram.com/iiq_space/" target="_blank" className="text-xl hover:text-[#91e0ed]"><FaInstagram /></Link>
              <Link href="https://www.linkedin.com/company/iiq-space" target="_blank" className="text-xl hover:text-[#91e0ed]"><FaLinkedin /></Link> 
              <Link href="https://x.com/iiQ_Space" target="_blank" className="text-xl hover:text-[#91e0ed]"><FaTwitter /></Link>
              <Link href="https://www.youtube.com/@iiQSpace" target="_blank" className="text-xl hover:text-[#91e0ed]"><FaYoutube /></Link>
              <Link href="https://in.pinterest.com/iiQ_Space/" target="_blank" className="text-xl hover:text-[#91e0ed]"><FaPinterestP /></Link>
              <Link href="https://www.reddit.com/user/iiQ_Space/" target="_blank" className="text-xl hover:text-[#91e0ed]"><FaRedditAlien /></Link>
              <Link href="https://www.threads.net/@iiq_space" target="_blank" className="text-xl hover:text-[#91e0ed]"><FaThreads /></Link>
              <Link href="https://bsky.app/profile/iiqspace.bsky.social" target="_blank" className="text-xl hover:text-[#91e0ed]"><SiBluesky /></Link>
            </div>
          </div>
        </div>

        {/* Divider Line and Footer Bottom Section */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} iiqspaces. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
