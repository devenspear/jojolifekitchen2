"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Briefcase, Instagram } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function ObfuscatedEmail() {
  // Split and obfuscate the email visually
  const user = 'nancy';
  const domain = 'lifekitchenstudios.com';
  const at = String.fromCharCode(64); // '@'
  const email = `${user}${at}${domain}`;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // On click, reconstruct the mailto link
    e.currentTarget.href = `mailto:${user}@${domain}`;
  }

  return (
    <a
      href="#"
      className="text-tomato hover:underline"
      onClick={handleClick}
      style={{ unicodeBidi: 'bidi-override', direction: 'ltr' }}
    >
      {user}
      <span style={{ display: 'none' }}>[at]</span>
      <span aria-hidden="true">{at}</span>
      {domain}
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-width-container section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-warmGray max-w-2xl mx-auto">
            Want to collaborate, invite me to an event, or just say hi?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-6">
                Let&apos;s Connect!
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                I love hearing from fellow food lovers, brands who share my values, 
                and anyone who&apos;s found joy in their kitchen. Drop me a line—I 
                read every message personally!
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-tomato/10 p-3 rounded-full">
                  <Mail className="text-tomato" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-1">Email</h3>
                  <ObfuscatedEmail />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-tomato/10 p-3 rounded-full">
                  <Instagram className="text-tomato" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-1">Social Media</h3>
                  <p className="text-warmGray">
                    Find me on TikTok and Instagram @jojoeslifekitchen
                  </p>
                  <div className="mt-2 space-y-1 text-sm">
                    <a href="https://www.tiktok.com/@jojoeslifekitchen" target="_blank" rel="noopener noreferrer" className="text-tomato hover:underline block">
                      TikTok: @jojoeslifekitchen
                    </a>
                    <a href="https://www.instagram.com/jojoeslifekitchen/" target="_blank" rel="noopener noreferrer" className="text-tomato hover:underline block">
                      Instagram: @jojoeslifekitchen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Collaboration Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-cream rounded-lg p-8"
          >
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-6">
              Work With Me
            </h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="text-tomato" size={20} />
                  <h3 className="font-semibold text-charcoal">Brand Partnerships</h3>
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  I partner with brands that align with my values of joy, authenticity, 
                  and accessible cooking. Let&apos;s create content that resonates!
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="text-tomato" size={20} />
                  <h3 className="font-semibold text-charcoal">Speaking & Events</h3>
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  Available for cooking demonstrations, workshops, and speaking engagements 
                  about finding joy in the everyday moments.
                </p>
              </div>

              <div className="pt-6 border-t border-warmGray/20">
                <p className="text-sm text-warmGray mb-4">
                  For business inquiries, please include:
                </p>
                <ul className="space-y-2 text-sm text-charcoal/80">
                  <li className="flex items-start gap-2">
                    <span className="text-tomato mt-1">•</span>
                    <span>Your brand/company name</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tomato mt-1">•</span>
                    <span>Type of collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tomato mt-1">•</span>
                    <span>Timeline and budget</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fun Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
                      <div className="bg-white p-8 rounded-lg shadow-sm border border-warmGray/10">
              <p className="font-playfair text-2xl text-charcoal italic mb-4">
                &ldquo;The kitchen is the heart of the home, and mine beats with 
                joy and love.&rdquo;
              </p>
              <p className="text-warmGray">— Nancy Jo</p>
            </div>
        </motion.div>
      </div>
    </div>
  );
} 