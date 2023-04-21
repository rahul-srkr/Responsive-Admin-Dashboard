import ThemeContext from '@/context/themeContext'
import { ResponsiveLine } from '@nivo/line'
import { useContext } from 'react'

const LineChart = ({ data }) => {
    const { themeMode } = useContext(ThemeContext)

    return (
        <ResponsiveLine
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: themeMode === "dark" ? "#e0e0e0" : "#141414"
                        }
                    },
                    legend: {
                        text: {
                            fill: themeMode === "dark" ? "#e0e0e0" : "#141414",
                        },
                    },
                    ticks: {
                        line: {
                            stroke: themeMode === "dark" ? "#e0e0e0" : "#141414",
                            strokeWidth: 1,
                        },
                        text: {
                            fill: themeMode === "dark" ? "#e0e0e0" : "#141414",
                        },
                    },
                },
                legends: {
                    text: {
                        fill: themeMode === "dark" ? "#e0e0e0" : "#141414",
                    },
                },


            }}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            colors={{ datum: 'color' }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: -40,
                legendPosition: 'middle',
                tickValues: 5

            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default LineChart

