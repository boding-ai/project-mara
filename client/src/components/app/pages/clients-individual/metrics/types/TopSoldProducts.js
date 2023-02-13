import React from 'react'

function TopSoldProducts() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
                className="client_metrics_top_sold_products"
            >
                <div className="metrics_client_individual_headers">
                    Top Sold Products
                </div>
                <div>
                    <table>
                        <thead>
                            <tr style={{ borderRadius: '10px' }}>
                                <th>Rank</th>
                                <th>Product</th>
                                <th>Purchased</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Vet Pro Big Dog Food</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Vet Pro Big Food</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Vet Pro Big dkdkdkd</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Vet Pro</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Vet Pro Big Dog Food dkdkdkd</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <form action="">
                    <div className="client_individual_chart_selector_income_percentage">
                        <select name="clientIndividualIncomeChange">
                            <option value="perMonth">Month</option>
                            <option value="perWeek">Week</option>
                            <option value="perYear">Year</option>
                            <option value="allTime">All Time</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TopSoldProducts
