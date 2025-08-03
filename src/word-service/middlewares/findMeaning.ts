import { HttpStatus } from "@nestjs/common";

export const findMeaning =async (endpoint, word) => {
      try {
            const mainData = await fetch(`${endpoint}/${word}`);
            if (mainData.ok) {
                const res =await mainData.json();
                return {
                    info:{
                        word:res[0].word,
                        phonetic:res[0].phonetic,
                        partOfSpeech:res[0].meanings[0].partOfSpeech,
                        meanings:res[0].meanings[0].definitions[0].definition,
                        synonyms:res[0].meanings[0].definitions[0].synonyms[0] ?? ["none"],
                        antonyms:res[0].meanings[0].definitions[0].antonyms[0] ?? ["none"]
                    },
                    status:HttpStatus.FOUND,
                    message:"Found",
                    success:true
                };
            } else {
                return {
                    message: "Word does not exist",
                    success:false,
                    status:HttpStatus.NOT_FOUND
                }
            }
        } catch (err) {
            if (err instanceof Error) {
                return {
                    message: err.message,
                    status:500,
                    success:false
                }
            }
        }
}