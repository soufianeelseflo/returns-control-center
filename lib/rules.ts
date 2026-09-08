import { ReturnCase } from "./types";
export function evaluateEligibility(c: ReturnCase){
 const reasons:string[]=[]; let eligible=true;
 if(c.daysSinceDelivery>14){eligible=false;reasons.push("Outside the 14-day standard return window");}
 if(c.condition==="damaged" && c.reason!=="Damaged in transit"){eligible=false;reasons.push("Customer-damaged items require manual review");}
 if(c.riskScore>=70){eligible=false;reasons.push("High return-risk score requires manual approval");}
 if(!reasons.length) reasons.push("Eligible under current return policy");
 return {eligible,reasons,route: eligible&&c.riskScore<25?"auto":"manual" as const};
}
export function calculateRefund(c:ReturnCase){ const handling=c.condition==="damaged"&&!c.restockable?0:0; return Math.max(0,c.amount-handling); }
