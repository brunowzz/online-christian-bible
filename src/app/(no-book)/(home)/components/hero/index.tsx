import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="container mt-12 flex flex-col items-center gap-8">
            <h1 className="w-full text-center text-2xl font-medium text-primary md:text-3xl lg:w-[661px] xl:text-4xl 2xl:text-5xl">
                Descubra a Inspiração Diária:{' '}
                <strong className="font-bold text-secondary">
                    {' '}
                    Bíblia Cristã Online{' '}
                </strong>{' '}
                - Sua Fonte Gratuita de Sabedoria Espiritual
            </h1>

            <Link href="/bible">
                <Button className="lg:text-xl xl:text-2xl">
                    Comece sua jornada!
                </Button>
            </Link>
        </section>
    )
}
