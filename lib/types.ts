export type ReturnStatus = "requested"|"approved"|"in_transit"|"received"|"refunded"|"rejected";
export type Resolution = "refund"|"exchange"|"store_credit";
export type Condition = "sealed"|"opened"|"damaged";
export interface ReturnCase { id:string; orderId:string; customer:string; email:string; item:string; sku:string; amount:number; requestedAt:string; status:ReturnStatus; reason:string; condition:Condition; resolution:Resolution; daysSinceDelivery:number; restockable:boolean; refundAmount:number; riskScore:number }
export interface AuditEvent { id:string; returnId:string; at:string; actor:string; action:string; note:string }
