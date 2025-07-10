import { GoabButton, GoabIcon, GoabModal } from "@abgov/react-components";
import { useState } from "react";

export const Issue2829 = () => {
  const [openAlertDialogModal, setOpenAlertDialogModal] = useState(false);
  const [openDialogModal, setOpenDialogModal] = useState(false);

  const openAlertDialog = () => {
    setOpenAlertDialogModal(true);
  };

  const closeAlertDialog = () => {
    setOpenAlertDialogModal(false);
  };

  const openDialog = () => {
    setOpenDialogModal(true);
  };

  const closeDialog = () => {
    setOpenDialogModal(false);
  };

  const modalContent = (
    <>
      <strong>This industry is made up of two major sub-industries:</strong>
      <ol>
        <li>Wholesale trade</li>
        <li>Retail trade</li>
      </ol>
      <strong>Wholesale trade</strong>
      <p>
        This industry comprises establishments primarily engaged in wholesaling
        merchandise. The wholesaling process is an intermediate step in the
        distribution of goods. Many wholesalers are organized to sell
        merchandise in large quantities to retailers, and business and
        institutional clients.
      </p>
      <p>
        Subsectors include wholesalers of, farm products, petroleum, petroleum
        products, and other hydrocarbons, food, beverage and tobacco, motor
        vehicle and motor vehicle parts and accessories, building material and
        supplies, machinery, equipment, and supplies.
      </p>
      <strong>Retail trade</strong>
      <p>
        This industry comprises establishments primarily engaged in retailing
        merchandise. The retailing process is the final step in the distribution
        of merchandise; retailers are therefore organized to sell merchandise in
        small quantities to the general public. Internet retail, direct selling,
        and mail-order retail are not separately classified from traditional
        in-store (also known as "brick and mortar") retail. Units that engage in
        retailing by any of these methods are classified based on the type of
        goods sold. Meanwhile, vending machine operators are grouped width
        convenience retailers.
      </p>
      <p>
        Subsectors include retailers and dealers of, motor vehicles and parts,
        building materials and garden equipment and supplies, food and beverage,
        furniture, home furnishings, electronics and appliances and general
        merchandise, health and personal care, gasoline stations and fuel,
        clothing, clothing accessories, shoes, jewelry, luggage and leather
        goods, sporting goods, hobby, musical instrument, book, and
        miscellaneous retailers.
      </p>
      <p style={{ marginTop: "3rem", marginBottom: "0.5rem" }}>
        For more information please see:
      </p>
      <p style={{ marginBottom: 0 }}>
        <a href="/" target="_blank">
          Wholesale trade (NAICS - 41) - Statistics Canada
          <GoabIcon type="open" size="small" />
        </a>
        <br />
        <a href="/" target="_blank">
          Retail Trade (NAICS - 44-45) - Statistics Canada
          <GoabIcon type="open" size="small" />
        </a>
      </p>
    </>
  );

  return (
    <>
      <h2>Issue #2829: Modal AlertDialog Focus and Screen Reader Fix</h2>

      <p>
        <strong>Problem:</strong> When role="alertdialog" is used, opening the modal automatically scrolled to the "Wholesale trade" link, hiding the full modal content. After fixing the scroll issue, the screen reader only reads the title instead of the full content.
      </p>

      <p>
        <strong>Solution:</strong> For alertdialog role, the modal pane itself gets focus (with preventScroll: true) and uses aria-describedby to ensure screen readers announce the full content.
      </p>

      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
        <GoabButton onClick={openAlertDialog}>Show AlertDialog Modal</GoabButton>
        <GoabButton onClick={openDialog}>Show Regular Dialog Modal</GoabButton>
      </div>

      <h3>Testing Instructions (Back to Working Version):</h3>
      <ul>
        <li><strong>Visual test:</strong> Both modals should open without auto-scrolling to links at bottom</li>
        <li>
          <strong>Screen reader test:</strong>
          <ul>
            <li><strong>AlertDialog:</strong> Should focus on content div (tabindex="0") and announce ALL content inside modal (both sub-industries, descriptions, links)</li>
            <li><strong>Regular Dialog:</strong> Should focus on modal pane and announce "Industry Description (Regular Dialog)" + initial visible content</li>
          </ul>
        </li>
        <li>
          <strong>Focus test:</strong>
          <ul>
            <li><strong>AlertDialog:</strong> Focuses on content div with tabindex="0" inside scrollable area</li>
            <li><strong>Regular Dialog:</strong> Focuses on modal pane itself</li>
          </ul>
        </li>
      </ul>

      <GoabModal
        heading="Industry Description"
        open={openAlertDialogModal}
        maxWidth="60%"
        role="alertdialog"
        onClose={closeAlertDialog}
      >
        {modalContent}
      </GoabModal>

      <GoabModal
        heading="Industry Description (Regular Dialog)"
        open={openDialogModal}
        maxWidth="60%"
        role="dialog"
        onClose={closeDialog}
      >
        {modalContent}
      </GoabModal>
    </>
  );
};