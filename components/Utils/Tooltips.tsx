export default function Tooltips({ text, children }: { text: string; children: React.ReactNode }) {
    return (
        <div className="relative inline-block group">
            {/* Trigger Element */}
            <div>{children}</div>

            {/* Tooltip */}
            <div
                className="absolute z-10 top-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1.5 rounded-md whitespace-nowrap transition-opacity duration-300 opacity-0 bg-opacity-70 group-hover:opacity-100">
                {text}
            </div>
        </div>
    )
}