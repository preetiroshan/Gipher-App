import React from "react";
import { Box} from "@material-ui/core";
import ButtonTabs from "./ButtonTabs";
export default function Home(){
    return(
        <Box textAlign="center" data-testid="home" className="pt-4">
            <ButtonTabs/>
        </Box>

    )
}