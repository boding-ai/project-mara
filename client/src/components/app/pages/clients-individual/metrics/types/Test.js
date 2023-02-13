import React, { PureComponent } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label,
} from 'recharts'
import QuestionMarkTrigger from './QuestionMarkTrigger'

const data = [
    {
        name: 'Sep',
        income: 5,
        visits: 4,
    },
    {
        name: 'Oct',
        income: 2,
        visits: 9,
    },
    {
        name: 'Nov',
        income: 1,
        visits: 4,
    },
    {
        name: 'Dec',
        income: 3,
        visits: 4,
    },
]

const Example = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: -27,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend
                    // align="center"
                    // verticalAlign="bottom"
                />
                <Line
                    type="monotone"
                    dataKey="visits"
                    stroke="#8884d8"
                    activeDot={{ r: 5 }}
                />
                <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#82ca9d"
                    activeDot={{ r: 5 }}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}
export default Example
