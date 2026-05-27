/** State shape for the entire diagnostic form */
export interface FormData {
  /** Step 1 */
  area: string;
  areaOther: string;
  status: string;
  frequency: string;
  /** Step 2 */
  scale: string;
  tools: string[];
  toolsOther: string;
  internalTools: string;
  internalToolsDetails: string;
  sensitiveData: string;
  /** Step 3 */
  goal: string;
  /** Contact */
  name: string;
  company: string;
  email: string;
  whatsapp: string;
}

export type FormStep = 1 | 2 | 3;
