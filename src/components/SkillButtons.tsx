import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import * as React from 'react';


type props ={
    skillList: Array<string>;
}

function SkillButtons({skillList}:props) {

        const [formats, setFormats] = React.useState(() => [1, 2]);

        const handleFormat = (event :React.MouseEvent, newFormats: number[]) => {
          setFormats(newFormats);
        };

        const styles = {
            "&&": {
                backgroundColor: "pink",
                color: "white",
                outline: "none",
                renderBorder: "false",
                fillColor: "white",
                margin: "2rem",
                borderRadius: "0%",

            },
            "&.Mui-selected, &.Mui-selected:hover": {
                color: "pink",
                backgroundColor: 'white',

        }
  
    }
    const skills = skillList;
  return (
    <>
    <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
        aria-label="text alignment">
        {skills.map((skill, index) =>
           <ToggleButton sx={styles} key = {index} value={skill} >
            <Typography>{skill}</Typography>
            </ToggleButton> 
            )
        }
    </ToggleButtonGroup>
    </>
  )
}

export default SkillButtons
