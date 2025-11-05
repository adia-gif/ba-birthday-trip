"use client";

import React, { useState } from "react";

function Section({
  title,
  emoji,
  children,
}: {
  title: string;
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 rounded-2xl border shadow-sm bg-white/90">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{emoji}</span>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}

type TabKey =
  | "tips"
  | "food"
  | "itinerary"
  | "trivia"
  | "map"
  | "messages";

export default function Home() {
  const [tab, setTab] = useState<TabKey>("tips");

  const restaurants = [
    { name: "La Cabrera", addr: "José A. Cabrera 5099, Palermo", note: "Famous parrilla — perfect steak & Malbec." },
    { name: "La Escondida Parrilla", addr: "Costa Rica 4464, Palermo", note: "Classic Argentine barbecue, relaxed vibe." },
    { name: "Fogón Asado", addr: "Uriarte 1423, Palermo", note: "Michelin Guide asado tasting experience." },
    { name: "Cremolatti", addr: "Multiple Locations", note: "Argentine gelato chain, creamy & local favorite." },
    { name: "Rapanui", addr: "Av. Santa Fe 772, Recoleta", note: "Artisan chocolate & ice cream from Patagonia." },
  ];

  const itinerary = [
    { day: "Wednesday", place: "San Telmo", details: "Explore cobblestone streets, antique shops, and local cafes." },
    { day: "Thursday", place: "Colonia del Sacramento, Uruguay", details: "Day trip by ferry — bring passport! Ferry leaves early AM, returns in evening." },
    { day: "Friday–Sunday", place: "Recoleta", details: "Stay near Recoleta Cemetery & enjoy bakeries, museums, and elegant cafes." },
    { day: "Sunday", place: "Tigre", details: "Delta boat ride and riverside lunch — relaxing day trip north of Buenos Aires." },
    { day: "Sunday night–Tuesday", place: "Palermo", details: "Shopping, nightlife, and food in the trendy heart of BA." },
  ];

  const trivia = [
    "🇦🇷 Argentina has the world’s widest avenue — Avenida 9 de Julio.",
    "🥩 Locals eat about 120 pounds of beef per person per year!",
    "☕ The national drink is mate — shared among friends everywhere.",
    "🎭 Buenos Aires has more theaters than any other city in Latin America.",
    "⚽ Lionel Messi was born in Rosario, a few hours north of BA.",
  ];

  const travelTips = [
    "📱 **Local SIM (Movistar Tourist Chip):** Cheaper than Airalo. $3 includes 5GB data + calls for 30 days.",
    "💵 **Cash vs. Card:** Bring USD and exchange via Western Union for best rates. Cards use the 'Blue' rate, so they’re fine too.",
    "🚗 **Getting Around:** Always use Uber or Cabify — avoid hailing cabs on the street.",
    "🥐 **Food Tip:** Eat empanadas and pastries only from good bakeries or restaurants — skip fast ones!",
    "🧥 **Shopping:** Palermo has the best local boutiques & leather jackets.",
    "📶 **Connectivity:** WhatsApp is the go-to for locals — even restaurants & tours confirm via chat.",
  ];

  const messages = [
    { date: "Nov 5", text: "Buenos Aires arrival day! ✈️ Let’s drop bags in San Telmo & find coffee." },
    { date: "Nov 6", text: "Colonia day trip! Ferry at 8 AM, back by sunset." },
    { date: "Nov 7", text: "Recoleta brunch, El Ateneo bookstore, and pastries galore." },
    { date: "Nov 8", text: "Tigre river cruise — calm day out of the city 🌊" },
    { date: "Nov 9", text: "Palermo shopping and dinner at La Cabrera 🍷" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        {["tips", "food", "itinerary", "trivia", "map", "messages"].map((key) => (
          <button
            key={key}
            onClick={() => setTab(key as TabKey)}
            className={`px-3 py-1 rounded-full text-sm ${
              tab === key
                ? "bg-pink-600 text-white"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {tab === "tips" && (
        <Section title="Travel Tips" emoji="💡">
          <ul className="space-y-2 text-slate-700 text-sm">
            {travelTips.map((tip, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: tip }} />
            ))}
          </ul>
        </Section>
      )}

      {tab === "food" && (
        <Section title="Food & Drinks" emoji="🍷">
          <ul className="space-y-2 text-slate-700 text-sm">
            {restaurants.map((r, i) => (
              <li key={i}>
                <b>{r.name}</b> — {r.note} <br />
                <span className="text-slate-500">{r.addr}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {tab === "itinerary" && (
        <Section title="Trip Itinerary" emoji="🗓️">
          <ul className="space-y-2 text-slate-700 text-sm">
            {itinerary.map((d, i) => (
              <li key={i}>
                <b>{d.day}:</b> {d.place} — {d.details}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {tab === "trivia" && (
        <Section title="Argentina Trivia" emoji="🧠">
          <ul className="space-y-2 text-slate-700 text-sm">
            {trivia.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </Section>
      )}

      {tab === "map" && (
        <Section title="Neighborhood Map" emoji="🗺️">
          <p className="text-sm mb-2 text-slate-700">
            You’ll be staying in San Telmo, Recoleta, Tigre (day trip), and Palermo.
          </p>
          <iframe
            className="w-full rounded-lg"
            height="300"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/d/embed?mid=1SAnTelmoRecoletaTigrePalermoFakeLinkReplaceLater"
          ></iframe>
        </Section>
      )}

      {tab === "messages" && (
        <Section title="All Messages" emoji="💬">
          <div className="space-y-2 text-sm text-slate-700">
            {messages.map((m, i) => (
              <div
                key={i}
                className="p-2 border rounded-lg bg-slate-50 flex flex-col"
              >
                <span className="text-slate-500 text-xs">{m.date}</span>
                <span>{m.text}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">
            Eric can scroll back anytime to see previous updates 💌
          </p>
        </Section>
      )}

      <footer className="mt-10 text-center text-xs text-slate-500">
        Built with 💕 by Adia and her AI bestie
    </div>
  );
}
