export default function WorkResponsibilty({workResponsibility}: {workResponsibility: string[]}) {
    return (
        <div className={"gap gap-cols-1 gap-x-2 mb-4"}>
            {workResponsibility.map((item:string, idx:number) => (
                <div className="flex gap-4 w-full" key={idx}>
                    <svg width="23" height="10" viewBox="0 0 23 10" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0V9H23" stroke="#F5F5F5" strokeWidth="1.5"/>
                    </svg>
                    <p className={"italic text-base"}>{item}</p>
                </div>))
            }

        </div>
    )
}