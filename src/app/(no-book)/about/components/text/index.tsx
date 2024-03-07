interface TextProps {
    children: React.ReactNode
}

export default function Text({ children }: TextProps) {
    return (
        <p className="text-base font-medium text-primary md:text-lg lg:text-xl xl:text-2xl">
            {children}
        </p>
    )
}
