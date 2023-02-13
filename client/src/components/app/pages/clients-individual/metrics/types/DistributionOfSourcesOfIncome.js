import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, Label, Text } from 'recharts';

import QuestionMarkTrigger from './QuestionMarkTrigger'

const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#AF19FF',
    '#de262f',
]

const pieData = [
    {
        name: 'Clinical Services',
        value: 68.85,
    },
    {
        name: 'Diagnostics',
        value: 7.91,
    },
    {
        name: 'Products',
        value: 6.85,
    },
    {
        name: 'Vaccines',
        value: 6.85,
    },
    {
        name: 'Emergency',
        value: 6.14,
    },
    {
        name: 'Miscellaneous',
        value: 10.25,
    },
]

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip" 
                style={{ backgroundColor: '#000', padding: '1px 5px', borderRadius: '10px', fontSize: '0.8em', color: '#fff' }}>
                <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
            </div>
        );
    }

    return null;
};

const message = "Distribution of Income based on the sources in the given time frame"

const PieRechartComponent = () => {
    return (
        <>
            <div className="metrics_client_individual_headers">
                <div>Distribution of Sources Income</div>
                <QuestionMarkTrigger message={message} />
            </div>
            <div
                style={{
                    width: '290px',
                    height: '150px',
                    padding: '0em 0em 0em 1em'
                }}
                className="center_everything"
            >
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            color="#000000"
                            dataKey="value"
                            nameKey="name"
                            outerRadius={65}
                            fill="#8884d8"
                            cx="58%"
                        >
                            {pieData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            layout="vertical"
                            align="left"
                            iconType="circle"
                            iconSize="5"
                            verticalAlign="middle"
                            width={120}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <form action="">
                <div className="client_individual_chart_selector">
                    <select name="clientIndividualDistributionOfSourcesIncome">
                        <option value="perMonth">vs Per Month</option>
                        <option value="perWeek">vs Per Week</option>
                        <option value="perYear">vs Per Year</option>
                        <option value="allTime">vs All Time</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default PieRechartComponent
