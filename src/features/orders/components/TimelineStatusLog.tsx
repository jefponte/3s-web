import { Timeline } from '@mui/lab';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { OrderStatusLog } from '../../../types/OrderStatusLog';
import { Tooltip } from '@mui/material';
import styled from 'styled-components';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import useTranslate from '../../polyglot/useTranslate';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        border: '1px solid #dadde9',
    },
}));

type Props = {
    statusLogs: OrderStatusLog[];
};
export const TimelineStatusLog = ({ statusLogs }: Props) => {
    const translate = useTranslate('status');
    return (
        <>
            <Timeline position="alternate">
                {statusLogs?.map((log, index) => {
                    const isLastItem = index === statusLogs.length - 1;
                    return (<TimelineItem key={log.id}>
                        <TimelineSeparator>
                            <TimelineDot color={log.status === "committed" || log.status === "closed" ? "success" : "secondary"} />
                            {!isLastItem && <TimelineConnector />}
                        </TimelineSeparator>
                        <HtmlTooltip title={`${log?.message} - ${new Date(log.created_at).toLocaleDateString("pt-BR")} - ${new Date(log?.created_at).toLocaleTimeString("pt-BR")} - ${log?.user?.name}`}>
                            <TimelineContent>{translate(log?.status)}</TimelineContent>
                        </HtmlTooltip>
                    </TimelineItem>);
                })}

            </Timeline>
        </>
    )
}

