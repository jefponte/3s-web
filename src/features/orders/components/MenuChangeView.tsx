import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TableChartIcon from '@mui/icons-material/TableChart';

type Props = {
    view: string;
    handleChange: (e: React.MouseEvent<HTMLElement>, nextView: string) => void;
};

export function MenuChangeView({ view, handleChange }: Props) {
    // const [view, setView] = React.useState('list');



    return (
        <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="quilt" aria-label="quilt">
                <ViewQuiltIcon />
            </ToggleButton>
            <ToggleButton value="list" aria-label="list">
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="kamban" aria-label="kamban">
                <ViewModuleIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
