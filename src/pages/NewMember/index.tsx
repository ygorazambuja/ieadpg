import { useEffect, useMemo, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Appbar } from "../../components/Appbar";
import { StepDetails, Stepper } from "../../components/Stepper";
import { createMember, Member } from "../../entities/member";
import {
  addNewMember,
  getMemberById,
  updateMemeber,
} from "../../services/firebase/members.firebase";
import { FirstStep } from "./steps/FirstStep";
import { SecondStep } from "./steps/SecondStep";
import { ThirdStep } from "./steps/ThirdStep";

const STEPS = ["Passo 1", "Passo 2", "Passo 3"];

const INITIAL_STEPPER_DATA: StepDetails[] = [
  {
    title: STEPS[0],
    completed: false,
    active: false,
  },
  {
    title: STEPS[1],
    completed: false,
    active: false,
  },
  {
    title: STEPS[2],
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

  const isEditMode = useMemo(() => {
    return !!history.location.pathname.includes("/edit");
  }, [history]);

  useEffect(() => {
    if (isEditMode) {
      const id = history.location.pathname.split("/").pop();
      if (id) {
        fetchMemberById(id);
      }
    }
  }, [isEditMode]);

  async function fetchMemberById(id: string) {
    const fetchedMember = await getMemberById(id);
    setForm(fetchedMember);
  }

  // useEffect(() => console.log(form), [form]);

  function handleFirstStep() {
    setSteps([
      {
        ...steps[0],
        completed: true,
      },
      {
        ...steps[1],
        active: true,
      },
      ...steps.slice(2),
    ]);
    setCurrentStep(steps[1]);
  }

  function handleSecondStep() {
    setSteps([
      {
        ...steps[0],
        completed: true,
        active: false,
      },
      {
        ...steps[1],
        completed: true,
        active: false,
      },
      {
        ...steps[2],
        active: true,
      },
    ]);
    setCurrentStep(steps[2]);
  }

  async function handleThirdStep() {
    try {
      if (isEditMode) {
        await updateMemeber(form);
        toast.success("Membro atualizado com sucesso!");
        return handleRedirectBack();
      }

      await addNewMember(form);
      toast.success("Membro cadastrado com sucesso");

      handleRedirectBack();
    } catch (error) {
      toast.error("Erro ao cadastrar membro");
    }
  }

  async function asyncAddNewMember() {}

  function handleStepClick(stepTitle: string) {
    const step =
      steps.find((step) => step.title === stepTitle) || ({} as StepDetails);
    setCurrentStep(step);
  }

  return (
    <div style={{ marginBottom: "80px" }}>
      <Appbar
        title={isEditMode ? "Editar Membro" : "Novo Membro"}
        leading={<FiArrowLeft />}
        onLeadingClick={handleRedirectBack}
      />
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={(step) => handleStepClick(step)}
      />

      {currentStep.title === STEPS[0] && (
        <FirstStep form={form} setForm={setForm} onNextStep={handleFirstStep} />
      )}
      {currentStep.title === STEPS[1] && (
        <SecondStep
          form={form}
          setForm={setForm}
          onNextStep={handleSecondStep}
        />
      )}
      {currentStep.title === STEPS[2] && (
        <ThirdStep
          form={form}
          setForm={setForm}
          onNextStep={() => {
            handleThirdStep();
          }}
        />
      )}
    </div>
  );
}
