import {useState} from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

const Accordion = ({items}) => {
    const [expandedIndex, setExpandedIndex] = useState(null)

    const hadleClick = (index) => {
        expandedIndex === index ? setExpandedIndex(null) : setExpandedIndex(index)
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex
        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft/>}</span>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center curson-pointer" onClick={() => hadleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })

    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    )
}

export default Accordion