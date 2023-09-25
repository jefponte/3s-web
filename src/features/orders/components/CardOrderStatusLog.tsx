import React from 'react';
import {
    Box,
    Button,
    FormControl,
    Grid,
    TextField,
    Card,
    CardContent,
    Typography,
    AvatarGroup,
    Chip,
    Avatar
} from "@mui/material";
import styled from "styled-components";
import { OrderStatusLog } from '../../../types/OrderStatusLog';

interface BoardProps {
    status?: OrderStatusLog;
    category?: {
        color?: string;
        title?: string;
    };
    title?: string;
    start?: string;
    members?: {
        id: string;
        name: string;
        avatar: string;
    }[];
}

const CardRoot = styled(Card) <{ status?: string; categorycolor?: string }>`
    margin-bottom: 20px;
    border-left: 5px solid ${(props) => (props.status === 'Waiting' ? 'blue' : 'green')};
  `;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `;

const Content = styled(CardContent)`
    flex: 1 0 auto;
  `;

const BottomBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardOrderStatusLog = ({
    status,
    board = {
        category: { color: 'blue', title: 'Example Category' },
        title: 'Example Title',
        start: '2023-09-24',
        members: [
            { id: '1', name: 'John Doe', avatar: 'avatar1' },
            { id: '2', name: 'Jane Smith', avatar: 'avatar2' },
        ],
    },
}: { status: OrderStatusLog, board?: BoardProps }) => {
    return (
        <CardRoot
            categorycolor={'blue'}
            variant="outlined"
            style={{ borderLeft: `5px solid ${board.category?.color || 'blue'}` }}
        >
            <Details>
                <Content>
                    <Typography component="h5" variant="h6">
                        {status?.status}
                    </Typography>
                    <Grid item xs={12}>
                        <Box component="small" m={1}>
                            <Typography variant="body2">{status?.message}</Typography><br/>
                            <Typography variant="body2">{status?.created_at}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className="bottomBox">
                        {(
                            <Chip
                                size="small"
                                label={(status?.status === null ? "NAO INFORMADO" : status?.user?.name)}
                                style={{ backgroundColor: 'blue', color: '#fff' }}
                            />
                        )}

                    </Grid>
                </Content>
            </Details>
        </CardRoot>
    );
};


