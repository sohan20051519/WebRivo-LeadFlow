
import { GoogleGenAI, Type } from "@google/genai";
import { LeadRow } from "../types";

const MODEL_NAME = 'gemini-3-flash-preview';

export const analyzeLeads = async (leads: LeadRow[], headers: string[]) => {
  // Always initialize with direct access to process.env.API_KEY as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const sampleLeads = leads.slice(0, 20); // Send a manageable sample for analysis
  
  const prompt = `Analyze the following lead data (sample of 20) and provide a professional business summary and a predicted lead quality score (0-100) for each row based on the available information like job title, company, or activity. 
  
Headers: ${headers.join(', ')}
Data: ${JSON.stringify(sampleLeads)}

Return the response in JSON format.`;

  const response = await ai.models.generateContent({
    model: MODEL_NAME,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: {
            type: Type.STRING,
            description: "A summary of the lead cohort quality and potential."
          },
          scores: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                rowIndex: { type: Type.NUMBER },
                score: { type: Type.NUMBER },
                reason: { type: Type.STRING }
              },
              required: ["rowIndex", "score"]
            }
          }
        },
        required: ["summary", "scores"]
      }
    }
  });

  // Extract the text content using the .text property (not a method)
  const resultText = response.text;
  if (!resultText) {
    return null;
  }

  try {
    return JSON.parse(resultText);
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return null;
  }
};
