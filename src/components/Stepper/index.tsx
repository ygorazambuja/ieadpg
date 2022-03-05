import { FiArrowRight } from "react-icons/fi";
import { Container, Step } from "./styles";

export type StepDetails = {
  title: string;
  completed: boolean;
  active: boolean;
};

type StepperProps = {
  steps: StepDetails[];
  currentStep: StepDetails;
  onStepClick: (step: string) => void;
};

export function Stepper({ steps, currentStep, onStepClick }: StepperProps) {
  return (
    <Container>
      {Object.keys(steps).map((step: string, index) => {
        const stepData = steps[Number(step)];

        return (
          <Step
            key={index}
            active={stepData.active}
            completed={stepData.completed}
            onClick={() => {
              onStepClick(stepData.title);
            }}
          >
            <div>{index + 1}</div>
            <span>{stepData.title}</span>
            <FiArrowRight />
          </Step>
        );
      })}
    </Container>
  );
}
