import Cards from './components/cards'
import Hero from './components/hero'
import VerseOfTheDay from './components/verse-of-the-day'

export default function Home() {
    return (
        <main className="flex flex-col gap-16">
            <Hero />
            <Cards />
            <VerseOfTheDay />
        </main>
    )
}
