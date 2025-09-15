"use client";
import { useState } from "react";
import { FaPalette } from "react-icons/fa";

export default function PosterGallery() {
  const [selectedCategory, setSelectedCategory] = useState("empowerment");

  const posterCategories = {
    empowerment: {
      title: "Empowerment Posters",
      icon: "💪",
      color: "from-blue-500 to-purple-600",
    },
    kindness: {
      title: "Kindness & Unity",
      icon: "💝",
      color: "from-pink-500 to-red-500",
    },
    action: {
      title: "Take Action",
      icon: "📢",
      color: "from-green-500 to-teal-500",
    },
    safety: {
      title: "Safety & Support",
      icon: "🛡️",
      color: "from-orange-500 to-yellow-500",
    },
    digital: {
      title: "Digital Citizenship",
      icon: "💻",
      color: "from-indigo-500 to-blue-600",
    },
  };

  const posterIdeas = {
    empowerment: [
      {
        title: "Your Differences Make You Special",
        description:
          "Colorful mosaic design showing diverse people celebrating uniqueness",
        elements: [
          "Rainbow background",
          "Diverse silhouettes",
          "Bold typography",
          "Celebration imagery",
        ],
        colors: ["Vibrant rainbow", "Gold accents", "White text"],
      },
      {
        title: "Be the Hero of Your Own Story",
        description: "Comic book style poster with superhero theme",
        elements: [
          "Comic book bubbles",
          "Action poses",
          "Bold fonts",
          "Cape imagery",
        ],
        colors: ["Primary blues", "Red highlights", "Yellow accents"],
      },
      {
        title: "Stand Tall, Stand Proud",
        description: "Mountain/nature theme representing strength and growth",
        elements: [
          "Mountain silhouette",
          "Sunrise/sunset",
          "Tree growth",
          "Inspirational quote",
        ],
        colors: ["Earth tones", "Sunrise oranges", "Forest greens"],
      },
      {
        title: "Your Voice Matters",
        description: "Sound wave visualization with megaphone imagery",
        elements: [
          "Sound waves",
          "Megaphone",
          "Voice bubbles",
          "Dynamic typography",
        ],
        colors: ["Electric blue", "Bright yellow", "White contrast"],
      },
    ],
    kindness: [
      {
        title: "Kindness is Contagious - Spread It",
        description: "Ripple effect design showing kindness spreading",
        elements: [
          "Water ripples",
          "Heart shapes",
          "Hands reaching",
          "Spreading pattern",
        ],
        colors: ["Soft blues", "Warm pinks", "Golden yellow"],
      },
      {
        title: "Choose Love Over Hate",
        description: "Heart vs. broken heart with choice arrows",
        elements: [
          "Heart imagery",
          "Decision arrows",
          "Contrast colors",
          "Simple icons",
        ],
        colors: ["Love red", "Healing green", "Pure white"],
      },
      {
        title: "We Rise By Lifting Others",
        description: "Hands lifting up design with upward arrows",
        elements: [
          "Helping hands",
          "Upward arrows",
          "People silhouettes",
          "Unity circle",
        ],
        colors: ["Warm oranges", "Sky blues", "Earthy browns"],
      },
      {
        title: "Different Colors, Same Rainbow",
        description: "Rainbow made of diverse handprints",
        elements: [
          "Handprints",
          "Rainbow arch",
          "Unity message",
          "Diversity celebration",
        ],
        colors: ["Full rainbow spectrum", "Black outlines", "White background"],
      },
    ],
    action: [
      {
        title: "See Something, Say Something",
        description: "Eye and mouth imagery with action call-out",
        elements: [
          "Large eye",
          "Speaking mouth",
          "Action words",
          "Bold arrows",
        ],
        colors: ["Alert red", "Action orange", "Bold black"],
      },
      {
        title: "Be an Upstander, Not a Bystander",
        description: "Person stepping forward from crowd silhouette",
        elements: [
          "Crowd silhouette",
          "Standing figure",
          "Step forward",
          "Leadership pose",
        ],
        colors: ["Hero blue", "Crowd gray", "Spotlight yellow"],
      },
      {
        title: "Bullying Stops Here",
        description: "Stop sign merged with shield design",
        elements: [
          "Stop sign",
          "Shield shape",
          "Protective barrier",
          "Firm typography",
        ],
        colors: ["Stop red", "Shield blue", "Warning yellow"],
      },
      {
        title: "Together We're Stronger",
        description: "Interlocked hands forming a chain of unity",
        elements: [
          "Chain links",
          "Diverse hands",
          "Unity circle",
          "Strength symbols",
        ],
        colors: ["Unity purple", "Strength gold", "Connection silver"],
      },
    ],
    safety: [
      {
        title: "You Are Not Alone",
        description: "Protective circle of support around a person",
        elements: [
          "Support circle",
          "Protective hands",
          "Safe space",
          "Comfort imagery",
        ],
        colors: ["Calming blue", "Safety green", "Warm yellow"],
      },
      {
        title: "It's OK to Ask for Help",
        description: "Lighthouse guiding ships to safety metaphor",
        elements: [
          "Lighthouse",
          "Guiding light",
          "Safe harbor",
          "Navigation theme",
        ],
        colors: ["Ocean blue", "Safety white", "Warning red"],
      },
      {
        title: "Safe Spaces for Everyone",
        description: "Inclusive shelter/house design with open doors",
        elements: [
          "Open doors",
          "Welcome mat",
          "Diverse figures",
          "Safety symbols",
        ],
        colors: ["Home brown", "Welcome green", "Safety blue"],
      },
      {
        title: "Tell a Trusted Adult",
        description: "Adult and child figures with communication symbols",
        elements: [
          "Adult figure",
          "Child figure",
          "Communication bubbles",
          "Trust symbols",
        ],
        colors: ["Trust blue", "Safety orange", "Connection purple"],
      },
    ],
    digital: [
      {
        title: "Think Before You Click",
        description: "Computer mouse with thought bubble and pause symbol",
        elements: [
          "Computer mouse",
          "Thought bubble",
          "Pause symbol",
          "Digital icons",
        ],
        colors: ["Tech blue", "Caution yellow", "Digital green"],
      },
      {
        title: "Words Hurt Online Too",
        description: "Screen with cracked glass effect from harsh words",
        elements: [
          "Cracked screen",
          "Harmful words",
          "Digital device",
          "Impact visualization",
        ],
        colors: ["Screen blue", "Crack red", "Warning orange"],
      },
      {
        title: "Be Kind Online and Offline",
        description:
          "Split screen showing real world and digital world kindness",
        elements: [
          "Split design",
          "Real vs digital",
          "Kindness acts",
          "Connection bridge",
        ],
        colors: ["Reality green", "Digital blue", "Kindness pink"],
      },
      {
        title: "Block, Report, Tell",
        description: "Three-step process with clear action icons",
        elements: [
          "Block button",
          "Report flag",
          "Tell symbol",
          "Step numbers",
        ],
        colors: ["Action red", "Report orange", "Tell blue"],
      },
    ],
  };

  const designTips = [
    {
      title: "High Contrast Colors",
      description:
        "Use bold, contrasting colors to ensure readability from a distance",
      icon: "🎨",
    },
    {
      title: "Large, Bold Typography",
      description:
        "Choose fonts that are easy to read and make your message stand out",
      icon: "📝",
    },
    {
      title: "Minimal Text",
      description:
        "Keep your message short and powerful - people should understand it in 3 seconds",
      icon: "⚡",
    },
    {
      title: "Universal Symbols",
      description:
        "Use recognizable icons and symbols that transcend language barriers",
      icon: "🌐",
    },
    {
      title: "Emotional Connection",
      description:
        "Include imagery that creates an emotional response and motivates action",
      icon: "💫",
    },
    {
      title: "Call to Action",
      description:
        "Tell viewers exactly what you want them to do after seeing your poster",
      icon: "🎯",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-primarylight dark:text-primarydark">
          🎨 Anti-Bullying Poster Ideas Gurls
        </h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Create powerful visual messages that inspire action and promote
          kindness. Browse ideas, download templates, and make a difference in
          your community.
        </p>
      </div>

      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-4">
        {Object.entries(posterCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-6 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:animate-wiggle ${
              selectedCategory === key
                ? "bg-primarylight dark:bg-primarydark text-baselight dark:text-basedark shadow-lg"
                : "bg-overlaylight dark:bg-overlaydark hover:bg-primarylight/20 dark:hover:bg-primarydark/20"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{category.icon}</span>
              <span>{category.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Poster Ideas Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {posterIdeas[selectedCategory as keyof typeof posterIdeas].map(
          (poster, index) => (
            <div
              key={index}
              className="bg-overlaylight dark:bg-overlaydark rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primarylight dark:hover:border-primarydark"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primarylight dark:text-primarydark mb-4">
                  "{poster.title}"
                </h3>
                <p className="text-lg opacity-90 mb-4">{poster.description}</p>
              </div>

              {/* Design Elements */}
              <div className="mb-6">
                <h4 className="font-bold mb-3 text-primarylight dark:text-primarydark">
                  Design Elements:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {poster.elements.map((element, i) => (
                    <span
                      key={i}
                      className="bg-subtlelight dark:bg-subtledark px-3 py-1 rounded-full text-sm"
                    >
                      {element}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color Palette */}
              <div className="mb-6">
                <h4 className="font-bold mb-3 text-primarylight dark:text-primarydark">
                  Color Palette:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {poster.colors.map((color, i) => (
                    <span
                      key={i}
                      className="bg-primarylight dark:bg-primarydark text-baselight dark:text-basedark px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Design Tips Section */}
      <div className="bg-overlaylight dark:bg-overlaydark rounded-3xl p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-primarylight dark:text-primarydark">
          🎯 Poster Design Tips
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designTips.map((tip, index) => (
            <div
              key={index}
              className="bg-baselight dark:bg-basedark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 text-center">{tip.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primarylight dark:text-primarydark text-center">
                {tip.title}
              </h3>
              <p className="opacity-90 text-center">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Size Guidelines */}
      <div className="bg-primarylight dark:bg-primarydark text-baselight dark:text-basedark rounded-3xl p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          📏 Standard Poster Sizes
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold">11" × 17"</div>
            <p className="opacity-90">Tabloid / Small Poster</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">18" × 24"</div>
            <p className="opacity-90">Medium Poster</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">24" × 36"</div>
            <p className="opacity-90">Large Poster</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">27" × 40"</div>
            <p className="opacity-90">Movie Poster Size</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-overlaylight dark:bg-overlaydark rounded-3xl p-12">
        <FaPalette className="mx-auto text-6xl text-primarylight dark:text-primarydark mb-6" />
        <h2 className="text-4xl font-bold mb-6 text-primarylight dark:text-primarydark">
          Ready to Create Your Poster?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Download our templates, customize with your message, and hang them up
          in schools, community centers, and public spaces. Every poster can
          change a life!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg">
            📥 Download Templates
          </button>
          <button className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg">
            🎨 Design Online
          </button>
          <button className="bg-purple-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg">
            📤 Put it on your poster
          </button>
        </div>
      </div>
    </div>
  );
}
