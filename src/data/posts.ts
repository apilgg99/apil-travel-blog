import type { Author, Category, Post } from "../types/blog";

export const categories: Category[] = [
  { slug: "city-guides", name: "City Guides" },
  { slug: "food", name: "Food" },
  { slug: "adventure", name: "Adventure" },
  { slug: "culture", name: "Culture" },
  { slug: "nature", name: "Nature" },
];

const apil: Author = {
  name: "Apil",
  avatar: "https://i.pravatar.cc/150?u=apil",
};

export const posts: Post[] = [
  {
    id: "1",
    slug: "48-hours-in-kyoto",
    title: "48 Hours in Kyoto: Temples, Matcha, and Morning Mist",
    excerpt:
      "Kyoto moves at its own pace. Two days is never enough — but if that's all you have, here's how to make every hour count.",
    content: `Kyoto is a city that rewards slowness. Arrive early, before the tour groups spill out of coaches, and you'll find temple courtyards wrapped in silence and low morning light.

Start at Fushimi Inari, the iconic shrine with thousands of vermillion torii gates climbing up the forested hillside. Most visitors turn back after the first tunnel of gates — keep going. The higher paths are quieter, the views over the city hazy and beautiful.

By mid-morning, make your way to the Gion district. Walk the stone-paved lanes of Ishibei-koji and Hanamikoji, where old machiya townhouses have been converted into tea rooms and restaurants. If you're lucky, you might spot a geiko heading to an appointment.

Spend your afternoon in Arashiyama. The bamboo grove is worth the crowds; step just beyond it to the moss-covered paths of Jojakko-ji temple for something quieter and more intimate. End the day with a bowl of matcha soft serve by the river.

On your second morning, visit Kinkaku-ji — the Golden Pavilion — at opening time before the crowds arrive. Then lose a couple of hours in Nishiki Market, sampling pickled vegetables, fresh tofu, and grilled skewers.

Kyoto doesn't reveal itself all at once. But 48 hours is enough to fall in love with it.`,
    coverImage:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
    category: { slug: "city-guides", name: "City Guides" },
    publishedAt: "2026-01-14",
    readTime: "5 min read",
    featured: true,
    author: apil,
  },
  {
    id: "2",
    slug: "eating-through-oaxaca",
    title: "Eating Through Oaxaca: A Food Lover's Field Notes",
    excerpt:
      "Mole negro, tlayudas, mezcal at noon — Oaxaca is one of the world's great food cities. Here's what to eat, where to find it, and why it matters.",
    content: `Oaxacan food isn't just regional Mexican cuisine — it's a living culinary archive, shaped by indigenous traditions that predate the Spanish by centuries.

The first thing to understand is mole. Oaxaca is known as the land of seven moles, each with its own character: negro, rojo, coloradito, amarillo, verde, chichilo, and manchamanteles. Order mole negro at any of the mercados — it takes days to make and tastes like it.

Mercado Benito Juárez is where locals shop; Mercado 20 de Noviembre next door is where they eat. Find a seat at one of the smoky meat stalls (the pasillo de humo) and point at whatever looks good — tasajo, chorizo, cecina. Eat with fresh tortillas made to order.

Tlayudas are Oaxaca's answer to the pizza: a large, crispy tortilla spread with black beans, asiento (unrefined lard), Oaxacan cheese, and your choice of meat. Find them at street stalls after dark when the city comes alive.

For mezcal, skip the tourist bars and head to In Situ, a mezcalería that stocks hundreds of single-village, small-batch bottles. Ask the staff for guidance — they know every producer personally.

Oaxaca rewards the curious eater. Wander, ask questions, and say yes to whatever you're handed.`,
    coverImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    category: { slug: "food", name: "Food" },
    publishedAt: "2026-01-28",
    readTime: "6 min read",
    featured: true,
    author: apil,
  },
  {
    id: "3",
    slug: "trekking-the-annapurna-circuit",
    title: "Trekking the Annapurna Circuit: What Nobody Tells You",
    excerpt:
      "The Annapurna Circuit is one of the world's classic treks. It's also harder, more beautiful, and more humbling than any guidebook can fully capture.",
    content: `The Annapurna Circuit has changed. Roads now run parallel to sections of the old trail, and some teahouses that once felt remote now sit beside jeep tracks. But the core of the route — the high mountain passes, the river gorges, the Himalayan villages — remains extraordinary.

The trek typically takes 14–21 days depending on your pace and the side trips you take. Most trekkers start in Besisahar and finish in Nayapul after crossing the Thorong La pass at 5,416m — the highest point on the circuit and the one that most people are simultaneously excited and terrified about.

Acclimatization is everything. Don't rush the ascent. Spend extra nights at Manang (3,500m) and do the short hike to Ice Lake above the village — the views of Annapurna III and Gangapurna are worth every step. Your lungs will thank you at the pass.

The teahouse food surprised me. Dal bhat — rice, lentil soup, and vegetable curry — is the trekking staple, and for good reason: it's warm, filling, and comes with unlimited refills. By day ten I was eating it twice a day and not complaining.

The Thorong La crossing starts before dawn. You'll walk in darkness with headlamps, wrapped in every layer you packed, and wonder if you've made a terrible mistake. Then the sun rises over the Himalayas, and you'll know you haven't.`,
    coverImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    category: { slug: "adventure", name: "Adventure" },
    publishedAt: "2026-02-10",
    readTime: "7 min read",
    author: apil,
  },
  {
    id: "4",
    slug: "inside-a-moroccan-hammam",
    title: "Inside a Moroccan Hammam: A Guide to Getting It Right",
    excerpt:
      "The hammam is one of Morocco's oldest social institutions. Going for the first time is equal parts confusing and revelatory — here's what to expect.",
    content: `The hammam is not a spa. It's something older and more practical: a communal bathhouse that has been at the center of Moroccan social life for centuries. In the medinas of Fez and Marrakech, neighbourhood hammams still operate exactly as they always have.

There are two kinds: the local hammam and the tourist hammam. The tourist version is comfortable and English-speaking. The local version is cheaper, more authentic, and requires a little more confidence. I recommend the latter.

You'll need to bring your own kessa (an exfoliating mitt), savon beldi (black olive soap), and a towel. Many hammams sell these at the door. Leave valuables in your riad.

Inside, you move through rooms of increasing heat — cool, warm, hot — spending time in each. An attendant will scrub your skin with the kessa until an alarming quantity of dead skin rolls off in grey ribbons. It's disgusting and wonderful. Follow with the black soap, leave it to sit, then rinse under the stone basins of cool water.

Afterwards, you emerge pink and slightly dazed into the medina's afternoon light. Everything feels sharper: colours, sounds, smells. The hammam doesn't just clean you. It resets you.

Budget about 50–80 MAD for a local hammam. Go in the late afternoon when it's busy and the rooms are properly steamed.`,
    coverImage:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80",
    category: { slug: "culture", name: "Culture" },
    publishedAt: "2026-02-22",
    readTime: "5 min read",
    author: apil,
  },
  {
    id: "5",
    slug: "patagonia-torres-del-paine",
    title: "Patagonia: Five Days at the End of the World",
    excerpt:
      "Torres del Paine is wind, granite, glacier, and sky. It is also one of the most logistically demanding parks I've ever visited — and completely worth it.",
    content: `Patagonia doesn't ease you in. The moment you step off the bus at Torres del Paine, the wind hits you like a wall. It's the kind of wind that makes you reconsider your life choices, your gear choices, your entire relationship with the outdoors.

The W Trek is the classic route: a four-to-five day circuit taking in the three granite towers, the Valle del Francés, and the Grey Glacier. Most hikers do it hut-to-hut, staying at the refugios and dome camps managed by Fantastico Sur and CONAF. Book months in advance — this park is wildly popular and the beds sell out fast.

Day one takes you to the Torres themselves. The hike is steep and rocky, and the final scramble up a moraine field to the teal glacial lake at the base feels endless. Then you crest the ridge and see them: three vertical slabs of ancient granite rising 2,500 metres straight out of the earth. The sight is genuinely shocking.

The Valle del Francés is my favourite section — a high hanging valley hemmed in by hanging glaciers and jagged peaks, with condors riding thermals overhead. Walk as far as Mirador Británico for the full panorama.

Pack for all four seasons in one day. I wore a rain jacket, a down jacket, and sunscreen simultaneously on day three. The light here, when the clouds part, is unlike anything I've seen anywhere else in the world.`,
    coverImage:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80",
    category: { slug: "nature", name: "Nature" },
    publishedAt: "2026-03-05",
    readTime: "6 min read",
    author: apil,
  },
];
