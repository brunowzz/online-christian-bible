import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { BookOpenText, CalendarCheck, Globe, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function Cards() {
    return (
        <section className="container grid grid-cols-1 justify-center gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            <Card>
                <CardHeader>
                    <BookOpenText size="90" color="#1E2022" />
                    <CardTitle>Leitura Facilitada</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        Navegue pela Bíblia de maneira intuitiva, onde quer que
                        você esteja! Explore a Bíblia facilmente.
                    </p>
                </CardContent>
                <CardFooter>
                    <Link
                        href="/bible"
                        className="text-center text-sm text-secondary"
                    >
                        Comece a Ler
                    </Link>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CalendarCheck size="90" color="#1E2022" />
                    <CardTitle>Versículo do Dia</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        Inspire-se diariamente com o versículo do dia! Receba
                        uma dose diária de sabedoria espiritual.
                    </p>
                </CardContent>
                <CardFooter>
                    <Link
                        href="/verse-of-the-day"
                        className="text-center text-sm text-secondary"
                    >
                        Explore Agora
                    </Link>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Globe size="90" color="#1E2022" />
                    <CardTitle>Tenha Experiência</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        Faça da sua leitura da Bíblia uma experiência pessoal!
                        Escolha entre diferentes traduções da Bíblia.
                    </p>
                </CardContent>
                <CardFooter>
                    <Link
                        href="/bible"
                        className="text-center text-sm text-secondary"
                    >
                        Personalize agora
                    </Link>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Rocket size="90" color="#1E2022" />
                    <CardTitle>Aprofunde sua Fé</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        Explore recursos adicionais para enriquecer sua jornada
                        espiritual! Acesse os artigos sobre fé e
                        espiritualidade.
                    </p>
                </CardContent>
                <CardFooter>
                    <Link
                        href="/articles"
                        className="text-center text-sm text-secondary"
                    >
                        Explore Agora
                    </Link>
                </CardFooter>
            </Card>
        </section>
    )
}
