import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/ideia.svg';
import outroImageUrl from '../../assets/outro.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from './Steps/FeedbackSucessStep';


export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideiaImageUrl,
      alt: 'Imagem de uma lampada'
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: outroImageUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    },
  },
};


export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const[feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const[feedbackSent, setFeedbackSent] = useState(false);

  function handrestartFeedback(){
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent ? (
        <FeedbackSucessStep onFeedbackRestartRequested={handrestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ): (
            <FeedbackContentStep 
              feedbackType={feedbackType} 
              onFeedbackRestartRequested={handrestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )} 
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Desenvolvido com ❤️ por <a className="underline underline-offset-2" href="www.google.com.br">weslei</a> 
      </footer>
    </div>
  )
}