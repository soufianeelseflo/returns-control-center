import { NextResponse } from "next/server"; import { returns } from "@/lib/data";
export async function GET(){return NextResponse.json({data:returns,meta:{count:returns.length}})}
