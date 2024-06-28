"use client"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card"
import {LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts'
import data from "@/data/analytics"
export const AnalyticsChart = () => {
  return (
    <>
        <Card>
            <CardHeader>
                <CardTitle>Analytics for this Year</CardTitle>
                <CardDescription>View per Month</CardDescription>
            </CardHeader>
            <CardContent>
                <div style={{width:'100%', height:300}}>
                    <ResponsiveContainer>
                        <LineChart width={1000} height={200} data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                            <CartesianGrid stroke="#ccc"/>
                            <XAxis dataKey='name'/>
                            <YAxis data/>
                        </LineChart>
                    </ResponsiveContainer>

                </div>
            </CardContent>
        </Card>

    </>
  )
}
