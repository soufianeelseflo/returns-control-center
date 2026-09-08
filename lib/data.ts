import { ReturnCase, AuditEvent } from "./types";
export const returns: ReturnCase[] = [
{id:"RMA-1048",orderId:"ORD-8821",customer:"Maya Laurent",email:"maya@example.com",item:"Linen Field Jacket",sku:"LFJ-OLV-M",amount:1290,requestedAt:"2026-09-08",status:"requested",reason:"Size mismatch",condition:"opened",resolution:"exchange",daysSinceDelivery:5,restockable:true,refundAmount:1290,riskScore:12},
{id:"RMA-1047",orderId:"ORD-8813",customer:"Youssef Amrani",email:"youssef@example.com",item:"Orbit Runner",sku:"ORB-BLK-43",amount:990,requestedAt:"2026-09-08",status:"approved",reason:"Wrong item received",condition:"sealed",resolution:"refund",daysSinceDelivery:3,restockable:true,refundAmount:990,riskScore:5},
{id:"RMA-1046",orderId:"ORD-8790",customer:"Sarah Chen",email:"sarah@example.com",item:"Studio Tote",sku:"ST-BRN-OS",amount:640,requestedAt:"2026-09-07",status:"received",reason:"Damaged in transit",condition:"damaged",resolution:"refund",daysSinceDelivery:8,restockable:false,refundAmount:640,riskScore:20},
{id:"RMA-1045",orderId:"ORD-8722",customer:"Adam El Idrissi",email:"adam@example.com",item:"Arc Hoodie",sku:"AH-GRY-L",amount:720,requestedAt:"2026-09-06",status:"requested",reason:"Changed mind",condition:"opened",resolution:"store_credit",daysSinceDelivery:19,restockable:true,refundAmount:720,riskScore:74},
{id:"RMA-1044",orderId:"ORD-8698",customer:"Nora Silva",email:"nora@example.com",item:"Terra Overshirt",sku:"TO-SND-S",amount:840,requestedAt:"2026-09-05",status:"refunded",reason:"Fit issue",condition:"opened",resolution:"refund",daysSinceDelivery:10,restockable:true,refundAmount:840,riskScore:9}
];
export const audit: AuditEvent[]=[
{id:"a1",returnId:"RMA-1046",at:"2026-09-08 14:22",actor:"Ops · Nadia",action:"Inspection completed",note:"Carrier damage confirmed; item marked non-restockable."},
{id:"a2",returnId:"RMA-1047",at:"2026-09-08 13:04",actor:"Rules engine",action:"Auto-approved",note:"Wrong-item reason, request inside 14-day window, low fraud risk."},
{id:"a3",returnId:"RMA-1044",at:"2026-09-08 10:48",actor:"Finance · Omar",action:"Refund settled",note:"Refund sent to original payment rail."}
];
