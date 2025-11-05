"use client";

import React, { useState } from "react";

/** Minimal helper “card” */
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
    <div className="p-4 rounded-2xl border shadow-sm bg-white">
      <div className="flex items-center gap-2 mb-3">
        <div className="text-pink-600 text-lg">{emoji}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

/** Minimal tabs (no external libs) */
type TabKey = "tips" | "gallery" | "notes";

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

  // Daily Messages
  const dailyMessagesDefault = [
    {
      date: "2025-11-04",
      text:
        "Happy Birthday, my love 💕 You had me at 'nap.' Here’s to every cozy flight, every laugh, and all our adventures ahead.",
    },
    { date: "2025-11-05", text: "Every day with you feels like the start of an adventure." },
    { date: "2025-11-06", text: "Here’s to more sunsets, more laughter, and one perfect vermouth." },
    { date: "2025-11-07", text: "You + Me + Buenos Aires = magic." },
    { date: "2025-11-08", text: "Te amo más que empanadas 💞" },
    { date: "2025-11-09", text: "Today’s mission: smile, explore, repeat." },
    { date: "2025-11-10", text: "11•4 forever — Cheers to us." },
    {
      date: "2025-11-11",
      text:
        "What an amazing adventure we’ve had, my love. Back to our lives and family — but we’ll keep a little BA in our hearts forever.",
    },
    { date: "2025-11-12", text: "Love you! Now back to the real world 😄" },
  ];
  const [dailyMessages, setDailyMessages] = useState(dailyMessagesDefault);
  const [editingNotes, setEditingNotes] = useState(false);
  const todayStr = new Date().toISOString().slice(0, 10);
  const todayNote =
    dailyMessages.find((m) => m.date === todayStr)?.text || "Love you always 💖";

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">

      {/* Tabs header */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { key: "tips", label: "Money & Phone 💰📱" },
          { key: "gallery", label: "Trip Gallery 📸" },
          { key: "notes", label: "A Note for Eric 💌" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key as TabKey)}
            className={`px-3 py-1.5 rounded-full text-sm border transition
              ${active === t.key
                ? "bg-pink-600 text-white border-pink-600"
                : "bg-white text-slate-700 hover:bg-slate-50"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tabs content */}
      {active === "tips" && (
        <Section title="Travel Tips" emoji="💡">
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li>
              <strong>Local SIM (Movistar Tourist Chip):</strong> Way cheaper than Airalo.
              Get a “tourist chip” from <em>Movistar</em> for less than US$3 — includes 5GB data + voice for 30 days.
              Easy to top up if needed.
            </li>
            <li>
              <strong>Cash vs Card:</strong> Bring USD and exchange via Western Union for the best rate.
              Cards now use the “Blue” rate, so they’re better than before — but cash still stretches further.
            </li>
            <li>
              <strong>Connectivity:</strong> WhatsApp is the go-to app for locals, taxis, and restaurants.
              Add your Movistar number if you get the chip so everyone can reach you easily.
            </li>
          </ul>
        </Section>
      )}

      {active === "gallery" && (
        <Section title="Trip Gallery (paste photo links)" emoji="📸">
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
              No photos yet — add links as you go. Later, download them all for your highlight video 🎞️
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {photos.map((url, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-2xl border bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt={`Trip ${idx + 1}`} className="h-40 w-full object-cover" />
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

      {active === "notes" && (
        <Section title="A Note for Eric (Daily)" emoji="💌">
          <p className="text-sm text-slate-600">
            Today: <span className="font-mono">{todayStr}</span>
          </p>
          <div className="mt-2 p-4 rounded-2xl bg-rose-50 border text-slate-800">
            <p className="text-base">{todayNote}</p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
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
            <div className="mt-4 space-y-3">
              {dailyMessages.map((m, i) => (
                <div key={m.date} className="p-3 rounded-xl border bg-white">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 border">{m.date}</span>
                    {m.date === todayStr && (
                      <span className="px-2 py-0.5 rounded-full bg-pink-600 text-white">Today</span>
                    )}
                  </div>
                  <textarea
                    value={m.text}
                    onChange={(e) =>
                      setDailyMessages((arr) =>
                        arr.map((x, idx) => (idx === i ? { ...x, text: e.target.value } : x))
                      )
                    }
                    className="w-full min-h-[80px] rounded-xl border p-2 text-sm"
                  />
                </div>
              ))}
              <div className="flex gap-2">
                <button
                  className="px-3 py-2 rounded-xl bg-pink-600 text-white text-sm hover:bg-pink-700"
                  onClick={() => setEditingNotes(false)}
                >
                  Save Notes
                </button>
                <button
                  className="px-3 py-2 rounded-xl border text-sm hover:bg-slate-50"
                  onClick={() => setDailyMessages(dailyMessagesDefault)}
                >
                  Revert
                </button>
              </div>
            </div>
          )}
        </Section>
      )}

      <footer className="mt-8 mb-12 text-center text-xs text-slate-500">
        Built with 💖 by your Super Mom Bestie — tweak anything you like & hit Print.
      </footer>
    </div>
  );
}
