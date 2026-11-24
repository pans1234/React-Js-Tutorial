import { BrowserRouter } from "react-router";
import RoutesReact from './routes'
export default function ReactRouterParent() {
    return (
        <>
            <BrowserRouter>
                <RoutesReact>
                    <h1>Browser Router Understanding!</h1>
                </RoutesReact>
            </BrowserRouter>
        </>
    )
}