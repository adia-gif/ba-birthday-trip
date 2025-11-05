"use client";

import React, { useState } from "react";

/** Simple reusable card-like section */
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

type TabKey = "tips" | "food" | "daytime" | "hotels" | "gallery" | "notes";

/* ---------- Data: Food & Experiences ---------- */

const restaurants = [
  {
    name: "La Mezzetta",
    addr: "Av. Álvarez Thomas 1321, Villa Ortúzar, Buenos Aires",
    maps: "https://maps.google.com/?q=La+Mezzetta+Buenos+Aires",
    notes:
      "Old-school BA pizzeria famous for its fugazzeta — molten cheese perfection 🧀🔥. Also great dulce de leche pastries.",
    budget: "$10–20",
  },
  {
    name: "La Cabrera",
    addr: "Cabrera 5099, Palermo, Buenos Aires",
    maps: "https://maps.google.com/?q=La+Cabrera+Buenos+Aires",
    notes:
      "Iconic parrilla (steakhouse) in Palermo Soho. Go for bife de chorizo and provoleta. Comes with tons of little sides — very BA. Best to reserve or go early.",
    budget: "$50–80 with wine 🍷",
  },
  {
    name: "La Escondida Parrilla",
    addr: "Costa Rica 4464, Palermo, Buenos Aires",
    maps: "https://maps.google.com/?q=La+Escondida+Parrilla+Buenos+Aires",
    notes:
      "Cozy parrilla in Palermo with great meat and a classic neighborhood feel. Nice backup if La Cabrera is full.",
    budget: "$40–70",
  },
  {
    name: "Cremolatti",
    addr: "Multiple locations (Recoleta, Palermo, etc.)",
    maps: "https://maps.google.com/?q=Cremolatti+Buenos+Aires",
    notes:
      "Classic Argentine ice cream chain. Try dulce de leche granizado or sambayón — you’re basically obligated. 🍦",
    budget: "$5–10",
  },
  {
    name: "Rapanui",
    addr: "Armenia 1663, Palermo, Buenos Aires",
    maps: "https://maps.google.com/?q=Rapanui+Palermo+Buenos+Aires",
    notes:
      "Chocolate and gelato heaven 🍫🍨. Good for coffee, waffles, and gifts to bring home. Perfect dessert stop after dinner in Palermo.",
    budget: "$10–20",
  },
];

const experiences = [
  {
    name: "The Asado Experience",
    addr: "Palermo, Buenos Aires",
    maps: "https://www.google.com/maps?q=The+Asado+Experience+Buenos+Aires",
    notes:
      "Women-run asado BBQ cooking class — learn to grill like an Argentine, make chimichurri, and drink Malbec. Viral on TikTok, very well reviewed.",
    booking: "https://www.theasadoexperience.com/",
    budget: "$85–100 per person",
  },
];

/* ---------- Data: Daytime Adventures ---------- */

const daytimeAdventures = [
  {
    name: "Parque El Rosedal 🌹",
    addr: "Av. Infanta Isabel, Palermo, Buenos Aires",
    maps: "https://www.google.com/maps/place/Parque+El+Rosedal/",
    notes:
      "Gorgeous rose garden with lakes, bridges, and sculptures. Super romantic and peaceful. Great for photos, paddle boats, and mid-day strolls.",
    budget: "Free entry",
  },
  {
    name: "Planetario Galileo Galilei 🌙",
    addr: "Av. Sarmiento y Belisario Roldán, Palermo, Buenos Aires",
    maps: "https://www.google.com/maps/place/Planetario+Galileo+Galilei/",
    notes:
      "Futuristic planetarium with astronomy shows. Pretty during the day, magical with lights at night.",
    budget: "Small ticket fee",
  },
  {
    name: "Jardín Japonés 🌸",
    addr: "Av. Casares 3450, Palermo, Buenos Aires",
    maps: "https://www.google.com/maps/place/Jardin+Japones/",
    notes:
      "Japanese garden with ponds, koi fish, tea house and bridges. Calm little escape in the middle of the city — bring your camera and a pastry.",
    budget: "Around a couple of USD",
  },
];

/* ---------- Data: Hotels ---------- */

const hotels = [
  {
    name: "Patios de San Telmo 🏨",
    addr: "Chacabuco 752, San Telmo, Buenos Aires",
    maps: "https://www.google.com/maps/place/Patios+de+San+Telmo/",
    notes:
      "Boutique hotel with a leafy courtyard, small pool, and restored colonial vibe. Perfect for exploring San Telmo’s cobblestone streets and cafés.",
    nights: "Nov 4–5 (1 night)",
  },
  // Add more hotel stays here later if you want
];

/* ---------- Daily messages template ---------- */

const dailyMessagesDefault = [
  {
    date: "2025-11-04",
    text:
      "Happy Birthday, my love 💕 You had me at 'nap.' Here’s to every cozy flight, every laugh, and all our adventures ahead.",
  },
  {
    date: "2025-11-05",
    text: "Every day with you feels like the start of an adventure.",
  },
  {
    date: "2025-11-06",
    text:
      "Here’s to more sunsets, more laughter, and one perfect vermouth.",
  },
  { date: "2025-11-07", text: "You + Me + Buenos Aires = magic." },
  { date: "2025-11-08", text: "Te amo más que empanadas 💞" },
  { date: "2025-11-09", text: "Today’s mission: smile, explore, repeat." },
  { date: "2025-11-10", text: "11•4 forever — cheers to us." },
  {
    date: "2025-11-11",
    text:
      "What an amazing adventure we’ve had, my love. Back to our lives and family — but we’ll keep a little BA in our hearts forever.",
  },
  { date: "2025-11-12", text: "Love you! Now back to the real world 😄" },
];

/* ---------- Main component ---------- */

export default function Home() {
  const [active, setActive] = useState<TabKey>("tips");

  // Trip Gallery
  const [photos, setPhotos] = useState<string[]>([]);
  const [newPhoto, setNewPhoto] = useState("");

  const addPhoto = () => {
    if (!newPhoto.trim()) return;
    setPhotos((p) => [...p, newPhoto.trim()]);
    setNewPhoto("");
  };

  const removePhoto = (i: number) =>
    setPhotos((p) => p.filter((_, idx) => idx !== i));

  // Daily messages
  const [dailyMessages, setDailyMessages] = useState(dailyMessagesDefault);
  const [editingNotes, setEditingNotes] = useState(false);
  const todayStr = new Date().toISOString().slice(0, 10);
  const todayNote =
    dailyMessages.find((m) => m.date === todayStr)?.text ||
    "Love you always 💖";

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 bg-slate-50 min-h-screen">
      {/* Tabs header */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {[
          { key: "tips", label: "Money & Phone 💰📱" },
          { key: "food", label: "Food & Drinks 🍽️" },
          { key: "daytime", label: "Daytime Adventures 🌞" },
          { key: "hotels", label: "Hotels 🏨" },
          { key: "gallery", label: "Trip Gallery 📸" },
          { key: "notes", label: "A Note for Eric 💌" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key as TabKey)}
            className={`px-3 py-1.5 rounded-full text-sm border transition
              ${
                active === tab.key
                  ? "bg-pink-600 text-white border-pink-600 shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ---------- Money & Phone tab ---------- */}
      {active === "tips" && (
        <Section title="Money, Phone & Getting Around" emoji="💸">
          <div className="space-y-4 text-sm text-slate-700">
            <div>
              <h3 className="font-semibold mb-1">Phone & Data 📱</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Movistar Tourist Chip:</strong> Local SIM is much
                  cheaper than Airalo. Get a <em>tourist chip</em> with Movistar
                  for under ~US$3 — 5GB data + voice for 30 days, top-up
                  friendly.
                </li>
                <li>
                  <strong>WhatsApp is life:</strong> Everyone uses WhatsApp —
                  taxis, restaurants, friends. Add your new number once you get
                  the SIM.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Money 💵</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Bring USD cash and use Western Union for a better rate than a
                  normal bank exchange.
                </li>
                <li>
                  Credit cards now usually get the “Blue” / better rate, so
                  using your card is fine in most places — keep cash for small
                  shops and markets.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Getting Around 🚘</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Use <strong>Uber</strong> or <strong>Cabify</strong> instead
                  of hailing street taxis — safer, clearer pricing, and you can
                  pay by card.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Shopping & Leather 🧥</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Palermo Soho (around Plaza Serrano / Gorriti / Thames streets)
                  is great for small boutiques and{" "}
                  <strong>leather jackets</strong>.
                </li>
                <li>
                  Combine leather shopping with dinner in that same area — tons
                  of great bars and restaurants.
                </li>
              </ul>
            </div>
          </div>
        </Section>
      )}

      {/* ---------- Food & Drinks tab ---------- */}
      {active === "food" && (
        <div className="space-y-4">
          <Section title="Food & Drinks Picks" emoji="🍽️">
            <div className="space-y-3 text-sm text-slate-800">
              {restaurants.map((r) => (
                <div
                  key={r.name}
                  className="p-3 border rounded-2xl bg-white/90 shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold">{r.name}</h3>
                  </div>
                  <p className="text-slate-700">
                    <span className="font-medium">Address:</span> {r.addr}
                  </p>
                  <p className="text-slate-700">
                    <span className="font-medium">Notes:</span> {r.notes}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{r.budget}</p>
                  <a
                    href={r.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 text-pink-700 underline text-xs"
                  >
                    Open in Maps ↗
                  </a>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Asado & Experiences" emoji="🔥">
            <div className="space-y-3 text-sm text-slate-800">
              {experiences.map((e) => (
                <div
                  key={e.name}
                  className="p-3 border rounded-2xl bg-white/90 shadow-sm"
                >
                  <h3 className="font-semibold mb-1">{e.name}</h3>
                  <p className="text-slate-700 mb-1">
                    <span className="font-medium">Address:</span> {e.addr}
                  </p>
                  <p className="text-slate-700 mb-1">{e.notes}</p>
                  <p className="text-xs text-slate-500 mb-1">{e.budget}</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={e.booking}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-full bg-pink-600 text-white text-xs hover:bg-pink-700"
                    >
                      Check Classes / Book ↗
                    </a>
                    <a
                      href={e.maps}
                      target="_blank"
                      rel="noreferrer"
                      className="text-pink-700 underline text-xs"
                    >
                      View on Maps ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Local Food Rules from Friends" emoji="🥐">
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
              <li>
                <strong>Bars are good:</strong> Local neighborhood bars can have
                amazing food — don’t be scared to try them.
              </li>
              <li>
                <strong>Empanadas:</strong> Skip fast-food chain empanadas. Only
                get them from real restaurants or good bakeries.
              </li>
              <li>
                <strong>Pastries & medialunas:</strong> Try all the croissants
                and pastries you see. Buenos Aires quietly has incredible
                bakeries. 🥐
              </li>
            </ul>
          </Section>
        </div>
      )}

      {/* ---------- Daytime Adventures tab ---------- */}
      {active === "daytime" && (
        <Section title="Daytime Adventures in BA" emoji="🌞">
          <div className="space-y-3 text-sm text-slate-800">
            {daytimeAdventures.map((p) => (
              <div
                key={p.name}
                className="p-3 border rounded-2xl bg-white/90 shadow-sm"
              >
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-slate-700">
                  <span className="font-medium">Address:</span> {p.addr}
                </p>
                <p className="text-slate-700">{p.notes}</p>
                <p className="text-xs text-slate-500 mt-1">{p.budget}</p>
                <a
                  href={p.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 text-pink-700 underline text-xs"
                >
                  Open in Maps ↗
                </a>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ---------- Hotels tab ---------- */}
      {active === "hotels" && (
        <Section title="Hotels" emoji="🏨">
          <div className="space-y-3 text-sm text-slate-800">
            {hotels.map((h) => (
              <div
                key={h.name}
                className="p-3 border rounded-2xl bg-white/90 shadow-sm"
              >
                <h3 className="font-semibold">{h.name}</h3>
                <p className="text-slate-700">
                  <span className="font-medium">Address:</span> {h.addr}
                </p>
                <p className="text-slate-700">{h.notes}</p>
                <p className="text-xs text-slate-500 mt-1">
                  <strong>Stay:</strong> {h.nights}
                </p>
                <a
                  href={h.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 text-pink-700 underline text-xs"
                >
                  Open in Maps ↗
                </a>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ---------- Trip Gallery tab ---------- */}
      {active === "gallery" && (
        <Section title="Trip Gallery (Paste Links)" emoji="📸">
          <div className="flex gap-2 mb-3">
            <input
              value={newPhoto}
              onChange={(e) => setNewPhoto(e.target.value)}
              placeholder="Paste Google Photos / iCloud / Drive image link"
              className="flex-1 rounded-xl border px-3 py-2 text-sm"
            />
            <button
              onClick={addPhoto}
              className="px-3 py-2 rounded-xl bg-pink-600 text-white text-sm hover:bg-pink-700"
            >
              Add
            </button>
          </div>

          {photos.length === 0 ? (
            <p className="text-sm text-slate-500">
              No photos yet — add links as you go. Later you can download them
              all to make your highlight video 🎞️
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {photos.map((url, idx) => (
                <div
                  key={idx}
                  className="relative group overflow-hidden rounded-2xl border bg-white"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={url}
                    alt={`Trip ${idx + 1}`}
                    className="h-40 w-full object-cover"
                  />
                  <button
                    onClick={() => removePhoto(idx)}
                    className="absolute top-2 right-2 hidden group-hover:flex items-center gap-1 px-2 py-1 rounded-lg bg-black/60 text-white text-xs"
                  >
                    ✕ Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </Section>
      )}

      {/* ---------- Daily Note tab ---------- */}
      {active === "notes" && (
        <Section title="A Note for Eric (Daily)" emoji="💌">
          <p className="text-sm text-slate-600 mb-2">
            Today: <span className="font-mono">{todayStr}</span>
          </p>
          <div className="p-4 rounded-2xl bg-rose-50 border text-slate-800 mb-4">
            <p className="text-base">{todayNote}</p>
          </div>

          <div className="mt-1 flex flex-wrap gap-2 mb-3">
            <button
              className="px-3 py-2 rounded-xl border text-sm hover:bg-slate-50"
              onClick={() => setEditingNotes((v) => !v)}
            >
              {editingNotes ? "Close Editor" : "Edit Notes"}
            </button>
            <button
              className="px-3 py-2 rounded-xl bg-pink-600 text-white text-sm hover:bg-pink-700"
              onClick={() => setDailyMessages(dailyMessagesDefault)}
            >
              Reset to Defaults
            </button>
          </div>

          {editingNotes && (
            <div className="mt-2 space-y-3">
              {dailyMessages.map((m, i) => (
                <div
                  key={m.date}
                  className="p-3 rounded-2xl border bg-white/90"
                >
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 border text-xs">
                      {m.date}
                    </span>
                    {m.date === todayStr && (
                      <span className="px-2 py-0.5 rounded-full bg-pink-600 text-white text-xs">
                        Today
                      </span>
                    )}
                  </div>
                  <textarea
                    value={m.text}
                    onChange={(e) =>
                      setDailyMessages((arr) =>
                        arr.map((x, idx) =>
                          idx === i ? { ...x, text: e.target.value } : x
                        )
                      )
                    }
                    className="w-full min-h-[80px] rounded-xl border p-2 text-sm"
                  />
                </div>
              ))}
            </div>
          )}
        </Section>
      )}

      <footer className="mt-8 mb-12 text-center text-xs text-slate-500">
        Built with 💖 by your Super Mom Bestie — tweak anything you like & hit
        Print.
      </footer>
    </div>
  );
}
