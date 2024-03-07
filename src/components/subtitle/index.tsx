interface SubtitleProps {
    children: React.ReactNode
}

export default function Subtitle({ children }: SubtitleProps) {
    return (
        <h2 className="text-2xl font-extrabold text-primary md:text-3xl lg:w-[661px] xl:text-4xl 2xl:text-5xl">
            {children}
        </h2>
    )
}
