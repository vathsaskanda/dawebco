import { DentalClinicTemplate } from "./templates/dental-clinic";
import { CafeTemplate } from "./templates/cafe";
import { GymTemplate } from "./templates/gym";
import { FashionTemplate } from "./templates/fashion";

type PreviewProps = { onExit: () => void };

export function DentalPreview({ onExit }: PreviewProps) {
  return <DentalClinicTemplate onExit={onExit} />;
}

export function CafePreview({ onExit }: PreviewProps) {
  return <CafeTemplate onExit={onExit} />;
}

export function GymPreview({ onExit }: PreviewProps) {
  return <GymTemplate onExit={onExit} />;
}

export function FashionPreview({ onExit }: PreviewProps) {
  return <FashionTemplate onExit={onExit} />;
}