import NavigationListItem from "@/components/ListItem/Navigation/NavigationListItem";

export default function NavigationList({listItem}: {listItem : {label: string, url: string}[]}) {
    return (
        <>
            <div className={"flex flex-col gap-4"}>
                {listItem.map((item, index) => (
                    <NavigationListItem key={index} label={item.label} url={item.url} />
                ))}
            </div>
        </>
    )
}

