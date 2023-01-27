import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {

    return (
        <div>
            <div>
                <Button success rounded outline className="mb-5">
                    Click Me!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoBell /> Now
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase /> Deal
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    <GoCloudDownload />Adds
                </Button>
            </div>
        </div>
    )
}

export default ButtonPage