import { OrderStatusLog } from '../../../types/OrderStatusLog';
import useTranslate from '../../polyglot/useTranslate';



type Props = {
    statusLogs: OrderStatusLog[];
};
export const TimelineStatusLog = ({ statusLogs }: Props) => {
    const translate = useTranslate('status');
    return (
        <>
            Timeline vai aqui
        </>
    )
}

