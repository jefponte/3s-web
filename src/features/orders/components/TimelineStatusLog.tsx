import { OrderStatusLog } from '../../../types/OrderStatusLog';
import { Tooltip } from '@mui/material';

import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import useTranslate from '../../polyglot/useTranslate';

import  styled from "@emotion/styled";

const HtmlTooltip = styled((props: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: props.className || '' }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      border: "1px solid #dadde9",
    },
  }));


type Props = {
    statusLogs: OrderStatusLog[];
};
export const TimelineStatusLog = ({ statusLogs }: Props) => {
    const translate = useTranslate('status');
    return (
        <>
           AAA
        </>
    )
}

