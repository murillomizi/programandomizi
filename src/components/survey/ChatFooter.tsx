
import React from "react";
import ChatInput from "./ChatInput";
import SubmitButton from "./SubmitButton";
import { motion } from "framer-motion";

interface ChatFooterProps {
  currentStep: number;
  totalSteps: number;
  onSendMessage: (message: string) => void;
  onSubmitSurvey: () => void;
  isSubmitting: boolean;
  hasSubmitted: boolean;
  showOptions: boolean;
  showSlider: boolean;
}

const ChatFooter = ({
  currentStep,
  totalSteps,
  onSendMessage,
  onSubmitSurvey,
  isSubmitting,
  hasSubmitted,
  showOptions,
  showSlider
}: ChatFooterProps) => {
  return (
    <motion.div 
      className="p-4 border-t border-minimal-gray-200 bg-white rounded-b-xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 max-w-[600px] mx-auto">
        {currentStep === 6 && (
          <ChatInput 
            onSend={onSendMessage} 
            placeholder="Digite seu e-mail..."
          />
        )}
        
        {currentStep < 6 && !showOptions && !showSlider && (
          <ChatInput onSend={onSendMessage} />
        )}
        
        {currentStep === totalSteps - 1 && (
          <SubmitButton 
            onSubmit={onSubmitSurvey}
            isSubmitting={isSubmitting}
            hasSubmitted={hasSubmitted}
          />
        )}
      </div>
    </motion.div>
  );
};

export default ChatFooter;
