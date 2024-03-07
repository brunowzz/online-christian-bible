import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="mt-16 border-t-2 py-5 text-primary">
            <section className="container flex flex-wrap justify-between gap-4">
                <div className="w-[200px]">
                    <h2 className="text-base font-medium">
                        Conectando Corações, Inspirando Almas: Bíblia Online,
                        Sua Jornada Espiritual Começa Aqui!
                    </h2>
                </div>

                <nav className="flex flex-col gap-2 text-base font-medium md:text-center">
                    <Link href="/about">Sobre nós</Link>
                    <Link href="/terms-of-use">Termos de uso</Link>
                    <Link href="/faq">Perguntas Frequentes</Link>
                    <Link href="/articles">Artigos</Link>
                </nav>

                <nav>
                    <p>Entre em contato</p>

                    <span className="mt-2 flex gap-2 md:justify-end">
                        <a href="#">
                            <Instagram size={24} color="#1E2022" />
                        </a>

                        <a href="#">
                            <Linkedin size={24} color="#1E2022" />
                        </a>
                    </span>
                </nav>
            </section>

            <section className="mt-6 flex justify-center">
                <h3>
                    Desenvolvido por{' '}
                    <a href="https://brunobarreiras.vercel.app">
                        Bruno Barreiras
                    </a>
                </h3>
            </section>
        </footer>
    )
}
