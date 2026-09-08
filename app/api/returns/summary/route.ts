import {NextResponse} from "next/server"; import {returns} from "@/lib/data"; import {returnMetrics} from "@/lib/metrics";
export async function GET(){return NextResponse.json({data:returnMetrics(returns),generatedAt:new Date().toISOString()})}
