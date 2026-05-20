import { Bell, Bookmark, Home, Mail, MessageCircle, PenLine, Repeat2, Search, Settings, ShieldCheck, Smile, Sparkles, UserRound } from 'lucide-react';
import { demoPosts, demoStories, demoTrends } from '../demo/demoData';

const navItems = [
  { label: 'Home', icon: Home },
  { label: 'Explore', icon: Search },
  { label: 'Messages', icon: Mail },
  { label: 'Bookmarks', icon: Bookmark },
  { label: 'Profile', icon: UserRound },
  { label: 'Settings', icon: Settings },
];

function App() {
  return (
    <main className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 border-x border-blue-400/10 lg:grid-cols-[260px_minmax(0,1fr)_340px]">
      <aside className="hidden border-r border-blue-400/10 p-5 lg:block">
        <div className="mb-8 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500 text-lg font-black text-white shadow-[0_0_34px_rgba(47,140,255,0.45)]">V</div>
          <div>
            <p className="text-xl font-black tracking-tight">Verdict</p>
            <p className="text-xs text-slate-400">Modern microblogging platform</p>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map(({ label, icon: Icon }) => (
            <button key={label} className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-200 transition hover:bg-blue-500/10 hover:text-white">
              <Icon size={20} />
              <span className="font-semibold">{label}</span>
            </button>
          ))}
        </nav>

        <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 font-bold text-white shadow-[0_0_28px_rgba(47,140,255,0.35)] transition hover:bg-blue-400">
          <PenLine size={19} /> New verdict
        </button>
      </aside>

      <section className="min-w-0 border-r border-blue-400/10">
        <header className="sticky top-0 z-10 border-b border-blue-400/10 bg-black/72 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black tracking-tight">Home</h1>
              <p className="text-sm text-slate-400">Scalable real-time social interaction</p>
            </div>
            <button className="rounded-full border border-blue-400/20 p-3 text-blue-200 hover:bg-blue-500/10">
              <Bell size={20} />
            </button>
          </div>
        </header>

        <div className="border-b border-blue-400/10 px-5 py-4">
          <div className="flex gap-4 overflow-x-auto pb-1">
            {demoStories.map((story) => (
              <button key={story.id} className="min-w-20 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-blue-300/40 bg-blue-500/10 text-sm font-black text-blue-100 shadow-[0_0_24px_rgba(47,140,255,0.18)]">{story.initials}</div>
                <p className="mt-2 truncate text-xs text-slate-300">{story.name}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="border-b border-blue-400/10 p-5">
          <div className="rounded-3xl border border-blue-400/15 bg-[#05070d]/92 p-4 shadow-2xl shadow-blue-950/20">
            <div className="flex gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-500/15 font-black text-blue-100">ST</div>
              <div className="w-full">
                <textarea className="min-h-24 w-full resize-none bg-transparent text-lg text-white outline-none placeholder:text-slate-500" placeholder="What is the verdict?" />
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-blue-400/10 pt-3">
                  <div className="flex gap-2 text-xs font-semibold text-slate-400">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-200">Post</span>
                    <span className="rounded-full px-3 py-1 hover:bg-blue-500/10">Deep post</span>
                    <span className="rounded-full px-3 py-1 hover:bg-blue-500/10">Story</span>
                  </div>
                  <button className="rounded-full bg-blue-500 px-5 py-2 text-sm font-bold text-white hover:bg-blue-400">Publish</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {demoPosts.map((post) => (
            <article key={post.id} className="border-b border-blue-400/10 p-5 transition hover:bg-blue-500/[0.035]">
              <div className="flex gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-slate-900 font-black text-blue-100 ring-1 ring-blue-400/20">{post.initials}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-bold text-white">{post.authorName}</p>
                    <span className="text-slate-500">@{post.handle}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-500">{post.timestamp}</span>
                    {post.kind === 'article' && <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-bold text-blue-200">Deep verdict</span>}
                  </div>
                  {post.title && <h2 className="mt-3 text-xl font-black tracking-tight text-white">{post.title}</h2>}
                  <p className="mt-2 leading-7 text-slate-200">{post.body}</p>
                  <div className="mt-4 flex max-w-xl items-center justify-between text-slate-500">
                    <button className="flex items-center gap-2 hover:text-blue-300"><MessageCircle size={18} /> {post.replies}</button>
                    <button className="flex items-center gap-2 hover:text-blue-300"><Repeat2 size={18} /> {post.reposts}</button>
                    <button className="flex items-center gap-2 hover:text-blue-300"><Smile size={18} /> {post.reactions}</button>
                    <button className="flex items-center gap-2 hover:text-blue-300"><Bookmark size={18} /> {post.bookmarks}</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="hidden p-5 xl:block">
        <div className="rounded-3xl border border-blue-400/15 bg-[#05070d]/88 p-5">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="text-blue-300" size={20} />
            <h2 className="font-black">Trending verdicts</h2>
          </div>
          <div className="space-y-3">
            {demoTrends.map((trend) => (
              <button key={trend} className="block w-full rounded-2xl border border-blue-400/10 bg-black/30 px-4 py-3 text-left hover:bg-blue-500/10">
                <p className="font-bold">{trend}</p>
                <p className="text-xs text-slate-500">Community discussion</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-blue-400/15 bg-[#05070d]/88 p-5">
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="text-blue-300" size={20} />
            <h2 className="font-black">Production notes</h2>
          </div>
          <p className="text-sm leading-6 text-slate-400">Google auth, database queries, realtime chat, stories, and moderation should replace the removable demo fixtures before launch.</p>
        </div>
      </aside>
    </main>
  );
}

export default App;
