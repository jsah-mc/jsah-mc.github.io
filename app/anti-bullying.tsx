"use client";
import { useState, useEffect } from "react";
import {
  FaHeart,
  FaHandsHelping,
  FaShieldAlt,
  FaBullhorn,
  FaUsers,
  FaPalette,
} from "react-icons/fa";

export default function AntiBullying() {
  const [selectedSlogan, setSelectedSlogan] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slogans = [
    "Be Kind, Not Cruel - Choose Compassion",
    "Stand Up, Speak Out, Stop Bullying",
    "Different is Beautiful - Celebrate Uniqueness",
    "Words Have Power - Use Them Wisely",
    "Be the Change You Want to See",
    "Kindness is Contagious - Spread It",
    "Together We Rise, Divided We Fall",
    "Your Voice Matters - Use It for Good",
    "Bullying Stops Here",
    "Choose Respect Over Rejection",
    "Heroes Don't Always Wear Capes - Sometimes They Just Speak Up",
    "In a World Where You Can Be Anything, Be Kind",
    "Strength Comes From Lifting Others Up",
    "Every Person Deserves to Feel Safe and Valued",
    "Be Someone's Reason to Smile Today",
  ];

  const resources = [
    {
      title: "Crisis Text Line",
      contact: "Text HOME to 741741",
      description: "Free, confidential support 24/7",
    },
    {
      title: "National Suicide Prevention Lifeline",
      contact: "988",
      description: "24/7 crisis support",
    },
    {
      title: "StopBullying.gov",
      contact: "stopbullying.gov",
      description: "Government anti-bullying resources",
    },
    {
      title: "Cyberbullying Research Center",
      contact: "cyberbullying.org",
      description: "Online safety and resources",
    },
  ];

  const actionTips = [
    {
      icon: <FaHeart size={32} />,
      title: "Be Kind Always",
      description:
        "Small acts of kindness can make a huge difference in someone's day. Smile, compliment, or simply listen to others.",
      emoji: "💝",
    },
    {
      icon: <FaHandsHelping size={32} />,
      title: "Stand Up for Others",
      description:
        "When you see bullying, be brave and help. Tell a trusted adult, offer support, or safely intervene.",
      emoji: "🤝",
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: "Protect Yourself",
      description:
        "It's okay to walk away and get help. You don't have to face bullying alone. Report it and seek support.",
      emoji: "🛡️",
    },
    {
      icon: <FaBullhorn size={32} />,
      title: "Use Your Voice",
      description:
        "Speak up against bullying. Share your story, support others, and help create positive change in your community.",
      emoji: "📢",
    },
  ];

  // Auto-rotate slogans every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSlogan((prev) => (prev + 1) % slogans.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slogans.length]);

  // Fade in animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`space-y-12 max-w-6xl transition-opacity duration-1000 justify-center text-center relative align-middle ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-8 text-primarylight dark:text-primarydark animate-bounce">
          Stop Bullying Together
        </h1>
        <p className="text-2xl opacity-80 max-w-3xl mx-auto leading-relaxed">
          Creating a world where everyone feels safe, valued, and respected.
          Every voice matters, every action counts, every person deserves
          kindness.
        </p>
      </div>

      {/* Rotating Slogans Banner */}
      <div className="bg-overlaylight dark:bg-overlaydark rounded-3xl p-10 text-center shadow-2xl border-4 border-primarylight dark:border-primarydark">
        <h2 className="text-3xl font-bold mb-8 text-primarylight dark:text-primarydark">
          💪 Powerful Messages
        </h2>
        <div className="relative h-24 flex items-center justify-center overflow-hidden">
          <p
            key={selectedSlogan}
            className="text-2xl font-bold text-textlight dark:text-textdark transition-all duration-1000 animate-pulse px-4"
          >
            "{slogans[selectedSlogan]}"
          </p>
        </div>
        <div className="flex justify-center space-x-3 mt-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedSlogan(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 hover:animate-wiggle ${
                index === selectedSlogan % 5
                  ? "bg-primarylight dark:bg-primarydark scale-125"
                  : "bg-subtlelight dark:bg-subtledark hover:bg-primarylight/50 dark:hover:bg-primarydark/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() =>
            setSelectedSlogan(Math.floor(Math.random() * slogans.length))
          }
          className="mt-6 bg-primarylight dark:bg-primarydark text-baselight dark:text-basedark px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:animate-wiggle"
        >
          Get New Inspiration ✨
        </button>
      </div>

      {/* Action Tips Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {actionTips.map((tip, index) => (
          <div
            key={index}
            className="bg-overlaylight dark:bg-overlaydark rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primarylight dark:hover:border-primarydark group"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-6xl mb-4">{tip.emoji}</div>
              <div className="text-primarylight dark:text-primarydark group-hover:animate-wiggle transition-all">
                {tip.icon}
              </div>
              <h3 className="text-2xl font-bold text-primarylight dark:text-primarydark">
                {tip.title}
              </h3>
              <p className="opacity-90 leading-relaxed">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="bg-primarylight dark:bg-primarydark text-baselight dark:text-basedark rounded-3xl p-10 text-center">
        <h2 className="text-4xl font-bold mb-8">The Impact We Can Make</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="text-5xl font-bold">1 in 5</div>
            <p className="text-xl opacity-90">Students experience bullying</p>
          </div>
          <div className="space-y-2">
            <div className="text-5xl font-bold">87%</div>
            <p className="text-xl opacity-90">Want adults to intervene</p>
          </div>
          <div className="space-y-2">
            <div className="text-5xl font-bold">100%</div>
            <p className="text-xl opacity-90">Deserve to feel safe</p>
          </div>
        </div>
      </div>

      {/* Poster Gallery Teaser */}
      {/* <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-10 border-4 border-purple-400">
        <div className="text-center">
          <FaPalette className="mx-auto text-6xl text-purple-500 mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">
            🎨 Create Powerful Anti-Bullying Posters
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Turn these messages into visual impact! Browse our poster gallery
            with 25+ design ideas, download templates, and create displays that
            change hearts and minds.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-baselight dark:bg-overlaydark p-6 rounded-2xl">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="font-bold text-purple-600 dark:text-purple-400">
                Empowerment Designs
              </h3>
              <p className="text-sm opacity-80">
                "Your Differences Make You Special"
              </p>
            </div>
            <div className="bg-baselight dark:bg-overlaydark p-6 rounded-2xl">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-purple-600 dark:text-purple-400">
                Unity & Kindness
              </h3>
              <p className="text-sm opacity-80">"We Rise By Lifting Others"</p>
            </div>
            <div className="bg-baselight dark:bg-overlaydark p-6 rounded-2xl">
              <div className="text-4xl mb-3">📢</div>
              <h3 className="font-bold text-purple-600 dark:text-purple-400">
                Take Action
              </h3>
              <p className="text-sm opacity-80">
                "Be an Upstander, Not a Bystander"
              </p>
            </div>
          </div>
          <button className="bg-purple-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:animate-wiggle">
            🎨 Explore Poster Gallery
          </button>
        </div> */}
      {/* </div> */}

      {/* Emergency Resources */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-3xl p-10 border-4 border-red-400">
        <h2 className="text-4xl font-bold mb-8 text-red-600 dark:text-red-400 text-center">
          🆘 Need Help? You're Not Alone
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-baselight dark:bg-overlaydark p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-bold text-red-600 dark:text-red-400 text-lg mb-2">
                {resource.title}
              </h3>
              <p className="text-xl font-mono font-bold text-primarylight dark:text-primarydark mb-2">
                {resource.contact}
              </p>
              <p className="text-sm opacity-70">{resource.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center bg-red-100 dark:bg-red-900/30 p-6 rounded-2xl">
          <p className="text-lg font-bold text-red-700 dark:text-red-300">
            🚨 If you or someone you know is being bullied or having thoughts of
            self-harm, please reach out for help immediately. You matter, and
            there are people who care about you.
          </p>
        </div>
      </div>

      {/* Community Action */}
      <div className="text-center bg-overlaylight dark:bg-overlaydark rounded-3xl p-12">
        <FaUsers className="mx-auto text-6xl text-primarylight dark:text-primarydark mb-6 animate-bounce" />
        <h2 className="text-4xl font-bold mb-8 text-primarylight dark:text-primarydark">
          Make a Difference Today
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Every act of kindness counts. Every voice that speaks up matters.
          Every person who chooses love over hate makes the world a little
          brighter. Together, we can create safe spaces for everyone.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-bold hover:scale-105 transition-transform">
            #ChooseKindness
          </span>
          <span className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold hover:scale-105 transition-transform">
            #StandTogether
          </span>
          <span className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold hover:scale-105 transition-transform">
            #BullyingStopsHere
          </span>
          <span className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold hover:scale-105 transition-transform">
            #BeTheChange
          </span>
        </div>
        <div className="text-4xl space-x-4">
          <span>💕</span>
          <span>🤝</span>
          <span>🌟</span>
          <span>🛡️</span>
          <span>🌈</span>
        </div>
      </div>
    </div>
  );
}
