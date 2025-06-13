import React, { useState } from "react";
import {
  GoabButton,
  GoabCheckbox,
  GoabFieldset,
  GoabFormItem,
  GoabLink,
  GoabText,
} from "@abgov/react-components";
import { GoabCheckboxOnChangeDetail } from "@abgov/ui-components-common";

interface Section1BProps {
  onComplete?: () => void;
  onBack?: () => void;
}

export const Section1B = ({ onComplete, onBack }: Section1BProps) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onBack?.();
  };

  const validateTermsOfUse = () => {
    if (termsAccepted) {
      onComplete?.();
    }
  };

  const handleCheckboxChange = (e:  GoabCheckboxOnChangeDetail) => {
    const isChecked = e.checked || false;
    setTermsAccepted(isChecked);
  };

  const handleContinueClick = () => {
    validateTermsOfUse();
  };

  return (
    <div>
      <GoabLink>
        <a href="#" onClick={handleBackClick}>Back</a>
      </GoabLink>

      <GoabText tag="h1" size="heading-xl" mt="xl">
        Terms of use
      </GoabText>

      <GoabText tag="p" size="body-m" color="secondary" mt="l">
        Donec malesuada sagittis fringilla pulvinar in molestie. Sagittis felis congue
        pellentesque tristique urna in habitasse. At faucibus commodo pellentesque enim
        nisl at. Fermentum quisque viverra diam amet consequat tellus. Amet interdum sit
        elementum nibh at justo.
      </GoabText>

      <GoabFieldset mt="xl">
        <GoabFormItem name="Terms of use">
          <GoabCheckbox
            name="terms-of-use"
            text="I accept the terms of use."
            onChange={handleCheckboxChange}
          />
        </GoabFormItem>
      </GoabFieldset>

      <GoabButton
        type="primary"
        mt="xl"
        onClick={handleContinueClick}
        disabled={!termsAccepted}
      >
        Continue to next section
      </GoabButton>
    </div>
  );
};
