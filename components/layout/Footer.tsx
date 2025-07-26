import Link from "next/link";
import { Instagram, Mail, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream mt-20">
      <div className="max-width-container section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Jo Joe&apos;s Life Kitchen
            </h3>
            <p className="text-warmGray">
              Cook with joy—and a little st-st-stutter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/catalog"
                  className="text-warmGray hover:text-cream transition-colors"
                >
                  Browse Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-warmGray hover:text-cream transition-colors"
                >
                  Shop Etsy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-warmGray hover:text-cream transition-colors"
                >
                  About Nancy Jo
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-warmGray hover:text-cream transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex items-center space-x-4 mb-4">
              <a
                href="https://www.tiktok.com/@jojoeslifekitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmGray hover:text-cream transition-colors"
                aria-label="TikTok"
              >
                <Music size={24} />
              </a>
              <a
                href="https://www.instagram.com/jojoeslifekitchen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmGray hover:text-cream transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:nancy@lifekitchenstudios.com"
                className="text-warmGray hover:text-cream transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-warmGray text-sm">
              nancy@lifekitchenstudios.com
            </p>
            <div className="mt-2 text-xs text-warmGray">
              <p>@jojoeslifekitchen</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-warmGray/20 text-center text-warmGray text-sm">
          <p>
            © {currentYear} Jo Joe&apos;s Life Kitchen. Made with love in
            Wilmington, NC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 