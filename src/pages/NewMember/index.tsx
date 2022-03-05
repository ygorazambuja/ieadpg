import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Appbar } from "../../components/Appbar";
import { StepDetails, Stepper } from "../../components/Stepper";
import { createMember, Member } from "../../entities/member";
import { FirstStep } from "./steps/firstStep";
import { SecondStep } from "./steps/secondStep";

const INITIAL_STEPPER_DATA: StepDetails[] = [
  {
    title: "Dados Pessoais",
    completed: false,
    active: false,
  },
  {
    title: "Dados Ministeriais",
    completed: false,
    active: false,
  },
  {
    title: "Dados Financeiros",
    completed: false,
    active: false,
  },
];

const INITIAL_STEPPER_CURRENT_STEP: StepDetails = INITIAL_STEPPER_DATA[0];

export function NewMember() {
  const history = useHistory();

  const [steps, setSteps] = useState<StepDetails[]>(INITIAL_STEPPER_DATA);
  const [currentStep, setCurrentStep] = useState<StepDetails>(
    INITIAL_STEPPER_CURRENT_STEP as StepDetails
  );

  const [form, setForm] = useState(() => createMember() as Member);

  function handleRedirectBack() {
    history.push("/members");
  }

  useEffect(() => {
    console.log(form);
  }, [form]);

  function handleStepClick(stepTitle: string) {
    const step =
      steps.find((s) => s.title === stepTitle) || ({} as StepDetails);
    setCurrentStep(step);
  }

  return (
    <div style={{ marginBottom: "80px" }}>
      <Appbar
        title="Novo Membro"
        leading={<FiArrowLeft />}
        onLeadingClick={handleRedirectBack}
      />
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={(step) => handleStepClick(step)}
      />

      {currentStep.title === "Dados Pessoais" && (
        <FirstStep form={form} setForm={setForm} onNextStep={() => {}} />
      )}
      {currentStep.title === "Dados Ministeriais" && (
        <SecondStep form={form} setForm={setForm} onNextStep={() => {}} />
      )}
      {currentStep.title === "Dados Financeiros" && <h1>Third</h1>}
    </div>
  );
}
