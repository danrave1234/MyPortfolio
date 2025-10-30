import hackathonImg from '../assets/Hackaton1.png';
import img1 from '../assets/achievements1.png';
import img2 from '../assets/achievements2.png';
import img3 from '../assets/achievements3.png';
import img4 from '../assets/achievements4.png';
import img5 from '../assets/achievements5.png';

function Achievements() {
    return (
        <section id="achievements" className="snap-start min-h-screen flex items-center justify-center px-6 sm:px-10 pt-16">
            <div className="w-full max-w-6xl">
                <h2 className="text-3xl font-bold text-teal-400 mb-6 sm:mb-8">Achievements</h2>

                {/* Single Event: Hackathon Win + Press Features */}
                <article className="rounded-2xl border border-teal-400/30 bg-gray-800/30 p-5 sm:p-6">
                    <header className="mb-4">
                        <h3 className="text-2xl font-semibold text-white">Hackathon Win — Recognized Locally</h3>
                        <p className="text-slate-300 text-sm mt-1">
                            Built a functional prototype in just 2 hours (no backend) and topped 25+ teams. This one event was
                            recognized by our school and featured by local news pages like Cebu Daily News and SunStar.
                        </p>
                        <a
                            href="https://cebudailynews.inquirer.net/659355/reimagining-play-powering-the-future-proweavers-promptquest-showcases-cebuano-talent-in-tech?utm_source=dlvr.it&utm_medium=facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-teal-300 underline-effect hover:text-teal-400"
                            title="Read the Cebu Daily News article"
                        >
                            Read the Cebu Daily News article
                        </a>
                    </header>

                    {/* Mobile: horizontal scroll of images */}
                    <div className="sm:hidden -mx-5 px-5">
                        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
                            {[hackathonImg, img1, img2, img3, img4, img5].map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`Hackathon event photo ${i + 1}`}
                                    loading="lazy"
                                    className="h-40 w-64 object-cover rounded-lg border border-teal-400/30 snap-start flex-shrink-0"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop/tablet: collage layout */}
                    <div className="hidden sm:grid grid-cols-6 grid-rows-6 gap-3">
                        <div className="relative col-span-4 row-span-6 overflow-hidden rounded-lg border border-teal-400/30">
                            <img src={hackathonImg} alt="Hackathon main photo" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                        <div className="relative col-span-2 row-span-3 overflow-hidden rounded-lg border border-teal-400/30">
                            <img src={img1} alt="Press feature photo" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                        <div className="relative col-span-2 row-span-3 overflow-hidden rounded-lg border border-teal-400/30">
                            <img src={img2} alt="Event photo 2" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                        <div className="relative col-span-2 row-span-3 overflow-hidden rounded-lg border border-teal-400/30">
                            <img src={img3} alt="Event photo 3" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                        <div className="relative col-span-2 row-span-3 overflow-hidden rounded-lg border border-teal-400/30">
                            <img src={img4} alt="Event photo 4" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                        <div className="relative col-span-2 row-span-3 overflow-hidden rounded-lg border border-teal-400/30">
                            <img src={img5} alt="Event photo 5" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                    </div>
                </article>

                <p className="mt-6 text-center text-xs text-slate-400">
                    All photos above are from the same event. More achievements coming soon.
                </p>
            </div>
        </section>
    );
}

export default Achievements;
