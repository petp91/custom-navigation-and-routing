import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: "1839812301IJSDASDAJHSDHA",
            label: "111111111111",
            content: "asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda"
        },
        {
            id: "212ASDASDA4898ASDA",
            label: "222222222222",
            content: "asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda"
        },
        {
            id: "addasd8SD89898ASDA",
            label: "333333333",
            content: "asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda asdasda"
        }
    ]

    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage