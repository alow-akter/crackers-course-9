import React from 'react';
import { useLoaderData } from 'react-router-dom';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const Rechart = () => {
    const recharts = useLoaderData()
    const rechart = recharts.data;
    console.log(rechart)
    return (
        <div className='flex justify-center items-center  bg-slate-200 mt-10'>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart className='text-rose-700'
                    width={500}
                    height={300}
                    data={rechart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey='total'
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />

                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Rechart;