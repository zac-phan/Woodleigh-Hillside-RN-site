export default function WoodleighHillsideRNOpeningPage() {
  const googleFormUrl = "https://forms.gle/6dNgvKJjEz5d9mXS9";
  const spaces = [
    {
      title: "Main Activity Area",
      description:
        "A flexible open space designed for community programmes, workshops, festive activities, and resident gatherings.",
      features: ["Open event space", "Multi-use layout", "Suitable for community bonding"],
      icon: "🎉",
    },
    {
      title: "Game Area",
      description:
        "A cosy corner for light recreation, interactive activities, and small-group engagement for all ages.",
      features: ["Family-friendly", "Interactive play", "Casual social space"],
      icon: "🎲",
    },
    {
      title: "Classroom",
      description:
        "A dedicated learning zone for talks, skills workshops, enrichment sessions, and resident training activities.",
      features: ["Talks and classes", "Learning-focused", "Community workshops"],
      icon: "📘",
    },
    {
      title: "Sitting Bench Area",
      description:
        "A welcoming waiting and resting corner where residents can pause, chat, and connect before or after activities.",
      features: ["Casual conversations", "Comfortable seating", "Neighbourhood connection"],
      icon: "🪑",
    },
    {
      title: "Pantry Corner",
      description:
        "A simple support area to facilitate light refreshments during selected programmes and community sessions.",
      features: ["Refreshment support", "Programme convenience", "Functional amenity"],
      icon: "☕",
    },
    {
      title: "Display & Community Wall",
      description:
        "A space to feature announcements, photos, resident initiatives, and highlights from the neighbourhood.",
      features: ["Updates and notices", "Resident highlights", "Community storytelling"],
      icon: "📌",
    },
  ];

  const ideas = [
    "Children's holiday activities",
    "Senior wellness and active ageing sessions",
    "Parent-and-child programmes",
    "Health talks and screenings",
    "Arts, crafts, and hobby workshops",
    "Digital literacy and practical life skills",
  ];

  const highlights = [
    {
      title: "A space for everyone",
      text: "From young families to seniors, the centre is meant to support bonding, learning, recreation, and meaningful neighbourly connections.",
    },
    {
      title: "Designed for community use",
      text: "The layout supports both larger group activities and smaller gatherings, giving the RN flexibility to host a wide variety of programmes.",
    },
    {
      title: "Built around resident participation",
      text: "The centre will grow best when residents share ideas, volunteer, and help shape the kinds of activities that matter most to the neighbourhood.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-stone-50 to-white text-stone-800">
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm font-medium text-amber-800">
                Woodleigh Hillside Residents' Network
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-stone-900 md:text-6xl">
                Welcome to the new Woodleigh Hillside RN Centre
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
                A new shared space for residents to connect, learn, relax, and build a stronger neighbourhood together.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-amber-500 px-5 py-3 text-sm font-medium text-stone-900 shadow-sm transition hover:-translate-y-0.5"
                >
                  Suggest an Activity
                </a>
                <a
                  href="#spaces"
                  className="rounded-2xl bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Explore the Centre
                </a>
                <a
                  href="#ideas"
                  className="rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-50"
                >
                  Share Your Ideas
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-3xl">🏡</div>
                <h3 className="mt-4 text-xl font-semibold">Community-focused</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  A centre designed to bring neighbours together through activities, shared experiences, and everyday interactions.
                </p>
              </div>
              <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:translate-y-6">
                <div className="text-3xl">🌿</div>
                <h3 className="mt-4 text-xl font-semibold">Welcoming spaces</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Different zones support learning, recreation, casual interaction, and community-driven programming.
                </p>
              </div>
              <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-3xl">💡</div>
                <h3 className="mt-4 text-xl font-semibold">Resident-led ideas</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  We want residents to help shape the programmes and activities that will make this centre meaningful for the estate.
                </p>
              </div>
              <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:translate-y-6">
                <div className="text-3xl">🤝</div>
                <h3 className="mt-4 text-xl font-semibold">Made for connection</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Whether for classes, events, or simple conversations, the RN Centre is a place for community spirit to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10" id="about">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">About the centre</p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900">A new shared home for resident engagement</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">
              The Woodleigh Hillside RN Centre is envisioned as a welcoming and practical community space that supports neighbourhood bonding, learning opportunities, resident outreach, and meaningful local participation.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">
              With a flexible main activity area, dedicated classroom, game area, seating zone, and supporting amenities, the centre can host a wide range of programmes for families, seniors, youths, and residents of all backgrounds.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-stone-900 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">What to expect</p>
            <div className="mt-6 space-y-5">
              <div>
                <div className="text-sm text-stone-300">Opening purpose</div>
                <div className="mt-1 text-lg font-medium">Community connection and participation</div>
              </div>
              <div>
                <div className="text-sm text-stone-300">Possible uses</div>
                <div className="mt-1 text-lg font-medium">Classes, workshops, engagement events, family activities</div>
              </div>
              <div>
                <div className="text-sm text-stone-300">Key focus</div>
                <div className="mt-1 text-lg font-medium">Resident ideas, inclusive programming, local belonging</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10" id="spaces">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Explore the RN</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-900">Spaces around the centre</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-stone-600">
            Based on the reference layout, the centre includes a mix of flexible activity, learning, recreation, and support areas that can serve different resident needs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {spaces.map((space) => (
            <div key={space.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-3xl">{space.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">{space.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{space.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {space.features.map((feature) => (
                  <span key={feature} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10" id="programmes">
        <div className="rounded-[2rem] border border-stone-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-8 shadow-sm md:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Opportunities</p>
              <h2 className="mt-2 text-3xl font-semibold text-stone-900">Possible programmes for the neighbourhood</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
                The RN Centre can support a wide range of activities for different age groups and interests. These may evolve over time based on community needs and resident feedback.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ideas.map((idea) => (
                <div key={idea} className="rounded-2xl border border-white bg-white/80 p-4 text-sm font-medium text-stone-800 shadow-sm backdrop-blur">
                  {idea}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 md:px-10" id="ideas">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Have a suggestion?</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-900">Help shape the activities in our RN</h2>
            <p className="mt-4 text-base leading-7 text-stone-600">
              We would love to hear what kinds of programmes, workshops, classes, and community initiatives you would like to see at the Woodleigh Hillside RN Centre.
            </p>
            <p className="mt-4 text-base leading-7 text-stone-600">
              Your ideas can help us create a centre that is lively, inclusive, and useful for residents across all age groups.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Share your ideas</p>
                <h3 className="mt-2 text-2xl font-semibold text-stone-900">Submit your suggestions through our Google Form</h3>
                <p className="mt-4 text-base leading-7 text-stone-600">
                  To keep feedback collection simple and organised, resident ideas for activities and programmes will be gathered directly through our Google Form.
                </p>
                <p className="mt-4 text-base leading-7 text-stone-600">
                  Whether you have ideas for family activities, wellness sessions, workshops, hobby groups, or community bonding events, we would love to hear from you.
                </p>
              </div>

              <div className="mt-8 rounded-3xl border border-stone-200 bg-stone-50 p-6">
                <p className="text-sm leading-6 text-stone-600">
                  Click the button below to open the form and submit your suggestions.
                </p>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-2xl bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  Open Google Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10" id="highlights">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Why this matters</p>
          <h2 className="mt-2 text-3xl font-semibold text-stone-900">Building a stronger neighbourhood through shared space</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10" id="visit">
        <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">Stay connected</p>
              <h2 className="mt-2 text-3xl font-semibold">Join us as we bring the RN Centre to life</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
                As the Woodleigh Hillside RN Centre opens its doors, we look forward to welcoming residents into a warm and vibrant space shaped by the community, for the community.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-stone-400">Venue</div>
                  <div className="mt-1 font-medium text-white">Woodleigh Hillside Residents' Network Centre</div>
                </div>
                <div>
                  <div className="text-stone-400">Opening information</div>
                  <div className="mt-1 font-medium text-white">To be announced</div>
                </div>
                <div>
                  <div className="text-stone-400">Resident feedback</div>
                  <div className="mt-1 font-medium text-white">Ideas, activities, and community suggestions welcome</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
