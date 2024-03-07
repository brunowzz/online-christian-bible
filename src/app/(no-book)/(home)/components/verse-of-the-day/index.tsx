import Subtitle from '@/components/subtitle'

export default function VerseOfTheDay() {
    return (
        <section className="container space-y-6">
            <Subtitle>Versículo do dia</Subtitle>

            <div className="text-shadow-md bg-verse-of-day flex w-full flex-col items-center gap-6 rounded-3xl bg-cover bg-center bg-no-repeat p-10 text-primary-foreground shadow-xl filter">
                <h3 className="text-center text-2xl font-extrabold shadow-inner drop-shadow-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
                    Tudo de bom que recebemos e tudo o que é perfeito vêm do
                    céu, vêm de Deus, o Criador das luzes do céu. Ele não muda,
                    nem varia de posição, o que causaria a escuridão.
                </h3>

                <h4 className="text-center text-2xl font-extrabold md:text-3xl xl:text-4xl 2xl:text-5xl">
                    Tiago 1:17
                </h4>
            </div>
        </section>
    )
}
